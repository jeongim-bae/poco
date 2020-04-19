// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking 
// the right suffix for the number based on what it is.

var topChoice = ["green", "red", "blue", "yellow"];
console.log("My #1 choice is " + topChoice[0]);
console.log("My #2 choice is " + topChoice[1]);
console.log("My #3 choice is " + topChoice[2]);
console.log("My #4 choice is " + topChoice[3]);

var favoriteActors = [{firstName : "Jony", lastName : "Deepp"},
                      {firstName: "Michael", lastName : "Jackson"},
                      {firstName: "Mohammad", lastName: "Khavari"}
                    ];
console.log("My #1 choice is " + favoriteActors[0].firstName + " " + favoriteActors[0].lastName);
console.log("My #1 choice is " + favoriteActors[0]["firstName"] + " " + favoriteActors[0]["lastName"]);
console.log("My #2 choice is " + favoriteActors[1].firstName + " " + favoriteActors[1].lastName);
