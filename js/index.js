const form = document.getElementById("github-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(e);
  fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
    .then((res) => res.json())
    .then((res) => {
      res.items.map((item) => {
        const li = document.createElement("li");
        const userName = document.createElement("h2");
        userName.textContent = item.login;

        userName.addEventListener("click", (e) => showRepos(item.login, e));

        const avatarPhoto = document.createElement("img");
        avatarPhoto.src = item.avatar_url;

        const displayUser = document.getElementById("user-list");

        li.append(userName, avatarPhoto);
        displayUser.append(li);
      });
    });
});

function showRepos(user, e) {
  const repoList = document.getElementById("repos-list");
  repoList.innerHTML = "";
  e.preventDefault();
  fetch(`https://api.github.com/users/${user}/repos`)
    .then((res) => res.json())
    .then((data) => {
      data.map((repo) => {
        const h2 = document.createElement("h2");
        h2.textContent = repo.name;
        li.append(h2);
        repoList.append(li);
      });
    });
}
