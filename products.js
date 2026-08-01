// Product catalog — shared across all pages
const PRODUCTS = [
  { id: "p1", name: "Midnight Skyline", category: "posters", price: 349, colors: ["#3A3928", "#171614"], desc: "A2 city print, olive line work on near-black.", rot: -2 },
  { id: "p2", name: "Botanica No. 3", category: "posters", price: 349, colors: ["#6B6845", "#3A3928"], desc: "Hand-drawn fern study, A2, deep moss tones.", rot: 3 },
  { id: "p3", name: "Sun Chart", category: "posters", price: 399, colors: ["#8A2A20", "#5A1B14"], desc: "Retro solar diagram, warm maroon gradient.", rot: -1 },
  { id: "p4", name: "Wavelength", category: "posters", price: 379, colors: ["#8A2A20", "#6B6845"], desc: "Abstract soundwave art, signature maroon/olive duotone.", rot: 2 },
  { id: "p5", name: "Grid Traffic", category: "posters", price: 399, image: "posters/poster-01.jpg", desc: "Painterly aerial view of racing cars weaving through a stylized interchange.", rot: -3 },
  { id: "p6", name: "Lived In Books", category: "posters", price: 329, image: "posters/poster-02.jpg", desc: "Bold typographic print laid over vintage dictionary pages.", rot: 2 },
  { id: "p7", name: "Cosmopolitan", category: "posters", price: 329, image: "posters/poster-03.jpg", desc: "Hand-illustrated cocktail recipe print with soft pink tones.", rot: -1 },
  { id: "p8", name: "What If It Works Out", category: "posters", price: 349, image: "posters/poster-04.jpg", desc: "Bold newsprint-style typographic statement piece, black and red.", rot: 4 },
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
