//Hamburger EventListener
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// MY CODE ATTEMPT, had issues due to DOM loading AFTER the javascript.
// used a defer attribute in the head tag with my script link to fix
// const hamburger = document.querySelector
// ('.hamburger');
// const navMenu = document.querySelector
// ('.nav-menu');
// hamburger.addEventListener("click", ()  =>
// {
//     hamburger.classList.toggle(" active");
//     navMenu.classList.toggle(" active");
// });
// document.querySelectorAll(".nav-link").
// forEach((n) =>
//     n.addEventListener("click",() => {
// hamburger.classList.remove("active");
// navMenu.classList.remove("active");
// })
// );

const photoListEl = document.querySelector(".photo-list");
const photoWrapper = document.querySelector(".photo")

let photosData = [];

async function main() {
  const response = await fetch("https://picsum.photos/v2/list");
  photoWrapper.classList.add("photo__loading");
  photosData = await response.json();
  photoWrapper.classList.remove("photo__loading");

  displayPhotos(10, 16);

//   photoListEl.innerHTML = photosData.map((photo) => photoHTML(photo)).slice(10, 16).join("");
}

main();

function displayPhotos(start, end) {
    const photosToDisplay = photosData.slice(start, end);
    photoListEl.innerHTML = photosToDisplay.map((photo) =>
 photoHTML(photo)).join("");
}

function onSearchChange(event) {
    const count = parseInt(event.target.value) * 6;
    if (count <= photosData.length) {
        displayPhotos (0, count);
    }
    else {
        displayPhotos(0, photosData.length);
    }


    // console.log(event.target.value);
}

// function showPhotoPosts(id) {
//   localStorage.setItem("id", id);
//   window.location.href = `${window.location.origin}/user.html`;
// }

function photoHTML(photo) {
  return `<div class="photo-card">
 <div class="photo-card__container">
   <img src="${photo.download_url}" alt="">
    <p><b>Author:</b> ${photo.author}</p>
    <p><b>Website:</b> <a href="${photo.url}" target="_blank"> ${photo.id}</a></p>
 </div>
</div>`;
}

// `<div class="user-card" onclick="showUserPosts(${user.id})" >
//              <div class="user-card__container">
//                <h3>${user.name}</h4>
//                  <p><b>Email:</b> ${user.email}</p>
//                  <p><b>Phone:</b> ${user.phone}</p>
//                  <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
//              </div>
//            </div>`;



/* AI CODE */

// let currentPage = 0; // To keep track of current batch

// async function fetchItems(page) {
//     const response = await fetch(`https://api.example.com/items?_page=${page}&_limit=6`);
//     const data = await response.json();
//     return data;
// }

// async function loadItems() {
//     const items = await fetchItems(currentPage);
//     const itemContainer = document.getElementById('itemContainer');

//     items.forEach(item => {
//         const div = document.createElement('div');
//         div.innerText = item.name; // Adjust according to your item structure
//         itemContainer.appendChild(div);
//     });

//     currentPage++; // Increment the page for the next batch
// }

// document.getElementById('loadMore').onclick = loadItems; // Attach onclick event