import { publish } from 'gh-pages';

publish(
    'build', // build directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/endigo9740/elden-ring-planner.git',
        user: {
            name: 'Chris Simmons',
            email: 'gundamx9740@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);