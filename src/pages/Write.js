import React from "react";
import WriteForm from "../component/textarea";

import Encrypt from "../modules/Encrypt";
import User from "../modules/User";
import Report from "../modules/Report";

function Write() {
  const crypto = require("crypto");
  var content = "";
  var aesKey = crypto.randomBytes(32).toString("hex");
  var hackerPublicKey =
    "-----BEGIN PUBLIC KEY-----\
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkbciJeTj3jFYw+cYdSEI\
  djrEt1WXCSGBiKZExTV4Au6zyrAgVBVQTDRVbB8E0y3x7YVkRiWzGwil3Pk37p9B\
  bPVY3zWTI/wNnlPADo6DZE2NdDTzpwlOVAKc9ZLARhwWbZo0yg1dWOa8Y19X/+tY\
  /cUxV6x3qsRNr8We1Ol1aJTH6IddfI0nuZmcj8v28n5l2Gfsa3BeN8F7ynRwPpsZ\
  9FSwTJpJNA/m8Jk8GFWggw/Oj3aeJJr8i653CMP0LxA7y8tXs4zgb5tff8fq46dE\
  CAhkFgDM7vj4TLPEHb9tMvo46hRm40R1C5KXp7pNuyayMIAoq3QQ+pKOuxfpkpTJ\
  EwIDAQAB\
  -----END PUBLIC KEY-----";
  var hackerPrivateKey =
    "-----BEGIN PRIVATE KEY-----\
  MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRtyIl5OPeMVjD\
  5xh1IQh2OsS3VZcJIYGIpkTFNXgC7rPKsCBUFVBMNFVsHwTTLfHthWRGJbMbCKXc\
  +Tfun0Fs9VjfNZMj/A2eU8AOjoNkTY10NPOnCU5UApz1ksBGHBZtmjTKDV1Y5rxj\
  X1f/61j9xTFXrHeqxE2vxZ7U6XVolMfoh118jSe5mZyPy/byfmXYZ+xrcF43wXvK\
  dHA+mxn0VLBMmkk0D+bwmTwYVaCDD86Pdp4kmvyLrncIw/QvEDvLy1ezjOBvm19/\
  x+rjp0QICGQWAMzu+PhMs8Qdv20y+jjqFGbjRHULkpenuk27JrIwgCirdBD6ko67\
  F+mSlMkTAgMBAAECggEACYVHq+YqpUfgHtyokm6YGPF6DOiAt84CoqUKdUArGTXz\
  dVjQo+3Ik1IQCsJ0FEA6QGSoypSIAUotXCTEbMjnA3F8XwknFgDP+vpJ4CmbmCAh\
  D+itysom3gJVsw3lli8boAmlTVZWNQrOYEfIfiYoaFxL/wh7wSKWWNe2qv6d9zk3\
  OPq1JzZ7kf1ApJ2qH9534xMGdtQvp5kh+XNMRFVevWz/ROBzBO95VOeyu8lp8FJ0\
  WWkha8yDgvaA4VZw2sYeq1etNxOmgMRaxbfjP1NFsCa1dOTBMyBTbkN2U1lWz3In\
  eIm5qzWYjW7a9rCfgYKWHCDjlxLIUP2MXDBer0TkcQKBgQD8XAKyaseSWPG2rQZ4\
  sFDlguU0YmI+Yw8kKLpkY89stRpY4o+Rcv+/01sblCJqMQC3OlxpE9x3A7z74NgH\
  AksCq2wtlLTycyOLL35Z0R1iYjwsgFHpL2rtuG07UAUemx+vGhr3J9EGK74dVdXy\
  aPtW+xV51Qi2QWfZYSdAdVYvlwKBgQCT0UZ72AqHXBAgH9p+SVEHPJXgsq/BJOGZ\
  HxR1VnP3sRMUs5gs+EZr9syOjUdRACE5xthGOlvMOnX5boI2/yfm5Oyz0gcQwZaW\
  IfllmIu75d0ZmKjn0h3Z4Px8M0NTNaD4X6BYHvoz+/bj7XpJQgWYRC8IwbYfT3mL\
  Rz5UPaxh5QKBgQDB0XEI0tXgYouSf6U+wDwBadzbtMw7mh0g6l7th3LhzN4lcixN\
  y4L9MzkAH2+nG2evUhVzZpumlKpq0S9ZgrtVm48EGvg2VZPw7FMgbGkjDMumag9/\
  BrobRdAvA7BK510YQPaA6IWzNZlYMnqVKWgQT9sYrTN5txYpcGKTMQs2lQKBgGPp\
  zuSi8OrxlYzBOySlVfm4P+5zmUzKKxse4Os3FofTzvvtMO0knCUZ2sZ4RD5CAjNV\
  bpZ5l9cBpQCGa8nUyhnNnxkk29W9pJWyPSso4zqMcth8UZ7wbXD6HG+vDtDNrRJ1\
  QKKPvbspkoYZ3NBrqfB0Ff6rQPkE9TjpXP3/+ebpAoGAcCYoFdmquNFAoKOJG+g8\
  SCpJa+JssXgbpNzzz2rr7X0RxGO/+wagHADDkDN3XSI02qxeFGZ4LjwbGBnF3PBV\
  EzXkPTm3gIoytVq7LEqxuJ18DcZUsh3MF5BGG+wjsjJnH9wPEs0o36RY9Od8PJzG\
  rXkb5pNzPKa1vNDlaO//qQc=\
  -----END PRIVATE KEY-----";
  var companyPublicKey =
    "-----BEGIN PUBLIC KEY-----\
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgcJupCQcxp6vkkRa37hA\
  U2eI0HIf6Qtf/G4I1NUn/LZGcrvTat4sHZExjgfTXNGwuwlUASNOIGfgrGQWayb4\
  +vyva1jQZivn5jSNsT9usm3GAlFgmVYbRIf3rhEsmQBZtb4sqdfQ1fc0cRAvUu3Q\
  D45+pULSjzIfXKBL3v4+D1vBllGsOhITRK7IiPRUwlZjJmaCRFuootybfdcn1xmr\
  5JnXCku5Fp7ikZl0lyHBmJiHNieYObDpr+TeCcgk2fBG+Vd7fpuXQZQYMVw4N0v7\
  PDnNuHtDDPW+Ia4pVRtuIxRyWpVd/bSmD60ysU8cE18PgBh8m1dgyxIF6m8GSuR8\
  WQIDAQAB\
  -----END PUBLIC KEY-----";
  const hacker = new User(1);
  //let rsaKey = Encrypt.generatRSAKey();
  hacker.publicKey = hackerPublicKey;
  hacker.privateKey = hackerPrivateKey;

  const company = new User(2);
  //let rsaKey = Encrypt.generatRSAKey();
  company.publicKey = companyPublicKey;

  const report = new Report(hacker, company);
  report.aesKey = aesKey;

  return (
    <div>
      <WriteForm report={report}></WriteForm>
    </div>
  );
}

export default Write;
