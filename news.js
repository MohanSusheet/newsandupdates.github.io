const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
var t = 'india';

// async function fetchNewsEverything(temp){
//     const url = 'https://newsapi.org/v2/everything?q=';
//     const API = 'apiKey=a3584fc3e8584555b3a21ffaeccb9a43';
//     // const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a3584fc3e8584555b3a21ffaeccb9a43');
//     const response = await fetch(`${url}${temp}&${API}`);
//     console.log(`${url}${t}&${API}`);
//     const data = await response.json();
//     console.log(data.articles);
//     const newsContainer = document.querySelector('#news-container');
  
//         data.articles.forEach(article => {
//           const articleElement = document.createElement('article');
//           const titleElement = document.createElement('h2');
//           const descriptionElement = document.createElement('p');
//           const imageElement = document.createElement('img');
//           const authorElement = document.createElement('p');
//           const dateElement = document.createElement('p');
  
//           titleElement.textContent = article.title;
//           descriptionElement.textContent = article.description;
//           imageElement.src = article.urlToImage;
//           authorElement.textContent = `Author: ${article.author}`;
//           dateElement.textContent = `Date: ${article.publishedAt}`;
  
//           articleElement.appendChild(titleElement);
//           articleElement.appendChild(imageElement);
//           articleElement.appendChild(authorElement);
//           articleElement.appendChild(dateElement);
//           articleElement.appendChild(descriptionElement);
  
//           newsContainer.appendChild(articleElement);
//         });
//     // console.log(data);
// }

async function fetchNewsData(temp){
  const url = 'https://newsapi.org/v2/everything?q=';
  const API = 'apiKey=a3584fc3e8584555b3a21ffaeccb9a43';
  // const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a3584fc3e8584555b3a21ffaeccb9a43');
  const response = await fetch(`${url}${temp}&${API}`);
  console.log(`${url}${t}&${API}`);
  const data = await response.json();
  console.log(data.articles);
  const newsContainer = document.querySelector('#news-container');

      data.articles.forEach(article => {
        const articleElement = document.createElement('article');
        const titleElement = document.createElement('h2');
        const descriptionElement = document.createElement('p');
        const imageElement = document.createElement('img');
        const authorElement = document.createElement('p');
        const dateElement = document.createElement('p');

        titleElement.textContent = article.title;
        descriptionElement.textContent = article.description;
        imageElement.src = article.urlToImage;
        authorElement.textContent = `Author: ${article.author}`;
        dateElement.textContent = `Date: ${article.publishedAt}`;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(authorElement);
        articleElement.appendChild(dateElement);
        articleElement.appendChild(descriptionElement);

        newsContainer.appendChild(articleElement);
      });
  // console.log(data);
}

fetchNewsData(t);

searchButton.addEventListener('click', search());
function search(){
  t = searchInput.value;
  console.log(t);
  const tushar = document.getElementById("news-container");
  tushar.innerHTML = '';
  fetchNewsData(t);
}

// const everything = document.getElementById('everything');
// everything.addEventListener('click', every());
// function every(){
//   t = searchInput.value;
//   console.log(t);
//   const tushar = document.getElementById("news-container");
//   tushar.innerHTML = '';
//   fetchNewsEverything(t);
// }

function handleNavigation() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
  
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
}
  
handleNavigation();

document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscription-form');
  
    subscriptionForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const emailInput = document.getElementById('email-input');
      const email = emailInput.value;
  
      // Perform validation or other actions with the email value
  
      // Reset the form
      subscriptionForm.reset();
    });
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   const searchInput = document.getElementById('search-input');
  //   const searchButton = document.getElementById('search-button');
  
  //   searchButton.addEventListener('click', function() {
  //     const keyword = searchInput.value.toLowerCase();
  
  //     // Filter the news articles based on the keyword and display the results
  //     const filteredArticles = newsArticles.filter(function(article) {
  //       return article.title.toLowerCase().includes(keyword) ||
  //         article.description.toLowerCase().includes(keyword);
  //     });
  
  //     displayNewsArticles(filteredArticles);
  //   });
  // });

  function displayNewsArticles(articles) {
    const newsContainer = document.getElementById('news-container');
  
    // Clear existing content
    newsContainer.innerHTML = '';
  
    // Loop through the articles and generate HTML elements
    articles.forEach(function(article) {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = article.title;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = article.description;
  
      articleElement.appendChild(titleElement);
      articleElement.appendChild(descriptionElement);
  
      newsContainer.appendChild(articleElement);
    });
  }


  // const fadeIns = document.querySelectorAll('.fade-in');

  // // Function to check if an element is in the viewport
  // const isInViewport = (element) => {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // };
  
  // Function to handle the scroll event and trigger animations
  // const handleScroll = () => {
  //   fadeIns.forEach((element) => {
  //     if (isInViewport(element)) {
  //       element.classList.add('show');
  //     }
  //   });
  // };
  
  // Add scroll event listener to trigger animations on scroll
  // window.addEventListener('scroll', handleScroll);
  
  // // Trigger animations on page load
  // handleScroll();

const form = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');

// Function to validate the email address using a regular expression
const isEmailValid = (email) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
};

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault(); // Prevent form submission

  const email = emailInput.value.trim();

  // Check if the email address is valid
  if (isEmailValid(email)) {
    // Clear error state and submit the form
    emailInput.classList.remove('error');
    errorMessage.classList.add('hidden');
    form.submit();
  } else {
    // Show error message and mark input as error
    emailInput.classList.add('error');
    errorMessage.classList.remove('hidden');
  }
};

// Add form submission event listener
form.addEventListener('submit', handleFormSubmit);
