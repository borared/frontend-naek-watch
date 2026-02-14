const movies = [
	{
		id: 1,
		title: "MIDWAY",
		director: "FROM THE DIRECTOR OF INDEPENDENCE DAY",
		tagline: "BASED ON REAL EVENTS",
		videoUrl:
			"https://www.youtube.com/embed/BfTYY_pac8o?autoplay=1&mute=1&controls=0&playlist=BfTYY_pac8o&loop=1",
		trailerUrl: "https://www.youtube.com/watch?v=BfTYY_pac8o",
		poster:
			"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911910/image_zzxhdz.jpg",
		backdrop:
			"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911910/image_zzxhdz.jpg",
		image:
			"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911910/image_zzxhdz.jpg",
		year: "2024",
		rating: "7.9",
		duration: "2h 15m",
		synopsis: "Epic WWII action film following the Battle of Midway.",
		cast: [
			{
				id: 1,
				name: "Woody Harrelson",
				image:
					"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770916987/image_qi9rl2.jpg",
			},
			{
				id: 2,
				name: "Mandy Moore",
				image:
					"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770916998/image_xuljxb.jpg",
			},
			{
				id: 3,
				name: "Patrick Wilson",
				image:
					"https://res.cloudinary.com/dm05x6lbk/image/upload/v1770916968/image_cqdx1f.jpg",
			},
		],
		accent: "bg-blue-600",
	},
	{
		id: 2,
		title: "DUNE",
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
		cast: [
			{
				id: 1,
				name: "Timothée Chalamet",
				image:
					"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
			},
			{
				id: 2,
				name: "Zendaya",
				image:
					"https://images.unsplash.com/photo-1545996124-1b7a6d3b9d5b?auto=format&fit=crop&w=400&q=80",
			},
		],
		accent: "bg-orange-500",
	},
	{
		id: 3,
		title: "TENET",
		director: "FROM CHRISTOPHER NOLAN",
		tagline: "TIME RUNS OUT",
		videoUrl:
			"https://www.youtube.com/embed/LdOM0x0XDMo?autoplay=1&mute=1&controls=0&playlist=LdOM0x0XDMo&loop=1",
		trailerUrl: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
		poster:
			"https://images.unsplash.com/photo-1502139214987-1b0a7c7ec7a7?auto=format&fit=crop&w=800&q=80",
		backdrop:
			"https://images.unsplash.com/photo-1502139214987-1b0a7c7ec7a7?auto=format&fit=crop&w=1400&q=80",
		image:
			"https://images.unsplash.com/photo-1502139214987-1b0a7c7ec7a7?auto=format&fit=crop&w=800&q=80",
		year: "2020",
		rating: "7.4",
		duration: "2h 30m",
		synopsis: "A time-bending espionage thriller.",
		cast: [
			{
				id: 1,
				name: "John David Washington",
				image:
					"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
			},
			{
				id: 2,
				name: "Robert Pattinson",
				image:
					"https://images.unsplash.com/photo-1544005315-700f5d1e0b7f?auto=format&fit=crop&w=400&q=80",
			},
		],
		accent: "bg-red-600",
	},
	{
		id: 4,
		title: "THE BATMAN",
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
			"https://images.unsplash.com/photo-1542204625-3b4efe2b8b5d?auto=format&fit=crop&w=800&q=80",
		year: "2022",
		rating: "7.8",
		duration: "2h 55m",
		synopsis: "A dark detective story exploring Gotham's corruption.",
		cast: [
			{
				id: 1,
				name: "Robert Pattinson",
				image:
					"https://images.unsplash.com/photo-1544005315-700f5d1e0b7f?auto=format&fit=crop&w=400&q=80",
			},
			{
				id: 2,
				name: "Zoe Kravitz",
				image:
					"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
			},
		],
		accent: "bg-zinc-700",
	},
	{
		id: 5,
		title: "TOP GUN",
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
			"https://images.unsplash.com/photo-1517604931442-37c2d4f3b3b9?auto=format&fit=crop&w=800&q=80",
		year: "2022",
		rating: "8.0",
		duration: "2h 10m",
		synopsis: "High-flying action with elite Navy pilots.",
		cast: [
			{
				id: 1,
				name: "Tom Cruise",
				image:
					"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
			},
			{
				id: 2,
				name: "Miles Teller",
				image:
					"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
			},
		],
		accent: "bg-yellow-500",
	},

	// Page 1: Trending & Blockbusters
  { id: 6, title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDr9p1v3Cmp6sdz2DOD.jpg" },
  { id: 7, title: "Spider-Man: Across the Spider-Verse", image: "https://image.tmdb.org/t/p/w500/8Gxv8Z7ocQdt5S0DUqszpkwdFv-.jpg" },
  { id: 8, title: "Inception", image: "https://image.tmdb.org/t/p/w500/edv5CZvRjY9y9TnxTYQ6YpCq0Cl.jpg" },
  { id: 9, title: "John Wick: Chapter 4", image: "https://image.tmdb.org/t/p/w500/vZloY0CcWDvSTptYnO4S1N0t9iM.jpg" },
  { id: 10, title: "Oppenheimer", image: "https://image.tmdb.org/t/p/w500/8Gxv8Z7ocQdt5S0DUqszpkwdFv-.jpg" },

  // Page 2: Sci-Fi & Adventure
  { id: 11, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6Esh2vzp6uG6poyK6p1.jpg" },
  { id: 12, title: "Dune: Part Two", image: "https://image.tmdb.org/t/p/w500/8bCOvYvB89X7Y9u6SSSdy8n76Y6.jpg" },
  { id: 13, title: "Avatar: The Way of Water", image: "https://image.tmdb.org/t/p/w500/t6SnaoqUXnCfsS0nS9Hojpx9oJy.jpg" },
  { id: 14, title: "The Martian", image: "https://image.tmdb.org/t/p/w500/w997799.jpg" }, // Use actual poster path
  { id: 15, title: "Blade Runner 2049", image: "https://image.tmdb.org/t/p/w500/gajva2L0vL0vL0vL0vL0vL0vL0v.jpg" },

  // Page 3: Drama & Animated Favorites
  { id: 16, title: "Everything Everywhere All At Once", image: "https://image.tmdb.org/t/p/w500/r7XifWPv9T9T9T9T9T9T9T9T9T9.jpg" },
  { id: 17, title: "Puss in Boots: The Last Wish", image: "https://image.tmdb.org/t/p/w500/kuf6Eba0T9T9T9T9T9T9T9T9T9T.jpg" },
  { id: 18, title: "The Whale", image: "https://image.tmdb.org/t/p/w500/j9T9T9T9T9T9T9T9T9T9T9T9T9T.jpg" },
  { id: 19, title: "Top Gun: Maverick", image: "https://image.tmdb.org/t/p/w500/62HCnMoT9T9T9T9T9T9T9T9T9T9.jpg" },
  { id: 20, title: "Parasite", image: "https://image.tmdb.org/t/p/w500/7IiTT9T9T9T9T9T9T9T9T9T9T9T.jpg" },
];

export default movies;
