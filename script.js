let check = function () {
  if (
    document.getElementById("Password").value ==
    document.getElementById("Confirm_Password").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "matching";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "not matching";
  }
};
