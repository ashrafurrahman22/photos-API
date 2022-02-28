const photosDiv = document.getElementById('photos');
const detailsDiv = document.getElementById('details');

const loadPhotos = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhotos(data))
}


const displayPhotos = (photos) => {
    for(const photo of photos) {

        detailsDiv.textContent = '';
        photosDiv.style.display = 'block'


        const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Id: ${photo.id}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onclick="photoDetails(${photo.id})" class="bg-primary p-2 text-white rounded-3">Check Details</button>
  </div>
</div>    <br> <br>
    `;
    photosDiv.appendChild(newDiv);
// console.log(photo);

    }   
}

const photoDetails = info => {
    const url2 = `https://jsonplaceholder.typicode.com/photos/${info}`
    fetch(url2)
    .then(res => res.json())
    .then(data=> displayDetails(data))
}

const displayDetails = details => {
    const newDiv2 = document.createElement('div');
    newDiv2.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${details.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Id: ${details.id}</h5>
    <h5 class="card-title">Title: ${details.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> 
    `;
    detailsDiv.appendChild(newDiv2);

        photosDiv.style.display = 'none';
}