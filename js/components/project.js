const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);
async function getProject() {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const jsonResponse = await response.json();
  
    const project = jsonResponse.find((item) => item.uuid === id);
  
    if (!project) {
      console.error("No se encontró ningún proyecto con ese ID.");
      return;
    }const text = `
    <h1>${project.name}</h1>
    <div class="row">
      <div class="type">${project.description}</div>
      <div class="date">${project.completed_on}</div>
    </div>
    <div class="imgProject mt-4 mb-4 text-regular" style="background-image:url('${project.image}')">
    </div>
    <div class="description mb-12">${project.content}</div>
  `;

  // Insertarlo en el DOM
  const container = document.querySelector("#project .container");
  container.innerHTML = text;

}

getProject();
