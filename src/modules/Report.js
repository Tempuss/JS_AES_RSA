import Encrypt from "./Encrypt";
import User from "./User";
var encrypt = new Encrypt();
/**
 * @class
 * @classdesc 보고서 비대칭 암호화 로직을 위한 모듈. writer와 reader의 공개키를 이용하여 보고서 암호화를 처리. <br>
 * 랜덤생성한 AES키로 보고서를 암호화 한 후 해당 AES키를 writer, reader의 공개키로 각각 암호화하여 <br>reader와 writer를 제외한 사용자들이 보고서 내용을 읽을수 없도록 암호화
 */
class Report {
  constructor(writer = new User(), reader = new User()) {
    this._writer = writer;
    this._reader = reader;

    this._content = "";

    this._writerKey = "";
    this._readerKey = "";

    if (this._writer.privateKey === "") {
      this._isWriter = false;
      this._isReader = true;
    } else {
      this._isWriter = true;
      this._isReader = false;
    }
  }

  get writerKey() {
    return this._writerKey;
  }

  set writerKey(writerKey = "") {
    this._writerKey = writerKey;
  }

  /**
   * @type {string}
   */
  get content() {
    let plainContent = "";
    let reportKey = "";

    if (this._isWriter) {
      reportKey = encrypt.decryptRSA(this._writerKey, this._writer.privateKey);
    } else {
      reportKey = encrypt.decryptRSA(this._readerKey, this._reader.privateKey);
    }
    plainContent = encrypt.decryptAES(this._content, reportKey);
    return plainContent;
  }

  set content(content) {
    let reportKey = "";
    if (this._isWriter) {
      reportKey = encrypt.decryptRSA(this._writerKey, this._writer.privateKey);
    } else {
      reportKey = encrypt.decryptRSA(this._readerKey, this._reader.privateKey);
    }
    this._content = encrypt.encryptAES(content, reportKey);
  }

  set encryptedContent(content) {
    this._content = content;
  }

  set aesKey(aesKey) {
    this._writerKey = encrypt.encryptRSA(aesKey, this._writer.publicKey);
    this._readerKey = encrypt.encryptRSA(aesKey, this._reader.publicKey);
  }

  /**
   * @description 전송할 보고서 내용 취합
   * @return {Request}
   */
  saveReport() {
    let formData = {
      content: this._content,
      hackerReportKey: this._writerKey,
      companyReportKey: this._readerKey,
      hacker: this._writer.userId,
      company: this._reader.userId,
    };
    console.log(formData);
  }
}

export default Report;
