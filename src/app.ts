import './utils/env'

import { App, LogLevel } from '@slack/bolt'

const app = new App({
  token: process.env.SLACK_BOT_OAUTH_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
})

;(async () => {
  // Start your app
  await app.start(Number(process.env.PORT) || 3000)

  console.log('⚡️ Bolt app is running!')
})()
