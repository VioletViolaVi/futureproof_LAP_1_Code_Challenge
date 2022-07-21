const clickedButton = document.querySelectorAll(".click");
const container = document.querySelector(".content");

        
function displayData(data) {
  const loopData = data.map((elem) => {

    clickedButton.forEach((item) => {
      item.addEventListener("click", () => {
        const search = document.querySelector("#input").value;
        const randomId = Math.floor(Math.random() * data.length);
        
        if (item.id == "btn-1" && search == "persian" && container.childNodes.length <= 10) {
          container.innerHTML += `<figure><img src="${elem[search]}" alt=""><figcaption>${elem.name}</figcaption></figure>`;
          document.querySelector('.hide').style.display = 'none'

        } else if (item.id == "btn-1" && search !== "persian"){
          document.querySelector("#input").value = ''
          document.querySelector("#input").placeholder =
            "Enter a valid search term (persian)!";

        }else;

        if (item.id == "btn-2") {
          container.innerHTML = `<figure class='hide'><img src="${data[randomId].persian}" alt="${data[randomId].name}"><figcaption>${data[randomId].name}</figcaption></figure>`;
          console.log('hello')
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
