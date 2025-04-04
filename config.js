const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//═══════[Required Variables]════════\\
global.audio= "./media/audio/default.mp3" ;  
global.video= "./media/video/default.mp4" ;
global.port = process.env.PORT
global.appUrl = process.env.APP_URL || ""                       // weka URL ya programu yako hapa,
global.email = "ptechtanzania015@gmail.com" // hakuna haja
global.location = "Africa/Tanzania." // hakuna haja

global.mongodb = process.env.MONGODB_URI || ""
global.allowJids = process.env.ALLOW_JID || "null" 
global.blockJids = process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
global.github = process.env.GITHUB || "https://github.com/Mrskymax/PETER-POWER-MD";
global.gurl  = process.env.GURL  || "https://wa.me/255677780801";
global.website = process.env.GURL || "https://wa.me/255715654328" ; 
global.THUMB_IMAGE = process.env.IMAGE || "" ; // Weka nembo ya picha

global.devs = "255677780801" // Mawasiliano ya Developer
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/\s+/g, '') : "255677780801";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/\s+/g, '') : "255&15654328";

//========================= [ MIPANGILIA YA BOT ] =========================\\
global.style = process.env.STYLE   || '5'  // weka '1' hadi '5' hapa kujaribu mitindo ya bot
global.flush = process.env.FLUSH   || "false"; // Weka "true" ikiwa bot haitoi majibu
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Weka "false" kuzima ujumbe wa kukaribisha

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false"; // zuia bot katika magrupu ikiwa mode ni public

global.MsgsInLog = process.env.MSGS_IN_LOG || "false" // "true" kuona ujumbe, "log" kuona logi, "false" kuficha ujumbe
global.userImages = process.env.USER_IMAGES || "https://od.lk/s/NzhfNjcwNzYwNzBf/pk.jpg" // weka picha hapa
global.waPresence = process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

//========================= [ KUSOMA OTOMATIKI UJUMBE & AMRI ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255677780801, 255&15654328";

//========================= [ KUSOMA & KUHIFADHI STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255677780801, 255&15654328";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // muda wake umeisha
global.scan = "https://mrsky-md-qr-ru51.onrender.com";

global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlBYjhsRlR3b0FVQzhxOWRuZGdzM3F5V2M2bnlZdjNKS1J2blRsZDIybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEV4Mko3b3NJT21WMkpXVGMveUhwRm1TaXFYV2RFMkt3cm96MlJJMVNTQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Q0dnN0EyZ2lzajFQaU9adEMwVWtpZEZCMWdkQ1hnbVZqNGlCTXExMTBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFcU5KMEYyTDIzaFdzc0dRM0lPTklLRkx4b3dzNllGdGdyeTZibjBwa1JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBNURuQjBVUFZVSGFXczZNS3MySkNIbWRkZG4zc2lZMTJaaFNRdXJEV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJlT1V2b0FHejlBRldaU2lMQUxIeGtFWndCVFd5U24rSEJQU3JweTFieWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1XWUM0Mzk0TFZpSERNOTdSbXVVQkZzbDIzaWNLUjFOeTk5UDRWWFZuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajdoZXkzb21PbnBzVWZmQzBmOC9FSDhpOHVNNy9DenJJaEpZMXpvU1dCST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOZEVzSWFzaEJIWkFUT2NJM25NMlduNTRZL3FvdkxBeEY1Nk81dXhkQVdRYm5nZDlycEJuNjdKZnRqQjc5bkoyUGxUTWYvRWJQcHJ2V0MvbEhSeUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJGWUhCV2xDTEtsTXYvYjNMYk5sUDQwcnJNYkUwZEhQMjhqUENiSnFYSHRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4eFpvM09OeFR5U3hKRGlzZVRacVBBIiwicGhvbmVJZCI6IjNjN2MyZmFmLTYzNTktNGRlMC1hZjQ4LTdmNWU0ZGNhN2YyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZHM3S0dlSGdDVmNSSGZlOFgwVFNjQzByaFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnBKMThGd3lpdFVkSjRuVVY4Q0hpeE1maTRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllRVEJaRjJOIiwibWUiOnsiaWQiOiIyNTU2ODA3MTcxNzE6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR00gQ08uTFREIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMR05tYlVERVBicnY3OEdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWSjVTUzlaTjE4M3NFaHl5WmMxU1B5K20zTjg4TTJBY0VFWTM4dDFHTFM0PSIsImFjY291bnRTaWduYXR1cmUiOiIrWmc1blB1UXhHMldzQXlUalg3LzBaa0JhbmVOWmxTcCtiS1NjZnRpM2pVVDFGQ2plaVBXUjVodHhJR2Z3UlAxNCsyc0U4aGR5cVc5ZW9WMDVBQ2ZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVlEbjY4RzdMVDF3VFh4K1g1VDVKNEVkbE10NWtOQXd1c3lYdlMrVUV3RFg4ZlQrSDFva0VuTURWZ3dsT1paUUtQMnVnOTM3UjJLdXhwM3VhZmdPQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2ODA3MTcxNzE6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlNlVWt2V1RkZk43Qkljc21YTlVqOHZwdHpmUEROZ0hCQkdOL0xkUmkwdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0Mzc3OTMzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIRkkifQ=="  // WEKA SESSION_ID YAKO

global.captchaMessage = '👋 Karibu! Tafadhali andika "verify" ili kuthibitisha kuwa wewe ni binadamu.';
global.captchaSuccessMessage = '✅ Umefanikiwa kuthibitishwa! Karibu!';

global.voiceChat = true; // Onyesha kuwa voice chat imewezeshwa

global.antilink_values = "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://,http://,www.";

global.antiphishing = {
  enabled: false, // Set default as false
  toggleCommand: "shieldon/shieldoff", // Command to toggle anti-phishing feature
};

module.exports = {
  menu: process.env.MENU || "3", 
  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "© PETER-POWER-MD 🤖🔥 | Imewezeshwa na PETER-POWER", 
  author : process.env.PACK_AUTHER|| "PETER-POWER-MD 🤖🔥",
  packname: process.env.PACK_NAME || "PETER-POWER-MD 🤖🔥",
  botname : process.env.BOT_NAME  || "PETER-POWER-MD 🤖🔥",
  ownername: process.env.OWNER_NAME|| "PETER-POWER-MD 🤖🔥",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "API_KEY_HAPA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: ( process.env.THEME ||  "PETER-POWER-MD 🤖🔥"  ).toUpperCase(),
};

global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID || "37";

global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); })
