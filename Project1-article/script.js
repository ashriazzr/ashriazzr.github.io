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
});
