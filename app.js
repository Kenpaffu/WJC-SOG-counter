"use strict";
import { teamUSA, teamCAN, teamRUS } from "./teams.js";

const addElement = ({ playerName, number }) => {
  // Creating DOM elements
  const skaterDivEl = document.createElement("div");
  const skaterEl = document.createElement("h1");
  const numEl = document.createElement("h1");
  const currentDivEl = document.getElementById("div1");
  const sogButtonEl = document.createElement("button");
  const oopsButtonEl = document.createElement("button");

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
};

const dataPull = (arr, pos) => {
  arr[0][pos].forEach((skate) => addElement(skate));
};

dataPull(teamUSA, "forwards");
dataPull(teamUSA, "defensemen");
