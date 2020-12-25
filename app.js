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
const teamOneCounter = document.getElementsByClassName("team-one-counter");
const teamTwoCounter = document.getElementsByClassName("team-two-counter");
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
teamOneCounter[0].appendChild(teamOneCounterEl);
teamTwoCounter[0].appendChild(teamTwoCounterEl);
teamOneCounter[0].appendChild(totalTeamOne);
teamTwoCounter[0].appendChild(totalTeamTwo);

const sogCounter = ({ playerName, number, shots }, team) => {
  // Creating DOM elements
  const skaterDivEl = document.createElement("div");
  const skaterFirstEl = document.createElement("h3");
  const skaterLastEl = document.createElement("h3");
  const numEl = document.createElement("h1");
  const currentDivEl = document.getElementById("div1");
  const currentDivTwoEl = document.getElementById("div2");
  const sogButtonEl = document.createElement("button");
  const oopsButtonEl = document.createElement("button");
  const teamOneSummary = document.getElementsByClassName("team-one-summary");
  const teamTwoSummary = document.getElementsByClassName("team-two-summary");
  const summaryTeamOneEl = document.createElement("div");
  const summaryTeamTwoEl = document.createElement("div");

  // Adding ID's to elements
  sogButtonEl.id = playerName;
  oopsButtonEl.id = `${playerName}_1`;

  // Adding classes to elements
  skaterFirstEl.className = "skaterName";
  skaterLastEl.className = "skaterName";
  numEl.className = "skaterNum";
  skaterDivEl.className = `skaterDiv ${team}`;
  oopsButtonEl.className = "oopsButton";
  sogButtonEl.className = "sogButton";
  summaryTeamOneEl.className = "teamOneSum";
  summaryTeamTwoEl.className = "teamTwoSum";

  // Adding teams data to elements
  let nameArray = playerName.split(" ");
  console.log(nameArray);
  skaterFirstEl.innerHTML = nameArray[0];
  skaterLastEl.innerHTML = nameArray[1];
  numEl.innerHTML = number;
  sogButtonEl.innerHTML = "Shot";
  oopsButtonEl.innerHTML = "Oops";

  // Appending teams data
  skaterDivEl.appendChild(skaterFirstEl);
  skaterDivEl.appendChild(skaterLastEl);
  skaterDivEl.appendChild(numEl);
  skaterDivEl.appendChild(sogButtonEl);
  skaterDivEl.appendChild(oopsButtonEl);

  if (skaterDivEl.classList.contains("home")) {
    currentDivEl.appendChild(skaterDivEl);
  } else {
    currentDivTwoEl.appendChild(skaterDivEl);
  }
  // location of div on page
  if (skaterDivEl.classList.contains("home")) {
    teamOneSummary[0].appendChild(summaryTeamOneEl);
  } else {
    teamTwoSummary[0].appendChild(summaryTeamOneEl);
  }
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
