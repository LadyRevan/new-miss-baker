window.onload = function () {

    var headTwo = (function () {
        headTwo = document.querySelectorAll("h2");
    
        var headTwo_array = [].slice.call(headTwo);
        
        headTwo_array.forEach(function(element, index){
            element.setAttribute("id", "heading" + index)
        });
    
        return headTwo_array;
    })();
    
    var navList = (function () {
        var listel = document.createElement("ul");
        headTwo.forEach(function (element, index) {
            var listItem = document.createElement("li");
            listel.appendChild(listItem);
            
            listItem.style.listStyle = "none";
            
            var link = document.createElement("a");
            listItem.appendChild(link);
            link.textContent = element.textContent;
            
            link.setAttribute("href", "#heading" + index);
        });
        
        var navel = document.createElement("nav");
        navel.appendChild(listel);
        
        navel.style.paddingTop = "1px";
        
        return navel;
        
    })();
    
    var target = document.querySelector("header");
    var parent = document.querySelector("header").parentNode;
    
    parent.insertBefore(navList, target);
    
};

/*
var headTwo = (function () {
    headTwo = document.querySelector("h1");
    
    var headTwo_array = [].slice.call(headTwo);
    
    return headTwo_array;
})();

var dynamicStyleSheet = (function () {
    var styleElement = document.createElement("style");
    
    styleElement.type = "text/css";
    
    document.head.appendChild(styleElement);
    
    return styleElement.sheet;
})();

var makeDiv = (function () {
    var new_div = document.createElement("div");
    
})();
*/