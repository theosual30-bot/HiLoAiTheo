(function () {
'use strict';

// =========================
// FIREBASE LICENSE SYSTEM
// =========================

const PROJECT_ID = "theoaihil";

// RESET CACHE LICENSE ERROR
localStorage.removeItem("THEO_BAD_LICENSE");

let LICENSE =
localStorage.getItem("THEO_LICENSE");

if(!LICENSE){

CUSTOM LOGIN UI

}

// =========================
// CUSTOM LICENSE UI
// =========================

const loginBg =
document.createElement("div");

loginBg.id = "theo-login-bg";

loginBg.innerHTML = `
<div id="theo-login-box">

<div id="theo-title">
THEO AI
</div>

<div id="theo-sub">
SECURE ACCESS
</div>

<input
id="theo-license-input"
placeholder="ENTER LICENSE"
/>

<button id="theo-login-btn">
LOGIN
</button>

<div id="theo-login-status">
READY
</div>

</div>
`;

document.body.appendChild(loginBg);

// STYLE
const loginStyle =
document.createElement("style");

loginStyle.innerHTML = `

#theo-login-bg{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.75);
backdrop-filter:blur(8px);
z-index:99999999;
display:flex;
justify-content:center;
align-items:center;
}

#theo-login-box{
width:320px;
background:rgba(20,20,20,0.95);
border:1px solid #00ff99;
border-radius:18px;
padding:25px;
box-shadow:0 0 25px #00ff99;
font-family:Arial;
animation:theoPop 0.35s ease;
}

#theo-title{
font-size:28px;
font-weight:bold;
color:#00ff99;
text-align:center;
}

#theo-sub{
margin-top:5px;
font-size:13px;
color:#aaa;
text-align:center;
margin-bottom:20px;
}

#theo-license-input{
width:100%;
height:42px;
border:none;
border-radius:10px;
padding-left:12px;
box-sizing:border-box;
background:#111;
color:#00ff99;
font-size:14px;
outline:none;
}

#theo-login-btn{
width:100%;
height:42px;
margin-top:12px;
border:none;
border-radius:10px;
background:#00ff99;
color:#000;
font-weight:bold;
font-size:15px;
cursor:pointer;
}

#theo-login-status{
margin-top:14px;
text-align:center;
font-size:13px;
color:#00ff99;
}

@keyframes theoPop{
from{
transform:scale(0.7);
opacity:0;
}
to{
transform:scale(1);
opacity:1;
}
}

`;

document.head.appendChild(loginStyle);

// LOGIN BUTTON
document.getElementById(
"theo-login-btn"
).onclick = ()=>{

LICENSE =
document.getElementById(
"theo-license-input"
).value;

if(!LICENSE){

document.getElementById(
"theo-login-status"
).innerHTML =
"ENTER LICENSE";

return;
}

document.getElementById(
"theo-login-status"
).innerHTML =
"VERIFYING...";

// SAVE
localStorage.setItem(
"THEO_LICENSE",
LICENSE
);

// RELOAD
location.reload();

};

throw new Error(
"WAITING LOGIN"
);

// FETCH DATABASE
fetch(
`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/licenses/${LICENSE}`
)

.then(res=>res.json())

.then(data=>{

console.log(data);

// INVALID
if(data.error){

localStorage.removeItem("THEO_LICENSE");

alert("LICENSE INVALID");

throw new Error("INVALID LICENSE");
}

const fields = data.fields;

// ACTIVE CHECK
if(
!fields ||
!fields.active ||
fields.active.booleanValue !== true
){

localStorage.removeItem("THEO_LICENSE");

alert("LICENSE BANNED");

throw new Error("BANNED");
}

// SAVE LICENSE
localStorage.setItem(
"THEO_LICENSE",
LICENSE
);

console.log(
"THEO LICENSE VALID"
);

// =========================
// STYLE
// =========================

const style = document.createElement("style");

style.innerHTML = `
#theo-panel{
position:fixed;
top:90px;
right:10px;
width:180px;
background:rgba(0,0,0,0.88);
color:#00ff99;
z-index:999999;
border-radius:12px;
padding:10px;
font-family:Arial;
box-shadow:0 0 12px #00ff99;
user-select:none;
}

#theo-drag{
background:#00ff99;
color:#000;
text-align:center;
padding:6px;
border-radius:8px;
font-weight:bold;
margin-bottom:8px;
cursor:move;
touch-action:none;
}

#theo-panel input{
width:100%;
height:32px;
margin-top:5px;
border:none;
border-radius:6px;
padding-left:8px;
box-sizing:border-box;
font-size:13px;
}

#theo-panel button{
width:100%;
height:34px;
margin-top:6px;
border:none;
border-radius:6px;
background:#00ff99;
color:#000;
font-weight:bold;
font-size:13px;
}

#theo-result{
margin-top:8px;
font-size:12px;
line-height:1.4;
word-break:break-word;
}
`;

document.head.appendChild(style);

// =========================
// PANEL
// =========================

const panel = document.createElement("div");

panel.id = "theo-panel";

panel.innerHTML = `
<div id="theo-drag">
THEO AI
</div>

<input id="cardInput" placeholder="Card">

<input id="multHigh" value="12">

<input id="multLow" value="1.2">

<button id="addCardBtn">
ADD CARD
</button>

<button id="analyzeBtn">
ANALYZE
</button>

<button id="resetBtn">
RESET
</button>

<div id="theo-result">
READY
</div>
`;

document.body.appendChild(panel);

// =========================
// DRAG FIX MOBILE
// =========================

(function(){

const drag =
document.getElementById("theo-drag");

let active = false;

let currentX;
let currentY;

let initialX;
let initialY;

let xOffset = 0;
let yOffset = 0;

drag.addEventListener(
"touchstart",
dragStart,
false
);

drag.addEventListener(
"mousedown",
dragStart,
false
);

document.addEventListener(
"touchmove",
dragMove,
false
);

document.addEventListener(
"mousemove",
dragMove,
false
);

document.addEventListener(
"touchend",
dragEnd,
false
);

document.addEventListener(
"mouseup",
dragEnd,
false
);

function dragStart(e){

active=true;

if(e.type==="touchstart"){

initialX=
e.touches[0].clientX-
xOffset;

initialY=
e.touches[0].clientY-
yOffset;

}else{

initialX=
e.clientX-
xOffset;

initialY=
e.clientY-
yOffset;
}
}

function dragMove(e){

if(!active) return;

e.preventDefault();

if(e.type==="touchmove"){

currentX=
e.touches[0].clientX-
initialX;

currentY=
e.touches[0].clientY-
initialY;

}else{

currentX=
e.clientX-
initialX;

currentY=
e.clientY-
initialY;
}

xOffset=currentX;
yOffset=currentY;

panel.style.transform=
`translate(${currentX}px, ${currentY}px)`;
}

function dragEnd(){

active=false;
}

})();

// =========================
// ENGINE
// =========================

class HiLoAnalyzerTheo {

constructor() {

this.cards = [];
this.moves = [];

this.loss_streak = 0;
this.mode = "PROB";

this.w_prob = 1.0;
this.w_trend = 0.8;
this.w_gap = 0.5;
this.w_zone = 0.7;
this.w_rev = 0.7;
this.w_zig = 0.5;
this.w_mult = 0.35;
this.w_heat = 0.5;
}

cv(card) {

const rank = {
"A": 1,
"2": 2,
"3": 3,
"4": 4,
"5": 5,
"6": 6,
"7": 7,
"8": 8,
"9": 9,
"10": 10,
"J": 11,
"Q": 12,
"K": 13
};

return rank[String(card).toUpperCase()];
}

reset_run() {

this.cards = [];
this.moves = [];
}

add_card(card) {

let v = this.cv(card);

if (!v) return;

if (this.cards.length > 0) {

let diff = v - this.cards[this.cards.length - 1];

this.moves.push(diff);

if (this.moves.length > 15) {
this.moves.shift();
}
}

this.cards.push(v);

if (this.cards.length > 20) {
this.cards.shift();
}
}

prob_engine(current) {

let c = this.cv(current);

return {
high: 13 - c,
low: c - 1
};
}

trend_engine() {

if (this.cards.length < 3) {
return {
up: 0,
down: 0
};
}

let up = 0;
let down = 0;

for (let i = 1; i < this.cards.length; i++) {

if (this.cards[i] > this.cards[i - 1]) {
up++;
}

else if (this.cards[i] < this.cards[i - 1]) {
down++;
}
}

return {
up,
down
};
}

gap_engine() {

if (this.moves.length === 0) return 0;

let total = this.moves.reduce((a, b) => a + Math.abs(b), 0);

return total / this.moves.length;
}

reversal_engine() {

if (this.cards.length < 4) return 0;

let c = this.cards.slice(-4);

if (c[0] < c[1] && c[1] < c[2] && c[2] < c[3]) {
return 1;
}

if (c[0] > c[1] && c[1] > c[2] && c[2] > c[3]) {
return 1;
}

return 0;
}

zigzag_engine() {

if (this.cards.length < 4) return 0;

let changes = [];

for (let i = 1; i < this.cards.length; i++) {

changes.push(
this.cards[i] > this.cards[i - 1]
? 1
: -1
);
}

let zig = 0;

for (let i = 1; i < changes.length; i++) {

if (changes[i] !== changes[i - 1]) {
zig++;
}
}

return zig;
}

heat_engine() {

let low = 0;
let high = 0;

this.cards.forEach(x => {

if (x <= 6) {
low++;
} else {
high++;
}
});

return { low, high };
}

analyze(current, mult_high, mult_low) {

let { high: ph, low: pl } =
this.prob_engine(current);

let { up, down } =
this.trend_engine();

let gap =
this.gap_engine();

let rev =
this.reversal_engine();

let zig =
this.zigzag_engine();

let { low, high } =
this.heat_engine();

let ev_h =
ph * mult_high;

let ev_l =
pl * mult_low;

let score_h =
(
ph * this.w_prob +
up * this.w_trend +
gap * this.w_gap +
high * this.w_heat +
zig * this.w_zig +
ev_h -
mult_high * this.w_mult -
rev * this.w_rev
);

let score_l =
(
pl * this.w_prob +
down * this.w_trend +
gap * this.w_gap +
low * this.w_heat +
zig * this.w_zig +
ev_l -
mult_low * this.w_mult +
rev * this.w_rev
);

let diff =
Math.abs(score_h - score_l);

let action =
diff < 1
? "SKIP"
: score_h > score_l
? "HIGH"
: "LOW";

let conf =
Math.min(
99,
Math.round(diff * 10)
);

return {
action,
conf,
mode: this.mode,
high_score: score_h.toFixed(2),
low_score: score_l.toFixed(2),
trend_up: up,
trend_down: down,
zig,
rev,
gap: gap.toFixed(2)
};
}
}

// =========================
// START ENGINE
// =========================

const bot = new HiLoAnalyzerTheo();

// =========================
// BUTTONS
// =========================

document.getElementById("addCardBtn")
.onclick = () => {

let card =
document.getElementById("cardInput").value;

bot.add_card(card);

document.getElementById("theo-result")
.innerHTML =
`CARD ${card} ADDED<br>
MEMORY: ${bot.cards.join(", ")}`;
};

document.getElementById("analyzeBtn")
.onclick = () => {

let card =
document.getElementById("cardInput").value;

let mh =
parseFloat(
document.getElementById("multHigh").value
);

let ml =
parseFloat(
document.getElementById("multLow").value
);

let r =
bot.analyze(card, mh, ml);

document.getElementById("theo-result")
.innerHTML = `
ACTION : ${r.action}<br>
CONF : ${r.conf}%<br>
MODE : ${r.mode}<br>
HIGH SCORE : ${r.high_score}<br>
LOW SCORE : ${r.low_score}<br>
TREND UP : ${r.trend_up}<br>
TREND DOWN : ${r.trend_down}<br>
ZIGZAG : ${r.zig}<br>
REVERSAL : ${r.rev}<br>
GAP : ${r.gap}
`;
};

document.getElementById("resetBtn")
.onclick = () => {

bot.reset_run();

document.getElementById("theo-result")
.innerHTML =
"SESSION RESET";
};

})

.catch(err=>{

console.log(err);

});

})();
