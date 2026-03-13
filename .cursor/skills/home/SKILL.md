---
name: home
description: Edits the S9 Enterprises home page and Curated Interior Project Portfolio section. Use when the user wants to change the home page, add or replace images in project cards, update PROJECTS entries, or edit the Curated Interior / Project Portfolio grid.
---

# Home Page (S9)

## Scope

- **File**: `app/page.tsx`
- **Section**: Curated Interior / Project Portfolio (id/heading "Curated Interior" and "Project Portfolio")
- **Data**: `PROJECTS` array near the top of the file

## PROJECTS array

Each entry has: `title`, `location`, `image`.

- **Image paths**: Use files from `public/`. In code, use URL-encoded paths (spaces → `%20`, parentheses as-is or encoded). Example: `'/WhatsApp%20Image%202026-03-10%20at%205.52.20%20PM.jpeg'`
- **Card content**: Title and location come from the entry; the UI also shows "Turnkey Interior" and "Premium commercial interior" (same for all cards).

## Common tasks

1. **Set or change a card image**: Find the matching `PROJECTS` item by `title` (and optionally `location`), then set `image` to the public path (URL-encoded).
2. **Add a card**: Append a new object to `PROJECTS` with `title`, `location`, `image`.
3. **Grid**: Section uses a 4-column grid on large screens (`lg:grid-cols-4`); no change needed unless the user asks for a different layout.

## Public images

Images in `public/` are served from `/`. Encode spaces and special characters in the path when using in `image` (e.g. `(1)` can stay; spaces → `%20`).
