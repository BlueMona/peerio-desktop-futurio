const fs = require('fs');
var GitHubApi = require('github')

var github = new GitHubApi({
    // optional
    debug: true,
    Promise: require('bluebird'),
    timeout: 10000,
    host: 'api.github.com',
    pathPrefix: '',
    protocol: 'https',
    port: 9898,
    //proxy: '',
    //ca: '',
    headers: {
        'accept': 'application/vnd.github.peerio',
        'cookie': 'peeriodeploy',
        'user-agent': 'peerio-deploy'
    },
    requestMedia: 'application/vnd.github.peerio',
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow disabling follow-redirects
    rejectUnauthorized: false, // default: true
    family: 6
})

github.authenticate({
    type: 'token',
    token: process.env.GH_TOKEN
});

const version = JSON.parse(fs.readFileSync('../peerio-desktop/package.json', 'utf-8')).version;
return github.repos.getReleaseByTag({ owner: 'PeerioTechnologies', repo: 'peerio-desktop-futurio', tag: version })
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