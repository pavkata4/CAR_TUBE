import { listingHeader, mainpage } from "./mainPage.js";
import { carsMain } from "./mainPage.js";
import{sortCarsLowest} from"./sortCars.js"
import {sortCarsHigher} from "./sortCars.js"
import {newer} from "./sortCars.js";
import{cars} from "./carList.js";
import{viewCars} from "./viewCars.js"
import {carListing} from "./viewCars.js"
const AddCar = document.createElement('button');
AddCar.textContent = "Add your car";
AddCar.id = "AddCarButton";
const dropbtn = document.createElement('button');
dropbtn.className = "dropbtn";
const sortLowestPrice = document.createElement('button');
const sortHigherPrice = document.createElement('button');
const newerCar = document.createElement('button');
 function HeaderSection() {
     //icon to open main page
    const section = document.createElement('section');
const i = document.createElement('i');
i.className = "fas fa-car";
i.textContent = "CarTube";
const butn = document.createElement('button');
butn.id = "carTube";
butn.appendChild(i);
butn.addEventListener('click', homepage);
function homepage(ev) {
    carListing.innerHTML = " ";
    listingHeader.innerHTML = " ";
    sect.innerHTML = " ";
    section.innerHTML = " ";
    carsMain.innerHTML  = " ";
    dropbtn.innerHTML  = " ";
    mainpage();
}
section.appendChild(butn);
listingHeader.appendChild(butn);
// close{icon to open main page}
//sort button
const sect = document.createElement('section');
const dropdown = document.createElement('div');
dropdown.className = "dropdown";
//
const headeri = document.createElement('i');
const dropdownContent = document.createElement('div');
dropdownContent.className = "dropdown-content";
headeri.className = "fas fa-exchange-alt";
dropbtn.appendChild(headeri);
dropdown.appendChild(dropbtn);
//buton za sortirane niski ceni

sortLowestPrice.textContent = "Price - the lowest";
sortLowestPrice.addEventListener('click', sortCarsLowestFunc);
function sortCarsLowestFunc(ev) {
   sortCarsLowest(); 
}

//buton za sortirane visoki ceni

sortHigherPrice.textContent = "Price - the higher";
sortHigherPrice.addEventListener('click',sortCarsHigherFunc);
function sortCarsHigherFunc(ev) {
    sortCarsHigher();
}

//buton za sortirane novi koli

newerCar.textContent = "Year - newer";
newerCar.addEventListener('click', newerFunc);
function newerFunc(ev) {
    newer();
}

dropdownContent.appendChild(sortLowestPrice);
dropdownContent.appendChild(sortHigherPrice);
dropdownContent.appendChild(newerCar);
dropdown.appendChild(dropdownContent);
sect.appendChild(dropdown);
listingHeader.appendChild(dropdown);

//
console.log(listingHeader);
listingHeader.appendChild(AddCar);
AddCar.addEventListener('click', addCar);
function addCar(ev){
    AddCar.disabled = true;
    sortLowestPrice.disabled = true;
    sortHigherPrice.disabled = true;
    newerCar.disabled = true;
   carListing.innerHTML = " ";
  
   const sectionAddCar = document.createElement('section');
sectionAddCar.id = "sectionAddCar"
   const inputJPG = document.createElement('input');
   inputJPG.placeholder = "Add photo";
   const inputBrand = document.createElement('input');
   inputBrand.placeholder = "Brand:";
   const inputModel = document.createElement('input');
   inputModel.placeholder = "Model:";
   const inputYear = document.createElement('input');
   inputYear.placeholder = "Year:";
   const inputMileage = document.createElement('input');
   inputMileage.placeholder = "Mileage: "
   const inputPrice = document.createElement('input');
   inputPrice.placeholder = "Price";
   const inpuDescription = document.createElement('input');
   inpuDescription.placeholder = "Description: ";
   const h1 = document.createElement('h1');
   h1.id = "H1";
   h1.textContent = "Add your car";
   
   sectionAddCar.appendChild(inputJPG);
   sectionAddCar.appendChild(inputBrand);
   sectionAddCar.appendChild(inputModel);
   sectionAddCar.appendChild(inputYear);
   sectionAddCar.appendChild(inputMileage);
   sectionAddCar.appendChild(inputPrice);
   sectionAddCar.appendChild(inpuDescription);
 const Add = document.createElement('button');
 Add.textContent = "ADD";
 Add.addEventListener('click',pushCar);
 sectionAddCar.appendChild(Add);
carsMain.appendChild(h1);
carsMain.appendChild(sectionAddCar);
function pushCar(ev){
    AddCar.disabled = false;
    sortLowestPrice.disabled = false;
    sortHigherPrice.disabled = false;
    newerCar.disabled = false;
   const Addimage = document.createElement('img');
   Addimage.textContent = inputJPG.value;
   const AddBrand = document.createElement('p');
   AddBrand.textContent = inputBrand.value;
   const Addmodel = document.createElement("p");
   Addmodel.textContent = inputModel.value;
   const AddYear = document.createElement('p');
   AddYear.textContent = inputYear.value;
   const Addmileage = document.createElement('p');
   Addmileage.textContent = inputMileage.value;
   const Addprice = document.createElement('p');
   Addprice.textContent = inputPrice.value;
   const addDescription = document.createElement('p');
   addDescription.textContent = inpuDescription.value;
   cars.push({
      Image:Addimage.textContent,
      brand: AddBrand.textContent,
      Model:Addmodel.textContent,
      year:Number(AddYear.textContent),
      Mileage: Number(Addmileage.textContent),
      price:Number(Addprice.textContent),
      Description:addDescription.textContent
   })
   
   carsMain.innerHTML = " ";
  viewCars(cars);
}

}

 }

 export{AddCar};
 export{sortLowestPrice}
 export{sortHigherPrice}
 export{newerCar}
export{HeaderSection};
