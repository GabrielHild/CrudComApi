//de
fetch("http://cafepradev.com.br:21020/animals/delete", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body : JSON.stringify({
        id : 3,
    })
})
    .then(response => response.json())
    .then((res) => {
        if(res.error){
            console.log(res.error.message);
        }else{
            console.log(res.message);
        }
    })
    .catch((err) => {
        console.log(err);
    });