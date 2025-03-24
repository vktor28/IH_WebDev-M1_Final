async function getProjects() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    const projectCards = document.querySelector("#projects .cards");
    jsonResponse.slice(0, 3).forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("mb-2");
      card.innerHTML = `
              <div class="cardImg" style="background-image:url('${project.image}')"></div>
              <div class="cardBody">
                <h6>${project.name}</h6>
                <p>${project.description}</p>
                <a href="#">Learn more</a>
              </div>`;
      projectCards.appendChild(card);
    });
  } catch (err) {
    // Handle error or a rejected Promise
    console.log("Something went wrong!", err);
  }
}

getProjects();
