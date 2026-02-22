#!/usr/bin/env bash
set -euo pipefail

BUILD_DIR="${1:-build}"

# Keep search index artifacts, but don't publish generated course HTML pages
# from submodule content in this root deployment artifact.
for course in doex teex soex pexe; do
  rm -rf "${BUILD_DIR}/${course}"
done
