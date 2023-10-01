let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/395e20536473665ab2c5d.jpg'
let mikapp = 'https://telegra.ph/file/19e41947c0a6ae28dbf62.jpg'

let mika = `Halo kak ${name} 👋\nAda yang bisa ${global.packname} bantu?\n\nKetik !help untuk membuka Menu`

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    
if (mika) return conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: ('Aku Online Kak!'),
thumbnailUrl: opafanss,
sourceUrl: ('https://www.facebook.com/'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^(bot|bot?|bott|OpaFanss|oy|bang|banh|p)$/i
handler.command = new RegExp

export default handler