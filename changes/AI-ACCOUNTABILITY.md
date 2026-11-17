# Website AI Contribution and Accountability Rules

**Applies to:** Every AI, human contributor, automation, and agent modifying this repository.
**Repository:** `BigOdom1984/BigOdom1984.github.io`
**Central governance:** [AI2AISync](https://github.com/BigOdom1984/ai2aisync)

## 1. Identity and ownership

Every contribution must identify:
- Human or AI contributor name.
- AI provider/model when known; never guess.
- Assigned task ID and accountable task owner.
- Files and exact paths touched.
- Start and completion status, supported by evidence.
- Commit SHA and pull request URL, where applicable.
- Reviewer identity and review outcome.
- Tests and verification actually performed.

An AI must not impersonate another AI, claim another AI's work, or mark a task assigned/started/completed without evidence. The Founder remains the final authority for consequential decisions.

## 2. Required lifecycle

Use this lifecycle and record each transition:

`PROPOSED → ASSIGNED → IN_PROGRESS → STAGED → IN_REVIEW → APPROVED → COMMITTED → PUBLISHED → VERIFIED`

Alternative outcomes: `BLOCKED`, `REJECTED`, `ROLLED_BACK`.

Not every task requires every state, but skipped states and reasons must be clear. A commit does not prove publication; publication does not prove correctness.

## 3. Multi-AI collaboration in one repository

- Every AI works from the latest default-branch state before editing.
- Prefer a separate branch and pull request per task or coherent change set. Do not have multiple AIs independently push competing edits to the same branch.
- Assign non-overlapping files when work can be parallelized.
- Before editing a shared file, announce/record ownership of that file in the task record. If another contributor is already editing it, coordinate rather than overwrite.
- Never force-push, rewrite shared history, or discard another contributor's work without explicit authorization.
- If two changes overlap, stop and reconcile the diff against the latest base. Preserve both contributors' valid work.
- One accountable integrator reviews the combined result. The implementation author should not be the sole reviewer for material changes.
- Keep the Founder informed when work is created, assigned, started, blocked, reassigned, committed, published, or verified.

## 4. Website-specific engineering checks

For relevant changes, record whether you checked:
- HTML structure and semantic correctness.
- CSS layout at mobile, tablet, and desktop widths.
- JavaScript behavior, console errors, and network failures.
- Navigation and internal/external links.
- Accessibility: keyboard use, labels, contrast, alt text, and focus visibility.
- Performance: image size, unnecessary dependencies, and loading behavior.
- Privacy/security: no secrets, trackers, unsafe embeds, or unreviewed external scripts.
- GitHub Pages paths, relative URLs, and 404 behavior.

Mark checks `PASS`, `FAIL`, `BLOCKED`, or `NOT RUN`. Include environment, viewport, browser, and commands/tools where relevant. Do not claim a visual test if only source code was read.

## 5. Public-repository safety

This repository is public. Never commit secrets, access tokens, credentials, private conversations, private user data, or internal-only security details. Public change entries must contain only safe summaries. Store private patches and confidential evidence in the private change-store repository, not here.

## 6. Approval and deployment

A task record or AI recommendation is not Founder approval. Do not change repository visibility, permissions, domains, DNS, paid services, release settings, or deployment configuration without required explicit approval. Do not deploy or publish outside the repository's existing authorized GitHub Pages workflow.

## 7. Source of truth

- Website-only changes: this folder's `CHANGE-LOG.md`.
- Cross-repository tasks, AI delegation, approval, and verification: AI2AISync's master change log.
- Proposed multi-repository files/patches: private `BigOdom1984/changes` staging repository, once created.

If records disagree, do not silently choose one. Flag the mismatch and reconcile it through AI2AISync with provenance.
