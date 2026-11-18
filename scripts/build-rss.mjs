import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "feeds/items.json");
const items = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const site = "https://bigodom1984.github.io";
const feeds = [
  { file: "cashdublo.xml", title: "CashDublo — All Updates", description: "All public announcements from CashDublo.", filter: () => true },
  { file: "news.xml", title: "CashDublo — Company News", description: "Company news and newsletter updates from CashDublo.", filter: item => ["news", "website"].includes(item.category) },
  { file: "apps.xml", title: "CashDublo — App Updates", description: "App releases, features and product notices from CashDublo.", filter: item => item.category === "apps" }
];

function escapeXml(value = "") {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
  })[ch]);
}

function rssDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw new Error("Invalid publication date: " + value);
  return date.toUTCString();
}

function render(feed) {
  const selected = items.filter(feed.filter).sort((a, b) => new Date(b.published) - new Date(a.published)).slice(0, 50);
  const body = selected.map(item => {
    for (const key of ["id", "title", "description", "url", "published", "category"]) {
      if (!item[key]) throw new Error("Feed item is missing required field '" + key + "': " + JSON.stringify(item));
    }
    const url = new URL(item.url);
    if (url.protocol !== "https:") throw new Error("Feed item URL must use HTTPS: " + item.url);
    return [
      "    <item>",
      "      <title>" + escapeXml(item.title) + "</title>",
      "      <description>" + escapeXml(item.description) + "</description>",
      "      <link>" + escapeXml(item.url) + "</link>",
      "      <guid isPermaLink=\"false\">" + escapeXml(item.id) + "</guid>",
      "      <pubDate>" + rssDate(item.published) + "</pubDate>",
      "      <category>" + escapeXml(item.category) + "</category>",
      item.author ? "      <author>" + escapeXml(item.author) + "</author>" : "",
      "    </item>"
    ].filter(Boolean).join("\n");
  }).join("\n");
  const channelLink = site + "/";
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(feed.title)}</title>
    <link>${channelLink}</link>
    <description>${escapeXml(feed.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>CashDublo RSS Publisher</generator>
${body}
  </channel>
</rss>
`;
}

const output = path.join(root, "feeds");
fs.mkdirSync(output, { recursive: true });
for (const feed of feeds) {
  const destination = path.join(output, feed.file);
  fs.writeFileSync(destination, render(feed), "utf8");
  process.stdout.write("Generated " + path.relative(root, destination) + "\n");
}
