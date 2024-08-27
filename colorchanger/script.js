const btn=document.querySelector("button")
const txt=document.querySelector("h1")



function randomColor(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    
    return [r,g,b]
    
}


btn.addEventListener("click",function(){
    let [r,g,b]=randomColor()
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
    txt.innerText=`rgb(${r},${g},${b})`
    btn.style.backgroundColor=`rgb(${r+50},${g+50},${b+50})`
    txt.style.color=`rgb(${r+50},${g+50},${b+50})`
})

