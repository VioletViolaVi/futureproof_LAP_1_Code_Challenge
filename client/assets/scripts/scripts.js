const container = document.querySelector(".content");
function displayData(data) {
  let randomId = Math.floor(Math.random() * data.length);
  console.log(data.data[randomId]);
  const loopData = data.data.map((elem) => {
    clickedButton.forEach((item) => {
      item.addEventListener("click", () => {
        let search = document.querySelector("#input").value;
        if (item.id == "btn-1" && search > "") {
          container.innerHTML += `<p>${elem[search]}</p>`;
        } else if (item.id == "btn-2") {
          container.innerHTML = `<p>${data.data[randomId]}</p>`;
        } else {
          container.innerHTML = `<p>You must enter a search term!</p>`;
        }
      });
    });
  });
}
// Define the url
const url = "https://reqres.in/api/users?page=2";
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
getData();
