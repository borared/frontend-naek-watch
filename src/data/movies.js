const movies = [
	{
    id: 1,
    title: "AKIRA",
	type: "movie",
    categories: ["top", "anime"],
    director: "DIRECTED BY KATSUHIRO OTOMO",
    tagline: "NEO-TOKYO IS ABOUT TO EXPLODE",
    videoUrl:
        "https://www.youtube.com/embed/vCztcYOimt4?autoplay=1&mute=1&controls=0&playlist=vCztcYOimt4&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=vCztcYOimt4",
    poster:
        "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://i.redd.it/j7o826q9j5x81.jpg",
    year: "1988",
    rating: "8.0",
    duration: "2h 04m",
    synopsis: "In a dystopian Neo-Tokyo, a secret military project turns a biker gang member into a rampaging psionic psychopath who can only be stopped by his best friend.",
    accent: "bg-red-600",
},

	{
		id: 2,
		title: "DUNE",
		type: "movie",
		categories: ["top", "trending"],
		director: "FROM DIRECTOR DENIS VILLENEUVE",
		tagline: "IT BEGINS",
		videoUrl:
			"https://www.youtube.com/embed/n9xhJrPXop4?autoplay=1&mute=1&controls=0&playlist=n9xhJrPXop4&loop=1",
		trailerUrl: "https://www.youtube.com/watch?v=n9xhJrPXop4",
		poster:
			"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911862/image_muln23.jpg",
		backdrop:
			"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911862/image_muln23.jpg",
		image:
			"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911862/image_muln23.jpg",
		year: "2021",
		rating: "8.1",
		duration: "2h 35m",
		synopsis:
			"A noble family becomes embroiled in a war for control over Arrakis.",
		accent: "bg-orange-500",
	},

	{
    id: 3,
    title: "AVENGERS: ENDGAME",
	type: "movie",
    categories: ["top", "action"],
    director: "DIRECTED BY ANTHONY & JOE RUSSO",
    tagline: "AVENGE THE FALLEN",
    videoUrl:
        "https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1&mute=1&controls=0&playlist=TcMBFSGVi1c&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    poster:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    year: "2019",
    rating: "8.4",
    duration: "3h 01m",
    synopsis: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand.",
    accent: "bg-purple-600",
    },

	
	{
		id: 4,
		title: "THE BATMAN",
		type: "movie",
		categories: ["trending"],
		director: "FROM DIRECTOR MATT REEVES",
		tagline: "UNMASK THE TRUTH",
		videoUrl:
			"https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&mute=1&controls=0&playlist=mqqft2x_Aa4&loop=1",
		trailerUrl: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
		poster:
			"https://images.unsplash.com/photo-1542204625-3b4efe2b8b5d?auto=format&fit=crop&w=800&q=80",
		backdrop:
			"https://images.unsplash.com/photo-1542204625-3b4efe2b8b5d?auto=format&fit=crop&w=1400&q=80",
		image:
			"https://m.media-amazon.com/images/S/pv-target-images/3de84cca07fc963b66a01a5465c2638066119711e89c707ce952555783dd4b4f.jpg",
		year: "2022",
		rating: "7.8",
		duration: "2h 55m",
		synopsis: "A dark detective story exploring Gotham's corruption.",
		accent: "bg-zinc-700",
	},

	{
    id: 5,
    title: "NOBODY",
	type: "movie",
    categories: ["top", "trending", "animation", "fantasy"],
    director: "DIRECTED BY YU SHUI",
    tagline: "EVERY LITTLE DEMON HAS A BIG DREAM",
    videoUrl:
        "https://www.youtube.com/embed/-uS4B9xhia8?autoplay=1&mute=1&controls=0&playlist=-uS4B9xhia8&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=-uS4B9xhia8",
    poster:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://images.china.cn/site1007/2025-08/03/118008645_50a58fa9-07ff-4837-8139-a771c0079a81.jpg",
    year: "2025",
    rating: "8.6",
    duration: "1h 58m",
    synopsis: "In a world of legendary heroes, four low-ranking 'nobody' demons—a pig, a toad, a weasel, and a gorilla—decide to impersonate the famous pilgrims from Journey to the West to find their own purpose and escape their mundane lives.",
    accent: "bg-emerald-700",
    },

	

	
	

	//Top Only Movie
	{
    id: 6, // Adjust ID as needed for your list
    title: "AVATAR",
	type: "movie",
    categories: ["top", "sci-fi"],
    director: "DIRECTED BY JAMES CAMERON",
    tagline: "ENTER THE WORLD",
    videoUrl:
        "https://www.youtube.com/embed/5PSNL1qAk6Y?autoplay=1&mute=1&controls=0&playlist=5PSNL1qAk6Y&loop=1",
    trailerUrl: "https://www.watch?v=5PSNL1qAk6Y",
    poster:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJPOxfRiaHwXkICnf6LKMHIPWJPGLx8wht-wZH-qFs0OXXUCBvOeCQTs79z7Bx9odsdsB&s=10",
    year: "2009",
    rating: "7.9",
    duration: "2h 42m",
    synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    accent: "bg-teal-500",
    },
	
	{
    id: 7,
	type: "movie",
    title: "THE HOBBIT: THE DESOLATION OF SMAUG",
    categories: ["top", "adventure", "fantasy"],
    director: "DIRECTED BY PETER JACKSON",
    tagline: "BEYOND DARKNESS... WAITS FIRE",
    videoUrl:
        "https://www.youtube.com/embed/fnaojlmfxeA?autoplay=1&mute=1&controls=0&playlist=fnaojlmfxeA&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=fnaojlmfxeA",
    poster:
        "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_FMjpg_UX1000_.jpg",
    year: "2013",
    rating: "7.8",
    duration: "2h 41m",
    synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
    accent: "bg-amber-600",
    },
	{
    id: 8,
	type: "movie",
    title: "AVENGERS: INFINITY WAR",
    categories: ["top", "action"],
    director: "DIRECTED BY ANTHONY & JOE RUSSO",
    tagline: "AN ENTIRE UNIVERSE. ONCE AND FOR ALL.",
    videoUrl:
        "https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1&controls=0&playlist=6ZfuNTqbHE8&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
    poster:
        "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    year: "2018",
    rating: "8.4",
    duration: "2h 29m",
    synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    accent: "bg-orange-500",
    },

	{
    id: 9,
	type: "movie",
    title: "KUNG FU HUSTLE",
    categories: ["top", "trending", "action", "comedy"],
    director: "DIRECTED BY STEPHEN CHOW",
    tagline: "SO MANY GANGSTERS, SO LITTLE TIME",
    videoUrl:
        "https://www.youtube.com/embed/cy9pXof_O-0?autoplay=1&mute=1&controls=0&playlist=cy9pXof_O-0&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=cy9pXof_O-0",
    poster:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://m.media-amazon.com/images/M/MV5BNGU2OWVlM2ItZGZlOC00Yzk2LWE1NzEtMDYwMzE4YTE5MzQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    year: "2004",
    rating: "7.7",
    duration: "1h 39m",
    synopsis: "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious 'Axe Gang' while residents of a housing complex exhibit extraordinary powers in defending their turf.",
    accent: "bg-red-700",
    },

	{
    id: 10,
	type: "movie",
    title: "SPIDER-MAN: INTO THE SPIDER-VERSE",
    categories: ["top", "animation", "action"],
    director: "DIRECTED BY BOB PERSICHETTI",
    tagline: "WITNESS THE NEXT GENERATION",
    videoUrl:
        "https://www.youtube.com/embed/g4Hbz2jLxzk?autoplay=1&mute=1&controls=0&playlist=g4Hbz2jLxzk&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=g4Hbz2jLxzk",
    poster:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
    year: "2018",
    rating: "8.4",
    duration: "1h 57m",
    synopsis: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    accent: "bg-fuchsia-600",
    },

	

	{
		id: 11,
		type: "movie",
		title: "TOP GUN",
		categories: ["top", "trending"],
		director: "PRODUCED BY JERRY BRUCKHEIMER",
		tagline: "FEEL THE NEED",
		videoUrl:
			"https://www.youtube.com/embed/giXco2jaZ_4?autoplay=1&mute=1&controls=0&playlist=giXco2jaZ_4&loop=1",
		trailerUrl: "https://www.youtube.com/watch?v=giXco2jaZ_4",
		poster:
			"https://images.unsplash.com/photo-1517604931442-37c2d4f3b3b9?auto=format&fit=crop&w=800&q=80",
		backdrop:
			"https://images.unsplash.com/photo-1517604931442-37c2d4f3b3b9?auto=format&fit=crop&w=1400&q=80",
		image:
			"https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_.jpg",
		year: "2022",
		rating: "8.0",
		duration: "2h 10m",
		synopsis: "High-flying action with elite Navy pilots.",
		accent: "bg-yellow-500",
	},

	
	// Trending Only Movies
	{ id: 101, title: "Spider-Man: Across the Spider-Verse", type: "movie", image: "https://cdn.marvel.com/content/1x/across_the_spider-verse.jpg", categories: ["trending"] },
	{ id: 102, title: "Inception", type: "movie", image: "https://filmnoerden.dk/wp-content/uploads/2015/05/Inception.jpg", categories: ["trending"] },
	{ id: 103, title: "John Wick: Chapter 4", type: "movie", image: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/SRgAAOSwXY9kNpU~/$_57.JPG?set_id=8800005007", categories: ["trending"] },
	{ id: 104, title: "Oppenheimer", type: "movie", image: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg", categories: ["trending"] },
	{
    id: 105,
    title: "3 IDIOTS",
    type: "movie",
    categories: ["trending", "comedy", "drama"],
    director: "DIRECTED BY RAJKUMAR HIRANI",
    tagline: "CHASE EXCELLENCE, AND SUCCESS WILL FOLLOW",
    videoUrl:
        "https://www.youtube.com/embed/xvszmNXdM4w?autoplay=1&mute=1&controls=0&playlist=xvszmNXdM4w&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=xvszmNXdM4w",
    poster:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    year: "2009",
    rating: "8.4",
    duration: "2h 50m",
    synopsis: "Two friends embark on a quest for a lost buddy. On this journey, they encounter a long forgotten bet, a wedding they must crash, and a funeral that goes impossibly out of control, as they recall their college days with the free-spirited Rancho.",
    accent: "bg-yellow-500",
},

	// Upcoming
	{ id: 1000, title: "Avengers: Doomsday", image: "https://m.media-amazon.com/images/M/MV5BM2E1ZTJiZTgtZGI2Zi00MzAxLThhZjktMmU3M2E3Yzk3NjUxXkEyXkFqcGc@._V1_.jpg", categories: ["upcoming"] },
	{ id: 1001, title: "Spider-Man: Brand New Day", image: "https://preview.redd.it/just-made-this-concept-poster-for-spider-man-brand-new-day-v0-svwcepqv2nhf1.jpeg?auto=webp&s=a10f9a661b70bd0d1563bd20f1017290c54eed5f", categories: ["upcoming"] },
	{ id: 1002, title: "The Odyssey", image: "https://m.media-amazon.com/images/M/MV5BN2MyYjk2MWMtODMyZS00MDUyLWE0OGQtOTQ3MGY0MDE0ZjVmXkEyXkFqcGc@._V1_.jpg", categories: ["upcoming"] },
	{ id: 1003, title: "Supergirl",  image: "https://m.media-amazon.com/images/M/MV5BZmYzN2VhNTAtYWUxZi00OTNiLWIyZDgtMGMxZTNlYzM3ZmE1XkEyXkFqcGc@._V1_.jpg", categories: ["upcoming"] },
	{ id: 1004, title: "Project Hail Mary", image: "https://preview.redd.it/official-poster-for-project-hail-mary-starring-ryan-gosling-v0-l0fgrigwwg9f1.jpeg?auto=webp&s=720c32d237547ffc3f5d64b2b38b2956aa261e70", categories: ["upcoming"] },


	//Tv-series

];

export default movies;
