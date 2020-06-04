/**
 * @file Report Encryption
 * @author Tempuss <ben3787@gmail.com>
 * @version 1.0.0
 * @requires aes-js
 * @requires crypto
 * @requires node-rsa
 */
const crypto = require("crypto");
var aesjs = require("aes-js");
const NodeRSA = require("node-rsa");
var rsa = new NodeRSA({ b: 512 });
module.exports = {
  /**
   * @description AES 암호화 함수
   * @param {String} text 암호화할 문자열
   * @param {String} key 암호화키
   * @return {String} 암호화된 문자열
   * @example
   * let aesKey = crypto.randomBytes(32).toString("hex");
   * let encryptedText = encryptAES("PLAINTEXT", aesKey);
   */
  encryptAES: function (text = "", key = "") {
    key = Array.from(crypto.createHash("sha256").update(key).digest("int"));
    let textBytes = aesjs.utils.utf8.toBytes(text);

    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let encryptedBytes = aesCtr.encrypt(textBytes);

    let encryptedText = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedText;
  },

  /**
   * @description AES 복호화 함수
   * @param {String} encryptedText 복호화할 문자열
   * @param {String} key 복호화키
   * @return {String} 복호화된 문자열
   * @example
   * let aesKey = crypto.randomBytes(32).toString("hex");
   * let decryptedText = decryptAES("ENCRYPTEDTEXT", aesKey);
   */
  decryptAES: function (encryptedText = "", key = "") {
    key = Array.from(crypto.createHash("sha256").update(key).digest("int"));
    let encryptedBytes = aesjs.utils.hex.toBytes(encryptedText);

    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let decryptedBytes = aesCtr.decrypt(encryptedBytes);

    let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
  },

  /**
   * @description RSA 암호화 함수
   * @param {String} text 암호화할 문자열
   * @param {String} publicKey RSA암호화에 사용될 공개키
   * @return {String} 암호화된 문자열
   * @example
   * let publicKey = "-----BEGIN PUBLIC KEY-----\-";
   * let encryptedText = encryptRSA("PLAIN", publicKey)
   */
  encryptRSA: function (text, publicKey = "") {
    rsa.importKey(publicKey, "pkcs8-public-pem");
    let encryptedText = rsa.encrypt(text, "base64");
    return encryptedText;
  },

  /**
   * @description RSA 복호화 함수
   * @param {String} encryptedText 복호화할 문자열
   * @param {String} privateKey RSA복호화에 사용될 비밀키
   * @return {String} 복호화된 문자열
   * @example
   * let privateKey = "-----BEGIN PRIVATE KEY-----\-";
   * let encryptedText = decryptRSA("ENCRYPTEDTEXT", privateKey)
   */
  decryptRSA: function (encryptedText, privateKey = "") {
    rsa.importKey(privateKey, "pkcs8-private-pem");
    let decryptedText = rsa.decrypt(encryptedText, "base64");
    return decryptedText;
  },

  /**
   * @description base64 디코드 함수
   * @param {String} text 디코드할 문자열
   * @return {String} 디코드된 문자열
   * @example
   * let decodedText = base64Decode("ENCODEDTEXT")
   */
  base64Decode: function (text = "") {
    return Buffer.from(text, "base64").toString("ascii");
  },

  /**
   * @description base64 인코드 함수
   * @param {String} text 인코드할 문자열
   * @return {String} 인코드된 문자열
   * @example
   * let encodedText = base64Encode("PLAINTEXT")
   */
  base64Encode: function (text = "") {
    return Buffer.from(text, "ascii").toString("base64");
  },
};
