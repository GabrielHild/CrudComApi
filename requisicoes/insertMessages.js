//inserir nova mensagem na api

fetch("http://cafepradev.com.br:21020/messages/insert", {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body : JSON.stringify(FormData(form))
})
    .then(response => response.json())
    .then((res) => {
        if (res.error) {
            console.log(res.error.message);
        } else {
            console.log(res.message);
        }
    })
    .catch((err) => {
        console.log(err);
    });
