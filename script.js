// JavaScript for handling carousel item changes and video modal
const movieCarousel = document.getElementById("movieCarousel");
const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");
const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
const movieVideo = document.getElementById("movieVideo");
const videoSource = document.getElementById("videoSource");

// Movie data (from PHP)
const movies = [
  {
    title: "Despicable Me 4",
    description: "Gru, once a notorious villain, is now a loving father and husband. In this latest adventure, Gru finds himself in a new chapter of his life, balancing family responsibilities with his villainous past. When a new villain emerges, threatening the peace, Gru must reunite with his mischievous Minions to stop the chaos. Between hilarious heists, heartwarming moments with his daughters, and an unexpected new threat, Gru’s life is turned upside down once more, in a story that emphasizes family, redemption, and the unpredictable nature of villainy.",
    video: "Trailers/DM4.mp4",
  },
  {
    title: "Elemental",
    description: "Set in a vibrant world where the four elements—fire, water, earth, and air—live in harmony, Elemental follows Ember, a fiery and passionate young woman, and Wade, a laid-back water dweller. They come from two different worlds that have long been kept apart due to their elemental differences. When the two are forced to work together, they discover that their contrasting personalities and abilities might be the key to bridging the gap between their communities. Along the way, Ember must navigate her ambitions and heritage, while Wade learns to let go of his fears and insecurities, exploring themes of identity, diversity, and belonging.",
    video: "Trailers/ELEM.mp4",
  },
  {
    title: "How to Train Your Dragon",
    description: "In a village of fierce Viking warriors, young Hiccup is anything but the fierce fighter his father expects him to be. His life changes when he befriends a dragon named Toothless, one of the most feared creatures in the land. As Hiccup learns to understand and communicate with the dragon, he realizes that the long-standing war between humans and dragons is built on misunderstanding. Together, they work to change the way the villagers view dragons, showing that peace and understanding are the key to harmony. This heartfelt adventure explores themes of courage, friendship, and the transformative power of challenging norms.",
    video: "Trailers/HTTYD.mp4",
  },
  {
    title: "Howl's Moving Castle",
    description: "Sophie, a young woman living a quiet life, is cursed by a jealous witch and transformed into an elderly woman. Desperate to break the curse, Sophie sets out on a journey and ends up in the magical, ever-moving castle of the mysterious wizard Howl. Amidst fantastical creatures, shifting landscapes, and the shadow of war, Sophie discovers Howl’s own secrets and the depths of his heart. The film beautifully explores themes of love, self-acceptance, the effects of war, and the power of transformation. It’s a visually stunning adventure filled with magic, mystery, and a deep emotional journey.",
    video: "Trailers/HMC.mp4",
  },
  {
    title: "My Neighbor Totoro",
	description: "Two young sisters, Satsuki and Mei, move to the countryside to be closer to their ill mother. As they explore their new home, they encounter a variety of magical creatures, including the gentle, lovable Totoro, a forest spirit who becomes their guide and protector. Along with their adventures with Totoro and other fantastical beings, the girls learn to navigate their emotions, face challenges, and cherish the beauty of nature. My Neighbor Totoro is a celebration of childhood innocence, the wonder of the natural world, and the importance of family and imagination.",
    video: "Trailers/MNT.mp4",
  },
  {
    title: "Spirited Away",
	description: "Chihiro, a young girl, finds herself trapped in a mysterious, otherworldly realm after her parents are transformed into pigs. To survive and find a way back to the human world, Chihiro takes a job in a bathhouse run by the enigmatic witch Yubaba. As she faces various strange and magical beings, Chihiro’s journey becomes one of personal growth, as she learns about courage, responsibility, and friendship. With stunning animation and a richly detailed world, Spirited Away is a powerful tale of self-discovery and resilience, highlighting the significance of empathy and the need to protect the environment.",
    video: "Trailers/SA.mp4",
  },
  {
    title: "Spider-Man: Across the Spiderverse",
	description: "In this visually groundbreaking sequel, Miles Morales, the young Spider-Man from Brooklyn, is thrust into a multiverse of infinite Spider-People. After being recruited by a group of Spider-heroes from other dimensions, Miles must face a new threat that could destroy the fabric of reality itself. As he journeys across different universes, Miles grapples with his role as Spider-Man and the challenges of balancing his personal life with his superhero responsibilities. The film delves into identity, sacrifice, and the meaning of heroism, all while offering an exhilarating, action-packed experience.",
    video: "Trailers/SM.mp4",
  },
  {
    title: "The Lego Movie",
	description: "Emmet, an ordinary, rule-abiding Lego construction worker, finds himself mistaken for the 'Special,' the prophesied hero destined to save the Lego universe from the evil tyrant Lord Business. Alongside a group of unlikely heroes, including the rebellious Wyldstyle and the ever-grumpy Batman, Emmet embarks on a hilarious and action-filled journey to stop Lord Business's plan to freeze the world in place. With its clever humor, vibrant animation, and underlying messages about creativity and self-worth, The Lego Movie is a fun-filled adventure that celebrates the power of imagination and individuality.",
    video: "Trailers/TLM.mp4",
  },
  {
    title: "Transformer's One",
	description: "This prequel to the Transformers saga delves into the early days of the war between the Autobots and Decepticons on their home planet of Cybertron. The story focuses on the origins of Optimus Prime and Megatron, exploring their shared past, idealistic beginnings, and the events that led to their ultimate rivalry. As the war escalates, both leaders struggle with their respective visions for their world’s future, questioning loyalty, power, and justice. Transformers: One is a deep dive into the history of Cybertron, filled with action, political intrigue, and the personal dilemmas that shape the destiny of the Autobots and Decepticons.",
    video: "Trailers/TO.mp4",
  },
  {
    title: "Whisper of the Heart",
	description: "Shizuku, a curious and imaginative young girl, dreams of becoming a writer. Her life takes a turn when she stumbles upon a mysterious antique cat figurine and embarks on a journey that will lead her to discover more about herself and her talents. Along the way, Shizuku meets Seiji, a talented violin maker who shares her passion for creativity. Together, they encourage each other to pursue their dreams, but not without facing challenges along the way. Whispers of the Heart is a tender coming-of-age story about love, self-discovery, and the courage it takes to follow one’s passions.",
    video: "Trailers/WOFTH.mp4",
  },
];

function updateMovieDescription(index) {
  movieTitle.textContent = movies[index].title;
  movieDescription.textContent = movies[index].description;
}

movieCarousel.addEventListener("slide.bs.carousel", (event) => {
  const activeIndex = event.to;
  updateMovieDescription(activeIndex);
});

updateMovieDescription(0);

movieCarousel.addEventListener("click", (event) => {
  const carouselItem = event.target.closest(".carousel-item");
  if (!carouselItem) return;

  const activeIndex = Array.from(movieCarousel.querySelectorAll(".carousel-item")).indexOf(carouselItem);
  const videoPath = movies[activeIndex].video;

  videoSource.src = videoPath;
  movieVideo.load(); 
  videoModal.show();
});

const closeButton = document.querySelector('.btn-close');  

closeButton.addEventListener('click', () => {
  movieVideo.pause();  
  movieVideo.currentTime = 0;  
});

