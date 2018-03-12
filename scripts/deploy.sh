#!/usr/bin/env bash

# temporary
ls -l /usr/local/opt/ || true
ls -l /usr/local/opt/gettext || true
ls -l /usr/local/opt/gettext/lib/ || true

cd ..
cd peerio-desktop

./scripts/deploy-futurio.sh

cd ..
cd peerio-desktop-futurio
npm i @octokit/rest bluebird
node ./scripts/publish_release.js
