function pesquisar() {
  // Obtém o valor do input de pesquisa
  let inputPesquisa = document.getElementById('input-pesquisa').value.trim().toLowerCase();

  // Salva o termo da pesquisa no localStorage para uso na página de resultados
  localStorage.setItem('termoPesquisa', inputPesquisa);

  // Mapeamento de termos de pesquisa para arquivos HTML correspondentes
  const paginas = {
    chamber: './models/chamber.html',
    gekko: './models/gekko.html',
    iso: './models/iso.html',
    jett: './models/jett.html',
    neon: './models/neon.html',
    omen: './models/omen.html',
    reyna: './models/reyna.html',
    yoru: './models/yoru.html',
    sova: './models/sova.html',
    viper: './models/viper.html',
    sage: './models/sage.html',
    brimstone: './models/brimstone.html',
    astra: './models/astra.html',
    breach: './models/breach.html',
    brimstone: './models/brimstone.html',
    clove: './models/clove.html',
    cypher: './models/cypher.html',
    deadlock: './models/deadlock.html',
    fade: './models/fade.html',
    harbor: './models/harbor.html',
    kayo: './models/kayo.html',
    killjoy: './models/killjoy.html',
    phoenix: './models/phoenix.html',
    raze: './models/raze.html',
    sage: './models/sage.html',
    skye: './models/skye.html',
    sova: './models/sova.html',
    viper: './models/viper.html',
    vyse: './models/vyse.html'

    // Adicione mais termos e páginas conforme necessário
  };

  // Verifica se o termo pesquisado corresponde a uma página específica
  let paginaDestino = paginas[inputPesquisa] || '../index.html'; // Redireciona para uma página padrão se não encontrar

  // Redireciona para a página correspondente ao termo de pesquisa
  window.location.href = paginaDestino;
}
