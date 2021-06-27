///var decl
var mac = document.querySelector("#wc-footer > div > div:nth-child(1) > div.send-video-container > button > i")
mac.click();
mac.parentNode.removeChild(mac);
var cim = document.querySelector("#wc-footer > div > div:nth-child(1) > div.join-audio-container > button")
cim.click();
cim.parentNode.removeChild(cim);
var stop = document.querySelector("#wc-footer > div > div:nth-child(1) > div.send-video-container > button")
stop.parentNode.removeChild(stop);
var security = document.querySelector("#securityOptionMenu > i")
security.parentNode.removeChild(security);
var security2 = document.querySelector("#securityOptionMenu")
security2.parentNode.removeChild(security2);
var shesh = document.querySelector("#wc-footer > div > div:nth-child(3) > div > button")
shesh.parentNode.removeChild(shesh);

