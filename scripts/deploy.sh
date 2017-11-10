#!/usr/bin/env bash
cd ..
cd peerio-desktop
./scripts/deploy-futurio.sh
#cd ..
#cd peerio-desktop-futurio
# VERSION="$(node ./scripts/get-package-version.js)"
#./.circleci/ok.sh create_release PeerioTechnologies peerio-desktop-futurio v$VERSION