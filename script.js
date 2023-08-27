// window.addEventListener('load', function() {
//     const splashScreen = document.querySelector('.splash-container');
//     setTimeout(() => {
//         splashScreen.style.opacity = 0;
//         setTimeout(() => {
//             splashScreen.style.display = 'none';
//             // Transition to index.html
//             window.location.href = 'index.html';
//         }, ); // Change the duration as needed
//     },1500); // Change the duration as needed
// });
window.addEventListener('load', function() {
    const splashContainer = document.querySelector('.splash-container');
    fetch('splash.html') // Fetch the content of splash.html
        .then(response => response.text())
        .then(content => {
            splashContainer.innerHTML = content; // Insert the splash screen content
            const splashScreen = document.querySelector('.splash-container');
            setTimeout(() => {
                splashScreen.style.opacity = 0;
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                }, 1000); // Duration for splash screen to fade out (milliseconds)
            }, 1500); // Duration for splash screen to display (milliseconds)
        });
});
