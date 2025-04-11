/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            ███████████████████████████████████████████████████████████████████████████████
█░░░░░░██████████░░░░░░█░░░░░░░░░░█░░░░░░█████████░░░░░░░░░░░░░░█░░░░░░░░░░░░░░
█░░▄▀░░░░░░░░░░░░░░▄▀░░█░░▄▀▄▀▄▀░░█░░▄▀░░█████████░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░
█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█░░░░▄▀░░░░█░░▄▀░░█████████░░▄▀░░░░░░░░░░█░░▄▀░░░░░░░░░░
█░░▄▀░░░░░░▄▀░░░░░░▄▀░░███░░▄▀░░███░░▄▀░░█████████░░▄▀░░█████████░░▄▀░░████████
█░░▄▀░░██░░▄▀░░██░░▄▀░░███░░▄▀░░███░░▄▀░░█████████░░▄▀░░░░░░░░░░█░░▄▀░░░░░░░░░░
█░░▄▀░░██░░▄▀░░██░░▄▀░░███░░▄▀░░███░░▄▀░░█████████░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░
█░░▄▀░░██░░░░░░██░░▄▀░░███░░▄▀░░███░░▄▀░░█████████░░▄▀░░░░░░░░░░█░░░░░░░░░░▄▀░░
█░░▄▀░░██████████░░▄▀░░███░░▄▀░░███░░▄▀░░█████████░░▄▀░░█████████████████░░▄▀░░
█░░▄▀░░██████████░░▄▀░░█░░░░▄▀░░░░█░░▄▀░░░░░░░░░░█░░▄▀░░░░░░░░░░█░░░░░░░░░░▄▀░░
█░░▄▀░░██████████░░▄▀░░█░░▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░
█░░░░░░██████████░░░░░░█░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░
███████████████████████████████████████████████████████████████████████████████
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Power-power-md
   * @author : Mrskymax.
   * @Wa-group :  https://chat.whatsapp.com/HJgOTkcWL0BBqpsMm5cT6T 
   * @description : Power-power-md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Mrskymax.
   * © 2024 Power-power-md.


*/















// Fork And Edit AS You Wish //

// @ts-ignore
const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https:/github.com/Mrskymax/Peter-Power-md' // Source URL
// @ts-ignore
const number = '255675733799'
var name = 'PETER-JORAM'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://od.lk/s/NzhfNjcwNzYwNzBf/pk.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝕄𝕐 𝕊𝕋𝔸𝕋𝕊 」
│ Name      : PETER-JORAM
│ Place       : MBEYA, TANZANIA
│ Gender    :  𝕄𝔸𝕃𝔼
│ Age          : 𝔽𝕆ℝ𝔼𝕍𝔼ℝ 𝕐𝕆𝕌ℕ𝔾
│ Phone     : https://wa.me/+255677780801
│ Channel   : https://chat.whatsapp.com/HJgOTkcWL0BBqpsMm5cT6T
│ Status     : 𝕃𝕀𝔽𝔼 𝕊ℂ𝕀𝔼ℕ𝕋𝕀𝕊𝕋
╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`



 //---------------------------------------------------------------------------
 smd({
             pattern: "Pintro",
             desc: "Show intro of user",
             category: "fun",
             // @ts-ignore
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          // @ts-ignore
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: Pintro`,e,false)}


 })
