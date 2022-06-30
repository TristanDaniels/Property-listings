let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        id: 1,
        image: "https://i.postimg.cc/RV0GzSCX/Home1.jpg",
        title: "Luxury Home",
        type: "House",
        location:
          "96 Apple Street, Cape Town, 7802, Western Cape, South Africa",
        price: "R1 200 000",
        bedrooms: "5",
        bathrooms: "3",
        carspace: "4",
        population: "10",
      },
      {
        id: 2,
        image: "https://i.postimg.cc/MGnhZ0W3/Home2.jpg",
        title: "Luxury Home",
        type: "House",
        location: "27 Peach Street, Johannesburg, 5570, Gauteng, South Africa",
        price: "R1 300 000",
        bedrooms: "6",
        bathrooms: "3",
        carspace: "4",
        population: "12",
      },
      {
        id: 3,
        image: "https://i.postimg.cc/Zq6xL0jK/Home3.jpg",
        title: "Luxury Home",
        type: "House",
        location:
          "92 Strawberry Road, Bloemfontein, 8700, Free State, South Africa",
        price: "R800 000",
        bedrooms: "4",
        bathrooms: "2",
        carspace: "2",
        population: "8",
      },
      {
        id: 4,
        image: "https://i.postimg.cc/zXMwZTcG/Home4.jpg",
        title: "Luxury Home",
        type: "House",
        location: "77 Bananna Ave, Pretoria, 5200, Gauteng, South Africa",
        price: "R950 000",
        bedrooms: "3",
        bathrooms: "2",
        carspace: "4",
        population: "8",
      },
      {
        id: 5,
        image: "https://i.postimg.cc/T3wsQjW2/Apartment-1.jpg",
        title: "Apartment",
        type: "Apartment",
        location: "10 True Estate, Cape Town, 7800, Western Cape, South Africa",
        price: "R700 000",
        bedrooms: "2",
        bathrooms: "1",
        carspace: "1",
        population: "4",
      },
      {
        id: 6,
        image: "https://i.postimg.cc/zvyL0c5S/Apartment-2.jpg",
        title: "Apartment",
        type: "Apartment",
        location:
          "11 Lucky Village, Bloemfontein, 8800, Freestate, South Africa",
        price: "R400 000",
        bedrooms: "1",
        bathrooms: "1",
        carspace: "1",
        population: "2",
      },
      {
        id: 7,
        image: "https://i.postimg.cc/L53WQNT5/Apartment-3.jpg",
        title: "Apartment",
        type: "Apartment",
        location:
          "47 Faithful Complex, Bloemfontein, 8800, Freestate, South Africa",
        price: "R550 000",
        bedrooms: "2",
        bathrooms: "1",
        carspace: "1",
        population: "4",
      },
      {
        id: 8,
        image: "https://i.postimg.cc/D00GRzQG/Studio-1.jpg",
        title: "Modern Day Studio",
        type: "Studio",
        location: "55 Tulip Village, Pretoria, 5100, Gauteng, South Africa",
        price: "R300 000",
        bedrooms: "1",
        bathrooms: "1",
        carspace: "1",
        population: "2",
      },
      {
        id: 9,
        image: "https://i.postimg.cc/CxTZs72k/Studio-2.jpg",
        title: "Musical Studio",
        type: "Studio",
        location:
          "78 Mellow Village, Johannesburg, 5800, Gauteng, South Africa",
        price: "R450 000",
        bedrooms: "1",
        bathrooms: "1",
        carspace: "1",
        population: "2",
      },
      {
        id: 10,
        image: "https://i.postimg.cc/4NKt5mxk/office1.jpg",
        title: "Modern Day Office",
        type: "Office",
        location:
          "124 Green Point Village, Cape Town, 7500, Western Cape, South Africa",
        price: "R800 000",
        bedrooms: "1",
        bathrooms: "1",
        carspace: "1",
        population: "2",
      },
    ];

const propertiesTable = document.querySelector("#propertiesbox");
function showProperties(properties) {
  document.querySelector("#propertiesbox").innerHTML = "";
  properties.forEach((property) => {
    propertiesTable.innerHTML += `
        <div class="d-flex flex-row">
          <img class="w-25 mt-3 mb-3 ms-3 me-3"src=${property.image}>
          <div class="d-flex flex-column">
          <div class="d-flex flex-column">
          <div class="ms-2">${property.title}</div>
          <div class="ms-2">${property.location}</div>
          <div class="ms-2">${property.price}</div>
          <div class="ms-2"><i class="fa-solid fa-bed me-2"></i>${property.bedrooms}</div>
          <div class="ms-2"><i class="fa-solid fa-shower me-2"></i>${property.bathrooms}</div>
          <div class="ms-2"><i class="fa-solid fa-car me-2"></i>${property.carspace}</div>
          <div class="ms-2"><i class="fa-solid fa-person me-2"></i>${property.population}</div>
          <div class="ms-2">${property.type}</div>
          </div>
          <div class="d-flex flex-row">
          <div><button class="btn" onclick="deleteProperty(${property.id})" ><i class="fa-solid fa-trash"></i></button></div>
          <div><button class="btn"onclick="editProperty(${property.id})"><i class="fa-solid fa-pen-to-square"></i></button></div>
          </div>
          </div>
        </div>
      `;
  });
}
showProperties(properties);

function deleteProperty(id) {
  properties = properties.filter((property) => {
    //Goes through the array and filters out every id that is equal to the selected one
    return property.id !== id; //Returns all objects in the array that is not the same id as the selected one
  });
  localStorage.setItem("properties", JSON.stringify(properties));
  showProperties(properties); //Displays the array
}

function editProperty(id) {
  let property = properties.find((property) => property.id === id); //Finds the id of button that was clicked
  let input = prompt("Input Changes"); //Allows the user to input their own changes
  property.title = input; //Changes the content to what the user's input
  localStorage.setItem("properties", JSON.stringify(properties));
  showProperties(properties); //Displays the array
}
