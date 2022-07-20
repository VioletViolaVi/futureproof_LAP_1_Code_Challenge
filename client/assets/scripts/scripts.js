const data = [
  {
    id: 1,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-3-years-old-18444682.jpg",
  },
  {
    id: 2,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/front-view-grumpy-persian-cat-sitting-37852767.jpg",
  },
  {
    id: 3,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-9-months-old-13667565.jpg",
  },
  {
    id: 4,
    breed: "persian",
    persian:
      " https://thumbs.dreamstime.com/b/crossbreed-siberian-cat-persian-cat-6610485.jpg",
  },
  {
    id: 5,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-8-months-old-sitting-18989882.jpg",
  },
  {
    id: 6,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-6-months-old-standing-16822105.jpg",
  },
  {
    id: 7,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/adorable-persian-cat-27596772.jpg",
  },
  {
    id: 8,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-8-months-old-sitting-18989875.jpg",
  },
  {
    id: 9,
    breed: "persian",
    persian:
      "https://thumbs.dreamstime.com/b/persian-cat-3-months-old-sitting-16409114.jpg",
  },
  {
    id: 10,
    breed: "persian",
    persian:
      "https://cattime.com/assets/uploads/gallery/peterbald-mixed-cat-breed-pictures/peterbald-mixed-cat-breed-pictures-4.jpg",
  },
];

const clickedButton = document.querySelectorAll(".click");
const container = document.querySelector(".content");

function displayData(data) {
  const loopData = data.map((elem) => {
    clickedButton.forEach((item) => {
      item.addEventListener("click", () => {
        let search = document.querySelector("#input").value;
        // let randomId = Math.floor(Math.random() * data.length);   ****use this for random image
        console.log(data.img);
        if (item.id == "btn-1" && search > "") {
          container.innerHTML += `<figure><img src="${elem[search]}" alt=""></figure>`;
        }
        // else if (item.id == "btn-2") {
        // container.innerHTML += `<p>${elem.persian[randomId]}</p>`;  ****Solve random image problem
        //}
        else {
          container.innerHTML = `<p>You must enter a search term!</p>`;
        }
      });
    });
  });
}

// Define the url
//const url = "http://localhost3000";
//async function getData() {
//try {
// const response = await fetch(url);
//const data = await response.json();
//console.log(data.data)
// displayData(data);
//} catch (error) {
// alert("Sorry! Your request could not be granted!");
//}
//}

displayData(data);
