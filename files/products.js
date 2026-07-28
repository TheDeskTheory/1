// Product catalog — shared across all pages
const PRODUCTS = [
  { id: "p1", name: "Midnight Skyline", category: "posters", price: 349, colors: ["#7C8570", "#201F1C"], desc: "A2 city print, sage line work on deep ink.", rot: -2 },
  { id: "p2", name: "Botanica No. 3", category: "posters", price: 349, colors: ["#ABB2A0", "#7C8570"], desc: "Hand-drawn fern study, A2, soft sage tones.", rot: 3 },
  { id: "p3", name: "Sun Chart", category: "posters", price: 399, colors: ["#CFA173", "#B4835A"], desc: "Retro solar diagram, warm terracotta gradient.", rot: -1 },
  { id: "p4", name: "Wavelength", category: "posters", price: 379, colors: ["#CFA173", "#7C8570"], desc: "Abstract soundwave art, signature tan/sage duotone.", rot: 2 },
  { id: "p5", name: "Fieldnotes Fox", category: "bookmarks", price: 79, colors: ["#CFA173", "#EFE9DC"], desc: "Die-cut fox bookmark with brass corner.", rot: -4 },
  { id: "p6", name: "Marginalia Moon", category: "bookmarks", price: 79, colors: ["#7C8570", "#CFA173"], desc: "Phases-of-the-moon strip, matte laminate.", rot: 5 },
  { id: "p7", name: "Underline Leaf", category: "bookmarks", price: 69, colors: ["#ABB2A0", "#EFE9DC"], desc: "Pressed-leaf illustration, tasseled cord.", rot: -3 },
  { id: "p8", name: "Reading Streak", category: "bookmarks", price: 89, colors: ["#B4835A", "#201F1C"], desc: "Tally-mark tracker bookmark for series readers.", rot: 2 },
  { id: "p9", name: "Good Trouble", category: "stickers", price: 49, colors: ["#CFA173", "#B4835A"], desc: "Die-cut vinyl sticker, 3in, weatherproof.", rot: -5 },
  { id: "p10", name: "Small Plant Energy", category: "stickers", price: 49, colors: ["#7C8570", "#ABB2A0"], desc: "Matte vinyl sticker sheet, set of 3.", rot: 4 },
  { id: "p11", name: "Golden Hour", category: "stickers", price: 59, colors: ["#CFA173", "#7C8570"], desc: "Warm gradient-edge sticker, 2.5in.", rot: -2 },
  { id: "p12", name: "Overthinker Club", category: "stickers", price: 49, colors: ["#201F1C", "#CFA173"], desc: "Typographic vinyl sticker, matte black on tan.", rot: 3 },
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
