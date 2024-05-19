document.addEventListener("DOMContentLoaded", function() {
  const btnShowMore = document.getElementById('btn-show-more');
  const hiddenArticles = document.querySelectorAll('.article-card.hidden');

  btnShowMore.addEventListener('click', function() {
    hiddenArticles.forEach(article => {
      article.classList.remove('hidden');
    });
    btnShowMore.style.display = 'none'; // Optionally hide the button after all articles are shown
  });
});
