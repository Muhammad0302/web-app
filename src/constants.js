const environments = {
  dev: {
    __API_HOST__: 'http://localhost:3001',
  },
  staging: {
    __API_HOST__: 'https://staging-api.spottroop.com',
  },
  production: {
    __API_HOST__: 'https://new-api.spottroop.com',
  }
}

module.exports = environments.production
