import { cars } from "./carList.js";
import { viewCars } from "./viewCars.js";
import{HeaderSection} from "./headerCarListing.js";
const listingHeader = document.createElement('header');
listingHeader.id = "listingHeader";
const carsMain = document.createElement("main");
carsMain.id = "cars";
function mainpage() {
 document.getElementById("BODY").innerHTML = " ";
    const header = document.createElement('header');
    header.id = "mainHeader";
const h1 = document.createElement('h1');
h1.textContent = "Welcome To Car Tube";
h1.id = "Header"
header.appendChild(h1);

const main = document.createElement('main');
main.id = "main";
const img = document.createElement('img');
img.src = "cars/car home.png";
main.appendChild(img);
const p = document.createElement('p');
p.textContent = "To see all the listings click the link below:";
main.appendChild(p);
const button = document.createElement('button');
button.textContent = "Listing";
button.id = "Car Home";
main.appendChild(button);
document.getElementById("BODY").appendChild(header);
document.getElementById("BODY").appendChild(main);
button.addEventListener('click', function nextPage(){
document.getElementById("BODY").innerHTML = " ";
document.getElementById("BODY").appendChild(listingHeader);
document.getElementById("BODY").appendChild(carsMain);
HeaderSection();
viewCars(cars);
});
}

export{listingHeader};
export{carsMain};
export{mainpage};