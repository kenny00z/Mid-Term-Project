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
