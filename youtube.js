import {videos} from '../data/videos.js';

let videosHTML  = '';

videos.forEach((video) => {
 
  videosHTML += `
    <div class="video-preview">
      <div class="thumbnail-row">
        <img class="thumbnail js-thumbnail" data-video-url ="${video.url}" src="${video.thumbnail}">
        <div class="video-time">${video.time}</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture"
           src="${video.profile}">
        </div>
        <div class="video-info">
          <p class="video-title">
            ${video.title}
          </p>
          <p class="video-author">
           ${video.author}
          </p>
          <p class="video-stats">
            ${video.stats}
          </p>
        </div>
      </div>
  </div>
  `;
})
//console.log(videosHTML);

document.querySelector('.js-video-grid').innerHTML = videosHTML;

function openTab(url,target) {
  window.open(url);
  }

document.querySelector('.youtube-logo').addEventListener('click', () => {
  window.open('https://www.youtube.com/','_blank');

});

document.querySelector('.home').addEventListener('click', () => {
 //console.log('home');
  window.open('https://www.youtube.com/','_blank');

});

document.querySelector('.music').addEventListener('click', () => {
  //console.log('home');
   window.open('https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ/','_blank');
 
 });

 document.querySelector('.search-icon').addEventListener('click', () => {
  console.log('search');
   //window.open('https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ/','_blank');
 
 });

 document.querySelector('.search-bar').addEventListener('Enter', () => {
  console.log('enter');
   //window.open('https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ/','_blank');
 
 });
  
document.querySelectorAll('.js-thumbnail').forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    console.log("hello");
    const videoUrl = thumbnail.dataset.videoUrl;
    //addToCart(productId);
    //updateCartQuantity()
    openTab(videoUrl,'_blank');
      
   //console.log(videoUrl);
  });
    //console.log(cart);
  });