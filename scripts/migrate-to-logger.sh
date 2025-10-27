#!/bin/bash

# Script to migrate console.log/warn/error to the new logger
# This is a helper script that shows which files need manual migration

echo "==================================="
echo "Console Logger Migration Analysis"
echo "==================================="
echo ""

# Count console statements in TypeScript/TSX files
echo "Analyzing console usage in TypeScript/TSX files..."
echo ""

# Find all TypeScript files with console statements
grep -r --include="*.ts" --include="*.tsx" "console\.\(log\|warn\|error\|info\|debug\)" . \
  --exclude-dir=node_modules \
  --exclude-dir=.next \
  --exclude-dir=dist \
  --exclude=*.md \
  | grep -v "scripts/" \
  | cut -d: -f1 \
  | sort -u \
  | while read file; do
    count=$(grep -c "console\.\(log\|warn\|error\|info\|debug\)" "$file")
    echo "  $file: $count occurrences"
  done

echo ""
echo "==================================="
echo "Migration completed for:"
echo "  ✓ lib/logger.ts (created)"
echo "  ✓ components/analytics/adzep.tsx"
echo "  ✓ components/analytics/adzep-spa-bridge.tsx"
echo "  ✓ lib/ads/activate-adzep.ts"
echo ""
echo "Remaining files need manual migration"
echo "==================================="
