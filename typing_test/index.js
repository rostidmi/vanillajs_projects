const textArr = ["123", "456", "789"];
const text = document.querySelector('#text');
const words = document.querySelector('#words');
const button = document.querySelector('button');
button.addEventListener("click", function(){
    console.log(this.innerText)
    if(this.innerText == "Start!"){
        words.style.display = 'block'
    }
})