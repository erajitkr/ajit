let isUserOne = true; // Alternate between sender & receiver

  function send() {
    const input = document.getElementById("msg");
    const message = input.value.trim();
    if (message === "") return;

    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${isUserOne ? "right" : "left"}`;
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";
    isUserOne = !isUserOne; // switch side
  }