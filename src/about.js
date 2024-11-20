export default function loadAbout() {
const contentDiv = document.getElementById("content"); //Get original div used for content

 //Creating About Section
 const aboutSection = document.createElement("div"); // Creates div for the hero section
 aboutSection.id = "about";

 //Creating Div for section title
 const aboutSectionHeader = document.createElement('div');
 aboutSectionHeader.id = 'about-title';
 //Creating H3 in the div
 const aboutSubtitle = document.createElement('h3');
 aboutSubtitle.textContent = 'core Features';
 //Creating H2 in the div
 const aboutTitle = document.createElement('h2');
 aboutTitle.textContent = 'Why Choose Us';
 //Appending h3 and h2 to the div
 aboutSectionHeader.append(aboutSubtitle,aboutTitle);

 //Creating div for list of features
 const aboutSectionList = document.createElement('div');
 aboutSectionList.id = 'list';

 //Creating div for quality quadrant
 const qualitySection = document.createElement('div');
 qualitySection.id = 'quality';
 qualitySection.className = 'feature';

 //Creating h3 and p inside quality quadrant
 const qualityTitle = document.createElement('h3');
 const qualityText = document.createElement('p');
 qualityTitle.textContent = 'Quality Foods';
 qualityText.textContent ='Many desktops publish packages webpages in editors now.';

 //Creating div for deliver quadrant
 const deliverySection = document.createElement('div');
 deliverySection.id = 'delivery';
 deliverySection.className = 'feature';

 //Creating h3 and p inside quality quadrant
 const deliveryTitle = document.createElement('h3');
 const deliveryText = document.createElement('p');
 deliveryTitle.textContent = 'On Time Delivery';
 deliveryText.textContent ='Many desktops publish packages webpages in editors now.';

 //Creating div for hygene quadrant
 const hygeneSection = document.createElement('div');
 hygeneSection.id = 'Hygene';
 hygeneSection.className = 'feature';

 //Creating h3 and p inside hygene quadrant
 const hygeneTitle = document.createElement('h3');
 const hygeneText = document.createElement('p');
 hygeneTitle.textContent = 'Hygene Certified';
 hygeneText.textContent ='Many desktops publish packages webpages in editors now.';


 //Creating div for hygene quadrant
 const orderSection = document.createElement('div');
 orderSection.id = 'order';
 orderSection.className = 'feature';

 //Creating h3 and p inside hygene quadrant
 const orderTitle = document.createElement('h3');
 const orderText = document.createElement('p');
 orderTitle.textContent = 'Order Online';
 orderText.textContent ='Many desktops publish packages webpages in editors now.';


 //Adding quadrants to section
 qualitySection.append(qualityTitle, qualityText);
 deliverySection.append(deliveryTitle, deliveryText);
 hygeneSection.append(hygeneTitle,hygeneText);
 orderSection.append(orderTitle,orderText);
 aboutSectionList.append(qualitySection,deliverySection,hygeneSection,orderSection);

 //Appending #about-title and #list to main #about div
 aboutSection.append(aboutSectionHeader,aboutSectionList);

//Appending different main sections to contentDiv
 contentDiv.append(aboutSection);
}