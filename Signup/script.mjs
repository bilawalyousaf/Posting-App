document.querySelector(".sign-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirm_password = document.querySelector("#confirm-password").value;

  console.log("email", email);
  console.log("password", password);
  console.log("confirm-password", confirm_password);

  if (!email) {
    alert("Please Enter Your Email");
    return;
  }

  if (!email.includes("@")) {
    alert("Please Enter Valid Email");
    return;
  }

  if (!password) {
    alert("Please Enter Your Password");
    return;
  }

  if (password !== confirm_password) {
    alert("Password Do Not Match");
    return;
  }

  console.log("form Submitted");
});
