function filterCategories() {
  const searchBar = document.getElementById('search-bar');
  const filter = searchBar.value.toLowerCase();
  const categories = document.getElementsByClassName('category');

  for (let category of categories) {
    const categoryName = category.getElementsByTagName('h2')[0].innerText.toLowerCase();
    const items = category.getElementsByTagName('li');
    let anyItemVisible = false;

    // Check if the category matches the search input
    const categoryMatches = categoryName.includes(filter);

    for (let item of items) {
      const itemName = item.innerText.toLowerCase();
      const itemMatches = itemName.includes(filter);

      // Show/hide item based on search input
      if (itemMatches) {
        item.style.display = ''; // Show matching item
        anyItemVisible = true;
        item.innerHTML = highlightMatch(item.innerText, filter);
      } else {
        item.style.display = 'none'; // Hide non-matching item
      }
    }

    // Show or hide category based on items' visibility
    category.style.display = categoryMatches || anyItemVisible ? '' : 'none';
  }
}

// Function to highlight the matching text
function highlightMatch(text, search) {
  const regex = new RegExp(`(${search})`, 'gi');
  return text.replace(regex, '<span class="bg-yellow-300">$1</span>');
}
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call fake spaghetti? An impasta!",
  "Why don’t skeletons fight each other? They don’t have the guts!",
  "What do you get when you cross a snowman and a vampire? Frostbite!"
];

document.getElementById('get-started').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]; // Get a random joke
  alert(randomJoke); // Display the joke in an alert
});
