// Product catalog — shared across all pages
const PRODUCTS = [
  { id: "p1", name: "Midnight Skyline", category: "posters", price: 349, colors: ["#3A3928", "#171614"], desc: "A2 city print, olive line work on near-black.", rot: -2 },
  { id: "p2", name: "Botanica No. 3", category: "posters", price: 349, colors: ["#6B6845", "#3A3928"], desc: "Hand-drawn fern study, A2, deep moss tones.", rot: 3 },
  { id: "p3", name: "Sun Chart", category: "posters", price: 399, colors: ["#8A2A20", "#5A1B14"], desc: "Retro solar diagram, warm maroon gradient.", rot: -1 },
  { id: "p4", name: "Wavelength", category: "posters", price: 379, colors: ["#8A2A20", "#6B6845"], desc: "Abstract soundwave art, signature maroon/olive duotone.", rot: 2 },
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
