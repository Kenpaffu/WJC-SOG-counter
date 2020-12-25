"use strict";
import {
  teamUSA,
  teamCAN,
  teamRUS,
  teamSUI,
  teamSVK,
  teamGER,
  teamFIN,
  teamAUT,
  teamSWE,
  teamCZE,
} from "./teams.js";

// Creating Elements for Total team counters
const teamOneCounterEl = document.getElementById("team1");
const totalTeamOne = document.createElement("div");
const teamTwoCounterEl = document.getElementById("team2");
const totalTeamTwo = document.createElement("div");

// Setting ID's for total team counters
totalTeamOne.id = "totalTeamOneShots";
totalTeamTwo.id = "totalTeamTwoShots";

// Setting values for total team counters
totalTeamOne.value = 0;
totalTeamOne.innerHTML = totalTeamOne.value;
totalTeamTwo.value = 0;
totalTeamTwo.innerHTML = totalTeamTwo.value;

// Location on page
document.body.insertBefore(totalTeamOne, teamOneCounterEl.nextSibling);
document.body.insertBefore(totalTeamTwo, teamTwoCounterEl.nextSibling);

const sogCounter = ({ playerName, number, shots }, team) => {
  // Creating DOM elements
  const skaterDivEl = document.createElement("div");
  const skaterEl = document.createElement("h1");
  const numEl = document.createElement("h1");
  const currentDivEl = document.getElementById("div1");
  const sogButtonEl = document.createElement("button");
  const oopsButtonEl = document.createElement("button");
  const summaryTeamOneEl = document.createElement("div");
  const summaryTeamTwoEl = document.createElement("div");

  // Adding ID's to elements
  sogButtonEl.id = playerName;
  oopsButtonEl.id = `${playerName}_1`;

  // Adding classes to elements
  skaterEl.className = "skaterName";
  numEl.className = "skaterNum";
  skaterDivEl.className = `skaterDiv ${team}`;
  oopsButtonEl.className = "oopsButton";
  sogButtonEl.className = "sogButton";
  summaryTeamOneEl.className = "teamOneSum";
  summaryTeamTwoEl.className = "teamTwoSum";

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
  document.body.insertBefore(summaryTeamOneEl, currentDivEl.nextSibling);
  document.body.insertBefore(summaryTeamTwoEl, currentDivEl.nextSibling);

  // Button functionality
  const totalTeamOneShots = document.getElementById("totalTeamOneShots");
  const totalTeamTwoShots = document.getElementById("totalTeamTwoShots");

  document.getElementById(playerName).addEventListener("click", function (e) {
    e.preventDefault();
    if (team === "home") {
      shots++;
      totalTeamOneShots.innerHTML = Number(totalTeamOneShots.innerHTML) + 1;

      shots > 0
        ? (summaryTeamOneEl.innerHTML = `${playerName} : ${shots}`)
        : (summaryTeamOneEl.innerHTML = "");
    } else {
      shots++;
      totalTeamTwoShots.innerHTML = Number(totalTeamTwoShots.innerHTML) + 1;

      shots > 0
        ? (summaryTeamTwoEl.innerHTML = `${playerName} : ${shots}`)
        : (summaryTeamTwoEl.innerHTML = "");
    }
  });

  document
    .getElementById(`${playerName}_1`)
    .addEventListener("click", function (e) {
      e.preventDefault();
      let counterDown = Number(totalTeamOneShots.innerHTML) - 1;
      let counterDownTwo = Number(totalTeamTwoShots.innerHTML) - 1;
      if (team === "home") {
        shots--;
        if (counterDown >= 0) {
          totalTeamOneShots.innerHTML = counterDown;
        }

        shots > 0
          ? (summaryTeamOneEl.innerHTML = `${playerName} : ${shots}`)
          : (summaryTeamOneEl.innerHTML = "");
      } else {
        shots--;
        if (counterDown >= 0) {
          totalTeamTwoShots.innerHTML = counterDown;
        }

        shots > 0
          ? (summaryTeamTwoEl.innerHTML = `${playerName} : ${shots}`)
          : (summaryTeamTwoEl.innerHTML = "");
      }
    });
};

const dataPull = (arr, pos, team) => {
  arr[0][pos].forEach((skate) => sogCounter(skate, team));
};

dataPull(teamUSA, "forwards", "home");
dataPull(teamUSA, "defensemen", "home");

dataPull(teamRUS, "forwards", "away");
dataPull(teamRUS, "defensemen", "away");
