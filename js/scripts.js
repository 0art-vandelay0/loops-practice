window.addEventListener("load", function () {
    const h1 = document.querySelector("h1");

    const flavors = ["Pistachio", "Vanilla", "Strawberry", "Mint Chocolate Chip", "Cookies and Cream"];
    const ul = document.getElementById("flavors-list");
    flavors.forEach(function (flavor) {
        // Create a list item element
        const li = document.createElement("li");

        // Set the text content of the list item to the flavor
        li.append(flavor);

        // Append the list item to the list
        ul.append(li);
    });
});


/// ----- Open and in browser to see the following results-----//
// const friends = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// friends.forEach(function (friend) {
//     console.log(friend);
// });

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number) {
//     console.log(number * 2);
// });