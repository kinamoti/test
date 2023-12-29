document.addEventListener('DOMContentLoaded', function() {
  const opinionsList = document.getElementById('opinions');

  function loadOpinions() {
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];

    opinions.forEach(function(opinionText) {
      const opinionElement = createOpinionElement(opinionText);
      opinionsList.appendChild(opinionElement);
    });
  }

  function createOpinionElement(opinionText) {
    const opinionDiv = document.createElement('div');
    opinionDiv.classList.add('opinion');

    const opinionPara = document.createElement('p');
    opinionPara.textContent = opinionText;

    opinionDiv.appendChild(opinionPara);

    const likeBtn = document.createElement('button');
    likeBtn.classList.add('like-btn');
    likeBtn.textContent = 'いいね！';

    const likesSpan = document.createElement('span');
    likesSpan.classList.add('likes');
    likesSpan.textContent = '0';

    opinionDiv.appendChild(opinionPara);
    opinionDiv.appendChild(likeBtn);
    opinionDiv.appendChild(likesSpan);

    likeBtn.addEventListener('click', function() {
      let likes = parseInt(likesSpan.textContent);
      likes++;
      likesSpan.textContent = likes;
    });
    return opinionDiv;
  }

  loadOpinions();
});





