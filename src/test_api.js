

const __fv_musicas__ = [
  {
    _id:0,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:1,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:2,
    title: "Girl like you",
    author:"Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id:3,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:4,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:5,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:6,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:7,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:8,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  }
]


const __all_musicas__ = [
  {
    _id:0,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:1,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:2,
    title: "Girl like you",
    author:"Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id:3,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:4,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:5,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:6,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:7,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:8,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:9,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:10,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:11,
    title: "Girl like you",
    author:"Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id:12,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:13,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:14,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:15,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:16,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:17,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:18,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:19,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:20,
    title: "Girl like you",
    author:"Moroon 5",
    image: "/img/mr.jpg"
  },
  {
    _id:21,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:23,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:24,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:25,
    title: "I've Told You Now",
    author:"Sam Smith",
    image: "/img/_cover.jpg"
  },
  {
    _id:26,
    title: "Photograth",
    author:"Ed Sheeran",
    image: "/img/Ed_Sheeran.jpg"
  },
  {
    _id:27,
    title: "I've Told You Now",
    author:"Sam Smith",
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



export const fv_musicas = __fv_musicas__.map((m, i)=>{
  m.date = getDates()
  return m
})
export const all_musicas = __all_musicas__.map((m, i)=> {
  m.date = getDates()
  return m
})