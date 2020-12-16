
// ----- FONCTION POUR TELECHARGER UN FICHIER DU BUREAU ------

function update_image(){
    let file = document.querySelector('input[type=file]').files[0];
    img.src =  window.URL.createObjectURL(file);
}
