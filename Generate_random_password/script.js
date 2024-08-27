
const input=document.querySelector("input")
const btn=document.querySelector("button")
const cpy=document.querySelector(".copy")
const ch=[]

for (var i=33; i<123; i++)
  ch.push(String.fromCharCode(i));

function Generate(ch){
    password=''
    for(let i=0;i<10;i++){
        var index=Math.floor(Math.random()*(ch.length));
    
        password+=ch[index]
    }
    input.value=password
}

btn.addEventListener('click',()=>{
    setTimeout(()=>{Generate(ch)},300);
    
   
})

function copy(){
    input.select();
    document.execCommand('copy')
   


}

cpy.addEventListener('click',()=>{
    console.log("khjwdhd")
    copy()
})
