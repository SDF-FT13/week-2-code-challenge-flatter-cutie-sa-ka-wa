// Your code here
document.addEventListener("DOMContentLoaded", () => {
  const characterBar = document.getElementById("character-bar");
  const characterName = document.getElementById("name");
  const characterImage = document.getElementById("image");
  const voteCount = document.getElementById("vote-count");
  const voteForm = document.getElementById("votes-form");
  const voteInput = document.getElementById("votes");
  const resetButton = document.getElementById("reset-btn");

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
    characterImage.alt = character.name;
    voteCount.innerText = ` ${character.votes}`;
    voteInput.dataset.id = character.id;
  }

  voteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let votesToAdd = parseInt(voteInput.value, 10);
    let currentVotes = parseInt(
      voteCount.innerText.replace("Total Votes: ", ""),
      10
    );

    if (!isNaN(votesToAdd) && votesToAdd > 0) {
      voteCount.innerText = ` ${currentVotes + votesToAdd}`;
    }

    voteForm.reset();
  });

  resetButton.addEventListener("click", () => {
    voteCount.innerText = 0;
  });
});
