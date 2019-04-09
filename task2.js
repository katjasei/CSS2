const berry = document.getElementById("berry");
berry.style.backgroundColor = "red";
console.log(berry);
console.log("I found the berry: " + berry.innerHTML);

const fruit = document.querySelector("[data-foodtype=squishy]");
fruit.style.backgroundColor = "orange";
console.log(fruit);
console.log("I found the ftuit: " + fruit.innerHTML);

const collection = document.getElementsByTagName("li");
console.log(collection);

console.log("Using the for loop here:");
for(let i=0;i<collection.length;i++){

  console.log(collection[i].innerHTML);

    collection[i].style.listStyleType = "none";
    collection[i].style.width = "100px";

    if(collection[i].innerHTML==="Pear"){
    collection[i].style.backgroundColor = "green";
  }
}

console.log("Using forEach here:");
const collection2 = document.querySelectorAll("li");
console.log(collection2);
collection2.forEach((elem)=>{
 console.log(elem.innerHTML);
 elem.style.border = "thin solid black";
});

