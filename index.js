const apiJsonPost = (e) => {
  e.preventDefault();
  // CONTACT
  let idName = document.querySelector("#name-input").value;
  let idMail = document.querySelector("#mail-input").value;
  let idPhone = document.querySelector("#phone-input").value;
  let idText = document.querySelector("#text-input").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "text/plain, application/json",
    },
    body: JSON.stringify({
      title: idName,
      body: idText,
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((fromData) => console.log(fromData))
    .catch((error) => console.log(error));
};

document.querySelector("form").addEventListener("submit", apiJsonPost);

//   EXTERNAL API INFO

// let webTitle = document.querySelector("#project-web-title").innerHTML;
// let webText = document.querySelector("#project-web-text").innerHTML;
// let webText2 = document.querySelector("#project-web-text2").innerHTML;

const apiJsonInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let getApiInfo = "";
      res.slice(0, 3).forEach((post, index) => {
        getApiInfo += `<div class="project-minibox">
            <div><img class="project-imgs" src="./project-assets/projects-section/${
              index + 1
            }.jpg" alt=""></div>
            <div class="project-text">
              <h3 class="project-title">${post.title}</h3>
              <p class="project-text">${post.body}</p>
              <a class="project-link" href="">Learn More</a>
            </div>
        </div>`;
      });
      document.querySelector("#project-box").innerHTML = getApiInfo;
    })
    .catch((error) => console.log(error));
};

apiJsonInfo();
