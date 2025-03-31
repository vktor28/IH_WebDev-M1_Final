function validateForm() {
  let x = document.forms["contactform"]["name"].value;
  console.log(x);
  if (x == "ironhack") {
    alert("Name must be diferent than ironhack");
    return false;
  } else {
    document.querySelector("form").classList.add("hidden");
    document.querySelector("#succes-message").classList.remove("hidden");
  }
}
