#!/bin/bash
set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read -r VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  if [[ -z $SKIP_TESTS ]]; then
    yarn lint
  fi

  # build
  VERSION=$VERSION yarn build

  # tag version
  yarn version --new-version "$VERSION" --message "build: release $VERSION"

  # publish
  git push origin refs/tags/v"$VERSION"
  git push

  echo -e "\033[1;92m You are ready to publish!"
  echo -e "\033[1;95m npm publish"
fi
