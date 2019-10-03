const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

logo.style.verticalAlign = 'middle';


console.log(siteContent.nav)
const nav = siteContent.nav;
delete nav["img-src"];
const navigationContent = Object.values(nav);
//I used this to pull the values into an array so I could use array methods.
// console.log(navigationContent);
const target = document.querySelector('nav');

target.style.display = 'flex';
target.style.justifyContent = 'space-between';
target.style.alignItems = 'center';

navigationContent.forEach(text => {
  let aTag = document.createElement('a');
  aTag.textContent = text;
  aTag.style.color = 'green';
  //TASK TO CHANGE NAV TEXT GREEN COMPLETE
  // console.log(aTag);
  target.appendChild(aTag);
})
let newLinks = ['Orders','Careers'];
console.log(newLinks);

newLinks.forEach(text => {
  let newATag = document.createElement('a');
  newATag.textContent = text;
  target.append(newATag);
  newATag.style.color = 'green';
})

target.style.fontWeight = 'bolder';
target.style.padding = '1em';
//CTA
const cta = siteContent.cta;
console.log(cta);

const ctaH1 = document.querySelector('h1').textContent = cta.h1;
console.log(ctaH1);

const button = document.querySelector('button');
button.textContent = cta.button;

const ctaImg = document.querySelector('#cta-img').src = cta["img-src"];

//CTA

//MAIN SECTION
const mainSection = siteContent["main-content"];
console.log(mainSection)
console.log(mainSection["features-h4"])
const topContent = document.querySelector('.top-content');
topContent.innerHTML = `
                  <div class="text-content">
                      <h4>${mainSection["features-h4"]}</h4>
                      <p>${mainSection["features-content"]}</p>
                  </div>
                  <div class="text-content">
                      <h4>${mainSection["about-h4"]}</h4>
                      <p>${mainSection["about-content"]}</p>
                  </div>
                  `;

document.querySelector('#middle-img').src = mainSection["middle-img-src"]
document.querySelector('#middle-img').style.width = '90%';
document.querySelector('#middle-img').style.margin = '0 auto';
document.querySelector('#middle-img').style.padding = '1%';


const bottomContent = document.querySelector('.bottom-content');
bottomContent.innerHTML = `
                  <div class="text-content">
                      <h4>${mainSection["services-h4"]}</h4>
                      <p>${mainSection["services-content"]}</p>
                  </div>
                  <div class="text-content">
                      <h4>${mainSection["product-h4"]}</h4>
                      <p>${mainSection["product-content"]}</p>
                  </div>
                  <div class="text-content">
                      <h4>${mainSection["vision-h4"]}</h4>
                      <p>${mainSection["vision-content"]}</p>
                  </div>
                  `;

document.querySelector('.main-content').style.fontWeight = 'bold';

//MAIN SECTION

//CONTACT
// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },

const contact = document.querySelector('.contact');
const contactInfo = siteContent.contact;
console.log(contactInfo);

contact.innerHTML = 
`
<section class="contact">

            <h4>${contactInfo["contact-h4"]}</h4>

            <p>${contactInfo.address}</p>

            <p>${contactInfo.phone}</p>

            <p>${contactInfo.email}</p>

        </section>
`

//CONTACT

//FOOTER
document.querySelector('footer').innerHTML = `<p>${siteContent.footer.copyright}</p>`
//FOOTER


const container = document.querySelector('.container');
container.style.padding = '1%';
container.style.backgroundColor = 'black';
container.style.color = 'white';

const header = document.querySelector('header');

header.style.backgroundColor = 'white';


function changeContent() {
  container.innerHTML = 
  `
  <div class = 'error-div'>
  <h1 class=errorTitle>CRITICAL ERROR OCCURED</h1>
  <h4 class='error-text'>Contact Administrator for Support!</h4>
  <div>
  `;

  let errorDiv = document.querySelector('.error-div');

  errorDiv.style.padding = '35%';
  errorDiv.style.display = 'flex';
  errorDiv.style.flexDirection = 'column';
  errorDiv.style.justifyContent = 'center';
  errorDiv.style.alignItems = 'center';
  errorDiv.style.fontSize = '3em';
  errorDiv.style.textAlign = 'center';

  
}

//EVENT LISTENERS

button.addEventListener('click', changeContent);



