# leonhardgrabe.github.io

Plain HTML site, no build step. Edit a file, commit, push — GitHub Pages serves it from the repo root.

| File | What it is |
|---|---|
| `index.html` | Home: bio + CV link |
| `research.html` | Working papers (abstract / paper / media coverage buttons) |
| `styles.css` | All styling. Change `--accent` at the top to recolour the site |
| `main.js` | Opens/closes the abstract and coverage panels |
| `papers/` | Paper PDFs linked from the "paper" buttons |
| `files/Grabe_CV.pdf` | CV. Overwrite this file to update it; the link stays the same |

## Common edits

- **New paper version:** overwrite the PDF in `papers/` with the same file name.
- **Add a paper:** in `research.html`, copy one `<article class="paper">…</article>` block and edit it.
- **Add media coverage:** replace the `Outlet 1`/`Outlet 2` placeholders (`href="#"`) in that paper's `coverage` panel and remove `todo` from the button's class. No coverage? Delete the button and the `panel coverage` div.
- **Sidebar (photo, position, links):** it appears in both HTML files — change it in both.
