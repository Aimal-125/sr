let arr = [
{
  "category": "Reaction",
  "score": 80,
  "icon": "./assets/images/icon-reaction.svg"
},
{
  "category": "Memory",
  "score": 92,
  "icon": "./assets/images/icon-memory.svg"
},
{
  "category": "Verbal",
  "score": 61,
  "icon": "./assets/images/icon-verbal.svg"
},
{
  "category": "Visual",
  "score": 72,
  "icon": "./assets/images/icon-visual.svg"
}
];

let sum = 0;
for(let i in arr) {
  sum += arr[i]["score"];
}
let avg = Math.floor(sum / 4);
let avgout = document.getElementById("avg");
avgout.innerHTML = avg;

let p1 = document.getElementById("props1");
let p2 = document.getElementById("props2");
let p3 = document.getElementById("props3");
let p4 = document.getElementById("props4");

p1.innerHTML = arr[0]["category"];
p2.innerHTML = arr[1]["category"];
p3.innerHTML = arr[2]["category"];
p4.innerHTML = arr[3]["category"];