const
	fs = require('fs');
	crypto = require('crypto');

function loadKey(file) {
	return fs.readFileSync(file, 'utf8');
}

let
	prvKey = loadKey('./rsa-prv.pem'),
	pubKey = loadKey('./rsa-pub.pem'),
	message = 'Hello, world!';

let enc_by_prv = crypto.privateEncrypt(prvKey, Buffer.from(message, 'utf8'));
console.log('-->encrypted by private key: \n' + enc_by_prv.toString('hex'));
let dec_by_pub = crypto.publicDecrypt(pubKey, enc_by_prv);
console.log('-->decrypted by public key: \n' + dec_by_pub.toString('utf8'));

let enc_by_pub = crypto.publicEncrypt(pubKey, Buffer.from(message, 'utf8'));
console.log('-->encrypted by public key: \n' + enc_by_pub.toString('hex'));
let dec_by_prv = crypto.privateDecrypt(prvKey, enc_by_pub);
console.log('-->decrypted by private key: \n' + dec_by_prv.toString('utf8'));


