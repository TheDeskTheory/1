// Product catalog — shared across all pages
const PRODUCTS = [
  { id: "p1", name: "Midnight Skyline", category: "posters", price: 349, colors: ["#3A3928", "#171614"], desc: "A2 city print, olive line work on near-black.", rot: -2 },
  { id: "p2", name: "Botanica No. 3", category: "posters", price: 349, colors: ["#6B6845", "#3A3928"], desc: "Hand-drawn fern study, A2, deep moss tones.", rot: 3 },
  { id: "p3", name: "Sun Chart", category: "posters", price: 399, colors: ["#8A2A20", "#5A1B14"], desc: "Retro solar diagram, warm maroon gradient.", rot: -1 },
  { id: "p4", name: "Wavelength", category: "posters", price: 379, colors: ["#8A2A20", "#6B6845"], desc: "Abstract soundwave art, signature maroon/olive duotone.", rot: 2 },
  { id: "p5", name: "Fieldnotes Fox", category: "bookmarks", price: 79, colors: ["#8A2A20", "#3A3928"], desc: "Die-cut fox bookmark with brass corner.", rot: -4 },
  { id: "p6", name: "Marginalia Moon", category: "bookmarks", price: 79, colors: ["#6B6845", "#8A2A20"], desc: "Phases-of-the-moon strip, matte laminate.", rot: 5 },
  { id: "p7", name: "Underline Leaf", category: "bookmarks", price: 69, colors: ["#6B6845", "#3A3928"], desc: "Pressed-leaf illustration, tasseled cord.", rot: -3 },
  { id: "p8", name: "Reading Streak", category: "bookmarks", price: 89, colors: ["#A6362A", "#171614"], desc: "Tally-mark tracker bookmark for series readers.", rot: 2 },
  { id: "p9", name: "Good Trouble", category: "stickers", price: 49, colors: ["#8A2A20", "#A6362A"], desc: "Die-cut vinyl sticker, 3in, weatherproof.", rot: -5 },
  { id: "p10", name: "Small Plant Energy", category: "stickers", price: 49, colors: ["#6B6845", "#8C8960"], desc: "Matte vinyl sticker sheet, set of 3.", rot: 4 },
  { id: "p11", name: "Golden Hour", category: "stickers", price: 59, colors: ["#8A2A20", "#6B6845"], desc: "Warm gradient-edge sticker, 2.5in.", rot: -2 },
  { id: "p12", name: "Overthinker Club", category: "stickers", price: 49, colors: ["#171614", "#8A2A20"], desc: "Typographic vinyl sticker, near-black on maroon.", rot: 3 },
  { id: "p13", name: "Reading Nook", category: "art-prints", price: 449, colors: ["#3A3928", "#8A2A20"], desc: "A3 fine-art print, cozy interior scene.", rot: -2 },
  { id: "p14", name: "Still Life No. 2", category: "art-prints", price: 449, colors: ["#6B6845", "#171614"], desc: "A3 fine-art print, muted botanical still life.", rot: 3 },
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
