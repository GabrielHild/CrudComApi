
    // verbos http
    // GET -> trazer dados ( padrao)
    // POST -> enviar dados
    // PUT -> editar dados
    // DELETE -> deletar



const selEstados = document.querySelector('#estado');

selEstados.addEventListener("change", function(){
    let selecionado = this.value

    //consultar api
    let estrutura = '<option value="">Selecione</option>'

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selecionado}/municipios`)
        .then(retorno => retorno.json())
        .then(function(cidades){
            //laço de repeticao pra preencher as cidades
            for(posicao in cidades){
                estrutura += `<option value="${cidades[posicao].cidades}">${cidades[posicao].nome}</option>`
            }

            document.querySelector("#cidade").innerHTML = estrutura
        })
})