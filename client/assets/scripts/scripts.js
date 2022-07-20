const data = [
  {
    id: 1,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-3-years-old-18444682.jpg",
    name: "Ginger",
  },
  {
    id: 2,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/front-view-grumpy-persian-cat-sitting-37852767.jpg",
    name: "Owlee",
  },
  {
    id: 3,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-9-months-old-13667565.jpg",
    name: "Mr Miyagi",
  },
  {
    id: 4,
    breed: "persian",
    persian:
      " https://thumbs.dreamstime.com/b/crossbreed-siberian-cat-persian-cat-6610485.jpg",
    name: "Bubbles",
  },
  {
    id: 5,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-8-months-old-sitting-18989882.jpg",
    name: "Cheddar",
  },
  {
    id: 6,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-6-months-old-standing-16822105.jpg",
    name: "Fishbait",
  },
  {
    id: 7,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/adorable-persian-cat-27596772.jpg",
    name: "Jiggles",
  },
  {
    id: 8,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-8-months-old-sitting-18989875.jpg",
    name: "Katy Purry",
  },
  {
    id: 9,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-3-months-old-sitting-16409114.jpg",
    name: "Kit-Kat",
  },
  {
    id: 10,
    breed: "persian",
    persian:
      "https://cattime.com/assets/uploads/gallery/peterbald-mixed-cat-breed-pictures/peterbald-mixed-cat-breed-pictures-4.jpg",
    name: "Meowise",
  },
];

module.exports = data;

//  ****use this for random image

const clickedButton = document.querySelectorAll(".click");

const container = document.querySelector(".content");

function displayData(data) {
  const btnTwo = document.querySelector("#btn-2");

  btnTwo.addEventListener("click", (e) => {
    let randomId = Math.floor(Math.random() * data.length);
    console.log("hello");
    container.innerHTML = `<figure><img src="${data[randomId].persian}" alt="">`; //****Solve random image problem
  });

  const loopData = data.map((elem) => {
    clickedButton.forEach((item) => {
      item.addEventListener("click", () => {
        let search = document.querySelector("#input").value;

        console.log(data.img);
        if (item.id == "btn-1" && search > "") {
          container.innerHTML += `<figure><img src="${elem[search]}" alt=""><figcaption>${elem.name}</figcaption></figure>`;
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
    console.log(data.data);
    displayData(data);
  } catch (error) {
    alert("Sorry! Your request could not be granted!");
  }
}
