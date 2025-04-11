// @ts-ignore
const bot = require(__dirname + '/lib/smd')
// @ts-ignore
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    // @ts-ignore
    Debug.info(`Suhail ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    // @ts-ignore
    Debug.error(error);
    start();
  }
}
start();

