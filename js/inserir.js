
$(function () {
    //evento de cadastro
    $(document).on('submit', '#cadastraAnimal', function (event) {
        event.preventDefault(); // Para evitar o envio padrão do formulário

        let nome = $('#nome').val()
        let especie = $('#especie').val()
        let cor = $('#cor').val()
        let tamanho = $('#tamanho').val()

        // criar objeto para gravar
        let item = {
            name: nome,
            species: especie,
            color: cor,
            size: tamanho
        };

        // adicionar o objeto do item no array de animais
        fetch("http://cafepradev.com.br:21020/animals/insert", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            // Converter o objeto em JSON
            body: JSON.stringify(item)
        })
    });
});
