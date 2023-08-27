window.addEventListener('load', function() {
    const splashScreen = document.querySelector('.splash-container');
    setTimeout(() => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.style.display = 'none';
            // Transition to index.html
            window.location.href = 'index.html';
        }, ); // Change the duration as needed
    },1500); // Change the duration as needed
});