function pesquisar() {
  // Função é acionada quando o botão de pesquisa é clicado
  console.log("clicou! :)"); // Mensagem para confirmar que a função foi executada
  // Comentário para lembrar que 'dados' é uma variável global ou já definida anteriormente
  // console.log(dados); // Linha comentada, provavelmente usada para debug

  // Seleciona a seção HTML com o ID 'resultados-pesquisa' para inserir os resultados
  let section = document.getElementById('resultados-pesquisa');
  console.log(section); // Verifica se a seção foi encontrada

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada elemento 'dado' dentro da lista de dados
  for (let dado of dados) {
    // Cria uma nova div para cada resultado, formatando os dados
    resultados += `
    <div class="item-resultado">
      <h2>
      <a href="#" target="_blank">${dado.nome}</a>
      <p class="descricao-meta">${dado.origem}</p>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <h3 class="descricao-meta">${dado.habilidades}</h3>
      <a href="${dado.linkImagem}" target="_blank">Mais informações</a>
    </div>
  `;
  }

  // Insere os resultados formatados dentro da seção HTML selecionada
  section.innerHTML = resultados;
}


