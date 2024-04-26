import { resolve } from 'path'
import { config } from 'dotenv'

const pathToConfig = '../../.env'
config({ path: resolve(__dirname, pathToConfig) })

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

if (!process.env.PORT) {
  process.env.PORT =
    process.env.NODE_ENV === 'production' ? String(3000) : String(3010)
}

export const EnvConfigs = {
  // Env
  ENV: process.env.NODE_ENV,

  // Slack Bot
  TOKEN: process.env.SLACK_BOT_OAUTH_TOKEN,
  SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET,
  PORT: Number(process.env.PORT),
}
