import "./styles.css"; // Import CSS styles 
// import loadPage from "./pageLoad"; //Import pageload module
import loadMenu from "./menu";
import loadAbout from "./about";
import loadPage from "./pageLoad";



//Call function on pageload
const menuButton = document.getElementById('menu-button');
const aboutButton = document.getElementById('about-button');
const homeButton = document.getElementById('home');

//Function to clear contents
function clearContent(){
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
}


menuButton.addEventListener('click', () => {
    clearContent();
    loadMenu();
}); 

aboutButton.addEventListener('click', () => {
    clearContent();
    loadAbout();
}); 

homeButton.addEventListener('click', () => {
    clearContent();
    loadPage();
});