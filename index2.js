const apiJsonInfo2 = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let getApiInfo = "";
      res.slice(0, 1).forEach((post) => {
        getApiInfo += `<div class="project-web-container">
          <h1 class="project-web-title" id="project-web-title">${post.title}</h1>
          <div class="head-text-flex">
              <p class="project-web-subtitle">UI Design & App Development</p>
              <div class="flex-date-text">
                 <p class="date-brother-date">Completed on</p>
                 <p class="project-date">2/2/22</p> 
              </div>
          </div>
          <div>
              <img class="project-main-img" src="./project-assets/projects-section/1.jpg" alt="project-img">
          </div>
          <div>
              <p id="project-web-text" class="project-web-text">${post.body}</p>
              <p id="project-web-text2" class="project-web-text">${post.body}</p>
          </div>`;
      });
      document.querySelector("#project-web-container").innerHTML = getApiInfo;
    })
    .catch((error) => console.log(error));
};

apiJsonInfo2();
