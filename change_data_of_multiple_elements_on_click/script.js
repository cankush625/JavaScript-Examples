// Function to change the inner HTML of the HTML element on click
let onElementClick = (htmlElement) => {
    htmlElement.onclick = _ => {
        htmlElement.innerHTML = "JavaScript";
        console.log("Im CLicked!");
    }
};

// Get all elements with a class name "js"
const span = document.getElementsByClassName("js");

let element;
// Iterate through every element in the span variable and
// run the onElementClick function for them
for (let i = 0; i < span.length; i++) {
    element = span[i];
    onElementClick(element);
}
