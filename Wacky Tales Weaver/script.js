// List of image filenames in the "images" folder
const imageList = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg', 'image5.jpg', 'image6.jpg'];
// Initialize story variable
let story = '';

// Function to add a snippet to the tale
function addToStory(message) {
  story += message;
  document.getElementById('story-display').innerText = story;
}

// Function to flip the image
function flipImage(imgElement, imageName, message) {
  imgElement.src = `images/${imageName}`;
  imgElement.classList.add('flipped');
  setTimeout(() => {
    imgElement.classList.remove('flipped');
  }, 1000); // Adjust the duration of the flip animation
  addToStory(message);
}
// Function to reset the game
function resetGame() {
  story = '';
  document.getElementById('story-display').innerText = '';
  // Reset all images to "blank.jpg"
  document.querySelectorAll('#story-images img').forEach((imgElement) => {
    imgElement.src = 'images/blank.png';
    imgElement.classList.remove('flipped');
  });
}

// Dynamically create image buttons and add onclick event
const imageContainer = document.getElementById('story-images');
imageList.forEach((imageName, index) => {
  const imgElement = document.createElement('img');
  imgElement.src = 'images/blank.png'; // Initial blank image
  imgElement.alt = imageName;
  
  // Example story messages corresponding to each image
  const storyMessages = [
    "Once upon a time, a lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion’s sleep, and he woke up quite angry,",
    " He was about to eat the mouse when the mouse desperately requested the lion to set him free, ",
    " “I promise you, I will be of great help to you someday if you save me.” The lion laughed at the mouse’s confidence and let him go.",
    " One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper,",
    " Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle.",
    " Moral of the Story: A small act of kindness goes a long way."
  ];

  imgElement.onclick = () => {
    const message = `${storyMessages[index]}`;
    flipImage(imgElement, imageName, message);
  };

  const buttonElement = document.createElement('button');
  buttonElement.appendChild(imgElement);
  imageContainer.appendChild(buttonElement);
});