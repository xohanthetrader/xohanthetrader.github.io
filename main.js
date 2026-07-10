function embed(barLoc){
    console.log(barLoc)
    fetch("/bar.html")
    .then(r => r.text())
    .then(bar => {
        barLoc.innerHTML = bar
    }) 
}


function genList(collection,container){
    for(let i = 0;i < collection.length;i++){
        var elem = document.createElement('li')
        elem.innerHTML = String.raw `<a href= "${collection[i].path}"> ${collection[i].name} </a>`
        container.appendChild(elem) 
    }
}