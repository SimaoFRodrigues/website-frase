(function() {
  const params = new URLSearchParams(location.search);

  // Permite mudar a frase via ?msg=...
  const msg = params.get('msg');
  if (msg) {
    document.getElementById('phrase').innerText = msg;
  }

  // Permite definir a imagem via ?img=URL (opcional). Ex.: ?img=assets/monte.jpg
  const img = params.get('img');
  if (img) {
    document.documentElement.style.setProperty('--bg-url', `url('${img}')`);
  }

  // Se o navegador não suportar backdrop-filter, reforça contraste do cartão
  const testEl = document.createElement('div');
  testEl.style.backdropFilter = 'blur(1px)';
  const supportsBackdrop = testEl.style.backdropFilter.length > 0 || testEl.style.webkitBackdropFilter?.length > 0;
  if (!supportsBackdrop) {
    const card = document.querySelector('.card');
    card.style.background = 'rgba(0,0,0,.5)';
  }
})();
