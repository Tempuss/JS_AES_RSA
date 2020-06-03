var aesjs = require("aes-js");
const crypto = require("crypto");
const NodeRSA = require("node-rsa");

var aesKey = Array.from(crypto.randomBytes(16));

var text = "안녕하세요?";
/**
 * @brief AES 암호화 함수
 * @param String message 암호화할 문자열
 */
function encryptAES(text = "", key = "") {
  let textBytes = aesjs.utils.utf8.toBytes(text);

  let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  let encryptedBytes = aesCtr.encrypt(textBytes);

  let encryptedText = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedText;
}

/**
 * @brief AES 복호화 함수
 * @param String message 암호화할 문자열
 */
function decryptAES(encryptedText = "", key = "") {
  let encryptedBytes = aesjs.utils.hex.toBytes(encryptedText);

  let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  let decryptedBytes = aesCtr.decrypt(encryptedBytes);

  let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  return decryptedText;
}

/**
 * @brief RSA 암호화 함수
 * @param String text 암호화할 문자열
 */
function encryptRSA(text, publicKey = "") {
  let rsa = new NodeRSA({ b: 512 });
  rsa.importKey(publicKey, "pkcs8-public-pem");
  let encryptedText = rsa.encrypt(text, "base64");
  return encryptedText;
}

/**
 * @brief RSA 복호화 함수
 * @param String cipher 복호화할 문자열
 */
function decryptRSA(cipher, privateKey = "") {
  let rsa = new NodeRSA({ b: 512 });
  rsa.importKey(privateKey, "pkcs8-private-pem");
  let decryptedText = JSON.parse(Buffer.from(rsa.decrypt(cipher, "buffer")).toString("ascii"));
  return decryptedText;
}

var publicKey =
  "-----BEGIN PUBLIC KEY-----\
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgcJupCQcxp6vkkRa37hA\
U2eI0HIf6Qtf/G4I1NUn/LZGcrvTat4sHZExjgfTXNGwuwlUASNOIGfgrGQWayb4\
+vyva1jQZivn5jSNsT9usm3GAlFgmVYbRIf3rhEsmQBZtb4sqdfQ1fc0cRAvUu3Q\
D45+pULSjzIfXKBL3v4+D1vBllGsOhITRK7IiPRUwlZjJmaCRFuootybfdcn1xmr\
5JnXCku5Fp7ikZl0lyHBmJiHNieYObDpr+TeCcgk2fBG+Vd7fpuXQZQYMVw4N0v7\
PDnNuHtDDPW+Ia4pVRtuIxRyWpVd/bSmD60ysU8cE18PgBh8m1dgyxIF6m8GSuR8\
WQIDAQAB\
-----END PUBLIC KEY-----";

var privateKey =
  "-----BEGIN PRIVATE KEY-----\
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCBwm6kJBzGnq+S\
RFrfuEBTZ4jQch/pC1/8bgjU1Sf8tkZyu9Nq3iwdkTGOB9Nc0bC7CVQBI04gZ+Cs\
ZBZrJvj6/K9rWNBmK+fmNI2xP26ybcYCUWCZVhtEh/euESyZAFm1viyp19DV9zRx\
EC9S7dAPjn6lQtKPMh9coEve/j4PW8GWUaw6EhNErsiI9FTCVmMmZoJEW6ii3Jt9\
1yfXGavkmdcKS7kWnuKRmXSXIcGYmIc2J5g5sOmv5N4JyCTZ8Eb5V3t+m5dBlBgx\
XDg3S/s8Oc24e0MM9b4hrilVG24jFHJalV39tKYPrTKxTxwTXw+AGHybV2DLEgXq\
bwZK5HxZAgMBAAECggEANIahRP59S4V26s2Sv5cVKu3xOvfHpQ1+uG9OUeFLQ4gB\
cnZHua3fy8Q3fBf83kjfsoavI5rICGQkVYRactue0/Kvi9Oy4HkLcWt6o/JafA3l\
ppCMeuWZOh+UCjlXhUPYDLLD36jGF6bu6omzrm0n2PREnd8z3tVaTqNwsv7V3l8e\
ESWZnDDDbEF5O8JCEhLniURz+kKKCEOBvJ9+IQcK/fx7JAFUlH0M7lM+bOhKT4XJ\
8Wnafh5M3DzaNwQktYWTkiYbLmX9BPqtLLfL94Pa9bwUJskfoA4YRBAT4x0OpoV+\
LwCmQpRxXn+XtoY8L6Q7RExpJNeEsVJ/Ke6xDhqqJQKBgQDjM/s5eti4uKuArS3o\
+N+yM/wCRxRAjHIuxqvQg77uCETkO83nTDvxJO2hd9JkT7kvLHWuDqE/cIOI2puj\
iqU7HSDJ3pE5T5zhBL76IkG2XsKFa2W2J4cBKzx3fN1Gs+tgNTcFBu3YUhJscsf1\
BWX3y8O6PZUqLVDIjFDQ5yQN2wKBgQCSNLdw3gXMZ6m3TU9h7mm8OdWcTgEa17mt\
uZ4+bwdKMps1In+NAigG4c8CpW0JFQhcW+nToGK7GcIipkI/sbfxkS4GbrpxcqEv\
mGmg8QnSDjdpUH9gPqrJLYWfP2Zd+qMzqibR5yWQvC1Brv8/UL7ns3wqMiKUtpAM\
xtReRySG2wKBgC4sl0b0P20zIq+xAl6RjazCwdmYpnYD1QTKnYpv6/KmPZIA0XTL\
WndEoQKqvlhil2kN6RCpqn2hGSpL+0t+VtwvrEU6dVsnYeOdOk7NfXtZwMCqte4S\
FG7ZYZ2LA9FlqVVRG1BrOxU2gMYHgbm7EiENCUclUtZShVNsqNP71aj3AoGAUwyk\
4vULICgGTLwaiott/mBvyWC52fCOZXNZwyc4YdpLNayJ/aQq7nXYLC2huRX8cNI5\
CWBClPs1vo7odNvTm+GW3kqJl6XAj5Oo9KXWqT4wFZ+HKzmNs8cq7uGJmXqkt9VA\
Rd1iBkwN/RCVpvaL6nuW3TUrVYQ6YTeULJWG1x8CgYAqxFEp1cuaGSo4qjzaVQdD\
dF+m4TKHPi+SPCY67ykyG3ZIDU0SYVqZB31em2GgxgP9qWyWJuTC9t6i7hLHEFp7\
hZ8Nswd7zwkuM01JkQk0L1aamyiguPFuh6rSX5L+Yca3L8AX7LyfvDlKRbJNwYBq\
RTqMrNrJCpkfp5ZSkj77Wg==\
-----END PRIVATE KEY-----";

console.log(aesKey);
var encrypt = encryptRSA(aesKey, publicKey);
console.log(encrypt);
var decrypt = decryptRSA(encrypt, privateKey);
console.log(decrypt);
