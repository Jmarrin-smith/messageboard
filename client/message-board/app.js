const msg = document.getElementById("msg");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/joke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
});

fetchusers();
async function fetchusers() {
  // talk to the server and ask for the array of games
  const result = await fetch(`http://localhost:8080/users`);
  // how to read the incoming data
  const users = await result.json();
}

fetchmessages();
async function fetchusers() {
  // talk to the server and ask for the array of games
  const result = await fetch(`http://localhost:8080/messages`);
  // how to read the incoming data
  const messages = await result.json();
}

function generateImages(array) {
  for (let i = 0; i < array.length; i++) {
    const div = document.createElement("div");
    div.classList.add("message");
    const uname = document.createElement("p");
    uname.classList.add("user");
    uname.setAttribute(array[i].username);
    const dmsg = document.createElement("p");
    dmsg.classList.add("msgtxt");
    dmsg.setAttribute(array[i].message);
    const like = document.createElement("button");
    document.createElement("button");
    container.appendChild(div);
  }
}
