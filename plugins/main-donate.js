
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┏━━━ꕥ〔 *${global.packname}* 〕ꕥ━⬣ 
┃Dana:  08815109103
┃Pulsa: 08815109103 ( Smartfren )
┗━━━ꕥ


Thanks for Donation!
`
let img = 'https://telegra.ph/file/395e20536473665ab2c5d.jpg'
//conn.sendFile(m.chat, img, 'img.jpg', don, m)

conn.sendMessage(m.chat, {
text: don,
contextInfo: {
externalAdReply: {
title: (`Donasi`),
body: ('Dukung aku agar bot ini tetap hidup'),
thumbnailUrl: img,
sourceUrl: ('https://saweria.co/'),
mediaType: 3,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'dukung'] 

export default handler
