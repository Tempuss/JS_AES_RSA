import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/*
import Encrypt from "./modules/encrypt";
import User from "./modules/user";
import Report from "./modules/report";
*/
import { Route } from "react-router-dom";
/*
import Read from "./pages/Read";
import Write from "./pages/Write";

const crypto = require("crypto");
var content = "안녕하세요?";
var aesKey = crypto.randomBytes(32).toString("hex");

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
*/

/*
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
*/

var encryptedPrivateKey =
  "e8f6f713ced27425f4a61dee5d3c63581b126ee8ac4400f175872e14dd0247ce7ca541c4f7dfeda297a1b3567a1cb8c4e4fa849797c9e4fff4c1a54d48afe343ad642aedbf8dae427cb6a0f57caf059c3121ab7f61030f0f879780391d202a11de52895adf02912f72915abc367ff96c3f514dc5201f12182f425e88e4fd65e9703027e466b069a06bbda793591e6c6f751eee2c044908de546306c95e8fdaf4e0233d311287555f49cf5c75e2efd8dbced77d9abf88b4e4c0ac0b2b4c0c65ebc8bd4a1c23d6b0281a7cb78f9501b15a8bf31a9aa80ebf3d43a458c247b59016e63744f1db3b56f140f58d0c145592a9cfb0fabac9f0876f6e51e22e150a652d9ae74d40ffe5f5ba477e1ac296e7a781d61e6f3620de900bf08fd7f2fc5ffd2e71286f2573fb2465258dcbb7ba2d483729da2628d2cfb89ae27c4f07434e277102307f14a8088bf66ce62ad3dfb7d682ecdedc85e98db27faeff5e10c02a961696654c1cc3d3bf7fbf1f39fe89c0fcb6afd3312b661e0b52cc6b04001c72cd977db69d789941f90402444f305b43ab80bea7f6374201cbae2ddb98b832ab7942139af66e25eb08ef48ae87f5a384c81a688edd4e194c40ce991e757d019156eef9c9cbea3735466cb4c4a7cff9c0687c4606b9e35532efe02ced8a7274bb89b4df5f41775c9d8682d50bd9e901bd9b60b888277af0eeb45b26ca8e6b1030a23573617f3e53f6b210b962578f84c4d91b6cddc5759bfd3427d32d021bfb870a02f1652ae1d3b024c85b54e4472feab2b02dda87343b205fca9c6018b2c92b97b6637ad66361e69cfcfbab22bff2a092a2b7354a28aabdbca31250f6e147b99efa2eafecd8a8ea1c90451518cfe2fdda0ac4c1dc675916b89c64b557ad3239870df4dd8a42a35481e3203290aaefd9441d098b2cc64f7a139ed3ec83902ab34ad9964b3895707a28ca2d604ef62e6f4e1b6d1d17377170d1e5a433fd99aeba004d36a14f4dc6ae6276ef41faad981a3f1a8ba558d5e0615908835240ca179cb5bb2c6c87d0ffecd97097fc3e110ca2dfa575a2e7af58d13535b629c609cb27ef4d4ef3dec1d8d14bf280a66576c099d5feadef7d2be052c1015e9d39af79830b03d9144bf46992ff6d18ed7be9eab44a3cd831fe0fe47ea417fdbda6f4fa5f7e815ff199300601789567735f2d84909402bccb1c40d7bbee9636e42c54b14e598b3dc8977bc4da55d6be93ea0f956ace3e3f9c9e4d5c54593c832131166552ad336464ff1b97e8b78539e07f783d9ca6603030d5a11845063032da93c9d4942e4742f634a4e6856d0f59dfeba28b70b36c98c1c436b8b5393675460205454bba9e308dd9077f004f475537f2b30ba134c5e301426bd50d0d8bf6b212a4ebc4ce2a9f9b3f9803e433d7c67fbada34e0a7aa7f5f01e9f3dd0824c754fcb1c197529ca141d937bef0fcbdd26bc5034f4406f0baa91abf2dcf0aebd131482a634adc28aa79500344dbd10d5e5b15bbcfd47924dbd3652e0bf652645ec8aa6ebd7ffbee0f6c942e5c63b9afeab310093eaaf4d31d8111c5cceef981e4b2b087b42ec0a782e4b5e9631086a5b049e889e5840ce30491a7e6da03772b8d3b4566b4019c2e3e1c733289891342639ad5b23071b0a2ebca2df419fa183b68325bcda435ea06d82d6608b11b4d5ab9caee56fdf4cb0ad95079949c9c43959654d99966ad9ac74c6655c3c340204ab1f958ccdeeb26bd18b814198d121a2af85b64e60754b115ce274a93e12d1d33a2cf62766267b8308205732f411a3433ba793f2fdca8c71e992df35824a31f6fc60dd0bd3270590f75a265820c9a9be6d90024b3d73d095d5f2a89f7d827f86327d0171039a95f26e99bda9dff60bf53fac565856d5b3c252980d94b30adfe139e7f7b22cf5d8231b40b35e4e83b4b1f8cba8b9921ad05525c3f364f0402cbd83ef01bad81b57ecb189b9269542ad390614e1a6251f4807619d0fc2fb548ebe42068064a2af875ea78eb591449d5b024756bb4657ca27122319d15b484424188a795dabcb7438a1d6a399d5f21c23083d3152c6a5e4d18e211eefd88a1d10920d004060d65784f2e480a3cf07fbe69bc8e889b4009fe0370ba7c787fb98496b1b0633e850da60e8add611b567a46385458b9693b9ad02f8f3027ba9956e77ecba972b955e205dc7dbd403e79d1f8a78ab121944b5283a73a8ae9b05fc50738230d08c32a9d6cc8ca2fb2a245af5b625b8f1678ba90d2542fb7ff587065fd7a4eddd22c525e52552e2ac41a75423c02675d55e93307bc3d7ec725d4575c0f42849069870ea1f1a76c33f77c4d74af46f6c39aed4be0f199e9633e8148fd73dcfb55453297";

//var encryptedPrivateKey = Encrypt.encryptAES(privateKey, "1234");
//console.log(encryptedPrivateKey);

/*
const hacker = new User(1);
hacker.publicKey = publicKey;
hacker.privateKey = { privateKey: encryptedPrivateKey, aesKey: "1234" };

const company = new User(2);
company.publicKey = publicKey;
//company.privateKey = { privateKey: encryptedPrivateKey, aesKey: "1234" };

const report = new Report(hacker, company);
report.aesKey = aesKey;
report.content = content;
console.log(report);
*/
/*
const hacker = new User(1);
hacker.publicKey = publicKey;

const company = new User(2);
company.publicKey = publicKey;

const report = new Report(hacker, company);
//report.aesKey = aesKey;
//report.content = content;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.value);
    hacker.privateKey = { privateKey: encryptedPrivateKey, aesKey: this.state.value };
    console.log(report);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          RSA Password:
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}
*/
/*
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/write" component={Write} />
        <Route path="/read" component={Read} />
        <Route path="/" component={App} />
      </div>
    );
  }
}
*/
class App extends Component {
  render() {
    return <div>Hello React-Router</div>;
  }
}

export default App;
