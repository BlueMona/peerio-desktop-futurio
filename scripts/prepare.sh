#!/usr/bin/env bash
cd ..
git clone https://github.com/PeerioTechnologies/peerio-desktop.git
cd peerio-desktop
git checkout newfs
./scripts/install-win-build-tools.sh
brew link graphicsmagick

# macOS dep for building AppImage on < 10.13
brew link gettext --force
