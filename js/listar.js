$(function (){
    // Função para listar os dados da API
    function listarAnimais() {
        fetch("http://cafepradev.com.br:21020/animals/list", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            $('#animalList').empty();

            // adicionar dados  à tabela
            data.forEach(animais => {
                $('#animalList').append(
                   ` <tr>
                        <td>${animais.name}</td>
                        <td>${animais.species}</td>
                        <td>${animais.color}</td>
                        <td>${animais.size}</td>
                        <td>
                            <a href="#" class="btn bg-dark-subtle deletaItem" rel="${animais.id}"><i class="bi bi-trash3"></i></a> 
                            
                            <button type="button" class="btn bg-dark-subtle editarItem" rel="${animais.id}" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="bi bi-pencil-square"></i></button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Editar item Da API</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">                                                              
                                 <form action="" id="cadastraAnimal">
                                        <div class="mb-3">                                    
                                            <label for="nomeNovo" class="form-label">Nome</label>
                                            <input type="text" class="form-control" id="nomeNovo" placeholder="Digite o Nome">
                                          </div>                       
                                            <div class="mb-3 col-12">
                                              <label for="especieNovo"  class="form-label">Espécie</label>
                                              <input type="text" class="especie form-control" id="especieNovo" placeholder="Digite a Espécie">
                                            </div>
                                            <div class="mb-3 col-12">
                                              <label for="corNovo"  class="form-label">Cor</label>
                                              <input type="text" class="cor form-control" id="corNovo" placeholder="Digite a Cor">
                                          </div>
                                          <div class="mb-3 col-12">
                                            <label for="tamanhoNovo"  class="form-label">Tamanho</label>
                                            <input type="text" class="tamanho form-control" id="tamanhoNovo" placeholder="Digite o Tamanho">
                                          </div>
                                      
                                          </form>
                                          <div class="modal-footer">
                                          <button id="salvarEdite" type="submit" class="btn btnSalvarEdite btn-success">ENVIAR</button>
                                      </div>
                                          </div>                                      
                                    </div>
                              </div>
                            </div>                  
                        </td>
                    </tr>`
                );
            });
        })
        .catch(error => console.error(error));
    }

    listarAnimais();

// deletar
    $(document).on('click', '.deletaItem', function () {

      let relValue = this.getAttribute("rel");
      let item = {
          id: relValue
      };
      fetch("http://cafepradev.com.br:21020/animals/delete", {
          method: "DELETE",
          headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(item)
            
          })
          listarAnimais()
      return false;
      
  })
  listarAnimais();

  // editar
$(document).on('click', '.editarItem', function () {
    let relValue =  this.getAttribute("rel");

      $(document).on('click', '.btnSalvarEdite', function(){
              let idItem = relValue 
              let nomeNovo = $('#nomeNovo').val()
              let especieNovo = $('#especieNovo').val()
              let corNovo = $('#corNovo').val()
              let tamanhoNovo = $('#tamanhoNovo').val()
              console.log(idItem);
              
              let item = {
                id: idItem,
                name: nomeNovo,
                species: especieNovo,
                color: corNovo,
                size: tamanhoNovo
              };
              
            fetch("http://cafepradev.com.br:21020/animals/update",{
                method: "PUT",
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(item)
            })
            console.log(item);
                         
            setTimeout(function(){
              location.reload();
          }, 1000)
        })
    })
 return false;
})


