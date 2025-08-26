  

  const heartCountEl = document.getElementById("heartCount");
      const coinCountEl = document.getElementById("coinCount");
      const copyMainBtn = document.getElementById("copyMainBtn");
      const historyList = document.getElementById("historyList");
      const clearHistoryBtn = document.getElementById("clearHistory");

      let heartCount = 0;
      let coinCount = 100;
      let copyCount = 2;

      // Copy Buttons
      document.querySelectorAll(".copy-btn").forEach((btn) => {
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
      document.querySelectorAll(".call-btn").forEach((btn) => {
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

          const time = new Date().toLocaleTimeString();
          const div = document.createElement("div");
          div.className = "bg-gray-100 p-2 rounded";
          div.innerHTML = `<div class="flex justify-between text-sm"><div><p class="font-medium">${name}</p><p class="text-gray-600 text-xs">${number}</p></div><p class="text-gray-500 text-xs">${time}</p></div>`;
          historyList.prepend(div);
        });
      });

      // Clear History
      clearHistoryBtn.addEventListener("click", () => {
        historyList.innerHTML = "";
      });