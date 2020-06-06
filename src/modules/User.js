import Encrypt from "./Encrypt";

var encrypt = new Encrypt();
/**
 * @class
 * @classdesc 사용자별 비대칭키 식별을 위한 모듈로서 사용자 구분을 위한 식별자와 공개/비밀키를 저장하고 관리
 */
class User {
  constructor(userId) {
    this._userId = userId === undefined ? "" : userId;
    this._publicKey = "";
    this._privateKey = "";
  }

  get userId() {
    return this._userId;
  }

  get publicKey() {
    return this._publicKey;
  }

  set publicKey(publicKey = "") {
    this._publicKey = publicKey;
  }

  get privateKey() {
    return this._privateKey;
  }

  /*
  set privateKey(key = { privateKey: "", aesKey: "" }) {
    Encrypt.decryptAES(key.privateKey, key.aesKey);
    this._privateKey = Encrypt.decryptAES(key.privateKey, key.aesKey);
  }
  */
  set privateKey(privateKey = "") {
    this._privateKey = privateKey;
  }
}
export default User;
