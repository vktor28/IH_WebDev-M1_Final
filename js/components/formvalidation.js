let x = document.forms["contactform"]["name"].value;
console.log(x);
function validateForm() {
  let x = document.forms["contactform"]["name"].value;
  console.log(x);
  if (x == "" || x == "ironhack") {
    alert("Name must be filled out or diferent than ironhack");
    return false;
  }
}
