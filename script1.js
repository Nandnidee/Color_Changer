const box = document.querySelectorAll('.box');
const body_color=document.querySelector("body");
const text= document.querySelector('span')

box.forEach(function (b){
    b.addEventListener('click',function(){
        body_color.id=this.id
        text.style.color=this.id
        text.innerHTML=(`&nbsp ${this.id}`)
    })
});