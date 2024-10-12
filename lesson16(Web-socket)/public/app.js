const status = document.getElementById("status");
const messages = document.getElementById("messages");
const form = document.getElementById("form");
const input = document.getElementById("input");
console.log(1);

const ws = new WebSocket("ws://localhost:3000");

form.addEventListener("submit", (event) => {
  console.log(input);
  event.preventDefault();

  ws.send(input.value);

  input.value = "";
});

function setStatus(value) {
  status.innerHTML = value;
}

function printMessage(value) {
  console.log(value);
  const li = document.createElement("li");

  li.innerHTML = value;
  messages.appendChild(li);
}

ws.onopen = () => setStatus("ONLINE");

ws.onclose = () => setStatus("OFFLINE");

ws.onmessage = (response) => {
  printMessage(response.data);
};
