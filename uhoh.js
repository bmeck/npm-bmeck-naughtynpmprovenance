const child_process = require('child_process');

child_process.spawnSync('npm', ['publish', '--provenance', '--access', 'public'], {
    stdio: 'inherit',
    env: {
        ...process.env,
        GITHUB_ACTOR_ID: '1337',
        GITHUB_REPOSITORY_OWNER_ID: '42'
    }
});
