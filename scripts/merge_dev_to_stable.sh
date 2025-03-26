#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e
# Treat unset variables as an error when substituting.
set -u

# Define branch names
DEV_BRANCH="dev"
MAIN_BRANCH="main"
BACKUP_BRANCH="master"

# --- Pre-flight Checks ---

# 1. Check if we are on the dev branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "$DEV_BRANCH" ]; then
    echo "Error: You must be on the '$DEV_BRANCH' branch to run this script."
    exit 1
fi

# 2. Check if the working directory is clean
if ! git diff-index --quiet HEAD --; then
    echo "Error: Working directory is not clean. Please commit or stash your changes."
    exit 1
fi

echo "Pre-flight checks passed. Starting merge process..."

# --- Merge Process ---

# 1. Update and merge into main branch
echo "Switching to '$MAIN_BRANCH' branch..."
git checkout "$MAIN_BRANCH"

echo "Pulling latest changes for '$MAIN_BRANCH'..."
git pull origin "$MAIN_BRANCH"

echo "Merging '$DEV_BRANCH' into '$MAIN_BRANCH'..."
git merge "$DEV_BRANCH"

echo "Pushing '$MAIN_BRANCH' to origin..."
git push origin "$MAIN_BRANCH"

# 2. Update and merge into master branch
echo "Switching to '$BACKUP_BRANCH' branch..."
git checkout "$BACKUP_BRANCH"

echo "Pulling latest changes for '$BACKUP_BRANCH'..."
git pull origin "$BACKUP_BRANCH"

echo "Merging '$DEV_BRANCH' into '$BACKUP_BRANCH'..."
git merge "$DEV_BRANCH"

echo "Pushing '$BACKUP_BRANCH' to origin..."
git push origin "$BACKUP_BRANCH"

# 3. Return to dev branch
echo "Switching back to '$DEV_BRANCH' branch..."
git checkout "$DEV_BRANCH"

echo "Successfully merged '$DEV_BRANCH' into '$MAIN_BRANCH' and '$BACKUP_BRANCH', and pushed updates."
echo "You are now back on the '$DEV_BRANCH' branch."

exit 0
