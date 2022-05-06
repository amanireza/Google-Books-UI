// Breakdown of steps

// 1. Create a form
// 2. Get the input
// 3. process the input
// 4. validate the input
// 5. pass it into the api call
// 6. once in the api call, understand the data

import { getBooks } from "./api.js";

const pageForm = document.querySelector("#pageForm");

const createBookCard = (cardObj) => {
	const imageSource = cardObj.imageLinks;
	return `
  <div class="card">
  <div class="card__left">
  <h2>${cardObj.title}</h2>
  <p class="authors">${cardObj.authors.join(", ") ?? "Author not provided"}</p> 
  <img src=${imageSource.thumbnail ?? "image not available"}/>  
  </div>
  <div class="card__desc">
  <p>${cardObj.description ?? "Description not provided"}</p>
  </div>
  </div>
  `;
};

pageForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);

	const bookQuery = formData.get("bookQuery");

	const bookResponse = await getBooks(bookQuery);
	console.log(bookResponse);
	const bookCards = bookResponse.map(createBookCard);

	const bookOutputElement = document.querySelector("#cards");
	bookOutputElement.innerHTML = bookCards.join("");
});
