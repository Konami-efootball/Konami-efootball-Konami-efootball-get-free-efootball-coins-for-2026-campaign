document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Note : On ne fait plus e.preventDefault() car le formulaire est géré par Formsubmit
    // Le code PHP n'est plus nécessaire car Formsubmit s'en occupe
});

document.querySelector('.back-button').addEventListener('click', function() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert('Retour à la page précédente');
    }
});
