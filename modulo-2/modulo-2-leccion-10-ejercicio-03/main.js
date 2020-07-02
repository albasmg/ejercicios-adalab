function getGithubProfile(userName) {
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      printUserInfo(data);
    });
}

function printUserInfo(userData) {
  const resultName = document.querySelector('.resultName');
  const resultRepo = document.querySelector('.resultRepo');
  const resultImg = document.querySelector('.resultImg');

  resultName.innerHTML = userData.name || 'Nombre no encontrado';
  resultRepo.innerHTML = userData.public_repos;
  resultImg.src = userData.avatar_url;
}

function handleBtnClick() {
  const input = document.querySelector('.input');

  getGithubProfile(input.value, 22);
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', handleBtnClick);
