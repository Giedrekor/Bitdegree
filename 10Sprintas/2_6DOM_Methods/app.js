"use strict";

// Use querySelector to select the company blurb and then store & remove, or replace it using the innerText method.
const blurb = document.querySelector("#company-blurb");
console.log(blurb);
blurb.innerText = "Remember add My new Text";

// Using querySelector grab & store the “navBar” element.
const myNavBar = document.querySelector("#navBar");
// Log to terminal both the navMenu and its children.
console.log(myNavBar);
console.log(myNavBar.children);
// Grab & store the children in their own variable. Log both the array in this variable, and the array's length using the “length” method.
const navBarItems = myNavBar.children;
console.log(navBarItems);
console.log(navBarItems.length);

// Create a "for" loop that will log and then delete each child element using the remove method.
for (let item = navBarItems.length - 1; item >= 0; item--) {
  console.log(navBarItems[item]);
  navBarItems[item].remove();
}

// Create a new array and store new names for your personal site's navBar (for instance: "Home", "About Me", "Portfolio", "Tech Blog", "YouTube Channel", "Other Social Media","Coding Meme of the Day" etc).
const newList = [
  "Home",
  "About Me",
  "Portfolio",
  "Tech Blog",
  "YouTube Channel",
  "Other Social Media",
  "Coding Meme of the Day",
];

/* Create a 'for' loop that will:
Iterate through your list,
Create a new ordered list element every time,
Set the innerText of that list element to the text stored in your list,
Log the list element, and finally 
Append it as a child to your parent navBar element. */

for (let listItem of newList) {
  const newListItem = document.createElement("li");
  newListItem.innerText = listItem;
  console.log(newList[listItem]);
  myNavBar.appendChild(newListItem);
}
