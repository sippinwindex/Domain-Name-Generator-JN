import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

};

// Domain name generator
// we will be using multiple arrays
// we want to output every possible permutation using each item in our arrays

// 1. create a set of arrays to make our permuatations

// let pronoun = ['the', 'our', 'your', 'my', 'her', 'his'];
// let adjective = ['great', 'happy', 'genius', 'silly', 'incredible'];
// // let nouns = ['dog', 'panda', 'rat', 'alpaca', 'shark', 'byson'];
// let noun = ['capcom', 'sitcom', 'telecom', 'amazon'];

// // console.log('thegreatdog.com')
// // for (let item of pronoun) {
// //   console.log(item);
// // }
// // for (let item of adjective) {
// //   console.log(item);
// // }
// // for (let item of noun) {
// //   console.log(item);
// // }

// for(let i = 0; i < pronoun.length; ++i) {
//   for (let j = 0; j < adjective.length; ++j) {
//     for (let k = 0; k < noun.length; ++k) {
//       for (let o = 0; o < extension.length; ++o) {
//         console.log(pronoun[i] + adjective[j] + noun[k] + extension[o]);
//       }
//     }
//   }
// }
// function generateRandomDomain() {
//   const pronoun = "the"; // Fixed to always be "the"
//   const adjectives = ['great', 'happy', 'genius', 'silly', 'incredible'];
//   const nouns = ['dog', 'panda', 'rat', 'alpaca', 'shark'];
//   const extensions = ['.com', '.net', '.org', '.dev', '.us'];

//   // Randomly select one element from each array
//   const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//   const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
//   const randomExtension = extensions[Math.floor(Math.random() * extensions.length)];

//   // Concatenate to form the domain name
//   return pronoun + randomAdjective + randomNoun + randomExtension;
// }
// console.log(generateRandomDomain());

// for (let i = 0; i < pronoun.length; ++i) {
//   for (let j = 0; j < adjective.length; ++j) {
//     for (let n=0; n < noun.length; ++n) {

//     }
//   }
// }

// function process_noun (noun) {
//   if (noun.endsWith("com")) {
//       // Remove "com" and add ".com"
//       return noun.slice(0, -3) + ".com";
//   } else {
//       // Leave it unchanged and add ".com"
//       return noun + ".com";
//   }
// }

// function generateRandomDomain() {
//   const pronoun = ['the', 'our', 'your', 'my', 'her', 'his'];
//   const adjective = ['great', 'happy', 'genius', 'silly', 'incredibly'];
//   const noun = ['capcom', 'sitcom', 'telecom', 'amazon'];
  
//   function processNoun(noun) {
//       if (noun.endsWith("com")) {
//           return noun.slice(0, -3) + ".com";
//       } else {
//           return noun + ".com";
//       }
//   }
  
//   // Select random elements
//   let random_pronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
//   let random_adjective = adjective[Math.floor(Math.random() * adjective.length)];
//   let random_noun = noun[Math.floor(Math.random() * noun.length)];
  
//   let domain = random_pronoun + random_adjective + processNoun(random_noun);
//   return domain;
// }

// document.addEventListener('DOMContentLoaded', function() {
//   let listElement = document.querySelector('.domain');
//   let domain = generateRandomDomain();
//   let li = document.createElement('li');
//   li.textContent = domain;
//   listElement.appendChild(li);
// });

// 2. querySelect the <ul> classname to add to list 
//let listElement = document.querySelector('.domain');

// 3 create a nested for loop to iterate through all items
const pronoun = ['the', 'our', 'your', 'my', 'her', 'his'];
const adjective = ['great', 'happy', 'genius', 'silly', 'incredibly'];
const noun = ['capcom', 'sitcom', 'telecom', 'amazon'];

function processNoun(noun) {
    if (noun.endsWith("com")) {
        return noun.slice(0, -3) + ".com";
    } else {
        return noun + ".com";
    }
}

function generateAllDomains() {
  let allDomains = [];
  for (let p of pronoun) {
    for (let a of adjective) {
      for (let n of noun) {
        let domain = p + a + processNoun(n);
        allDomains.push(domain);
      }
    }
  }
  return allDomains;
}

// document.addEventListener('DOMContentLoaded', function() {
//   let listElement = document.querySelector('.domain');
//   let allDomains = generateAllDomains();
//   for (let domain of allDomains) {
//     let li = document.createElement('li');
//     li.innerHTML = `<i class="fas fa-map-pin"></i> ${domain}`
//     listElement.appendChild(li);
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  let listElement = document.querySelector('.domain');
  let allDomains = generateAllDomains();
  for (let domain of allDomains) {
    let colDiv = document.createElement('div');
    colDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-3');
    colDiv.innerHTML = `
      <div class="card">
        <div class="card-body">
          <img src="./assets/img/map-pin.png" alt="Map Pin" class="float-start me-2" width="30" height="30">
          <p class="card-text">${domain}</p>
        </div>
      </div>
    `;
    listElement.appendChild(colDiv);
  }
});

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset;
  let parallaxDiv = document.querySelector('.parallax-background');
  let backgroundPositionY = -scrollTop * 0.5; // Move at half speed for parallax
  parallaxDiv.style.backgroundPosition = `center ${backgroundPositionY}px`;
});

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset;
  let parallaxDiv = document.querySelector('.parallax-background');
  let backgroundPositionY = -scrollTop * 0.5;
  parallaxDiv.style.backgroundPosition = `center ${backgroundPositionY}px`;

  let images = document.querySelectorAll('.domain .card img');
  images.forEach(function(image) {
    let card = image.closest('.card');
    let cardTop = card.getBoundingClientRect().top;
    let cardHeight = card.offsetHeight;
    let scrollPercent = (scrollTop - (cardTop + window.pageYOffset - window.innerHeight)) / cardHeight;
    let translateValue = scrollPercent * 10; // Adjust movement speed
    image.style.transform = `translateY(${translateValue}px)`;
  });
});

let lastScrollTop = 0;
function handleScroll() {
  let scrollTop = window.pageYOffset;
  if (scrollTop === lastScrollTop) return;
  lastScrollTop = scrollTop;
  requestAnimationFrame(function() {
    let parallaxDiv = document.querySelector('.parallax-background');
    let backgroundPositionY = -scrollTop * 0.5;
    parallaxDiv.style.backgroundPosition = `center ${backgroundPositionY}px`;

    let images = document.querySelectorAll('.domain .card img');
    images.forEach(function(image) {
      let card = image.closest('.card');
      let cardTop = card.getBoundingClientRect().top;
      let cardHeight = card.offsetHeight;
      let scrollPercent = (scrollTop - (cardTop + window.pageYOffset - window.innerHeight)) / cardHeight;
      let translateValue = scrollPercent * 10;
      image.style.transform = `translateY(${translateValue}px)`;
    });
  });
}
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
  let listElement = document.querySelector('.domain');
  let allDomains = generateAllDomains();
  
  // Clear existing content
  listElement.innerHTML = '';
  
  for (let domain of allDomains) {
    let colDiv = document.createElement('div');
    colDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
    colDiv.innerHTML = `
      <div class="card">
        <div class="card-body text-center">
          <i class="fas fa-globe domain-icon mb-3"></i>
          <h5 class="card-title domain-name">${domain}</h5>
        </div>
      </div>
    `;
    listElement.appendChild(colDiv);
  }
});
