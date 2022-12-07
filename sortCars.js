import { viewCars } from "./viewCars.js";
import {carListing} from "./viewCars.js";
import {cars} from "./carList.js";
function sortCarsLowest(){
    let cheapest = {};
    let ima = new Boolean(false);
    let index;
    for (let i = 0; i < cars.length - 1; i++) {
    cheapest = cars[i];
    for (let j = i + 1; j < cars.length; j++) {
    if (cheapest.price > cars[j].price) {
    cheapest = cars[j];
    index = j;
    ima = true;
    }
    }
    if(ima){
        cars[index] = cars[i]
        cars[i] = cheapest;
        ima = false;
    }
 }
 carListing.innerHTML = " ";
 viewCars(cars);
 }
 export{sortCarsLowest};
 
 function sortCarsHigher(){
    let num = {};
    let index;
    let ima = new Boolean(false);
    for(let i = 0; i < cars.length-1; i++){
       num = cars[i];
       for(let j = i+1; j<cars.length;j++){
          if(cars[j].price>num.price){
             num = cars[j];
             index = j;
             ima = true;
          }
       }
          if(ima){
       cars[index] = cars[i];
       cars[i] = num;
       ima = false;
          }
    }
 carListing.innerHTML = " ";
 viewCars(cars);
 }
 export{sortCarsHigher};

 
 function newer(){
    let num = {};
    let index;
    let ima = new Boolean(false);
    for(let i = 0; i < cars.length-1; i++){
       num = cars[i];
       for(let j = i+1; j<cars.length;j++){
          if(cars[j].year>num.year){
             num = cars[j];
             index = j;
             ima = true;
          }
       }
          if(ima){
       cars[index] = cars[i];
       cars[i] = num;
       ima = false;
          }
    }
    console.log(cars);
 carListing.innerHTML = " ";
 viewCars(cars);
 }
 export {newer};