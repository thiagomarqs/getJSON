/*
Função para obter objetos JSON de um endpoint através do protocolo HTTP
endpoint: endpoint da API
callback: função a ser chamada para fazer algo com o JSON recebido
*/
function getJSON(endpoint, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint, true); //abre a URL através do protocolo GET
    xhr.responseType = "json"; //seta o tipo do dado que será recebido para JSON
    xhr.onload = function(){ //diz o que fazer quando o carregamento finalizar
        if (xhr.status === 200){
            console.log("Dados recebidos com sucesso");
            callback(xhr.response); //chama o callback passando a resposta da requisição
        } else {
            console.warn("Algo deu errado. Erro " + xhr.status);
        }
    }
    xhr.send(); //envia a requisição para o servidor
}