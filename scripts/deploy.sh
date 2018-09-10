#!/usr/bin/env bash

pwd
cd ..
cd peerio-desktop

pwd
./scripts/deploy-futurio.sh
pwd

cd ..
cd peerio-desktop-futurio
npm i @octokit/rest bluebird
pwd
node ./scripts/publish_release.js
