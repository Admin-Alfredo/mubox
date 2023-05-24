

const __fv_musicas__ = [
  {
    _id: 0,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 1,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 2,
    title: "memories",
    author: "Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id: 3,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 4,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 5,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 6,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 7,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 8,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  }
]


const __all_musicas__ = [
  {
    _id: 0,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 1,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 2,
    title: "memories",
    author: "Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id: 3,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 4,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 5,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 6,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 7,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 8,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 9,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 10,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 11,
    title: "memories",
    author: "Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id: 12,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 13,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 14,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 15,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 16,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 17,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 18,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 19,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 20,
    title: "memories",
    author: "Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id: 21,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 23,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 24,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 25,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 26,
    title: "Photograth",
    author: "Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id: 27,
    title: "restart",
    author: "Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id: 28,
    title: "Harmony",
    author: "Timbaland Ft. Dalton Diehl",
    image: "/img/_cover.jpg"
  }
]
const dates = [
  '01/2013',
  '06/2017',
  '11/2018',
  '07/2011',
  '12/2020'
]

const getDates = () => dates[Math.floor(Math.random() * 4)]


exports.fv_musicas = __fv_musicas__.map((m, i) => {
  m.date = getDates()
  return m
})
exports.all_musicas = __all_musicas__.map((m, i) => {
  m.date = getDates()
  switch (m.author) {
    case "Ed Sheeran":
      m.url_musica = '/musicas/photograph.mp3'
      break;
    case "Sam Smith":
      m.url_musica = '/musicas/restart.mp3'
      break;
    case "Moroon 5":
      m.url_musica = '/musicas/memories.mp3'
      break;
    case "Timbaland Ft. Dalton Diehl":
      m.url_musica = '/musicas/Timbaland_Ft_Dalton_Diehl_ Harmony_(CDQ).mp3'
    break;      
  }
  return m
})
