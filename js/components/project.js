const params = new URLSearchParams(window.location.search);
const id = params.get("id");
async function getProject() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const jsonResponse = await response.json();

    const project = jsonResponse.find((item) => item.uuid === id);

    const text = `
    <h1>${project.name}</h1>
    <div class="row">
      <div class="type">${project.description}</div>
      <div class="date">${project.completed_on}</div>
    </div>
    <div class="imgProject mt-4 mb-4 text-regular" style="background-image:url('${project.image}')">
    </div>
    <div class="description mb-12">${project.content}</div>
  `;
    const container = document.querySelector("#project .container");
    container.innerHTML = text;
  } catch (err) {
    console.log("This project doesn't exit!", err);
  }
}

getProject();

async function getProjects() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const jsonResponse = await response.json();
    const jsonFiltered = jsonResponse.filter((project) => project.uuid !== id);

    const projectCards = document.querySelector("#projects .cards");
    jsonFiltered.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("mb-2");
      card.innerHTML = `
                <div class="cardImg" style="background-image:url('${project.image}')"></div>
                <div class="cardBody">
                  <h6 class="text-medium mb-1">${project.name}</h6>
                  <p class="headline-regular mb-4">${project.description}</p>
                  <a href="/pages/project.html?id=${project.uuid}">Learn more</a>
                </div>`;
      projectCards.appendChild(card);
    });
  } catch (err) {
    // Handle error or a rejected Promise
    projectCards = document.querySelector("#projects .cards");
    console.log("Ouucch... we have some problems. Try again later.", err);
  }
}
getProjects();
