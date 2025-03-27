#!/bin/bash

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

# Step 4: Commit changes with message from file
echo "Committing changes..."
git commit -F ./lib/documents/commit-message.txt

# Step 5: Push to origin
echo "Pushing changes to remote repository..."
git push -u origin $(git rev-parse --abbrev-ref HEAD)

echo "Git workflow completed successfully!"
