#!/bin/bash

# Get the list of local branches
BRANCHES=$(git branch | sed 's/* //')

# Loop through each branch
for branch in $BRANCHES; do
  echo "Processing branch: $branch"
  
  # Checkout the branch
  git checkout $branch
  
  # Find the last commit before today
  COMMIT_HASH=$(git log --before="today" -n1 --pretty=%H)
  
  # If a commit is found, reset the branch
  if [ -n "$COMMIT_HASH" ]; then
    echo "Resetting $branch to commit $COMMIT_HASH"
    git reset --hard $COMMIT_HASH
    
    # Force push to the remote
    echo "Force pushing $branch to origin"
    git push origin $branch --force
  else
    echo "No commits found before today for branch $branch"
  fi
  
  echo "---------------------"
done

echo "All branches have been reverted to the last commit before today."
