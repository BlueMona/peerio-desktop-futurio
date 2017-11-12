#!/usr/bin/env bash
cd ..
cd peerio-desktop

msg=$( git log --oneline -n 1 | grep "chore(release):" )

if [ ! -z "$msg" ]; then
    echo 'last commit is release. not building.'
    exit 1
fi
./scripts/deploy-futurio.sh

cd ..
cd peerio-desktop-futurio
npm i github bluebird
node ./scripts/publish_release.js