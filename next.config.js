/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./src/i18n.tsx')

const envType =
    process.env.APP_ENV === undefined || process.env.APP_ENV === null
        ? 'test'
        : process.env.APP_ENV

require('dotenv').config({ path: `.env.${envType}.set` })

const nextConfig = {
    env: {
        APP_ENV: process.env.APP_ENV,
        DEFAULT_LOCALE: process.env.DEFAULT_LOCALE,
        LOCALE_PREFIX: process.env.LOCALE_PREFIX,
    }
}

module.exports = withNextIntl(nextConfig)
