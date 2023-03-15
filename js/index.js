
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};


const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {

  const sauce = document.querySelectorAll(".sauce").forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  
  const crust = document.querySelectorAll(".crust").forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free");
    } else {
      crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  
 if (state.pepperoni) {
   document.querySelector(".btn-pepperoni").classList.add("active");
 } else {
   document.querySelector(".btn-pepperoni").classList.remove("active");
 }
 if (state.mushrooms) {
   document.querySelector(".btn-mushrooms").classList.add("active");
 } else {
   document.querySelector(".btn-mushrooms").classList.remove("active");
 }
 if (state.greenPeppers) {
   document.querySelector(".btn-green-peppers").classList.add("active");
 } else {
   document.querySelector(".btn-green-peppers").classList.remove("active");
 } 
 if (state.whiteSauce) {
   document.querySelector(".btn-sauce").classList.add("active");
 } else {
   document.querySelector(".btn-sauce").classList.remove("active");
 }
 if (state.glutenFreeCrust) {
   document.querySelector(".btn-crust").classList.add("active");
 } else {
   document.querySelector(".btn-crust").classList.remove("active");
 } 
}


function renderPrice() {
  
  let price = 10;
  let newList = "";
  if (state.pepperoni) {
    price += 1;
    newList += `<li>${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
  }
  if (state.mushrooms) {
    price += 1;
    newList += `<li>${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
  }
  if (state.greenPeppers) {
    price += 1;
    newList += `<li>${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
  }
  if (state.whiteSauce) {
    price += 3;
    newList += `<li>${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
  }      
  if (state.glutenFreeCrust) {
    price += 5;
    newList += `<li>${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
  }
  document.querySelector("aside.panel.price strong").innerHTML = `$${price}`;
  document.querySelector("aside.panel ul").innerHTML = newList;
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").addEventListener("click", function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});