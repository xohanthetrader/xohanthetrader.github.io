function embed(content,page,into="/template.html"){
    const _content = content
    fetch("/bar.html")
    .then(r => r.text())
    .then(bar => {
        fetch(into)
        .then(r => r.text())
        .then(template => {
            console.log(template)
            page.innerHTML = template
            page.querySelector("#top").innerHTML = bar
            page.querySelector("#content").innerHTML = _content.innerHTML
        })
    }) 
}


function genList(collection,container){
    for(let i = 0;i < collection.length;i++){
        var elem = document.createElement('li')
        elem.innerHTML = String.raw `<a href= "${collection[i].path}"> ${collection[i].name} </a>`
        container.appendChild(elem) 
    }
}