var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'build'), {
    repo: 'https://github.com/sumbad/sumbad.github.io.git',
    branch: 'master',
    user: {
        name: 'sumbad',
        email: 'sumbad@ya.ru'
    }
}, function (err) {
    console.log(err || 'END DEPLOY')
});