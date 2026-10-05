#!/bin/bash
# Export "Supervisor Training Slidedeck.pptx": one picture per slide, matching the PDF,
# with each slide's `notes` from deck-content.js as PowerPoint speaker notes.
# Re-exports the PDF first. Needs Google Chrome, Node, and: python3 -m pip install pymupdf python-pptx
set -e
cd "$(dirname "$0")"

./export-pdf.sh

export NOTES=$(node -e 'global.window = {}; require("./deck-content.js");
  console.log(JSON.stringify(window.DECK.slides.map(s => (s.notes || "").trim())))')

python3 - <<'EOF'
import io, json, os
import pymupdf
from pptx import Presentation
from pptx.util import Emu

PDF = "Supervisor Training Slidedeck.pdf"
PPTX = "Supervisor Training Slidedeck.pptx"
notes = json.loads(os.environ["NOTES"])

pdf = pymupdf.open(PDF)
if len(pdf) != len(notes):
    print(f"Warning: PDF has {len(pdf)} pages but deck-content.js has {len(notes)} slides; notes may be misaligned")

prs = Presentation()
prs.slide_width, prs.slide_height = Emu(12192000), Emu(6858000)  # 16:9, 13.33 x 7.5 in
blank = prs.slide_layouts[6]

for i, page in enumerate(pdf):
    png = page.get_pixmap(matrix=pymupdf.Matrix(2, 2)).tobytes("png")  # 3200x1800
    slide = prs.slides.add_slide(blank)
    slide.shapes.add_picture(io.BytesIO(png), 0, 0, prs.slide_width, prs.slide_height)
    if i < len(notes) and notes[i]:
        slide.notes_slide.notes_text_frame.text = notes[i]

prs.save(PPTX)
print(f"Wrote {PPTX} ({len(pdf)} slides)")
EOF
