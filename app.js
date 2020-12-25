"use strict";
import { teamUSA, teamCAN, teamRUS } from "./teams.js";

const addElement = ({ playerName, number, shots }) => {
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
  document.getElementById(playerName).addEventListener("click", function (e) {
    e.preventDefault();

    shots++;

    shots > 0
      ? (summaryEl.innerHTML = `${playerName} : ${shots}`)
      : (summaryEl.innerHTML = "");
  });

  document
    .getElementById(`${playerName}_1`)
    .addEventListener("click", function (e) {
      e.preventDefault();

      shots--;

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
