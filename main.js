const crypto =require('crypto');
const algo = 'aes-256-cbc';
const iv= crypto.randomBytes(16);
const msg = "baghel";
const key = crypto.randomBytes(32);
const cipher = crypto.createCipheriv(algo,key,iv);
let enc=cipher.update(msg,'utf-8','hex');
enc+=cipher.final('hex')
console.log(enc);