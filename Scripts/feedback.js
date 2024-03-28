// for hide the form
function hidecontainer() {
  document.getElementById("comm").style.display = "none";
}

// for popup preview details
function showContainer() {
  document.getElementById("popup").style.display = "inline-block";
}
// validation
function validateForm() {
  const name = document.forms["myQuery"]["name"].value;
  const email = document.forms["myQuery"]["email"].value;
  const rating = document.forms["myQuery"]["experience"].value;
  const reason = document.forms["myQuery"]["reason"].value;
  const emailvalidate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let nameValid,
    emailValid,
    optionValid,
    reasonValid = false;

  if (name == "") {
    document.getElementById("label-name").style.color = "red";
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("name-error").style.display = "inline";
  } else {
    document.getElementById("label-name").style.color = "black";
    document.getElementById("name").style.borderColor = "green";
    document.getElementById("name-error").style.display = "none";
    nameValid = true;
  }

  if (email == "") {
    document.getElementById("email-label").style.color = "red";
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email-error").style.display = "inline";
  } else if (!email.match(emailvalidate)) {
    document.getElementById("email-label").style.color = "red";
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email-error").innerHTML =
      "* Invalid email address,please check again";
    document.getElementById("email-error").style.display = "inline";
  } else {
    document.getElementById("email-label").style.color = "black";
    document.getElementById("email").style.borderColor = "green";
    document.getElementById("email-error").style.display = "none";
    emailValid = true;
  }

  if (rating == "") {
    document.getElementById("radioq").style.color = "red";
    document.getElementById("option-error").style.display = "inline";
  } else {
    document.getElementById("radioq").style.color = "black";
    document.getElementById("option-error").style.display = "none";
    optionValid = true;
  }

  if (reason == "") {
    document.getElementById("reasonq").style.color = "red";
    document.getElementById("reason").style.borderColor = "red";
    document.getElementById("reason-error").style.display = "inline";
  } else {
    document.getElementById("reasonq").style.color = "black";
    document.getElementById("reason").style.borderColor = "green";
    document.getElementById("reason-error").style.display = "none";
    reasonValid = true;
  }

  if (nameValid && emailValid && optionValid & reasonValid) {
    hidecontainer();
    showContainer();
  }

  console.log(document.forms["myQuery"]["name"].value);
}
