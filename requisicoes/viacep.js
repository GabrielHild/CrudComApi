const cepField = document.querySelector("#cep");

let preencher = (seletor, valor) => {
    document.querySelector(seletor).value = valor
}

cepField.addEventListener("keyup", function(){
    if(cepField.value.length === 8){
        fetch(`https://viacep.com.br/ws/${cepField.value}/json/`)
            .then(dados => dados.json())
            .then(function(dados){
                //prenchendo os dados nos compos
                if(dados.erro){
                    alert("Cep nao encontrado")
                    cepField = "";
                }else{
                    preencher("#logradouro", dados.logradouro)
                    preencher("#bairro", dados.bairro)
                    preencher("#cidade", dados.localidade)
                    preencher("#estados", dados.uf)
                    document.querySelector("#numero").focus();
                }
            })
            .catch(new Error("nao foi possivel consultar"))
    }
})