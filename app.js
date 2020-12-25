"use strict";
import { teamUSA, teamCAN, teamRUS } from "./teams.js";

const titleEl = document.getElementById("team1");
const total = document.createElement("div");

total.id = "totalShots";
total.value = 0;

total.innerHTML = total.value;

document.body.insertBefore(total, titleEl.nextSibling);

const addElement = ({ playerName, number, shots }, totalSOG) => {
  // Creating DOM elements
  const skaterDivEl = document.createElement("div");
  const skaterEl = document.createElement("h1");
  const numEl = document.createElement("h1");
  const currentDivEl = document.getElementById("div1");
  const sogButtonEl = document.createElement("button");
  const oopsButtonEl = document.createElement("button");
  const summaryEl = document.createElement("div");

  // Adding ID's to elements
  sogButtonEl.id = playerName;
  oopsButtonEl.id = `${playerName}_1`;

  // Adding classes to elements
  skaterEl.className = "skaterName";
  numEl.className = "skaterNum";
  skaterDivEl.className = "skaterDiv";
  oopsButtonEl.className = "oopsButton";
  sogButtonEl.className = "sogButton";

  // Adding teams data to elements
  skaterEl.innerHTML = playerName;
  numEl.innerHTML = number;
  sogButtonEl.innerHTML = "Shot";
  oopsButtonEl.innerHTML = "Oops";

  // Appending teams data
  skaterDivEl.appendChild(skaterEl);
  skaterDivEl.appendChild(numEl);
  skaterDivEl.appendChild(sogButtonEl);
  skaterDivEl.appendChild(oopsButtonEl);

  // location of div on page
  document.body.insertBefore(skaterDivEl, currentDivEl);
  document.body.insertBefore(summaryEl, currentDivEl.nextSibling);

  // Button functionality
  const totalShots = document.getElementById("totalShots");

  console.log(totalShots.value);

  document.getElementById(playerName).addEventListener("click", function (e) {
    e.preventDefault();

    shots++;
    totalShots.innerHTML = Number(totalShots.innerHTML) + 1;

    shots > 0
      ? (summaryEl.innerHTML = `${playerName} : ${shots}`)
      : (summaryEl.innerHTML = "");
  });

  document
    .getElementById(`${playerName}_1`)
    .addEventListener("click", function (e) {
      e.preventDefault();
      let counterDown = Number(totalShots.innerHTML) - 1;
      shots--;
      if (counterDown >= 0) {
        totalShots.innerHTML = counterDown;
      }

      shots > 0
        ? (summaryEl.innerHTML = `${playerName} : ${shots}`)
        : (summaryEl.innerHTML = "");
    });
};

const dataPull = (arr, pos) => {
  arr[0][pos].forEach((skate) => addElement(skate));
};

dataPull(teamUSA, "forwards");
dataPull(teamUSA, "defensemen");
