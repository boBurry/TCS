const BOOKS = [
  {
    id: 1,
    title: "Calculus: Early Transcendentals",
    category: "maths",
    price: 29.49,
    cover:
      "/assets/books/Calculus- Early Transcendentals — James Stewart (8th ed.).jpg",
    popular: true,
    recommended: false,
  },

  {
    id: 2,
    title: "Beginning C++ Compilers",
    category: "cs",
    price: 12.99,
    cover:
      "/assets/books/Beginning CPP Through Game Programming — Michael Dawson.jpg",
    popular: true,
    recommended: false,
  },

  {
    id: 3,
    title: "1st Year Chemistry",
    category: "science",
    price: 10.38,
    cover:
      "/assets/books/Chemistry- The Central Science — Brown et al. (14th ed.).jpg",
    popular: true,
    recommended: false,
  },

  {
    id: 4,
    title: "Fundamental of Physics",
    category: "science",
    price: 17.99,
    cover: "/assets/books/Fundamentals of Physics.jpeg",
    popular: true,
    recommended: true,
  },

  {
    id: 5,
    title: "The Design of Everyday Things",
    category: "cs",
    price: 18.0,
    cover: "/assets/books/The Design of Everyday Things — Don Norman.jpg",
    popular: true,
    recommended: false,
  },

  {
    id: 6,
    title: "Linear Algebra Done Right",
    category: "maths",
    price: 22.5,
    cover:
      "/assets/books/Linear Algebra Done Right — Sheldon Axler (3rd ed.).jpg",
    popular: true,
    recommended: false,
  },

  {
    id: 7,
    title: "Organic Chemistry",
    category: "science",
    price: 31.0,
    cover: "/assets/books/Organic-Chemistry-9e-by-John-McMurry.jpg",
    popular: true,
    recommended: false,
  },

  {
    id: 8,
    title: "Introduction to Computer",
    category: "cs",
    price: 9.99,
    cover:
      "/assets/books/Introduction to Information Technology — Sanjay Saxena.jpg",
    popular: false,
    recommended: true,
  },

  {
    id: 9,
    title: "Plane Trigonometry Part 1",
    category: "maths",
    price: 8.5,
    cover: "/assets/books/PLANE-TRIGONOMETRY-Part-1-S-Loney.jpg",
    popular: false,
    recommended: true,
  },

  {
    id: 10,
    title: "Clean Code",
    category: "cs",
    price: 14.0,
    cover: "/assets/books/Clean Code — Robert C. Martin.jpg",
    popular: false,
    recommended: true,
  },

  {
    id: 11,
    title: "Statistics for Engineers",
    category: "maths",
    price: 19.99,
    cover:
      "/assets/books/Statistics for Engineers and Scientists — William Navidi (4th ed.).jpg",
    popular: false,
    recommended: true,
  },

  {
    id: 12,
    title: "Campbell Biology",
    category: "science",
    price: 35.0,
    cover: "/assets/books/Campbell Biology — Reece et al. (11th ed.).jpg",
    popular: false,
    recommended: true,
  },

  {
    id: 13,
    title: "Discrete Mathematics",
    category: "maths",
    price: 24.0,
    cover:
      "/assets/books/Discrete Mathematics and Its Applications — Kenneth Rosen (8th ed.).png",
    popular: false,
    recommended: false,
  },

  {
    id: 14,
    title: "Data Structures & Algorithms",
    category: "cs",
    price: 27.5,
    cover:
      "/assets/books/Data Structures & Algorithms in Python — Goodrich, Tamassia.jpg",
    popular: false,
    recommended: false,
  },

  {
    id: 15,
    title: "General Physics Vol.1",
    category: "science",
    price: 21.0,
    cover: "/assets/books/University Physics — Young & Freedman (15th ed.).jpg",
    popular: false,
    recommended: false,
  },

  {
    id: 16,
    title: "Introduction to Algorithms",
    category: "cs",
    price: 32.0,
    cover:
      "/assets/books/Introduction to Algorithms (CLRS) — Cormen et al. (3rd ed.).jpg",
    popular: false,
    recommended: false,
  },

  {
    id: 17,
    title: "Probability & Statistics",
    category: "maths",
    price: 16.75,
    cover:
      "/assets/books/Probability & Statistics for Engineering — Jay Devore (9th ed.).jpeg",
    popular: false,
    recommended: false,
  },

  {
    id: 18,
    title: "Biochemistry Essentials",
    category: "science",
    price: 28.0,
    cover: "/assets/books/Biochemistry — Jeremy Berg (Stryer) (8th ed.).jpg",
    popular: false,
    recommended: false,
  },

  {
    id: 19,
    title: "Computer Networks",
    category: "cs",
    price: 23.99,
    cover: "/assets/books/Computer Networks — Andrew Tanenbaum (5th ed.).jpg",
    popular: false,
    recommended: false,
  },

  {
    id: 20,
    title: "Advanced Calculus",
    category: "maths",
    price: 33.0,
    cover: "/assets/books/Advanced Calculus — Patrick Fitzpatrick (2nd ed.).jpg",
    popular: false,
    recommended: false,
  },
];

const SUPPLIES = [
  {
    id: 101,
    title: "Casio FX-991EX Calculator",
    category: "calculator",
    price: 18.99,
    img: "/assets/supplies/casio fx-991ex calculator.avif",
  },
  {
    id: 102,
    title: "Casio FX-82MS Calculator",
    category: "calculator",
    price: 12.5,
    img: "/assets/supplies/Casio FX-82MS Calculator.avif",
  },
  {
    id: 103,
    title: "Casio FX-350ES Plus",
    category: "calculator",
    price: 14.99,
    img: "/assets/supplies/Casio FX-350ES Plus.avif",
  },
  {
    id: 104,
    title: "A4 Paper Ream (500 sheets)",
    category: "paper",
    price: 5.99,
    img: "/assets/supplies/A4 Paper Ream (500 sheets).jpeg",
  },
  {
    id: 105,
    title: "A3 Paper Pack (100 sheets)",
    category: "paper",
    price: 4.5,
    img: "/assets/supplies/A3 Paper Pack (100 sheets).jpg",
  },
  {
    id: 106,
    title: "Graph Paper Pad A4",
    category: "paper",
    price: 2.99,
    img: "/assets/supplies/Graph Paper Pad A4.png",
  },
  {
    id: 107,
    title: "Notebook A4 (200 pages)",
    category: "notebook",
    price: 3.99,
    img: "/assets/supplies/Notebook A4 (200 pages).jpg",
  },
  {
    id: 108,
    title: "30cm Clear Ruler",
    category: "ruler",
    price: 0.99,
    img: "/assets/supplies/30cm Clear Ruler.jpg",
  },
  {
    id: 109,
    title: "Ruler Set (30cm + 15cm)",
    category: "ruler",
    price: 1.99,
    img: "/assets/supplies/Ruler Set (30cm, 15cm).jpg",
  },
  {
    id: 110,
    title: "T-Square Ruler 60cm",
    category: "ruler",
    price: 5.5,
    img: "/assets/supplies/T-Square Ruler 60cm.jpg",
  },
  {
    id: 111,
    title: "Compass & Protractor Set",
    category: "ruler",
    price: 3.99,
    img: "/assets/supplies/Compass & Protractor Set.webp",
  },
  {
    id: 112,
    title: "Ballpoint Pen Set (10pc)",
    category: "pen",
    price: 2.5,
    img: "/assets/supplies/Ballpoint Pen Set (10pc).jpg",
  },
  {
    id: 113,
    title: "Mechanical Pencil 0.5mm",
    category: "pen",
    price: 3.5,
    img: "/assets/supplies/Mechanical Pencil 0.5mm.jpg",
  },
  {
    id: 114,
    title: "Highlighter Set (6 Colors)",
    category: "pen",
    price: 4.5,
    img: "/assets/supplies/Highlighter Set (6 Colors).jpg",
  },
  {
    id: 115,
    title: "Sticky Notes Pack (5 Colors)",
    category: "stationery",
    price: 2.2,
    img: "/assets/supplies/Sticky Notes Pack (5 Colors).jpg",
  },
  {
    id: 116,
    title: "Binder A4 2-Ring",
    category: "stationery",
    price: 4.99,
    img: "/assets/supplies/Binder A4 2-Ring.jpeg",
  },
  {
    id: 117,
    title: "Correction Pen",
    category: "stationery",
    price: 1.5,
    img: "/assets/supplies/Correction Tape.jpg",
  },
];

const SECONDHAND = [
  // Books
  { id: 201, bookId: 1, salePrice: 12.0, condition: "good" },
  { id: 202, bookId: 2, salePrice: 5.0, condition: "fair" },
  { id: 203, bookId: 3, salePrice: 4.5, condition: "like-new" },
  { id: 204, bookId: 4, salePrice: 7.0, condition: "good" },
  { id: 205, bookId: 10, salePrice: 6.0, condition: "like-new" },
  { id: 206, bookId: 11, salePrice: 8.0, condition: "fair" },
  { id: 207, bookId: 7, salePrice: 13.0, condition: "good" },
  { id: 208, bookId: 6, salePrice: 9.0, condition: "like-new" },
  { id: 209, bookId: 12, salePrice: 14.0, condition: "fair" },
  { id: 210, bookId: 16, salePrice: 15.0, condition: "good" },
  // Supplies
  { id: 211, supplyId: 101, salePrice: 10.0, condition: "like-new" },
  { id: 212, supplyId: 102, salePrice: 7.0, condition: "good" },
  { id: 213, supplyId: 119, salePrice: 2.0, condition: "fair" },
  { id: 214, supplyId: 107, salePrice: 2.0, condition: "good" },
  { id: 215, supplyId: 112, salePrice: 3.0, condition: "like-new" },
  { id: 216, supplyId: 113, salePrice: 2.0, condition: "good" },
  { id: 217, supplyId: 105, salePrice: 3.0, condition: "like-new" },
  { id: 218, supplyId: 108, salePrice: 1.0, condition: "fair" },
];

const USERS = [
  {
    studentId: "ITC2024001",
    password: "password",
    firstName: "Sun",
    lastName: "Sovisal",
    email: "sunsovisal@itc.edu.kh",
    phone: "+855 12 345 678",
    location: "Phnom Penh, Cambodia",
    role: "CS Student",
  },
  {
    studentId: "ITC2024002",
    password: "password",
    firstName: "Sun",
    lastName: "Ousaphea",
    email: "sunousaphea@itc.edu.kh",
    phone: "+855 12 345 678",
    location: "Phnom Penh, Cambodia",
    role: "CS Student",
  },
  {
    studentId: "ITC2024003",
    password: "password",
    firstName: "Phai",
    lastName: "Jingpo",
    email: "phaijingpo@itc.edu.kh",
    phone: "+855 12 345 678",
    location: "Phnom Penh, Cambodia",
    role: "CS Student",
  },
  {
    studentId: "ITC2024004",
    password: "password",
    firstName: "Thy",
    lastName: "Rathanak",
    email: "thyrathanak@itc.edu.kh",
    phone: "+855 12 345 678",
    location: "Phnom Penh, Cambodia",
    role: "CS Student",
  },
  {
    studentId: "ITC2024005",
    password: "password",
    firstName: "Rin",
    lastName: "Sopheary",
    email: "rinsopheary@itc.edu.kh",
    phone: "+855 12 345 678",
    location: "Phnom Penh, Cambodia",
    role: "CS Student",
  },
];

// ── resolve a secondhand entry into a full display object ──────────
function resolveSecondhand(entry) {
  if (entry.bookId) {
    const book = BOOKS.find((b) => b.id === entry.bookId);
    if (!book) return null;
    return {
      ...entry,
      title: book.title,
      cover: book.cover,
      originalPrice: book.price,
      category: "books",
    };
  } else {
    const supply = SUPPLIES.find((s) => s.id === entry.supplyId);
    if (!supply) return null;
    return {
      ...entry,
      title: supply.title,
      cover: supply.img,
      originalPrice: supply.price,
      category: "supplies",
    };
  }
}
