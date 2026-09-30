## Project
Slide deck for SUU's Annual Supervisor Training: "Building SUU's Future with Student Workers" (Nathan Wiggins & Owen Chadwick). Three sections: Mentor, Empower, Retain.

## Files
- `deck-content.js`: all wording, slide order, notes, and timings. **Edit this first.** Its header documents every layout and its fields.
- `Supervisor Training Slidedeck.html`: layout, styling, and the renderer only. Touch it only for visual/layout changes.
- `LAYOUT.md`: the original outline. Each slide's `ref` field in `deck-content.js` is its LAYOUT.md slide number.
- `assets/`: SUU logo (from `../herfp/assets`) and the Slido QR code.
- `export-pdf.sh`: re-exports `Supervisor Training Slidedeck.pdf`, with every click-reveal fully shown.

## Tweak requests
When asked to process tweaks, search `deck-content.js` for `TWEAK:` comments. Apply each one, delete the comment when it's done, then run `./export-pdf.sh`. Don't touch `notes`, `minutes`, or `ref`; they never render and are for the presenter.

## Style
Matches the SUU red HERFP deck: `../herfp/presentations/Project Slidedeck Neutral.html` (the red one, despite the name; "Institutional" is the gray one). Keep SUU red `#DB0000`, the dotted paper background, mono eyebrows, and serif headings.
