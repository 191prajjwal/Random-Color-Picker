let body=document.querySelector("body")
let paraStart=document.getElementById("paraStart")
let paraStop=document.getElementById("paraStop")
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let rgb=document.getElementById("rgb")

let r;
let g;
let b;
let changer


// function setHex(){
//     const hex="0123456789ABCDEF"
//     let hexColor= `#`
//     for(i=1;i<=6;i++)
//     {
//         hexColor=hexColor+hex[Math.floor(Math.random()*(16))]
//     }
//     return hexColor
// }
// console.log(setHex());
//hex can also be used to set the bgcolor here.


function setRGB(){
    r= Math.floor(Math.random()*(256)+1)
    g= Math.floor(Math.random()*(256)+1)
    b= Math.floor(Math.random()*(256)+1)
    start.style.display="none"
    stop.style.display="inline-block"
    body.style.backgroundColor=`rgb(${r},${g},${b})`
    paraStart.style.display="none"
    paraStop.style.display="block"
    rgb.style.display="none"
}

function getBgColor(){
    rgb.innerHTML= `the rgb value of this background is rgb(${r},${g},${b})`
    start.style.display="inline-block"
      stop.style.display="none"
    paraStop.style.display="none"
    paraStart.style.display="block"
    rgb.style.display="block"
   }


start.addEventListener("click",(e)=>{
if(!changer)
   changer= setInterval(setRGB,1000)
})



stop.addEventListener("click",()=>{
    getBgColor()
    clearInterval(changer)
    changer=null

})