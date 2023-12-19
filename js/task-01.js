const listWithId = document.querySelector("#categories");
const menuItemsByTagName = listWithId.querySelectorAll(".item");
console.log("Number of categories " + menuItemsByTagName.length);
console.log(menuItemsByTagName); 


for (let item of menuItemsByTagName){
    const title = item.querySelector("h2").innerText;
    const lenghtElement = item.querySelectorAll("li").length;
    console.log("Category: " + title);
    console.log("Elements: " + lenghtElement);
    console.log("");
}