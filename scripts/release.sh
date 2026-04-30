#!/usr/bin/env bash
# scripts/release.sh
#
# Bumps the version, commits with a standard message, creates a git tag,
# and pushes both to the remote. Triggers the GitHub Actions release workflow
# which builds and publishes to the VS Code Marketplace and Open VSX Registry.
#
# Usage:
#   ./scripts/release.sh major
#   ./scripts/release.sh minor
#   ./scripts/release.sh patch
#   ./scripts/release.sh 1.2.3
#
# Prerequisites:
#   - Working tree must be clean
#   - CHANGELOG.md must be updated before running this script

set -e

if [ -z "$1" ]; then
  echo "Usage: ./scripts/release.sh [major|minor|patch|x.y.z]"
  exit 1
fi

npm version "$1" -m "chore: bump version to %s"
git push && git push --tags