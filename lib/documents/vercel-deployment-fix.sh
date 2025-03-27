#!/bin/bash

# Script to simplify Vercel deployment configuration and fix 404 errors
# Created to remove /mx/ subdirectory handling and complex middleware

# Step 1: Check status to identify changed files
echo "Checking repository status..."
git status

# Step 2: Simplify next.config.mjs
echo "Simplifying next.config.mjs..."
# 1. Remove assetPrefix and basePath configurations
# 2. Set basePath to empty string
# 3. Set assetPrefix to undefined

# Step 3: Simplify middleware.ts
echo "Simplifying middleware.ts..."
# 1. Remove all path mappings
# 2. Remove rewriting logic
# 3. Simplify to just pass through all requests
# 4. Clear matcher configuration

# Step 4: Update commit message
echo "Creating commit message..."
cat > lib/documents/commit-message.txt << EOF
fix: Simplify deployment configuration for Vercel

This commit removes the complex middleware rewriting and WordPress integration:

- Removed middleware path mappings and rewriting logic
- Simplified middleware.ts to just pass through all requests
- Removed basePath and assetPrefix configurations from next.config.mjs
- Eliminated all /mx/ subdirectory references to simplify deployment
- Created a direct routing approach that works consistently on Vercel
- Fixed 404 errors by eliminating path translation complexity
EOF

# Step 5: Add files to staging
echo "Adding files to staging..."
git add middleware.ts next.config.mjs lib/documents/commit-message.txt

# Step 6: Commit changes
echo "Committing changes..."
git commit -F ./lib/documents/commit-message.txt

# Step 7: Get current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $BRANCH"

# Step 8: Push changes to remote repository
echo "Pushing changes to remote repository..."
git push -u origin $BRANCH

echo "Vercel deployment simplification completed successfully!"
