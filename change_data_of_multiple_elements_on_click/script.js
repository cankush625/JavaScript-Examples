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

var span = document.getElementsByClassName("js");

for (var i = 0; i < span.length; i++) {
    element = span[i];
    onElementClick(element);
}
