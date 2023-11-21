// Função para mudar de telas
function showScreen(screenId) {
    const screens = document.querySelectorAll('.tela');
    screens.forEach(screen => {
        screen.classList.remove('telaAtiva');
    });
    const selectedScreen = document.getElementById(screenId);
    selectedScreen.classList.add('telaAtiva');
}

function abrirMenu () {
    const screen = document.getElementById('menuDropdown');
    screen.classList.remove('menuDropdown')
    screen.classList.add('telaAtivaMenu');
}

function fecharMenu () {
    const screen = document.getElementById('menuDropdown');
    screen.classList.remove('telaAtivaMenu');
    screen.classList.add('menuDropdown');

}

function abrirImagem(item, divItem) {
  const selectedImage = document.getElementById(item);
  const selectedDiv = document.getElementById(divItem);

  const isExpanded = selectedImage.classList.contains('fotoGrande');

  if (isExpanded) {
    selectedImage.classList.remove('fotoGrande');
    selectedImage.classList.add('fotoPequena');
    selectedDiv.classList.remove('divGrande');
    selectedDiv.classList.add('divPequeno');
  } else {
    selectedImage.classList.remove('fotoPequena');
    selectedImage.classList.add('fotoGrande');
    selectedDiv.classList.remove('divPequeno');
    selectedDiv.classList.add('divGrande');
  }
}

function abrirGif(item, divItem) {
  const selectedImage = document.getElementById(item);
  const selectedDiv = document.getElementById(divItem);

  const isExpanded = selectedImage.classList.contains('gifGrande');

  if (isExpanded) {
    selectedImage.classList.remove('gifGrande');
    selectedImage.classList.add('gifPequeno');
    selectedDiv.classList.remove('divGrande');
    selectedDiv.classList.add('divPequeno');
  } else {
    selectedImage.classList.remove('gifPequeno');
    selectedImage.classList.add('gifGrande');
    selectedDiv.classList.remove('divPequeno');
    selectedDiv.classList.add('divGrande');
  }
}


function abrirInfo (item) {
  const selectedDiv = document.getElementById(item);

  const isExpanded = selectedDiv.classList.contains('mostrarInfo');

  if (isExpanded) {
    selectedDiv.classList.remove('mostrarInfo');
    selectedDiv.classList.add('esconderInfo');
  } else {
    selectedDiv.classList.remove('esconderInfo');
    selectedDiv.classList.add('mostrarInfo');
  }
}