export interface Destination {
  id: string;
  name: string;
  sub: string;
  desc: string;
  img: string;
}

export const destinations: Destination[] = [
  {
    id: "01",
    name: "Kyoto",
    sub: "The Ancient Capital",
    desc: "Immerse yourself in the quiet power of tradition. Where shadows play on bamboo paths and time stands still.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3270&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Iceland",
    sub: "Fire & Ice",
    desc: "A landscape forged by the gods. Witness the raw, unfiltered beauty of nature at the edge of the world.",
    img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=3259&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Tulum",
    sub: "Mayan Coast",
    desc: "Where the jungle meets the jade sea. A sanctuary for the soul, hidden away from the noise of modern life.",
    img: "https://images.unsplash.com/photo-1504541989296-167df755af3f?q=80&w=3000&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Petra",
    sub: "The Rose City",
    desc: "Carved directly into vibrant red sandstone cliffs. A lost civilization revealed in the desert sun.",
    // NEW STABLE LINK
    img: "https://images.unsplash.com/photo-1579606864654-e40a6538b936?q=80&w=3000&auto=format&fit=crop"
  },
  {
    id: "05",
    name: "Santorini",
    sub: "Aegean Dream",
    desc: "White cycladic architecture clinging to volcanic cliffs. Watch the world's most famous sunset turn the ocean gold.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=3000&auto=format&fit=crop"
  },
  {
    id: "06",
    name: "Marrakech",
    sub: "Red City",
    desc: "A sensory explosion of spice, color, and texture. Lose yourself in the labyrinth of the Medina.",
    img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=3353&auto=format&fit=crop"
  },
  {
    id: "07",
    name: "Maldives",
    sub: "Indian Ocean",
    desc: "Water so clear it looks like glass. The ultimate disconnect from reality, suspended over the blue abyss.",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=3265&auto=format&fit=crop"
  }
];