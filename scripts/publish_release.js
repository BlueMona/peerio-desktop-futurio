const fs = require('fs');
var GitHubApi = require('github')

var github = new GitHubApi({
    // optional
    debug: true,
    Promise: require('bluebird')
})

github.authenticate({
    type: 'token',
    username: process.env.GH_USER,
    token: process.env.GH_TOKEN
});

const version = JSON.parse(fs.readFileSync('../peerio-desktop/package.json', 'utf-8')).version;
console.log('VERSION', version);
return github.repos.getReleaseByTag({ owner: 'PeerioTechnologies', repo: 'peerio-desktop-futurio', tag: `v${version}` })
    .then(res => {
        const releaseId = res.data.id;
        if (!releaseId) throw new Error('Release not found.');
        return github.repos.editRelease({
            owner: 'PeerioTechnologies',
            repo: 'peerio-desktop-futurio',
            id: releaseId,
            draft: false,
            prerelease: false
        });
    });