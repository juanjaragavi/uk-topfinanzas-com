#!/bin/bash

# Generic Git workflow script for TopFinanzas Pages MX
# This script automates common Git operations for deployment

# Step 1: Check repository status
echo "Checking repository status..."
git status

# Step 2: Add all changes to staging
echo "Adding changes to staging..."
git add --all

# Step 3: Check for merge conflicts
echo "Checking for merge conflicts..."
if git diff --name-only --diff-filter=U | grep -q .; then
  echo "Merge conflicts detected. Resolving by keeping current branch changes..."
  git checkout --ours .
  git add --all
  echo "Merge conflicts resolved."
else
  echo "No merge conflicts detected."
fi

# Step 4: Check if commit message file exists
if [ -f "./lib/documents/commit-message.txt" ]; then
  echo "Committing with message from commit-message.txt..."
  git commit -F ./lib/documents/commit-message.txt
else
  echo "No commit message file found. Please enter commit message:"
  read -p "> " commit_message
  git commit -m "$commit_message"
fi

# Step 5: Push to current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Pushing to branch: $BRANCH"
git push -u origin $BRANCH

echo "Git workflow completed successfully!"
