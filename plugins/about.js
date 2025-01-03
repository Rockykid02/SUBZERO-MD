/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["mrfrank"],
    react: "👨‍💻",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `━━━━━━━━━━━━━━━━━━━━━━━━

*👋 HELLO ${pushname}*\n\n *I AM SAGE DICKSON MD*\n
I am  WhatsApp Based Multi Device Bot Created By Darrell Mucheri T from Zimbabwe and connected here by Mr Dickson.\nMy sole purpose is to remove the burden or cost of purchusing data bundle to download Songs, Apps, Videos & Movies by  using whatsapp  bundles.
\n\n *For More Visit*: https://mrfrankinc.vercel.app/

━━━━━━━━━━━━━━━━━━━━━━━━

⛓️ *SOURCE CODE* 
> https://github.com/mrfrank-ofc/SUBZERO-MD

  
🛠️ *FOLLOW OWNER*
> https://github.com/mrfrank-ofc/

👨‍💻 *OWNER'S WHATSAPP*
> https://wa.me/18062212660/?text=SubZero+Fan+Here

👩‍🍼 *2ND DEVELOPER* 
> https://wa.me/265993702468/?text=SubZero+Fan+Here

📌 *SUPPORT CHANNEL* 
> https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D

🔗 *FOLLOW INSTAGRAM* 
> https://instagram.com/mrfrankofc/

👨‍💻 *FOLLOW OWNER* 
> https://youtube.com/mrfr4nk/

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *[*RELEASE DATE* - *15 December 2024*]*
 
> *powered under Digital Dynamo Lab*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
