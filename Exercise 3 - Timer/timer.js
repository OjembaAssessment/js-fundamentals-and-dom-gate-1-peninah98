const myTimer = document.querySelector('#myTimer')
const inputValue = document.querySelector('.inputValue')
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')
const resetBtn = document.querySelector('.resetBtn')
const stopBtn = document.querySelector('.stopBtn')
const message = document.querySelector('.message')


let initial = inputValue.value
message.innerHTML = initial


const countdown = setInterval(()=>{
    initial--;
    message.innerHTML = initial;
    if(initial <= 0 || initial <1){
        clearInterval(countdown);
        hideButtons()
    }
},1000)


increase.addEventListener('click',function(){
    initial += 1;
    time.innerHTML = initial;
})
decrease.addEventListener('click',function(){
    initial -= 1;
    time.innerHTML = initial;
})



