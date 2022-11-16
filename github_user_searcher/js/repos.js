document.querySelector('.btn-repos').onclick = function (e) {
    e.preventDefault();
    let login = document.querySelector('.input').value;
    let resulltVision = document.querySelector('.form__result')
    resulltVision.classList.add('active')
    fetch("https://api.github.com/"+ login+"/udesurd/repos/507312871")
    .then((result) => result.json())
    .then((data) => {
        document.querySelector('.form__result-repos').innerHTML = `
        <div class="result__wrapper-repos bg">
            ${data.description}
        </div>
        
   `
    })

}
