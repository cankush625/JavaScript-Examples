function getName(name) {
    console.log("Hello " + name);
}

getName();
getName("Ankush");

let onElementClick = (className) => {
    className.onclick = _ => {
        className.innerHTML = "JavaScript";
        console.log("Im CLicked!");
    }
};

const span = document.getElementsByClassName("js");

let element;
for (let i = 0; i < span.length; i++) {
    element = span[i];
    onElementClick(element);
}
