let  box = document.querySelector('#ligh')
let  button1 = document.querySelector('#btnOn')
let  button2= document.querySelector('#btnOff')



///mesha wax lugu daroo

button1.addEventListener("click",function(){
   box.style.backgroundColor = "yellow"
})

button2.addEventListener("click" ,function(){
    box.style.backgroundColor= "Transparent"
})