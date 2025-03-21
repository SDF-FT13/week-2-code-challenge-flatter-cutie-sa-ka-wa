// Your code here
const characterBar = document.getElementById("character-bar");

const characterList = fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const span = document.createElement("span");
      span.innerText = character.name;
      span.dataset.id = character.id;
      characterBar.appendChild(span);
    });
  });
