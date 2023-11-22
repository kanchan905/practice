const crypto = require('crypto');
// const cipher = require('cipher');

const algo = "aes-256-cbc";
// extra layer for encryption for that same string bhi use ho rhi hai to uske liye bhi new data mile
const iv = crypto.randomBytes(16);
const msg = "hello world";
// security key for encrypting
const key = crypto.randomBytes(32);
// combine krega sb ko use hoga encryption
const Cipher = crypto.createCipheriv(algo,key,iv);
let enc = Cipher.update(msg,'utf-8','hex');
// isko finalize krne k liye agr koi data bach gya h merge kr do
enc+=Cipher.final('hex');

console.log(enc);
