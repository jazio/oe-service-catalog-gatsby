const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/jazio/oe-service-catalog.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
