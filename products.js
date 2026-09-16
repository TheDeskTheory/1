// Product catalog — shared across all pages
const PRODUCTS = [
  { id: "p5", name: "Grid Traffic", category: "posters", price: 149, image: "posters/poster-01.jpg", desc: "Painterly aerial view of racing cars weaving through a stylized interchange.", rot: -3 },
  { id: "p6", name: "Lived In Books", category: "posters", price: 149, image: "posters/poster-02.jpg", desc: "Bold typographic print laid over vintage dictionary pages.", rot: 2 },
  { id: "p7", name: "Cosmopolitan", category: "posters", price: 149, image: "posters/poster-03.jpg", desc: "Hand-illustrated cocktail recipe print with soft pink tones.", rot: -1 },
  { id: "p8", name: "What If It Works Out", category: "posters", price: 149, image: "posters/poster-04.jpg", desc: "Bold newsprint-style typographic statement piece, black and red.", rot: 4 },
  { id: "p9", name: "CR7", category: "posters", price: 149, image: "posters/poster-05.jpg", desc: "Cristiano Ronaldo", rot: -3 },
  { id: "p10", name: "Blond", category: "posters", price: 149, image: "posters/poster-06.jpg", desc: "Frank Ocean", rot: -2 },
  { id: "p11", name: "I Wanna Be Yours", category: "posters", price: 149, image: "posters/poster-07.jpg", desc: "Arctic Monkeys", rot: -1 },
  { id: "p12", name: "Kanye West", category: "posters", price: 149, image: "posters/poster-08.jpg", desc: "The American Dream", rot: 1 },
  { id: "p13", name: "Hamilton", category: "posters", price: 149, image: "posters/poster-09.jpg", desc: "Ferrari Racing Legacy", rot: 2 },
  { id: "p14", name: "Starboy", category: "posters", price: 149, image: "posters/poster-10.jpg", desc: "The Weeknd", rot: 3 },
  { id: "p15", name: "Dodge", category: "posters", price: 149, image: "posters/poster-11.jpg", desc: "Redline Reverie", rot: 4 },
  { id: "p16", name: "Lando Norris", category: "posters", price: 149, image: "posters/poster-12.jpg", desc: "The Racing Spirit", rot: -4 },
  { id: "p17", name: "Real Madrid", category: "posters", price: 149, image: "posters/poster-13.jpg", desc: "Barca Is Better", rot: -3 },
  { id: "p18", name: "New York Yankees", category: "posters", price: 149, image: "posters/poster-14.jpg", desc: "Classic Icons", rot: -2 },
  { id: "p19", name: "Porsche 911", category: "posters", price: 149, image: "posters/poster-15.jpg", desc: "Turbo Legacy", rot: -1 },
  { id: "p20", name: "Mercedes-AMG", category: "posters", price: 149, image: "posters/poster-16.jpg", desc: "Night Racing", rot: 1 },
  { id: "p21", name: "VENI VIDI VICI", category: "posters", price: 149, image: "posters/poster-17.jpg", desc: "I Came, I Saw, I Conquered", rot: 2 },
  { id: "p22", name: "Porsche 911", category: "posters", price: 149, image: "posters/poster-18.jpg", desc: "Timeless Icon", rot: 3 },
  { id: "p23", name: "Victory Lap", category: "posters", price: 149, image: "posters/poster-19.jpg", desc: "Kimi Antonelli", rot: 4 },
  { id: "p24", name: "Spider-Man", category: "posters", price: 149, image: "posters/poster-20.jpg", desc: "City Crawler", rot: -4 },
  { id: "p25", name: "Cigarette After Tax", category: "posters", price: 149, image: "posters/poster-21.jpg", desc: "Nirmala Sitharaman Sutta Maarti Hui", rot: -3 },
  { id: "p26", name: "Absolut", category: "posters", price: 149, image: "posters/poster-22.jpg", desc: "Original Spirit", rot: -2 },
  { id: "p27", name: "Hitman", category: "posters", price: 149, image: "posters/poster-23.jpg", desc: "Rohit Sharma", rot: -1 },
  { id: "p28", name: "Log Kya Kahenge", category: "posters", price: 149, image: "posters/poster-24.jpg", desc: "Smoke & Silence", rot: 1 },
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
