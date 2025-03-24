async function obtainData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const jsonResponse = await response.json();
  } catch (err) {
    // Handle error or a rejected Promise
    console.log("Something went wrong!", err);
  }

  const projectCards = document.querySelector("#projects .cards");
  personajes.forEach((elPerson) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
              <div class="cardImg"></div>
              <div class="cardBody">
                <h6>${name}</h6>
                <p>${description}</p>
                <a href="#">Learn more</a>
              </div>`;
  });
}

obtainData();
