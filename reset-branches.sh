#!/bin/bash

# Script to reset all branches to a specific commit and sync them
# Usage: bash reset-branches.sh

# Exit immediately if a command exits with a non-zero status
set -e

# Target commit hash
TARGET_COMMIT="4a61f77"

echo "=== Starting Branch Reset to commit $TARGET_COMMIT ==="

# Store current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Check if the commit exists
if ! git cat-file -e $TARGET_COMMIT^{commit} 2>/dev/null; then
  echo "Error: Commit $TARGET_COMMIT does not exist in the repository."
  exit 1
fi

echo "✓ Commit $TARGET_COMMIT exists in the repository."

# Array of branches to reset
BRANCHES=("dev" "main" "backup")

# Backup function in case of errors
function cleanup {
  echo "Error occurred. Returning to original branch: $CURRENT_BRANCH"
  git checkout $CURRENT_BRANCH
  exit 1
}

# Set trap for errors
trap cleanup ERR

# Confirm with user
echo ""
echo "WARNING: This will reset the following branches to commit $TARGET_COMMIT:"
printf "  - %s\n" "${BRANCHES[@]}"
echo "All local and remote changes after this commit will be lost!"
echo ""
read -p "Are you sure you want to continue? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Operation cancelled."
  exit 0
fi

# Reset each branch and push
for branch in "${BRANCHES[@]}"; do
  echo ""
  echo "[1/3] Checking out branch '$branch'..."
  git checkout $branch
  
  echo "[2/3] Resetting branch '$branch' to commit $TARGET_COMMIT..."
  git reset --hard $TARGET_COMMIT
  
  echo "[3/3] Force pushing branch '$branch' to origin..."
  git push -f origin $branch
  
  echo "✓ Branch '$branch' successfully reset to commit $TARGET_COMMIT and pushed to origin."
done

# Return to dev branch
echo ""
echo "Returning to 'dev' branch..."
git checkout dev

echo ""
echo "=== All branches have been reset to commit $TARGET_COMMIT ==="
echo "You are now on the 'dev' branch."
