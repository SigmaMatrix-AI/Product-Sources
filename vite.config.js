import { defineConfig } from 'vite'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repository.endsWith('.github.io')
const base = process.env.GITHUB_ACTIONS
  ? (isUserSite ? '/' : `/${repository}/`)
  : '/'

export default defineConfig({
  base,
  server: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '/pretext.js': '/node_modules/@chenglou/pretext/dist/layout.js',
    },
  },
})
