
//inserir
fetch("http://cafepradev.com.br:21020/animals/insert", {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body : JSON.stringify({
        "id" : 1,
        "name": "Zeca",
        "species": "Cat",
        "color": "Black",
        "size": "Small"
    })
})
    .then(response => response.json())
    .then((res) => {
        if (res.error){
            console.log(res.error.message);
        } else {
            console.log(res.message);
        }
    })
    .catch((err) => {
        console.log(err);
    });
