<?php
// Define an array of movies with their image and video file names
$movies = [
    [
        "image" => "Posters/DM4.jpg",
        "video" => "Trailers/DM4.mp4",
        "title" => "Despicable Me 4",
        "description" => ""
    ],
    [
        "image" => "Posters/ELEM.jpg",
        "video" => "Trailers/ELEM.mp4",
        "title" => "Elemental",
        "description" => ""
    ],
    [
        "image" => "Posters/HTTYD.jpg",
        "video" => "Trailers/HTTYD.mp4",
        "title" => "How to Train Your Dragon",
        "description" => ""
    ],
    [
        "image" => "Posters/HMC.jpg",
        "video" => "Trailers/HMC.mp4",
        "title" => "Howl's Moving Castle",
        "description" => ""
    ],
	[
        "image" => "Posters/MNT.jpg",
        "video" => "Trailers/MNT.mp4",
        "title" => "My Neighbor Totoro",
        "description" => ""
    ],
	[
        "image" => "Posters/SA.jpg",
        "video" => "Trailers/SA.mp4",
        "title" => "Spirited Away",
        "description" => ""
    ],
	[
        "image" => "Posters/SM.jpg",
        "video" => "Trailers/SM.mp4",
        "title" => "Spider-Man: Across the Spiderverse",
        "description" => ""
    ],
	[
        "image" => "Posters/TLM.jpg",
        "video" => "Trailers/TLM.mp4",
        "title" => "The Lego Movie",
        "description" => ""
    ],
	[
        "image" => "Posters/TO.jpg",
        "video" => "Trailers/TO.mp4",
        "title" => "Transformer's One",
        "description" => ""
    ],
	[
        "image" => "Posters/WOFTH.jpg",
        "video" => "Trailers/WOFTH.mp4",
        "title" => "Whispers of the Heart",
        "description" => ""
    ],
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FoReel</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <img src="FoReel Logo.png" alt="FoReel Logo" class="site-logo">
  </header>

  <!-- Main content area -->
	<main class="container my-4">
	  <div class="carousel-container d-flex">
		<!-- Carousel -->
		<div id="movieCarousel" class="carousel slide flex-grow-1 me-3" data-bs-ride="carousel" data-bs-interval="5000">
		  <div class="carousel-inner" id="carouselContent">
			<?php
			foreach ($movies as $index => $movie) {
			  $activeClass = ($index === 0) ? 'active' : '';
			  echo "
				<div class='carousel-item $activeClass' data-title='{$movie['title']}' data-description='{$movie['description']}' data-video='{$movie['video']}'>
				  <img src='{$movie['image']}' class='d-block w-100 carousel-image' alt='{$movie['title']}'>
				</div>
			  ";
			}
			?>
		  </div>
		  <button class="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		  </button>
		</div>

		<!-- Movie Description -->
		<div class="movie-description flex-shrink-1">
		  <h4 id="movieTitle" class="retro-title">Movie Title</h4>
		  <p id="movieDescription">Select a movie to see its description here.</p>
		</div>
	  </div>
	</main>

  <!-- Modal for Video Playback -->
  <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="videoModalLabel">Movie Trailer</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <video id="movieVideo" class="w-100" controls>
            <source id="videoSource" src="" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
