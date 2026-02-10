const API_URL = "__API_URL__";

async function loadNotes() {
  const res = await fetch(`${API_URL}/notes`);
  const data = await res.json();
  const list = document.getElementById("notes");
  list.innerHTML = "";
  data.forEach(n => {
    const li = document.createElement("li");
    li.innerText = n.text;
    list.appendChild(li);
  });
}

async function addNote() {
  const input = document.getElementById("noteInput");
  await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value })
  });
  input.value = "";
  loadNotes();
}

loadNotes();

