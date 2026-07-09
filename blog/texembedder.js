function embed(barLoc,contentLoc,content){
    fetch("/bar.html")
    .then(r => r.text())
    .then(bar => {
        fetch(content)
        .then(r => r.text())
        .then(tex => {
            barLoc.innerHTML = bar
            contentLoc.innerHTML = tex
        })
        .then(() => MathJax.typesetPromise())
    }) 
}