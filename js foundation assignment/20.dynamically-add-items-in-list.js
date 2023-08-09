const listItemArray = ["MongoDB", "NodeJS", "Mysql", "Postman", "gitHub" ,"git", "jwt", "VScode"];

let currentItemIndex = 0;

function addListItem() {
  const list = document.getElementById("list");

  if (currentItemIndex < listItemArray.length) {
    const newItem = document.createElement("li");
    newItem.textContent = listItemArray[currentItemIndex];
    list.appendChild(newItem);
    currentItemIndex++;
  } else {
    alert("All items have been added.");
  }
}