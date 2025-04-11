// @ts-ignore
const fs = require('fs-extra')
// @ts-ignore
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "./media/audio/Peter-Power.mp3" ;  
global.video= "./media/video/PowerMd.mp4" ;
// @ts-ignore
global.port =process.env.PORT
// @ts-ignore
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email = "ptechtanzania015@gmail.com"  // no need
global.location = "Africa/Tanzania."  // no need


// @ts-ignore
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Peter-power-md@cluster0.6xa2s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// @ts-ignore
global.allowJids= process.env.ALLOW_JID || "null" 
// @ts-ignore
global.blockJids= process.env.BLOCK_JID || "null"
// @ts-ignore
global.DATABASE_URL = process.env.DATABASE_URL || ""

// @ts-ignore
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
// @ts-ignore
global.github=process.env.GITHUB|| "https://github.com/Mrskymax/Peter-power-md";
// @ts-ignore
global.gurl  =process.env.GURL  || "https://wa.me/255677780801";
// @ts-ignore
global.website=process.env.GURL || "https://wa.me/255715654328" ; 
// @ts-ignore
global.THUMB_IMAGE = process.env.IMAGE || "https://od.lk/s/NzhfNjcwNzYwNzBf/pk.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "255677780801" // Developer Contact
// @ts-ignore
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "255677780801";
// @ts-ignore
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255715654328";




//========================= [ BOT SETTINGS ] =========================\\
// @ts-ignore
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
// @ts-ignore
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
// @ts-ignore
global.gdbye = process.env.GOODBYE || "false"; 
// @ts-ignore
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

// @ts-ignore
global.warncount = process.env.WARN_COUNT || 3
// @ts-ignore
global.disablepm = process.env.DISABLE_PM || "false"
// @ts-ignore
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

// @ts-ignore
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
// @ts-ignore
global.userImages= process.env.USER_IMAGES || "https://od.lk/s/NzhfNjcwNzYwNzBf/pk.jpg" // set images here
// @ts-ignore
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
// @ts-ignore
global.readcmds = process.env.READ_COMMAND || "false"
// @ts-ignore
global.readmessage = process.env.READ_MESSAGE || "true"
// @ts-ignore
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255677780801, 255715654328";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
// @ts-ignore
global.read_status = process.env.AUTO_READ_STATUS || "true"
// @ts-ignore
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
// @ts-ignore
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
// @ts-ignore
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255677780801, 255715654328";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://mrsky-md-qr-ru51.onrender.com";


// @ts-ignore
global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 

global.antiphishing = {
  enabled: false, // Set default as false
  toggleCommand: "shieldon/shieldoff", // Command to toggle anti-phishing feature
};


module.exports = {

  // @ts-ignore
  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  // @ts-ignore
  HANDLERS: process.env.PREFIX  || ".",
  // @ts-ignore
  BRANCH  : process.env.BRANCH  || "main",
  // @ts-ignore
  VERSION : process.env.VERSION || "1.3.4",
 // @ts-ignore
 caption : process.env.CAPTION || "© Peter-power-md 🤖🔥 | Imewezeshwa na Mrskymax", 
 // @ts-ignore
 author : process.env.PACK_AUTHOR || "Peter-power-md 🤖🔥",
 // @ts-ignore
 packname: process.env.PACK_NAME || "Peter-power-md 🤖🔥",
 // @ts-ignore
 botname : process.env.BOT_NAME  || "Peter-power-md 🤖🔥",
 // @ts-ignore
 ownername: process.env.OWNER_NAME|| "Mrskymax 🤖🔥",
 

  // @ts-ignore
  errorChat : process.env.ERROR_CHAT || "",
  // @ts-ignore
  KOYEB_API : process.env.KOYEB_API  || "false",

  // @ts-ignore
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "diVYfA5PJpwMSDrMCj2BYbnc",
  // @ts-ignore
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  // @ts-ignore
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  // @ts-ignore
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  // @ts-ignore
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  // @ts-ignore
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


 // @ts-ignore
WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
 // @ts-ignore
LANG: ( process.env.THEME ||  "Peter-power-md 🤖🔥"  ).toUpperCase(),
};



// @ts-ignore
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "b83709a7a0691e09fbe13db39068056a";
// @ts-ignore
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";

global.rank = "updated"
global.isMongodb = false; 
// @ts-ignore
let file = require.resolve(__filename)
// @ts-ignore
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); })




global.rank = "updated"
global.isMongodb = false; 
// @ts-ignore
let file = require.resolve(__filename)
// @ts-ignore
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
  

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
