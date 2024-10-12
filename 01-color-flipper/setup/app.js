const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color');

function getRandomNumber() {
    return  colors[Math.floor(Math.random() * 4 )]

}


btn.addEventListener("click", ()=>{
 

    document.body.style.backgroundColor = getRandomNumber() 
    color.textContent = getRandomNumber() 
    
})



