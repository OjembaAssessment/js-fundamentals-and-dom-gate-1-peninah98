const myTimer = document.querySelector('#myTimer')
const inputValue = document.querySelector('.inputValue').value
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')
const resetBtn = document.querySelector('.resetBtn')
const startBtn  = document.querySelector('#startBtn')
const message = document.querySelector('.message')


let initial = 30
message.innerHTML = initial


const countdown = setInterval(()=>{
    initial--;
    message.innerHTML = initial
    if(initial <= 0 || initial <1){
        clearInterval(countdown);
        resetBtn.innerHTML='stop'
        startBtn.innerHTML='RESET'
        
    }
},1000)


//

increase.addEventListener('click',function(){
    initial += 1;
    message.innerHTML = initial;
})
decrease.addEventListener('click',function(){
    initial -= 1;
    message.innerHTML = initial;
    

})


startBtn.addEventListener('click',function(){
    message.innerHTML = initial;
})

resetBtn.addEventListener('click',function(){
    initial === 0;
    message.innerHTML = initial;
})






