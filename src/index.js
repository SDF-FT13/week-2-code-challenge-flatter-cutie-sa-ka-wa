// Your code here
document.addEventListener("DOMContentLoaded", () => {
  const characterBar = document.getElementById("character-bar");
  const characterName = document.getElementById("name");
  const characterImage = document.getElementById("image");
  const voteCount = document.getElementById("vote-count");
  const voteForm = document.getElementById("vote-form");
  const voteInput = document.getElementById("vote-input");
  const resetButton = document.getElementById("reset-votes");

  const characterList = fetch("http://localhost:3000/characters")
    .then((response) => response.json())
    .then((characters) => {
      characters.forEach((character) => {
        let span = document.createElement("span");
        span.innerText = character.name;
        span.dataset.id = character.id;

        characterBar.appendChild(span);

        span.addEventListener("click", () => {
          displayCharacterDetails(character);
        });
      });
    });
  function displayCharacterDetails(character) {
    characterName.innerText = character.name;
    characterImage.src = character.image;
    voteCount.innerText = character.votes;
    voteInput.dataset.id = character.id;
  }
});
