let properties = [
  {
    id: "1",
    image: "https://i.postimg.cc/RV0GzSCX/Home1.jpg",
    title: "Luxury Home",
    type: "House",
    location: "96 Apple Street, Cape Town, 7802, Western Cape, South Africa",
    price: "R1 200 000",
    bedrooms: "5",
    bathrooms: "3",
    carspace: "4",
    population: "10",
  },
  {
    id: "2",
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
    id: "3",
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
    bedrooms: "4",
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
    location: "11 Lucky Village, Bloemfontein, 8800, Freestate, South Africa",
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
    location: "78 Mellow Village, Johannesburg, 5800, Gauteng, South Africa",
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
function showProperties() {
  document.querySelector("#propertiesbox").innerHTML = "";
  properties.forEach((property) => {
    propertiesTable.innerHTML += `
        <tr class="d-flex flex-row">
          <td><img src=${property.image}></td>
          <td>${property.title}</td>
          <td>${property.location}</td>
          <td>${property.type}</td>
          <td>${property.bedrooms}</td>
          <td>${property.bathrooms}</td>
          <td>${property.carspace}</td>
          <td>${property.population}</td>
          <td>${property.price}</td>
          <td><button onclick="deleteproperty(${property.id})" ><i class="fa-solid fa-trash"></i></button></td>
          <td><button onclick="editproperty(${property.id})"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <tr>
      `;
  });
}
showProperties();

showProperties(properties);
function deleteProperties(id) {
  properties = properties.filter((listing) => {
    //Goes through the array and filters out every id that is equal to the selected one
    return property.id !== id; //Returns all objects in the array that is not the same id as the selected one
  });
  localStorage.setItem("properties", JSON.stringify(properties));
  showProperties(properties); //Displays the array
}
function editproperty(id) {
  let property = property.find((property) => property.id === id); //Finds the id of button that was clicked
  let input = prompt("Input Changes"); //Allows the user to input their own changes
  property.title = input; //Changes the content to what the user's input
  localStorage.setItem("properties", JSON.stringify(properties));
  showProperties(properties); //Displays the array
}
