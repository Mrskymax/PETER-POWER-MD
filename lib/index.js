// Importing necessary modules and functions
const Config = require('../config');
const fs = require('fs');
const acrcloud = require(__dirname + '/scraper');
const { 
  Insta, pinterest, adultvid, hentai, tlang, botpic, language, getString, 
  wikimedia, toAudio, toPTT, toVideo, sync, syncgit, ffmpeg, TelegraPh, 
  UploadFileUgu, webp2mp4File, fancy, randomfancy, ringtone, styletext,
  isAdmin, isBotAdmin, createUrl, mediafireDl, mediafire, dare, truth, 
  random_question, amount_of_questions 
} = require(__dirname + '/suhail.js');

// Importing additional utility functions
const { 
  unixTimestampSecond, generateMessageTag, processTime, getBuffer, 
  smdBuffer, fetchJson, smdJson, runtime, clockString, sleep, isUrl, 
  getTime, formatDate, formatp, jsonformat, logic, generateProfilePicture, 
  bytesToSize, getSizeMedia, parseMention, GIFBufferToVideoBuffer, smsg, 
  callsg 
} = require(__dirname + '/serialized');

// Importing styles and text formatting functions
const { 
  listall, strikeThrough, wingdings, vaporwave, typewriter, analucia, 
  tildeStrikeThrough, underline, doubleUnderline, slashThrough, sparrow, 
  heartsBetween, arrowBelow, crossAboveBelow, creepify, bubbles, mirror, 
  squares, roundsquares, flip, tiny, createMap, serif_I, manga, ladybug, 
  runes, serif_B, serif_BI, fancy1, fancy2, fancy3, fancy4, fancy5, fancy6, 
  fancy7, fancy8, fancy9, fancy10, fancy11, fancy12, fancy13, fancy14, 
  fancy15, fancy16, fancy17, fancy18, fancy19, fancy20, fancy21, fancy22, 
  fancy23, fancy24, fancy25, fancy26, fancy27, fancy28, fancy29, fancy30, 
  fancy31, fancy32, fancy33, randomStyle 
} = require(__dirname + '/stylish-font');

// Database and bot settings
const { pg, dbs, groupdb, userdb, alivedb, bot_ } = require(__dirname + '/database');
const { cmd, smd, commands } = require(__dirname + '/class/init');

// Function to check if a URL is a valid Instagram URL
function isInstaUrl(url) {
  return /(?:http|https):\/\/(?:www\.)?(?:instagram\.com|instagr\.am|instagr\.com)\/(\w+)/gim.test(url);
}

// Function to fetch admin users in a group
async function getAdmin(_client, groupId) {
  let groupMetadata = await _client.groupMetadata(groupId);
  let admins = [];
  for (let participant of groupMetadata.participants) {
    if (participant.admin === null) continue;
    admins.push(participant.id);
  }
  return admins;
}

// Exporting all commands and functions for use elsewhere in the bot
module.exports = {
  yt,
  plugins,
  forwardMessage,
  updateProfilePicture,
  sendAnimeReaction,
  sendGImages,
  textToLogoGenerator,
  photoEditor,
  randomeFunfacts,
  AudioToBlackVideo,
  getRandom,
  generateSticker,
  audioEditor,
  send,
  react,
  note,
  sendWelcome,
  aitts,
  pg,
  dbs,
  bot_,
  alive,
  sck,
  smd,
  commands,
  sck1,
  Insta,
  pinterest,
  adultvid,
  hentai,
  tlang,
  botpic,
  language,
  getString,
  wikimedia,
  toAudio,
  toPTT,
  toVideo,
  sync,
  syncgit,
  ffmpeg,
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  fancy,
  randomfancy,
  ringtone,
  styletext,
  isAdmin,
  isBotAdmin,
  createUrl,
  mediafireDl,
  mediafire,
  dare,
  truth,
  random_question,
  amount_of_questions,
  unixTimestampSecond,
  generateMessageTag,
  processTime,
  getBuffer,
  smdBuffer,
  fetchJson,
  smdJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  formatp,
  jsonformat,
  logic,
  generateProfilePicture,
  bytesToSize,
  getSizeMedia,
  parseMention,
  GIFBufferToVideoBuffer,
  smsg,
  callsg,
  listall,
  strikeThrough,
  wingdings,
  vaporwave,
  typewriter,
  analucia,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  sparrow,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  creepify,
  bubbles,
  mirror,
  squares,
  roundsquares,
  flip,
  tiny,
  createMap,
  serif_I,
  manga,
  ladybug,
  runes,
  serif_B,
  serif_BI,
  fancy1,
  fancy2,
  fancy3,
  fancy4,
  fancy5,
  fancy6,
  fancy7,
  fancy8,
  fancy9,
  fancy10,
  fancy11,
  fancy12,
  fancy13,
  fancy14,
  fancy15,
  fancy16,
  fancy17,
  fancy18,
  fancy19,
  fancy20,
  fancy21,
  fancy22,
  fancy23,
  fancy24,
  fancy25,
  fancy26,
  fancy27,
  fancy28,
  fancy29,
  fancy30,
  fancy31,
  fancy32,
  fancy33,
  randomStyle
};
