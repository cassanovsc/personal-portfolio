var emConstrucao = true;

if (emConstrucao) {
  document.getElementById('construcao').style.display = 'grid';
}

function closeEmConstrucao() {
  document.getElementById('construcao').style.display = 'none';
}
document
  .getElementById('closeConstrucao')
  .addEventListener('click', closeEmConstrucao);
