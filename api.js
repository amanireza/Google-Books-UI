// Breakdown of steps

// 1. Create a form
// 2. Get the input
// 3. process the input
// 4. validate the input
// 5. pass it into the api call
// 6. once in the api call, understand the data

export const getBooks = async (searchTerm = "") => {
	const responsePromise = fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
	);
	console.log(responsePromise);
	const response = await responsePromise;

	const jsonResponse = await response.json();
	console.log(jsonResponse);
	console.log(jsonResponse.items);

	const bookArray = jsonResponse.items;

	const bookInfo = bookArray.map((n) => n.volumeInfo);
	console.log(bookInfo);
	return bookInfo;

	// const data = await response.json();
	// return data;
};
