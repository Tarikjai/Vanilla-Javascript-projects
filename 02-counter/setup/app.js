
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const value =  document.getElementById('value')
let counter =0
value.textContent =0


increase.addEventListener('click', () =>{
    counter +=1 
    if (counter >= 1) {
        value.textContent= counter
        value.style.color= "green"  
    } else if (counter <0 )  {
        value.textContent= counter
        value.style.color= "red"  
    } else  {
        value.textContent= counter
        value.style.color= "black"
    }  
     
})

decrease.addEventListener('click', () =>{
    counter -=1 
    if (counter < 0){
    value.textContent= counter
    value.style.color= "red"
    } else if (counter >= 1)  {
        value.textContent= counter
        value.style.color= "green"  
    } else  {
        value.textContent= counter
        value.style.color= "black"
    } 
    
})

reset.addEventListener('click', () =>{
    counter =0 
    value.textContent= counter
     value.style.color= "black"
})
 