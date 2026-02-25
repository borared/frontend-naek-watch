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
	{
    id: 2000,
    title: "STRANGER THINGS",
    type: "series",
    categories: ["series", "horror", "mystery"],
    director: "CREATED BY THE DUFFER BROTHERS",
    tagline: "FRIENDS DON'T LIE",
    videoUrl: "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1&controls=0&playlist=b9EkMc79ZSU&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1505635330303-31953c29b04f?auto=format&fit=crop&w=1400&q=80",
    image: "https://www.fangoria.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/07/Screenshot-2025-07-15-at-16.48.42.png.webp",
    year: "2016 - 2025",
    rating: "8.7",
    duration: "5 Seasons / 42 Episodes",
    synopsis: "In a small town where everyone knows everyone, a peculiar incident sets off a chain of events that leads to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community.",
    accent: "bg-red-950",
    seasons: [
        {
            season: 1,
            episodes: [
                { ep: 1, title: "Chapter One: The Vanishing of Will Byers", image: "https://assets3.thrillist.com/v1/image/2712204/792x529/scale;webp=auto;jpeg_quality=60;progressive.jpg"},
                { ep: 2, title: "Chapter Two: The Weirdo on Maple Street", image: "https://static01.nyt.com/images/2017/10/26/arts/27stranger1/27stranger1-articleLarge.jpg?quality=75&auto=webp&disable=upscale" },
                { ep: 3, title: "Chapter Three: Holly, Jolly", image: "https://www.popmatters.com/wp-content/uploads/2021/01/img-27707.jpg" },
                { ep: 4, title: "Chapter Four: The Body", image: "https://m.media-amazon.com/images/M/MV5BMTkwMjU2MjgzOV5BMl5BanBnXkFtZTgwMzAzOTQ5ODE@._V1_.jpg" },
                { ep: 5, title: "Chapter Five: The Flea and the Acrobat", image: "https://m.media-amazon.com/images/M/MV5BYTU2YTIxZDUtN2ExOS00ZDg4LThiNjEtNTlkNzJkZmJkM2YzXkEyXkFqcGc@._V1_.jpg" },
                { ep: 6, title: "Chapter Six: The Monster", image: "https://metawitches.com/wp-content/uploads/2017/07/st106jonnancybeartrap.jpg"},
                { ep: 7, title: "Chapter Seven: The Bathtub", image: "https://metawitches.com/wp-content/uploads/2017/07/st107el.jpg"},
                { ep: 8, title: "Chapter Eight: The Upside Down", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"}
            ]
        },
        {
            season: 2,
            episodes: [
                { ep: 1, title: "Chapter One: MADMAX", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 2, title: "Chapter Two: Trick or Treat, Freak", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 3, title: "Chapter Three: The Pollywog", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 4, title: "Chapter Four: Will the Wise", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 5, title: "Chapter Five: Dig Dug", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 6, title: "Chapter Six: The Spy", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 7, title: "Chapter Seven: The Lost Sister", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 8, title: "Chapter Eight: The Mind Flayer", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 9, title: "Chapter Nine: The Gate", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  }
            ]
        },
        {
            season: 3,
            episodes: [
                { ep: 1, title: "Chapter One: Suzie, Do You Copy?", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 2, title: "Chapter Two: The Mall Rats", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 3, title: "Chapter Three: The Case of the Missing Lifeguard", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 4, title: "Chapter Four: The Sauna Test", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 5, title: "Chapter Five: The Flayed", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 6, title: "Chapter Six: E Pluribus Unum", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 7, title: "Chapter Seven: The Bite", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 8, title: "Chapter Eight: The Battle of Starcourt", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  }
            ]
        },
        {
            season: 4,
            episodes: [
                { ep: 1, title: "Chapter One: The Hellfire Club", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 2, title: "Chapter Two: Vecna's Curse", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 3, title: "Chapter Three: The Monster and the Superhero", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 4, title: "Chapter Four: Dear Billy", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 5, title: "Chapter Five: The Nina Project", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 6, title: "Chapter Six: The Dive", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 7, title: "Chapter Seven: The Massacre at Hawkins Lab", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 8, title: "Chapter Eight: Papa", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 9, title: "Chapter Nine: The Piggyback", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  }
            ]
        },
        {
            season: 5,
            episodes: [
                { ep: 1, title: "Chapter One: The Crawl", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 2, title: "Chapter Two: The Vanishing of Holly Wheeler", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 3, title: "Chapter Three: The Turnbow Trap", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 4, title: "Chapter Four: Sorcerer", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 5, title: "Chapter Five: Shock Jock", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 6, title: "Chapter Six: Escape from Camazotz", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 7, title: "Chapter Seven: The Bridge", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  },
                { ep: 8, title: "Chapter Eight: The Rightside Up", image: "https://wevegotbackissues.com/wp-content/uploads/2025/06/1000033110.jpg?w=1024"  }
            ]
        }
    ]
    },

	{
    id: 2001,
    title: "CYBERPUNK: EDGERUNNERS",
    type: "series",
    categories: ["series", "anime", "sci-fi"],
    director: "DIRECTED BY HIROYUKI IMAISHI",
    tagline: "STAY AT YOUR HOUSE",
    videoUrl:
        "https://www.youtube.com/embed/ax5YUmkWf_Y?autoplay=1&mute=1&controls=0&playlist=ax5YUmkWf_Y&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=ax5YUmkWf_Y",
    poster:
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/06/ENUS_CyberpunkE_S1_Main_Horizontal_16x9_RGB_PRE.jpg",
    year: "2022",
    rating: "8.6",
    duration: "10 Episodes",
    synopsis: "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
    accent: "bg-yellow-400",
    },

	{
    id: 2002,
    title: "LOKI",
    type: "series",
    categories: ["series", "sci-fi", "adventure"],
    director: "CREATED BY MICHAEL WALDRON",
    tagline: "HIS TIME HAS COME",
    videoUrl: "https://www.youtube.com/embed/dug56u8NN7g?autoplay=1&mute=1&controls=0&playlist=dug56u8NN7g&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=dug56u8NN7g",
    poster: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80",
    backdrop: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=1400&q=80",
    image: "https://www.cancelledscifi.com/wp-content/uploads/2021/05/loki-disney-plus-banner.jpg",
    year: "2021 - 2023",
    rating: "8.2",
    duration: "2 Seasons / 12 Episodes",
    synopsis: "After stealing the Tesseract during the events of 'Avengers: Endgame,' an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA), a bureaucratic organization that exists outside of time and space.",
    accent: "bg-emerald-600",
    seasons: [
        {
            season: 1,
            episodes: [
                { ep: 1, title: "Glorious Purpose", image: "https://static.independent.co.uk/2021/06/11/19/newFile-11.jpg" },
                { ep: 2, title: "The Variant", image: "https://pyxis.nymag.com/v1/imgs/564/b0d/64dddfffb82f52a7f3557eaa714a5786b5-loki-episode-2.jpg" },
                { ep: 3, title: "Lamentis", image: "https://sm.ign.com/ign_ap/gallery/m/marvels-lo/marvels-loki-images-and-poster_nefg.jpg" },
                { ep: 4, title: "The Nexus Event", image: "https://www.pajiba.com/assets_c/2021/06/Loki%20Ep%204%20Recap%20%281%29-thumb-700xauto-236290.png" },
                { ep: 5, title: "Journey into Mystery", image: "https://ew.com/thmb/h-zrYnpLdCmMtFKZHUpv4afQgwY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Loki_3-c6076923805348d495ccea95e6bf51e4.jpg" },
                { ep: 6, title: "For All Time. Always.", image: "https://m.media-amazon.com/images/M/MV5BMTAzMmNlNDItNzA1Ny00OTg5LThjYzItMDExNjA1NWQxNDRhXkEyXkFqcGc@._V1_.jpg" }
            ]
        },
        {
            season: 2,
            episodes: [
                { ep: 1, title: "Ouroboros", image: "https://cdn.mos.cms.futurecdn.net/MmxUnD3nnrbS24bp8HvaWd.jpg" },
                { ep: 2, title: "Breaking Brad", image: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/08/loki-season-2-tom-hiddleston-sophia-di-martino-social-feature.jpg" },
                { ep: 3, title: "1893", image: "https://hips.hearstapps.com/hmg-prod/images/loki-6533c7f35590b.png?crop=0.8879023307436182xw:1xh;0,0" },
                { ep: 4, title: "Heart of the TVA", image: "https://thespool.net/wp-content/uploads/2023/11/Loki-Season-Episode-4-Featured.jpg" },
                { ep: 5, title: "Science/Fiction", image: "https://www.denofgeek.com/wp-content/uploads/2023/11/ARC-205-18116_R.jpg?resize=768%2C432" },
                { ep: 6, title: "Glorious Purpose (S2)", image: "https://www.denofgeek.com/wp-content/uploads/2023/11/ARC-206-21297_R.jpg?resize=768%2C432" }
            ]
        }
    ]
    },
	{
    id: 2005,
    title: "HOUSE OF THE DRAGON",
    type: "series",
    categories: ["series", "fantasy", "drama", "action"],
    director: "CREATED BY RYAN CONDAL & GEORGE R.R. MARTIN",
    tagline: "NOTHING BURNS LIKE BETRAYAL",
    videoUrl:
        "https://www.youtube.com/embed/W7exuTzZj8Q?autoplay=1&mute=1&controls=0&playlist=W7exuTzZj8Q&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=W7exuTzZj8Q",
    poster:
        "https://images.unsplash.com/photo-1599713191065-4558079a93f8?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://www.digitalstudiome.com/cloud/2022/08/18/house-of-the-dragon-ka-1920.jpg",
    year: "2022 - 2026",
    rating: "8.4",
    duration: "3 Seasons",
    synopsis: "Two hundred years before the events of Game of Thrones, the House Targaryen is at the height of its power. However, the seeds of a bloody civil war known as the 'Dance of the Dragons' are sown when King Viserys breaks tradition to name his daughter heir.",
    accent: "bg-red-800",
    },
    {
    id: 2006,
    title: "3 BODY PROBLEM",
    type: "series",
    categories: ["series", "sci-fi", "mystery", "drama"],
    director: "CREATED BY DAVID BENIOFF, D.B. WEISS & ALEXANDER WOO",
    tagline: "YOU ARE NOT ALONE",
    videoUrl:
        "https://www.youtube.com/embed/Y_JQ9PfYbGk?autoplay=1&mute=1&controls=0&playlist=Y_JQ9PfYbGk&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=Y_JQ9PfYbGk",
    poster:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://geekspin.co/wp-content/uploads/2024/03/3-Body-Problem.jpg",
    year: "2024 - 2026",
    rating: "7.8",
    duration: "2 Seasons",
    synopsis: "A young woman's fateful decision in 1960s China reverberates across space and time to a group of brilliant scientists in the present day. As the laws of nature unravel before their eyes, five former colleagues reunite to confront the greatest threat in humanity's history.",
    accent: "bg-cyan-700",
    },
    {
    id: 24,
    title: "A KNIGHT OF THE SEVEN KINGDOMS",
    type: "series",
    categories: ["series", "fantasy", "adventure", "drama"],
    director: "DIRECTED BY OWEN HARRIS",
    tagline: "A TALL TALE THAT BECAME LEGEND",
    videoUrl:
        "https://www.youtube.com/embed/MJqU-CId30w?autoplay=1&mute=1&controls=0&playlist=MJqU-CId30w&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=MJqU-CId30w",
    poster:
        "https://images.unsplash.com/photo-1599713191065-4558079a93f8?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjp2985XsAYKGigN3UwQZCeld8g-Cf5rNQg&s",
    year: "2026",
    rating: "8.1",
    duration: "1 Season",
    synopsis: "A century before Game of Thrones, two unlikely heroes wandered Westeros: a young, naive but courageous knight, Ser Duncan the Tall, and his diminutive squire, Egg. Set in an age when the Targaryen line still holds the Iron Throne.",
    accent: "bg-orange-600",
    },
    {
    id: 25,
    title: "PRISON BREAK",
    type: "series",
    categories: ["series", "action", "crime", "thriller"],
    director: "CREATED BY PAUL SCHEURING",
    tagline: "BREAK OUT OR DIE TRYING",
    videoUrl:
        "https://www.youtube.com/embed/AL9zLct90X8?autoplay=1&mute=1&controls=0&playlist=AL9zLct90X8&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=AL9zLct90X8",
    poster:
        "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://www.tvguide.com/a/img/catalog/provider/2/2/2-c27f22de23783343d407be1d71a3b88d.jpg",
    year: "2005 - 2017",
    rating: "8.3",
    duration: "5 Seasons",
    synopsis: "An innocent man is sent to death row, and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break them both out from the inside out.",
    accent: "bg-slate-700",
    },
    {
    id: 26,
    title: "THE GOLDEN SPOON",
    type: "series",
    categories: ["series", "fantasy", "drama", "psychological"],
    director: "DIRECTED BY SONG HYUN-WOOK",
    tagline: "CHOOSE YOUR PARENTS, CHANGE YOUR LIFE",
    videoUrl:
        "https://www.youtube.com/embed/pbHrIKz-Njs?autoplay=1&mute=1&controls=0&playlist=pbHrIKz-Njs&loop=1",
    trailerUrl: "https://www.youtube.com/watch?v=pbHrIKz-Njs",
    poster:
        "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=800&q=80",
    backdrop:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    image:
        "https://images.justwatch.com/poster/300815243/s718/the-golden-spoon.jpg",
    year: "2022",
    rating: "7.7",
    duration: "16 Episodes",
    synopsis: "A student born into a poor family uses a magical golden spoon to swap fates with his wealthy best friend, but he soon discovers that a life of riches comes with a heavy price.",
    accent: "bg-yellow-600",
    },

];

export default movies;
