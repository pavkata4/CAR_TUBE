import { carsMain } from "./mainPage.js";
import { AddCar } from "./headerCarListing.js";

 import { sortLowestPrice } from "./headerCarListing.js";
 import { sortHigherPrice } from "./headerCarListing.js";
 import { newerCar } from "./headerCarListing.js";
const carListing = document.createElement('section');
carListing.id = "carListing";

function viewCars(array){
    const carDescription = document.createElement('p');
    
    for(let car of array){
     
        const image = document.createElement('img');
        image.id = "Image";
        const Brand = document.createElement('p');
        Brand.id = "Brand"
        const model = document.createElement("p");
        model.id = "Model"
        const Year = document.createElement('p');
        Year.id = "Year"
        const mileage = document.createElement('p');
        mileage.id = "Mileage"
        const price = document.createElement('p');
        price.id = "Price";
        
        const  div = document.createElement('div');
       
        Brand.textContent = "Brand: " + car.brand;
        model.textContent = "Model: "+ car.Model;
        Year.textContent = "Year: "+ car.year;
        mileage.textContent = "Mileage: " + car.Mileage;
        image.src = car.Image;
        price.textContent = "Price: "+ car.price;
       
        div.appendChild(image);
        div.appendChild(Brand);
        div.appendChild(model);
        div.appendChild(Year);
        div.appendChild(mileage);
        div.appendChild(price);
        div.addEventListener('click', viewDetails);
        function viewDetails(ev) {
            AddCar.disabled = true;
            sortLowestPrice.disabled = true;
            sortHigherPrice.disabled = true;
            newerCar.disabled = true;
            

            const Dimage = document.createElement('img');
        Dimage.src = image.src;
        const DBrand = document.createElement('p');
       DBrand.textContent = Brand.textContent;
        const Dmodel = document.createElement("p");
       Dmodel.textContent = model.textContent;
        const DYear = document.createElement('p');
        DYear.textContent = Year.textContent;
        const Dmileage = document.createElement('p');
        Dmileage.textContent = mileage.textContent;
        const Dprice = document.createElement('p');
        Dprice.textContent = price.textContent;
        const carDescription = document.createElement('p');
        carDescription.textContent = car.Description;
            const divDetails = document.createElement('div');
            divDetails.appendChild(Dimage);
            divDetails.appendChild(DBrand);
            divDetails.appendChild(Dmodel);
            divDetails.appendChild(DYear);
            divDetails.appendChild(Dmileage);
            divDetails.appendChild(Dprice);
            divDetails.appendChild(carDescription);
             const details = document.createElement('section');
             details.id = "details";
             const p = document.createElement('p');
             p.id  = "Details";
             p.textContent = "Details";
            details.appendChild(p);
            details.appendChild(divDetails);
            const closeButton = document.createElement('button');
            closeButton.textContent = "CLOSE";
            closeButton.id = "closeButton";
            closeButton.addEventListener('click',function turnBack() {
                AddCar.disabled = false;
                sortLowestPrice.disabled = false;
                sortHigherPrice.disabled = false;
                newerCar.disabled = false;


                carsMain.innerHTML = " ";
                carsMain.appendChild(carListing);
                console.log(carListing);
             })
             details.appendChild(closeButton);
             carsMain.innerHTML = " ";
             carsMain.appendChild(details);
          }
      
    
        carListing.appendChild(div);    
        console.log(div.Year);

       
    
    }
    carsMain.appendChild(carListing);
    

   
}

   
 
    

export{carListing};
    export{viewCars};
   
