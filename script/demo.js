// window.onload() fires when the page is ready for presentation

// document.onload() fires when the DOM is finished being built


window.onload = function () {
    
};

var makeDiv = (function () {
    var new_div = document.createElement("div");

    new_div.style.height = "200px";
    new_div.style.width = "200px";
    new_div.style.backgroundColor = "red";
    new_div.style.border = "2px solid black";
    new_div.style.borderRadius = "3px";
    new_div.style.transform = "rotate(5deg)";

    document.body.appendChild(new_div);

    return new_div;
})();