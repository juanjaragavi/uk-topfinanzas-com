#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e
# Treat unset variables as an error when substituting.
set -u

# --- Configuration ---
COMMIT_MSG_FILE="./lib/documents/commit-message.txt"
CHANGELOG_FILE="./lib/documents/topfinanzas-mexico-adaptation-agent.md"
DEV_BRANCH="dev"
MAIN_BRANCH="main"
BACKUP_BRANCH="master"

# --- Helper Functions ---
log_section() {
    echo ""
    echo "=== $1 ==="
    echo ""
}

log_step() {
    echo "→ $1"
}

exit_with_error() {
    echo "❌ ERROR: $1"
    exit 1
}

# --- Input Validation ---
# Check if a command was provided as an argument
if [ $# -eq 0 ]; then
    echo "TopFinanzas Git Workflow Script"
    echo "==============================="
    echo "Usage: $0 <command> [options]"
    echo ""
    echo "Commands:"
    echo "  commit       - Commit changes using the commit message file"
    echo "  push <branch> - Push changes to the specified branch"
    echo "  merge        - Merge dev into main and master branches"
    echo "  all <branch> - Commit, push to branch, and merge to stable branches"
    echo ""
    echo "Examples:"
    echo "  $0 commit"
    echo "  $0 push dev"
    echo "  $0 merge"
    echo "  $0 all dev"
    exit 1
fi

COMMAND="$1"

# --- Commit Function ---
do_commit() {
    log_section "COMMIT CHANGES"

    # Check if the commit message file exists
    if [ ! -f "$COMMIT_MSG_FILE" ]; then
        exit_with_error "Commit message file not found at '$COMMIT_MSG_FILE'"
    fi

    log_step "Checking Git Status"
    git status

    # Check for merge conflicts
    if git status --porcelain | grep -q "^UU "; then
        exit_with_error "Merge conflicts detected! Please resolve them manually before committing."
    fi

    # Check if there are changes to commit
    if git status --porcelain | grep -q "^[MADRCU]"; then
        log_step "Committing using message from '$COMMIT_MSG_FILE'..."
        git commit -F "$COMMIT_MSG_FILE"
        echo "✅ Commit successful."
    else
        echo "⚠️ No changes to commit. Working tree is clean."
    fi

    # Append to changelog
    if [ -f "$CHANGELOG_FILE" ]; then
        log_step "Appending commit info to changelog"
        echo "" >>"$CHANGELOG_FILE" # Add a newline for separation
        echo "### Commit $(date '+%Y-%m-%d %H:%M:%S') on branch $(git rev-parse --abbrev-ref HEAD)" >>"$CHANGELOG_FILE"
        # Append the last commit message to the changelog file
        git log -1 --pretty=%B >>"$CHANGELOG_FILE"
        echo "✅ Appended commit message to '$CHANGELOG_FILE'."
    else
        echo "⚠️ Warning: Changelog file not found at '$CHANGELOG_FILE'. Skipping append step."
    fi
}

# --- Push Function ---
do_push() {
    if [ $# -eq 0 ]; then
        exit_with_error "Please provide the target branch name for pushing."
    fi

    TARGET_BRANCH="$1"
    log_section "PUSHING CHANGES TO '$TARGET_BRANCH'"

    # The '-u' flag sets the upstream branch for future pushes/pulls.
    git push -u origin "$TARGET_BRANCH"
    echo "✅ Push to '$TARGET_BRANCH' successful."
}

# --- Merge Function ---
do_merge() {
    log_section "MERGING '$DEV_BRANCH' TO STABLE BRANCHES"

    # Pre-flight checks
    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    if [ "$CURRENT_BRANCH" != "$DEV_BRANCH" ]; then
        exit_with_error "You must be on the '$DEV_BRANCH' branch to run merge. Current branch: '$CURRENT_BRANCH'"
    fi

    # Verify clean working directory before merge
    if ! git diff-index --quiet HEAD --; then
        exit_with_error "Working directory is not clean. Please commit or stash your changes before merging."
    fi

    # 1. Update and merge into main branch
    log_step "Switching to '$MAIN_BRANCH' branch..."
    git checkout "$MAIN_BRANCH"

    log_step "Pulling latest changes for '$MAIN_BRANCH'..."
    git pull origin "$MAIN_BRANCH"

    log_step "Merging '$DEV_BRANCH' into '$MAIN_BRANCH'..."
    git merge "$DEV_BRANCH"

    log_step "Pushing '$MAIN_BRANCH' to origin..."
    git push origin "$MAIN_BRANCH"

    # 2. Update and merge into master branch
    log_step "Switching to '$BACKUP_BRANCH' branch..."
    git checkout "$BACKUP_BRANCH"

    log_step "Pulling latest changes for '$BACKUP_BRANCH'..."
    git pull origin "$BACKUP_BRANCH"

    log_step "Merging '$DEV_BRANCH' into '$BACKUP_BRANCH'..."
    git merge "$DEV_BRANCH"

    log_step "Pushing '$BACKUP_BRANCH' to origin..."
    git push origin "$BACKUP_BRANCH"

    # 3. Return to dev branch
    log_step "Switching back to '$DEV_BRANCH' branch..."
    git checkout "$DEV_BRANCH"

    echo "✅ Successfully merged '$DEV_BRANCH' into '$MAIN_BRANCH' and '$BACKUP_BRANCH', and pushed updates."
}

# --- Main Execution Logic ---
case "$COMMAND" in
"commit")
    do_commit
    ;;

"push")
    if [ $# -lt 2 ]; then
        exit_with_error "Please provide the target branch name for pushing."
    fi
    do_push "$2"
    ;;

"merge")
    do_merge
    ;;

"all")
    if [ $# -lt 2 ]; then
        exit_with_error "Please provide the target branch name for the 'all' command."
    fi
    TARGET_BRANCH="$2"

    # First commit any changes
    do_commit

    # Then push to the target branch
    do_push "$TARGET_BRANCH"

    # Finally merge to stable branches if we're on dev
    if [ "$TARGET_BRANCH" = "$DEV_BRANCH" ]; then
        do_merge
        echo "✅ All operations completed successfully!"
    else
        echo "⚠️ Note: Skipping merge operation since target branch is not '$DEV_BRANCH'."
        echo "✅ Commit and push operations completed successfully!"
    fi
    ;;

*)
    exit_with_error "Unknown command: $COMMAND. Use 'commit', 'push', 'merge', or 'all'."
    ;;
esac

exit 0
