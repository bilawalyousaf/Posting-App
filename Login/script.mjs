document.querySelector(".sign-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  console.log("email", email);
  console.log("password", password);

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
  console.log("form Submitted");
});
