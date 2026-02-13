const series = [
  {
    id: 201,
    type: "series",
    title: "Money Heist",
    year: "2017",
    rating: "8.2",
    backdrop: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911910/image_zzxhdz.jpg",
    poster: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969206/image_ch0sn2.png",
    trailerUrl: "https://youtu.be/_InqQJRqGW4?si=kdUbYSOeiA0JwgTn",
    synopsis: "A criminal mastermind recruits eight people...",
    cast: [
      { id: 1, name: "Actor 1", image: "" },
      { id: 2, name: "Actor 2", image: "" },
    ],
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: "s1e1", title: "Episode 1", duration: "48m", videoUrl: "https://video-link.com", thumbnail: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969206/image_ch0sn2.png"},
          { id: "s1e2", title: "Episode 2", duration: "42m", videoUrl: "https://video-link.com", thumbnail: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969206/image_ch0sn2.png" },
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          { id: "s2e1", title: "Episode 1", duration: "50m", videoUrl: "https://video-link.com", thumbnail: "/thumb3.jpg" },
        ]
      }
    ],
    related: [
      { id: 202, title: "Stranger Things 1", image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969635/image_kri6wk.jpg", trailerUrl: "https://youtu.be/b9EkMc79ZSU?si=ffQ2LbX7yYglZVoU" }
    ]
  },

  {
    id: 202,
    type: "series",
    title: "Stranger Things",
    year: "2016",
    rating: "8.7",
    backdrop: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969635/image_kri6wk.jpg",
    poster: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969635/image_kri6wk.jpg",
    trailerUrl: "https://youtu.be/b9EkMc79ZSU?si=ffQ2LbX7yYglZVoU",
    synopsis: "A group of kids uncover supernatural mysteries in their town.",
    cast: [
      { id: 1, name: "Actor A", image: "" },
      { id: 2, name: "Actor B", image: "" },
    ],
     seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { id: "s1e1", title: "Chapter One: The Vanishing of Will Byers", duration: "47m", videoUrl: "https://video-link.com", thumbnail: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969635/image_kri6wk.jpg" },
          { id: "s1e2", title: "Chapter Two: The Weirdo on Maple Street", duration: "55m", videoUrl: "https://video-link.com", thumbnail: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969635/image_kri6wk.jpg" },
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          { id: "s2e1", title: "Chapter One: MADMAX", duration: "48m", videoUrl: "https://video-link.com", thumbnail: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770970059/image_qpz6fe.jpg" },
        ]
        }
    ],
    related: [
      { id: 201, title: "Money Heist", image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770969206/image_ch0sn2.png", trailerUrl: "https://youtu.be/_InqQJRqGW4?si=kdUbYSOeiA0JwgTn" }
    ]

  }
];

export default series;
