function showList(){
document.getElementById('image-container').classList.remove('grid-container');
document.getElementById('image-container').classList.add('list-container');
//$('image-container').removeClass('grid-container').addClass('list-container');
}
function showGrid(){
document.getElementById('image-container').classList.remove('list-container');
document.getElementById('image-container').classList.add('grid-container');
//$('image-container').addClass('grid-container');
}