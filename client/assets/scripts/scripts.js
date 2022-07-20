//  ****use this for random image
const clickedButton = document.querySelectorAll(".click");
const container = document.querySelector(".content");

function displayData(data) {
  const loopData = data.map((elem) => {
    clickedButton.forEach((item) => {
      item.addEventListener("click", () => {
        let search = document.querySelector("#input").value;
        let randomId = Math.floor(Math.random() * data.length);
        if (item.id == "btn-1" && search > "") {
          container.innerHTML += `<figure><img src="${elem[search]}" alt=""><figcaption>${elem.name}</figcaption></figure>`;
        } else if (item.id == "btn-2") {
          container.innerHTML = `<figure><img src="${data[randomId].persian}" alt="${data[randomId].name}"><figcaption>${data[randomId].name}</figcaption></figure>`; //****Solve random image problem
        } else {
          container.innerHTML = `<p>You must enter a search term!</p>`;
        }
      });
    });
  });
}

// Define the url
const url = "http://localhost:3000/data";

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    alert("Sorry! Your request could not be granted!");
  }
}

getData();
