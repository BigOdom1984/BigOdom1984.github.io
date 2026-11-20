# Production servers

This folder holds the production websites — one folder for each
service that serves the production site, each labeled with the
name of its service: the **Vercel production site**, the
**Cloudflare production site**, and a production site on any
other service under that service's name.

None of these is the operational master website. The one
operational website is the website at the root of this
repository: it is the master copy being built to replace the
production server, and when it is ready Muse takes the entire
website from the root and applies it to the service — its theme
and its layout. The copies here exist so each service's
production site can be told apart from the master, never
confused with it.
