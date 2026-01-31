document.querySelector(".sign-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirm_password = document.querySelector("#confirm-password").value;

  //   console.log("email", email);
  //   console.log("password", password);
  //   console.log("confirm-password", confirm_password);

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

  document.querySelector(".sign-form").reset();

  Swal.fire({
    icon: "success",
    title: "Form Submitted",
    showConfirmButton: false,
    timer: 2000,
  });
});

const passwordInput = document.querySelector("#password");
const showPass1 = document.querySelector(".show-pass1");
const hidePass1 = document.querySelector(".hide-pass1");

showPass1.addEventListener("click", () => {
  passwordInput.type = "text";
  showPass1.style.display = "none";
  hidePass1.style.display = "block";
});

hidePass1.addEventListener("click", () => {
  passwordInput.type = "password";
  showPass1.style.display = "block";
  hidePass1.style.display = "none";
});

const confirmInput = document.querySelector("#confirm-password");
const showPass2 = document.querySelector(".show-pass2");
const hidePass2 = document.querySelector(".hide-pass2");

showPass2.addEventListener("click", () => {
  confirmInput.type = "text";
  showPass2.style.display = "none";
  hidePass2.style.display = "block";
});

hidePass2.addEventListener("click", () => {
  confirmInput.type = "password";
  showPass2.style.display = "block";
  hidePass2.style.display = "none";
});
