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

  document.querySelector(".sign-form").reset();

  Swal.fire({
    icon: "success",
    title: "Form Submitted",
    showConfirmButton: false,
    timer: 2000,
  });
});

const passwordInput = document.querySelector("#password");
const showPass = document.querySelector(".show-pass");
const hidePass = document.querySelector(".hide-pass");

showPass.addEventListener("click", () => {
  passwordInput.type = "text";
  showPass.style.display = "none";
  hidePass.style.display = "block";
});

hidePass.addEventListener("click", () => {
  passwordInput.type = "password";
  showPass.style.display = "block";
  hidePass.style.display = "none";
});
