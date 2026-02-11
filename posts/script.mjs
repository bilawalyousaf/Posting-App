let user_string = localStorage.getItem("currentUsers");
let string_data = JSON.parse(user_string);

if (!string_data) {
  window.location.href = "../Login/index.html";
}

document.querySelector(".user-gmail").innerText = string_data.email;

function logout() {
  localStorage.removeItem("currentUsers");
  window.location.href = "../Login/index.html";
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#desc").value;

  let all_posts_string = localStorage.getItem("posts");
  let all_posts = JSON.parse(all_posts_string) || [];

  let new_posts = {
    title: title,
    description: description,
    Time: new Date().getTime(),
    createdBy: string_data.email,
  };

  const updates_posts = [new_posts, ...all_posts];
  let updates_posts_string = JSON.stringify(updates_posts);
  localStorage.setItem("posts", updates_posts_string);
  e.target.reset();
  alert("post created");
  rendor_posts();
});

function rendor_posts() {
  let all_posts_string = localStorage.getItem("posts");
  let all_posts = JSON.parse(all_posts_string) || [];
  // console.log(all_posts);

  const output = document.querySelector("#output");
  output.innerHTML = "";

  all_posts.forEach((posts) => {
    output.innerHTML += `
  <div class = "single-post">
  <h2>${posts.createdBy}</h2>
  <h2>${posts.title}</h2>
    <h4>${posts.description}</h4>
    <h2>${moment(posts.Time).fromNow()}</h2>
</div>`;
  });
}

rendor_posts();
