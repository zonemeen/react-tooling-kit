const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !process.env.ENABLE_PWA && !prod,
    register: false,
    skipWaiting: false,
    publicExcludes: ['!noprecache/**/*', '!vendor/**/*'],
  },
  env: {
    COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || null,
    PKG_VERSION: require('./package.json').version,
  },
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico|svg|pdf)$/,
      loader: 'file-loader',
      options: {
        name: '[name]_[hash].[ext]',
        publicPath: `/_next/static/files`,
        outputPath: 'static/files',
      },
    })
    config.experiments = config.experiments || {}
    config.resolve.alias['@'] = path.resolve(__dirname, './src')
    Object.assign(config.experiments, {
      asyncWebAssembly: true,
    })

    return config
  },
}

module.exports = withPWA(nextConfig)
