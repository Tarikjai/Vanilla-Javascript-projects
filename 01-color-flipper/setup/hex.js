const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color');


function getRandomElements(arr, count) {
    const result = [];
    
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        result.push(arr[randomIndex]);
        result
    }
    return result;
}

btn.addEventListener("click", ()=>{
    const primaryColor = getRandomElements(hex, 6).join('')
 
    // Set the CSS variable dynamically
    document.documentElement.style.setProperty('--primary-color', "#"+ primaryColor);
    color.textContent = "#"+ primaryColor
    document.body.style.backgroundColor =  "#"+ primaryColor
})



