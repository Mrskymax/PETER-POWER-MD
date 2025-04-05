const bot = require(__dirname + '/lib/smd')
const { VERSION } = require(__dirname + '/config')
const debug = require('debug')('bot'); // Jina la debugger 

const start = async () => {
    debug(`Suhail ${VERSION}`)
    try {
        await bot.init()
        debug('⏳ Database syncing!')
        await bot.DATABASE.sync()
        await bot.connect()
    } catch (error) {
        debug(error);
        start();
    }
}
start();
