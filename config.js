// @ts-nocheck
//#ENJOY

const fs = require("fs-extra");
if (fs.existsSync(".env"))
 
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";

global.port = process.env.PORT;

global.appUrl = process.env.APP_URL || "";
global.email = "Ptechtanzania015@gmail.com";
global.location = "Mbeya,Tanzania.";

global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Peter-power-md@cluster0.6xa2s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

global.allowJids = process.env.ALLOW_JID || "null";

global.blockJids = process.env.BLOCK_JID || "null";

global.DATABASE_URL = process.env.DATABASE_URL || "";

global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";

global.github = process.env.GITHUB || "https://github.com/Mrskymax/Peter-power-Md";

global.gurl = process.env.GURL || "https://m.me/ch/AbbbaKkM-dWkgJ99/";

global.website = process.env.GURL || "https://m.me/ch/AbbbaKkM-dWkgJ99/";

global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://od.lk/s/NzhfNjc1ODI2OTNf/456508666_2508413256010868_5347041524312197800_n.jpg";
global.devs = "255677780801";

global.sudo = process.env.SUDO || "255677780801";

global.owner = process.env.OWNER_NUMBER || "255677780801";

global.style = process.env.STYLE || "3";

global.gdbye = process.env.GOODBYE || "true";

global.wlcm = process.env.WELCOME || "true";

global.warncount = process.env.WARN_COUNT || 3;

global.disablepm = process.env.DISABLE_PM || "false";

global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG || "true";

global.userImages = process.env.USER_IMAGES || "";

global.waPresence = process.env.WAPRESENCE || "online"; 

global.readcmds = process.env.READ_COMMAND || "false";

global.readmessage = process.env.READ_MESSAGE || "false";

global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";

global.read_status = process.env.AUTO_READ_STATUS || "true";

global.save_status = process.env.AUTO_SAVE_STATUS || "false";

global.save_status_from = process.env.SAVE_STATUS_FROM || "";

global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd.onrender.com";  
global.scan = "https://mrsky-md-qr-ru51.onrender.com";

global.SESSION_ID =
  
  process.env.SESSION_ID || ""   // PUT your SESSION_ID
 
  global.antiphishing = {
    enabled: false, // Set default as false
    toggleCommand: "shieldon/shieldoff", // Command to toggle anti-phishing feature
  };



module.exports = {
 
  menu: process.env.MENU || "",
 
  HANDLERS: process.env.PREFIX || ".",
 
  BRANCH: process.env.BRANCH || "main",
 
  VERSION: process.env.VERSION || "1.0.0",
 
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
 
  author: process.env.PACK_AUTHER || "MRSKYMAX",
 
  packname: process.env.PACK_NAME || "♥️",
 
  botname: process.env.BOT_NAME || "PETER-POWER-𝐌𝐃",
 
  ownername: process.env.OWNER_NAME || "PETER-POWER",
 
  errorChat: process.env.ERROR_CHAT || "",
 
  KOYEB_API: process.env.KOYEB_API || "false",
 
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "diVYfA5PJpwMSDrMCj2BYbnc",
 
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
 
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
 
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
 
  antilink_values: process.env.ANTILINK_VALUES || "wa.me/,chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
 
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
 
  aitts_Voice_Id: process.env.AITTS_ID || "37",
 
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "b83709a7a0691e09fbe13db39068056a",
 
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
 
  LANG: (process.env.THEME || "PETER-POWER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
// @ts-ignore
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
 
  console.log(`Update'${__filename}'`);
 
  delete require.cache[file];
  require(file);
});
