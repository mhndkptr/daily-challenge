"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  let win = "";
  if (y > z && x > z) {
    if (x - z < y - z) {
      win = "Cat A";
      console.log("1");
    } else if (x - z > y - z) {
      win = "Cat B";
      console.log("2");
    } else {
      win = "Mouse C";
      console.log("3");
    }
  } else if (x < z && y < z) {
    if (z - x < z - y) {
      win = "Cat A";
      console.log("4");
    } else if (z - x > z - y) {
      win = "Cat B";
      console.log("5");
    } else {
      win = "Mouse C";
      console.log("6");
    }
  } else if (x > z && y < z) {
    if (x - z < z - y) {
      win = "Cat A";
      console.log("7");
    } else if (x - z > z - y) {
      win = "Cat B";
      console.log("8");
    } else {
      win = "Mouse C";
      console.log("9");
    }
  } else if (x < z && y > z) {
    if (z - x < y - z) {
      win = "Cat A";
      console.log("10");
    } else if (z - x > y - z) {
      win = "Cat B";
      console.log("11");
    } else {
      win = "Mouse C";
      console.log("12");
    }
  } else if (x == z && y == z) {
    win = "Mouse C";
  } else if (x == z && (y > z || y < z)) {
    win = "Cat A";
  } else if (y == z && (x > z || x < z)) {
    win = "Cat B";
  }

  return win;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const xyz = readLine().split(" ");

    const x = parseInt(xyz[0], 10);

    const y = parseInt(xyz[1], 10);

    const z = parseInt(xyz[2], 10);

    let result = catAndMouse(x, y, z);

    ws.write(result + "\n");
  }

  ws.end();
}
