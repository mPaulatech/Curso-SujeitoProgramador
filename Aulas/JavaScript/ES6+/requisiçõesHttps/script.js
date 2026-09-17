let listElement = document.querySelector("#app");

let posts = [];

function nutriApp(){

    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
        posts = json;

        posts.map((item)=>{
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let pElement = document.createElement("p");

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.append(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let description = document.createTextNode(item.subtitulo);
            pElement.appendChild(description);
            liElement.appendChild(pElement);

            listElement.appendChild(liElement);
        });
    })
    .catch(()=>{
        console.log("Algo está errado!!");
    })
}

nutriApp();