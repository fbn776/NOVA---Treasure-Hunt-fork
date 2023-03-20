function s(e){
    return document.querySelector(e)
}

function createElement(name, className, IdTag){
    const elm = document.createElement(name);
    if(className){
        elm.setAttribute("class", className)
    }
    if(IdTag){
        elm.setAttribute('id', IdTag)
    }

    return elm;
}