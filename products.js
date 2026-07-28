// Product catalog — shared across all pages
const PRODUCTS = [
  { id: "p1", name: "Midnight Skyline", category: "posters", price: 349, colors: ["#0077C8", "#1A1A1A"], desc: "A2 riso-style city print, deep blue on ink black.", rot: -2 },
  { id: "p2", name: "Botanica No. 3", category: "posters", price: 349, colors: ["#2E7D32", "#EDEDE2"], desc: "Hand-drawn fern study, A2, forest green line work.", rot: 3 },
  { id: "p3", name: "Sun Chart", category: "posters", price: 399, colors: ["#FF6B35", "#FFD400"], desc: "Retro solar diagram, warm gradient duotone.", rot: -1 },
  { id: "p4", name: "Wavelength", category: "posters", price: 379, colors: ["#FF3EA5", "#0077C8"], desc: "Abstract soundwave art, signature riso pink/blue.", rot: 2 },
  { id: "p5", name: "Fieldnotes Fox", category: "bookmarks", price: 79, colors: ["#FF6B35", "#EDEDE2"], desc: "Die-cut fox bookmark with brass corner.", rot: -4 },
  { id: "p6", name: "Marginalia Moon", category: "bookmarks", price: 79, colors: ["#0077C8", "#FFD400"], desc: "Phases-of-the-moon strip, matte laminate.", rot: 5 },
  { id: "p7", name: "Underline Leaf", category: "bookmarks", price: 69, colors: ["#2E7D32", "#EDEDE2"], desc: "Pressed-leaf illustration, tasseled cord.", rot: -3 },
  { id: "p8", name: "Reading Streak", category: "bookmarks", price: 89, colors: ["#FF3EA5", "#1A1A1A"], desc: "Tally-mark tracker bookmark for series readers.", rot: 2 },
  { id: "p9", name: "Good Trouble", category: "stickers", price: 49, colors: ["#FF3EA5", "#FFD400"], desc: "Die-cut vinyl sticker, 3in, weatherproof.", rot: -5 },
  { id: "p10", name: "Small Plant Energy", category: "stickers", price: 49, colors: ["#2E7D32", "#EDEDE2"], desc: "Matte vinyl sticker sheet, set of 3.", rot: 4 },
  { id: "p11", name: "Riso Sun", category: "stickers", price: 59, colors: ["#FF6B35", "#0077C8"], desc: "Holographic-edge sticker, 2.5in.", rot: -2 },
  { id: "p12", name: "Overthinker Club", category: "stickers", price: 49, colors: ["#1A1A1A", "#FFD400"], desc: "Typographic vinyl sticker, matte black.", rot: 3 },
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
