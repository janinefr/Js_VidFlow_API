// fetch: buscar na api
//retorna uma promise: é um objeto que representa a conclusão ou o fracasso de uma tarefa assíncrona

const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos") 
.then(res => (res.json()))
.then((videos) => 
    videos.forEach((video)=> {
        containerVideos.innerHTML+= `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem} alt="Logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</h3>
            </div>
            </li>
        `;
    })
)

//capturando erros
.catch((error) =>{
containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`

})