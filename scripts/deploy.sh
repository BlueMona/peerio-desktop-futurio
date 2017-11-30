#!/usr/bin/env bash
cd ..
cd peerio-desktop

./scripts/deploy-futurio.sh

cd ..
cd peerio-desktop-futurio
npm i github bluebird
node ./scripts/publish_release.js
