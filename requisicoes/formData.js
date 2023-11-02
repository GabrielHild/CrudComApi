const form = document.querySelector('form');

form.addEventListener("submit", function(){
    let dados = new FormData(form)

    for(dado of dados.values()){
        console.log(dado);
    }
})