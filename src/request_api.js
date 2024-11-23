fetch("https://bible-api.com/john%203:16?translation=almeida")
    .then(response => response.json())
    .then(data => {
        console.log("Versiculo:", data.text);
    })
    .catch(error => console.error("Erro:", error));