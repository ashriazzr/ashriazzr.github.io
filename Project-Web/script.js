document.addEventListener('DOMContentLoaded', function () {
    const currentTimeElement = document.getElementById('current-time');

    const updateCurrentTime = () => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      const timeString = now.toLocaleDateString('en-US', options);
      currentTimeElement.textContent = timeString;
    };

    updateCurrentTime();
    setInterval(updateCurrentTime, 1000); 
    document.addEventListener("DOMContentLoaded", function() {
      const btnShowMore = document.getElementById('btn-show-more');
      const hiddenArticles = document.querySelectorAll('.article-card.hidden');
      const currentTimeElement = document.getElementById('current-time');
      const hamburgerIcon = document.querySelector(".hamburger-icon");
    
      btnShowMore.addEventListener('click', function() {
        hiddenArticles.forEach(article => {
          article.classList.remove('hidden');
        });
        btnShowMore.style.display = 'none'; 
      });
    
      const updateCurrentTime = () => {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const timeString = now.toLocaleDateString('en-US', options);
        currentTimeElement.textContent = timeString;
      };
    
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000); 
    
      hamburgerIcon.addEventListener("click", toggleMenu);
    
      function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }
    });
    
});
