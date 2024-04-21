/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

//function chooseRandomGenre() {
 // Deliverable 1: Your code here 👇
  function chooseRandomGenre() {
    // Get a random number between 0 and 2 to select a random index for the genres array
    let randomIndex = getRandomNumber(0, 2);

    // Use the random index to select a genre from the array
    let randomGenre = ["drama", "fantasy", "comedy"][randomIndex];

    // Return the randomly selected genre
    return randomGenre;
  }

  
//}

//function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  
//}

function displayRandomShow(genre) {
  if (genre === "random") {
    // If the genre is "random", choose a random genre
    genre = chooseRandomGenre();
  }

  // Select the corresponding array of shows based on the genre
  let shows;
  if (genre === "drama") {
    shows = dramaShows;
  } else if (genre === "fantasy") {
    shows = fantasyShows;
  } else if (genre === "comedy") {
    shows = comedyShows;
  } else {
    // If the genre is not recognized, log an error and return early
    console.error("Invalid genre:", genre);
    return;
  }

  // Get a random index within the range of the shows array
  let randomIndex = getRandomNumber(0, shows.length - 1);

  // Use the random index to select a random show from the shows array
  let randomShow = shows[randomIndex];

  // Display the randomly selected show on the webpage
  displayShow(randomShow);
}
