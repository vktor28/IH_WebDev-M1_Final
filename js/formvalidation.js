const form = document.getElementById("miFormulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target[0].value);
  console.log(event.target[1].value);
  console.log(event.target[2].value);
  console.log(event.target[3].value);
  if (event.target[0].value == "ironhack") {
    alert("Name must be diferent than ironhack");
    return false;
  } else {
    document.querySelector("form").classList.add("hidden");
    document.querySelector("#succes-message").classList.remove("hidden");
  }
});
