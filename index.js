  

      
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyMainBtn = document.getElementById("copyMainBtn");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Heart Buttons
for (let i = 1; i <= 9; i++) {
  const heartBtn = document.getElementById("heart" + i);
  heartBtn.addEventListener("click", function () {
    heartCount++;
    heartCountEl.innerText = heartCount;

    const icon = this.querySelector("i");
    if (icon.classList.contains("fa-regular")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }
  });
}

// Copy Buttons
const copyButtons = document.querySelectorAll(".copy-btn");
copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest("div.bg-white");
    const number = card.querySelector(".service-number").innerText;
    navigator.clipboard.writeText(number);
    alert("Copied " + number);

    copyCount++;
    copyMainBtn.innerText = copyCount + " Copy";
  });
});

// Call Buttons
const callButtons = document.querySelectorAll(".call-btn");
callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("Not enough coins!");
      return;
    }

    const card = this.closest("div.bg-white");
    const name = card.querySelector(".service-name").innerText;
    const number = card.querySelector(".service-number").innerText;
    coinCount -= 20;
    coinCountEl.innerText = coinCount;
    alert("Calling " + name + ": " + number);

    
    const entryDiv = document.createElement("div");
    entryDiv.className = "bg-gray-100 p-2 rounded";

    const flexDiv = document.createElement("div");
    flexDiv.className = "flex justify-between text-sm";

    const leftDiv = document.createElement("div");
    const nameP = document.createElement("p");
    nameP.className = "font-medium";
    nameP.innerText = name;
    const numberP = document.createElement("p");
    numberP.className = "text-gray-600 text-xs";
    numberP.innerText = number;

    leftDiv.appendChild(nameP);
    leftDiv.appendChild(numberP);

    const timeP = document.createElement("p");
    timeP.className = "text-gray-500 text-xs";
    timeP.innerText = new Date().toLocaleTimeString();

    flexDiv.appendChild(leftDiv);
    flexDiv.appendChild(timeP);
    entryDiv.appendChild(flexDiv);

    historyList.prepend(entryDiv);
  });
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

