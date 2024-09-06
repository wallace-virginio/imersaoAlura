function pesquisar() {
  // Obtém o valor do input de pesquisa
  let inputPesquisa = document.getElementById('input-pesquisa').value.trim().toLowerCase();

  // Salva o termo da pesquisa no localStorage para uso na página de resultados
  localStorage.setItem('termoPesquisa', inputPesquisa);

  // Mapeamento de termos de pesquisa para arquivos HTML correspondentes
  const paginas = {
    chamber: 'chamber.html',
    gekko: 'gekko.html',
    iso: 'iso.html',
    jett: 'jett.html',
    neon: 'neon.html',
    omen: 'omen.html',
    reyna: 'reyna.html',
    yoru: 'yoru.html',
    sova: 'sova.html',
    viper: 'viper.html',
    sage: 'sage.html',
    brimstone: 'brimstone.html',
    astra: 'astra.html',
    breach: 'breach.html',
    brimstone: 'brimstone.html',
    clove: 'clove.html',
    cypher: 'cypher.html',
    deadlock: 'deadlock.html',
    fade: 'fade.html',
    harbor: 'harbor.html',
    kayo: 'kayo.html',
    killjoy: 'killjoy.html',
    phoenix: 'phoenix.html',
    raze: 'raze.html',
    sage: 'sage.html',
    skye: 'skye.html',
    sova: 'sova.html',
    viper: 'viper.html',
    vyse: 'vyse.html'
    // Adicione mais termos e páginas conforme necessário
  };

  // Verifica se o termo pesquisado corresponde a uma página específica
  let paginaDestino = paginas[inputPesquisa] || '../index.html'; // Redireciona para uma página padrão se não encontrar

  // Redireciona para a página correspondente ao termo de pesquisa
  window.location.href = paginaDestino;
}
