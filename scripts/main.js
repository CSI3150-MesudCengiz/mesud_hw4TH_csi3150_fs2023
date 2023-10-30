var usedCars = [
    {
   year: 2018,
   make: "Toyota",
   model: "Camry",
   mileage: 30000,
   price: 18000,
   color: "Silver",
   gasMileage: "25 mpg city, 35 mpg highway",
   image:"../images/Camry,toyota.webp",
 },
 {
   year: 2016,
   make: "Honda",
   model: "Civic",
   mileage: 45000,
   price: 14000,
   color: "White",
   gasMileage: "30 mpg city, 40 mpg highway",
   image:"../images/civic,honda.webp",
 },
 {
   year: 2017,
   make: "Ford",
   model: "Fusion",
   mileage: 35000,
   price: 16000,
   color: "Black",
   gasMileage: "28 mpg city, 38 mpg highway",
   image:"../images/fusion,ford.webp",
 },
 {
   year: 2019,
   make: "Nissan",
   model: "Altima",
   mileage: 25000,
   price: 17000,
   color: "Blue",
   gasMileage: "27 mpg city, 36 mpg highway",
   image:"../images/altima,nissan.jpg",
 },
 {
   year: 2015,
   make: "Chevrolet",
   model: "Malibu",
   mileage: 50000,
   price: 12000,
   color: "Red",
   gasMileage: "25 mpg city, 37 mpg highway",
   image:"../images/malibu,chevrolet.jpg",
 },
 // Additional entries:
 {
   year: 2016,
   make: "Volkswagen",
   model: "Passat",
   mileage: 40000,
   price: 15000,
   color: "Gray",
   gasMileage: "29 mpg city, 40 mpg highway",
   image:"../images/passat,volkswagon.webp",
 },
 {
   year: 2020,
   make: "Hyundai",
   model: "Elantra",
   mileage: 22000,
   price: 16000,
   color: "Silver",
   gasMileage: "30 mpg city, 41 mpg highway",
   image:"../images/elantra, hyundai.webp",
 },
 {
   year: 2014,
   make: "Subaru",
   model: "Outback",
   mileage: 60000,
   price: 14000,
   color: "Green",
   gasMileage: "22 mpg city, 30 mpg highway",
   image:"../images/outback,subaru.webp",
 },
 {
   year: 2017,
   make: "Mazda",
   model: "CX-5",
   mileage: 32000,
   price: 19000,
   color: "Blue",
   gasMileage: "24 mpg city, 31 mpg highway",
   image:"../images/modelS,tesla.webp",
 },
 {
   year: 2018,
   make: "Kia",
   model: "Sorento",
   mileage: 28000,
   price: 17000,
   color: "White",
   gasMileage: "22 mpg city, 29 mpg highway",
   image:"../images/sorrento,kia.webp",
 },
 // Five more entries:
 {
   year: 2015,
   make: "Dodge",
   model: "Challenger",
   mileage: 30000,
   price: 24000,
   color: "Black",
   gasMileage: "19 mpg city, 30 mpg highway",
   image:"../images/challenger,dodge.webp",
 },
 {
   year: 2017,
   make: "Cadillac",
   model: "XT5",
   mileage: 28000,
   price: 32000,
   color: "Red",
   gasMileage: "19 mpg city, 27 mpg highway",
   image:"../images/XT5, cadillac.jpg",
 },
 {
   year: 2018,
   make: "Jaguar",
   model: "F-PACE",
   mileage: 26000,
   price: 38000,
   color: "Blue",
   gasMileage: "18 mpg city, 23 mpg highway",
   image:"../images/F-pace,jaguar.webp",
 },
 {
   year: 2019,
   make: "Tesla",
   model: "Model S",
   mileage: 18000,
   price: 55000,
   color: "Black",
   gasMileage: "Electric (370 miles per charge)",
   image:"../images/modelS,tesla.webp",
 },
 {
   year: 2020,
   make: "Porsche",
   model: "Cayenne",
   mileage: 22000,
   price: 68000,
   color: "White",
   gasMileage: "20 mpg city, 26 mpg highway",
   image:"../images/cayenne,porsche.webp",
 },
 {
   year: 2017,
   make: "Lexus",
   model: "ES",
   mileage: 29000,
   price: 26000,
   color: "White",
   gasMileage: "21 mpg city, 30 mpg highway",
   image:"../images/modelS,tesla.webp",
 },
 {
   year: 2016,
   make: "BMW",
   model: "5 Series",
   mileage: 32000,
   price: 27000,
   color: "Black",
   gasMileage: "23 mpg city, 34 mpg highway",
   image:"../images/5,BMW.webp",
 },
];


//Call createAllCards
createAllCards(usedCars);
  
function createAllCards(cars){
    //reference to the div that will hold all the cards
    var div = document.getElementById("cards");

    //Loop through the array of cars
    cars.forEach(function(car){
        //Create a div element
        var card = document.createElement("div");

        //Add the class card to the div
        card.classList.add("card");
        card.classList.add("col-sm-6");
        card.classList.add("col-xl-4");
        card.classList.add("col-xxl-3")

        //Add the HTML to the card
        card.innerHTML = `
            <div class="card-body">
                <img src="${car.image}" class="card-img-top" alt="...">
                <h5 class="card-title">${car.year} ${car.make} ${car.model}</h5>
                <p class="card-text">Mileage: ${car.mileage}</p>
                <p class="card-text">Price: $${car.price}</p>
                <p class="card-text">Color: ${car.color}</p>
                <p class="card-text">Gas Mileage: ${car.gasMileage}</p>
            </div>
        `;

        //Add the card to the div
        div.appendChild(card);
    });


}

function filterCars() {

    clearDiv();
    
    //Create a copy of the usedCars array
    var filteredCars = usedCars.slice();

    //Get forum values
    var minYear = document.getElementById("minYear").value;
    var maxYear = document.getElementById("maxYear").value;
    var minPrice = document.getElementById("minPrice").value;
    var maxPrice = document.getElementById("maxPrice").value;
    var minMileage = document.getElementById("minMileage").value;
    var maxMileage = document.getElementById("maxMileage").value;
    var color = document.getElementById("color").value;
    var make = document.getElementById("carMake").value;
    
    //Call the filter functions
    if(minYear){
        console.log("minYear: " + minYear);
        filteredCars = filterByYear(filteredCars, minYear, maxYear);
    }
    if(minPrice){
        console.log("minPrice: " + minPrice);
        filteredCars = filterByPrice(filteredCars, minPrice, maxPrice);
    }
    if(minMileage){
        console.log("minMileage: " + minMileage);
        filteredCars = filterByMileage(filteredCars, minMileage, maxMileage);
    }
    if(color){
        console.log("color: " + color);
        filteredCars = filterByColor(filteredCars, color);
    }
    if(make){
        console.log("make: " + make);
        filteredCars = filterByMake(filteredCars, make);
    }

    //Call createAllCards
    createAllCards(filteredCars);
}

//Create a function that will filter the array based on car year and return a new array
function filterByYear(array, minYear, maxYear){
    var filteredCars = array.filter(function(car){
        if(car.year >= minYear && car.year <= maxYear){
            return true;
        }
    });

    return filteredCars;
}

//Create a function that will filter the array based on car price and return a new array
function filterByPrice(array, minPrice, maxPrice){
    var filteredCars = array.filter(function(car){
        if(car.price >= minPrice && car.price <= maxPrice){
            return true;
        }
    });

    return filteredCars;
}

//Create a function that will filter the array based on car mileage and return a new array
function filterByMileage(array, minMileage, maxMileage){
    var filteredCars = array.filter(function(car){
        if(car.mileage >= minMileage && car.mileage <= maxMileage){
            return true;
        }
    });

    return filteredCars;
}

//Create a function that will filter the array based on car color and return a new array
function filterByColor(array, color){
    
    if(color === "0"){
        return array;
    }

    var filteredCars = array.filter(function(car){
        if(car.color === color){
            return true;
        }
    });

    return filteredCars;
}

//Create a function that will filter the array based on car make and return a new array
function filterByMake(array, make){
    if(make === "0"){
        return array;
    }

    var filteredCars = array.filter(function(car){
        if(car.make === make){
            return true;
        }
    });

    return filteredCars;
}


//This function clears the div
function clearDiv(){
    document.getElementById("cards").innerHTML = "";
}
