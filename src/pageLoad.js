export default function loadPage() {
    const contentDiv = document.getElementById("content"); //Get original div used for content

    //Creating Hero Section
    const heroSection = document.createElement("div"); // Creates div for the hero section
    heroSection.id = "hero";

    //Left Hero Section
    const leftHero = document.createElement("div"); // Creates div for the left side of the hero section
    leftHero.id = "left-hero";

    const specialOffer = document.createElement("h2");// Creates h2 as the special offer on the  left side of the hero section
    specialOffer.textContent = 'Limited Time Offer For $15';
    const heroTitle = document.createElement("h1");// Creates h1 as the special offer on the  left side of the hero section
    heroTitle.textContent = "Best Pizza in Town";
    const heroCTA = document.createElement("button");// Creates button as the special offer on the  left side of the hero section
    heroCTA.textContent = "Order Now";

    leftHero.append(specialOffer,heroTitle,heroCTA); //Add everything onto the left hero section.

    //Right Hero Section
    const rightHero = document.createElement("div") // Creates div for the right side of the hero section
    rightHero.id = "right-hero"

    const imageHero = document.createElement("img");// Creates h2 as the special offer on the  left side of the hero section
    imageHero.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/hero-img-1.png?width=1312&height=1294&name=hero-img-1.png";
    imageHero.alt = "hubspot.com";

    rightHero.append(imageHero);
    
    //Appending Left & Right to overall Hero Section
    heroSection.append(leftHero,rightHero);



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

    //Create section for Menu
    const menuSection = document.createElement('div');
    menuSection.id = 'menu-section';

    //Create Menu Header Section
    const menuTitle = document.createElement('div');
    menuTitle.id = 'menu-title';
    const pricing = document.createElement('h3');
    pricing.textContent = 'Pricing Menu'
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Delicious Deals for You';

    //Create Menu list of products
    const menuList = document.createElement('div');
    menuList.id = 'menu-list';

    //Creating Pizza 1 div
    const pizza1 = document.createElement('div');
    pizza1.id = 'pizza1'
    pizza1.className = 'dish';

    //Creating product image div
    const pizza1Image = document.createElement('div');
    const image1 = document.createElement('img');
    image1.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/menu-item-1-1.png?width=200&height=200&name=menu-item-1-1.png";
    image1.alt = 'hubspot pizza';
    pizza1Image.append(image1);
    //Creating and adding pizza details
    const pizza1details = document.createElement('div');
    pizza1details.id = 'dish-details';
    const pizza1name = document.createElement('h4');
    pizza1name.textContent = 'Lemon & Garlic Green Beans'
    const pizza1price = document.createElement('h5');
    pizza1price.textContent = '$15';
    const pizza1ingredients = document.createElement('p');
    pizza1ingredients.textContent = 'Asparagus, hens egg, toasted sunflower seeds, cheese, Spenwood cheese';
    pizza1details.append(pizza1name,pizza1price,pizza1ingredients);
    pizza1.append(pizza1Image,pizza1details);


    //Creating Pizza 2 div
    const pizza2 = document.createElement('div');
    pizza2.id = 'pizza2'
    pizza2.className = 'dish';

    //Creating product image div
    const pizza2Image = document.createElement('div');
    const image2 = document.createElement('img');
    image2.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/menu-item-1-1.png?width=200&height=200&name=menu-item-1-1.png";
    image2.alt = 'hubspot pizza';
    pizza2Image.append(image2);
    //Creating and adding pizza details
    const pizza2details = document.createElement('div');
    pizza2details.id = 'dish-details';
    const pizza2name = document.createElement('h4');
    pizza2name.textContent = 'Lemon & Garlic Green Beans'
    const pizza2price = document.createElement('h5');
    pizza2price.textContent = '$15';
    const pizza2ingredients = document.createElement('p');
    pizza2ingredients.textContent = 'Asparagus, hens egg, toasted sunflower seeds, cheese, Spenwood cheese';
    pizza2details.append(pizza2name,pizza2price,pizza2ingredients);
    pizza2.append(pizza2Image,pizza2details);


    //Creating Pizza 3 div
    const pizza3 = document.createElement('div');
    pizza3.id = 'pizza3'
    pizza3.className = 'dish';

    //Creating product image div
    const pizza3Image = document.createElement('div');
    const image3 = document.createElement('img');
    image3.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/menu-item-1-1.png?width=200&height=200&name=menu-item-1-1.png";
    image3.alt = 'hubspot pizza';
    pizza3Image.append(image3);
    //Creating and adding pizza details
    const pizza3details = document.createElement('div');
    pizza3details.id = 'dish-details';
    const pizza3name = document.createElement('h4');
    pizza3name.textContent = 'Lemon & Garlic Green Beans'
    const pizza3price = document.createElement('h5');
    pizza3price.textContent = '$15';
    const pizza3ingredients = document.createElement('p');
    pizza3ingredients.textContent = 'Asparagus, hens egg, toasted sunflower seeds, cheese, Spenwood cheese';
    pizza3details.append(pizza3name,pizza3price,pizza3ingredients);
    pizza3.append(pizza3Image,pizza3details);


    //Creating Pizza 3 div
    const pizza4 = document.createElement('div');
    pizza4.id = 'pizza4'
    pizza4.className = 'dish';

    //Creating product image div
    const pizza4Image = document.createElement('div');
    const image4 = document.createElement('img');
    image4.src = "https://22271054.fs1.hubspotusercontent-na1.net/hub/22271054/hubfs/menu-item-1-1.png?width=200&height=200&name=menu-item-1-1.png";
    image4.alt = 'hubspot pizza';
    pizza4Image.append(image4);
    //Creating and adding pizza details
    const pizza4details = document.createElement('div');
    pizza4details.id = 'dish-details';
    const pizza4name = document.createElement('h4');
    pizza4name.textContent = 'Lemon & Garlic Green Beans'
    const pizza4price = document.createElement('h5');
    pizza4price.textContent = '$15';
    const pizza4ingredients = document.createElement('p');
    pizza4ingredients.textContent = 'Asparagus, hens egg, toasted sunflower seeds, cheese, Spenwood cheese';
    pizza4details.append(pizza4name,pizza4price,pizza4ingredients);
    pizza4.append(pizza4Image,pizza4details);


    //Append menu subsections into menu div
    menuTitle.append(pricing,menuHeader);
    menuList.append(pizza1,pizza2,pizza3, pizza4)
    menuSection.append(menuTitle, menuList);




    //Appending different main sections to contentDiv
    contentDiv.append(heroSection,aboutSection,menuSection);
}