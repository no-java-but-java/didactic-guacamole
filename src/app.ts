import './utils/env'

import { App, LogLevel } from '@slack/bolt'
import { EnvConfigs } from './utils/env'

const app = new App({
  token: EnvConfigs.TOKEN,
  signingSecret: EnvConfigs.SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
})

;(async () => {
  // Start your app
  await app.start(EnvConfigs.PORT)

  console.log(
    `⚡️ Bolt app is running on ${EnvConfigs.ENV} server, port: ${EnvConfigs.PORT}!`,
  )
})()
