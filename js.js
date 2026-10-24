    const turnstile = document.getElementById('turnstile');
    const checkbox = document.getElementById('cf-checkbox');
    const successBlock = document.getElementById('CJPCL0');
    function startVerification() {
      if (turnstile.classList.contains('loading') || turnstile.classList.contains('success')) return;
      checkbox.checked = true;
      turnstile.setAttribute('aria-checked', 'true');
      turnstile.classList.add('loading');
      setTimeout(() => { //読み込み完了後の表記および処理
        turnstile.classList.remove('loading');
        turnstile.classList.add('success');
        successBlock.style.display = 'block';
      }, 1300 + Math.random() * 500); //読み込み時間
    }
    //checkboxの判定
    turnstile.addEventListener('click', e => {
      if (e.target.closest('.cf-logo-link') || e.target.closest('.cf-privacy')) return;
      startVerification();
    });
    turnstile.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); 
        startVerification();
      }
    });
    checkbox.addEventListener('click', e => {
      e.stopPropagation();
      startVerification();
    });