// @ts-nocheck
/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Peter-power-Md
   * @author : Mrskymax.
   * @youtube : https://www.youtube.com/@JASTINMTEWA-vn9pl
   * @description : Peter-power-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Mrskymax.
   * © 2024 Peter-power-Md.


*/















// Fork And Edit AS You Wish //

const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/Mrskymax/Peter-power-Md' // Source URL
const number = '255677780801'
var name = ' MRSKYMAX'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://od.lk/s/NzhfNjc1ODI2OTNf/456508666_2508413256010868_5347041524312197800_n.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 *MRSKYMAX TECH INTRO*  」
│ Name      : PETER-POWER 
│ Place       : MBEYA, TANZANIA
│ Gender    :  𝐌𝐀𝐋𝐄
│ Age          : 26
│ education : 𝐁𝐒c IT 
│ good vibes : 𝐒𝐓𝐀𝐘 𝐂𝐋𝐀𝐌
│ Phone     : m.me/ch/AbbbaKkM-dWkgJ99
│ Youtube   : youtube.com/@JASTINMTEWA-vn9pl
│ GitHub    : https://github.com/Mrskymax 

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`





 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             alias: ["Mrskymax","mrsky"],
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
