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
              <a class="project-link" href="./recent-projects.html">Learn More</a>
            </div>
        </div>`;
      });
      document.querySelector("#project-box").innerHTML = getApiInfo;
    })
    .catch((error) => console.log(error));
};

apiJsonInfo();
