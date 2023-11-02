fetch("http://cafepradev.com.br:21020/animals/list")
    .then(response => response.json())
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });



