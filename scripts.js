let properties = [
  {
    image: "",
    title: "",
    type: "House",
    location: "Cape Town",
    price: "",
    population: "10",
  },
  {
    image: "",
    title: "",
    type: "",
    location: "Johannesburg",
    price: "",
    population: "12",
  },
  {
    image: "",
    title: "",
    type: "",
    location: "Bloemfontein",
    price: "",
    population: "8",
  },
  {
    image: "",
    title: "",
    type: "",
    location: "Pretoria",
    price: "",
    population: "8",
  },
  {
    image: "",
    title: "",
    type: "",
    location: "Cape Town",
    price: "",
    population: "6",
  },
  {
    image: "",
    title: "",
    type: "",
    location: "Bloemfontein",
    price: "",
    population: "10",
  },
];
function showProperties(properties) {
  document.querySelector("#propertyList").innerHTML = "";
  pokemonArray.forEach((properties) => {
    document.querySelector("#propertyList").innerHTML += `
      <img src=${image} alt="Front">
       `;
  });
}
