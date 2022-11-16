document.querySelector('.btn').onclick = function (e) {
    e.preventDefault();
    let login = document.querySelector('.input').value;
    let resulltVision = document.querySelector('.form__result')
    resulltVision.classList.add('active')
    fetch("https://api.github.com/users/"+ login)
    .then((result) => result.json())
    .then((data) => {
        document.querySelector('.form__result').innerHTML = `
        <div class="result__wrapper">
        <a href="${data.avatar_url} class="bg" "><img src="${data.avatar_url}" class="bg" alt="" class="img"/></a>
        <div class="result__info">
        <div class="info"
        <p class="bg"><a target="_blank" href="https://github.com/${data.login}" class="bg"> ${data.login}</a></p>
        
        <p class="bg">Followers: ${data.followers}</p>
        </div>
        <div class="bio"
        <div><p class="bg">Name: ${data.name}</p>
        <p class="bg">Bio: ${data.bio}</p>
        <p class="bg">${data.created_at}</p></div>
        <div class="location bg"
        
        <div><p class="bg">Company: ${data.company}</p>
        <p class="bg">${data.location}</p></div>
        </div>
        </div>
        
        </div>
        
        </div>
        
   `
    })

}
