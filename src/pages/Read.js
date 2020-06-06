import React from "react";
import User from "../modules/User";
import Report from "../modules/Report";
var data = {
  content: "728f6a67509b423ef2b97cfeb2",
  hackerReportKey:
    "Zns9VX7dTtcwlviW8ydV2BDa8MkeqG3Zn9Oj5uJZFOIHjiIslVM5B/yt3FlKTxC9pTO12F8bGw3izS9z6URVtMoc8jWcRXJ6bZqwRVvHn3JHl/mLfE+hfoXP5hDA9yrONY5FMIHGVzhYTZTtP+RAYTJrvCoFxOdoVyGD3F4xWdenFqNtyA/17+I1p7aAyi16rZMZDljltpvrzcgK4DeZdA3qq8QK7o46rBdZiAAtuYvOJQnwyZBLg6kgljjMIeb1xP8pkTrGbkqs88WrLssaLFmFiL2P/4c7gHZP3XVp4T/BpIBkPhpd4z694PQz/W8KtBh6FWbW5Qfew3hkNCwxkQ==",
  companyReportKey:
    "F7O2W/76/wsB/l7qE/YPuxw2vbTCwJ0L/b8qs6wauEDqK+XbdoUqV2hL0n26e0eVslK/TQmzSWgyH6Aud2H2NkP7HpnTkddEXyDsz1GA8XgnyIgAU5wTxUhWInYlRtJxjbDiVZDctCo+0zorLEBXFVmMpGjt5h/PD7sqmBEEjYODiidWDmcia0NyiYcXzJ4zqTbvC62I0sFZLv8UXcSeXohYHwPc8+wd5G/J+ZyiSt+9iPrNspGB8ugGVI1KLa1fYt5rsO6R2DG1jxeQxf0EfZe11+0yf7VibDRIayScPQB7RORU2I5/yfai562UhYKeBEW9fxvTVT2X0oheWzJr3A==",
  hacker: 1,
  company: 2,
};
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

const hacker = new User(1);
//let rsaKey = Encrypt.generatRSAKey();
hacker.publicKey = hackerPublicKey;
hacker.privateKey = hackerPrivateKey;
const report = new Report(hacker);
report.writerKey = data.hackerReportKey;
console.log((report.encryptedContent = data.content));
console.log(report.content);
const Read = () => {
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default Read;
