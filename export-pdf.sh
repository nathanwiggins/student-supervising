#!/bin/bash
# Re-export "Supervisor Training Slidedeck.pdf" after editing deck-content.js.
# Needs Google Chrome. Every click-reveal is shown in its final state.
set -e
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HTML="Supervisor Training Slidedeck.html"
PDF="Supervisor Training Slidedeck.pdf"
URL="file://$(pwd | sed 's/ /%20/g')/${HTML// /%20}?print"
PROFILE=$(mktemp -d)

rm -f "$PDF"
"$CHROME" --headless=new --disable-gpu --no-first-run --no-pdf-header-footer \
  --user-data-dir="$PROFILE" --virtual-time-budget=3000 \
  --print-to-pdf="$PDF" "$URL" >/dev/null 2>&1 &
PID=$!

# Headless Chrome can linger after writing the file, so stop it once the PDF stops growing.
last=-1
for i in $(seq 1 120); do
  if [ -s "$PDF" ]; then
    size=$(stat -f%z "$PDF")
    [ "$size" = "$last" ] && break
    last=$size
  fi
  kill -0 $PID 2>/dev/null || break
  sleep 0.5
done
kill $PID 2>/dev/null || true
wait $PID 2>/dev/null || true
rm -rf "$PROFILE" 2>/dev/null || true

if [ -s "$PDF" ]; then echo "Wrote $PDF"; else echo "PDF export failed"; exit 1; fi
