// ============================================================
//  TCS — Single source of truth for all store data
//  To add/edit/remove items, only change this file.
// ============================================================

const BOOKS = [
  { id:1,  title:"Calculus 101",                      category:"maths",   price:29.49, cover:"https://covers.openlibrary.org/b/id/6979861-L.jpg",   popular:true,  recommended:false },
  { id:2,  title:"Beginning C++ Compilers",        category:"cs",      price:12.99, cover:"https://covers.openlibrary.org/b/id/8739161-L.jpg",   popular:true,  recommended:false },
  { id:3,  title:"1st Year Chemistry",             category:"science", price:10.38, cover:"https://covers.openlibrary.org/b/id/8091016-L.jpg",   popular:true,  recommended:false },
  { id:4,  title:"Fundamental of Physics",         category:"science", price:17.99, cover:"https://covers.openlibrary.org/b/id/10527843-L.jpg",  popular:true,  recommended:true  },
  { id:5,  title:"The Design of Everyday Things",  category:"cs",      price:18.00, cover:"https://covers.openlibrary.org/b/id/8739161-L.jpg",   popular:true,  recommended:false },
  { id:6,  title:"Linear Algebra Done Right",      category:"maths",   price:22.50, cover:"https://covers.openlibrary.org/b/id/6979861-L.jpg",   popular:true,  recommended:false },
  { id:7,  title:"Organic Chemistry",              category:"science", price:31.00, cover:"https://covers.openlibrary.org/b/id/8091016-L.jpg",   popular:true,  recommended:false },
  { id:8,  title:"Introduction to Computer",       category:"cs",      price: 9.99, cover:"https://covers.openlibrary.org/b/id/8739161-L.jpg",   popular:false, recommended:true  },
  { id:9,  title:"A Textbook of Mathematics",      category:"maths",   price: 8.50, cover:"https://covers.openlibrary.org/b/id/8091016-L.jpg",   popular:false, recommended:true  },
  { id:10, title:"Clean Code",                     category:"cs",      price:14.00, cover:"https://covers.openlibrary.org/b/id/8739161-L.jpg",   popular:false, recommended:true  },
  { id:11, title:"Statistics for Engineers",       category:"maths",   price:19.99, cover:"https://covers.openlibrary.org/b/id/6979861-L.jpg",   popular:false, recommended:true  },
  { id:12, title:"Campbell Biology",               category:"science", price:35.00, cover:"https://covers.openlibrary.org/b/id/8091016-L.jpg",   popular:false, recommended:true  },
  { id:13, title:"Discrete Mathematics",           category:"maths",   price:24.00, cover:"https://covers.openlibrary.org/b/id/6979861-L.jpg",   popular:false, recommended:false },
  { id:14, title:"Data Structures & Algorithms",   category:"cs",      price:27.50, cover:"https://covers.openlibrary.org/b/id/10527843-L.jpg",  popular:false, recommended:false },
  { id:15, title:"General Physics Vol.1",          category:"science", price:21.00, cover:"https://covers.openlibrary.org/b/id/10527843-L.jpg",  popular:false, recommended:false },
  { id:16, title:"Introduction to Algorithms",     category:"cs",      price:32.00, cover:"https://covers.openlibrary.org/b/id/8739161-L.jpg",   popular:false, recommended:false },
  { id:17, title:"Probability & Statistics",       category:"maths",   price:16.75, cover:"https://covers.openlibrary.org/b/id/6979861-L.jpg",   popular:false, recommended:false },
  { id:18, title:"Biochemistry Essentials",        category:"science", price:28.00, cover:"https://covers.openlibrary.org/b/id/8091016-L.jpg",   popular:false, recommended:false },
  { id:19, title:"Computer Networks",              category:"cs",      price:23.99, cover:"https://covers.openlibrary.org/b/id/10527843-L.jpg",  popular:false, recommended:false },
  { id:20, title:"Advanced Calculus",              category:"maths",   price:33.00, cover:"https://covers.openlibrary.org/b/id/6979861-L.jpg",   popular:false, recommended:false },
];

const SUPPLIES = [
  { id:101, title:"Casio FX-991EX Calculator",    category:"calculator", price:18.99, img:"https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=400&q=80" },
  { id:102, title:"Casio FX-82MS Calculator",     category:"calculator", price:12.50, img:"https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=400&q=80" },
  { id:103, title:"Casio FX-350ES Plus",           category:"calculator", price:14.99, img:"https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=400&q=80" },
  { id:104, title:"A4 Paper Ream (500 sheets)",    category:"paper",      price: 5.99, img:"https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&q=80" },
  { id:105, title:"A3 Paper Pack (100 sheets)",    category:"paper",      price: 4.50, img:"https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&q=80" },
  { id:106, title:"Graph Paper Pad A4",            category:"paper",      price: 2.99, img:"https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&q=80" },
  { id:107, title:"Notebook A4 (200 pages)",       category:"notebook",   price: 3.99, img:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80" },
  { id:108, title:"Spiral Notebook A5",            category:"notebook",   price: 2.50, img:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80" },
  { id:109, title:"Lab Report Notebook",           category:"notebook",   price: 4.20, img:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80" },
  { id:110, title:"30cm Clear Ruler",              category:"ruler",      price: 0.99, img:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80" },
  { id:111, title:"Ruler Set (30cm + 15cm)",       category:"ruler",      price: 1.99, img:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80" },
  { id:112, title:"T-Square Ruler 60cm",           category:"ruler",      price: 5.50, img:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80" },
  { id:113, title:"Compass & Protractor Set",      category:"ruler",      price: 3.99, img:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80" },
  { id:114, title:"Ballpoint Pen Set (10pc)",      category:"pen",        price: 2.50, img:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
  { id:115, title:"Mechanical Pencil 0.5mm",       category:"pen",        price: 3.50, img:"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80" },
  { id:116, title:"Highlighter Set (6 Colors)",    category:"pen",        price: 4.50, img:"https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80" },
  { id:117, title:"Gel Pen Black (5pc)",           category:"pen",        price: 2.99, img:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
  { id:118, title:"Sticky Notes Pack (5 Colors)",  category:"stationery", price: 2.20, img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
  { id:119, title:"Binder A4 2-Ring",              category:"stationery", price: 4.99, img:"https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&q=80" },
  { id:120, title:"Correction Tape",               category:"stationery", price: 1.50, img:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80" },
];

// Secondhand entries reference bookId or supplyId — no data duplication.
// salePrice = discounted price. The original price is looked up from BOOKS/SUPPLIES.
const SECONDHAND = [
  // Books
  { id:201, bookId:1,   salePrice:12.00, condition:"good"     },
  { id:202, bookId:2,   salePrice: 5.00, condition:"fair"     },
  { id:203, bookId:3,   salePrice: 4.50, condition:"like-new" },
  { id:204, bookId:4,   salePrice: 7.00, condition:"good"     },
  { id:205, bookId:10,  salePrice: 6.00, condition:"like-new" },
  { id:206, bookId:11,  salePrice: 8.00, condition:"fair"     },
  { id:207, bookId:7,   salePrice:13.00, condition:"good"     },
  { id:208, bookId:6,   salePrice: 9.00, condition:"like-new" },
  { id:209, bookId:12,  salePrice:14.00, condition:"fair"     },
  { id:210, bookId:16,  salePrice:15.00, condition:"good"     },
  // Supplies
  { id:211, supplyId:101, salePrice:10.00, condition:"like-new" },
  { id:212, supplyId:102, salePrice: 7.00, condition:"good"     },
  { id:213, supplyId:119, salePrice: 2.00, condition:"fair"     },
  { id:214, supplyId:107, salePrice: 2.00, condition:"good"     },
  { id:215, supplyId:112, salePrice: 3.00, condition:"like-new" },
  { id:216, supplyId:113, salePrice: 2.00, condition:"good"     },
  { id:217, supplyId:105, salePrice: 3.00, condition:"like-new" },
  { id:218, supplyId:108, salePrice: 1.00, condition:"fair"     },
];

// ── Helper: resolve a secondhand entry into a full display object ──────────
function resolveSecondhand(entry) {
  if (entry.bookId) {
    const book = BOOKS.find(b => b.id === entry.bookId);
    return { ...entry, title: book.title, cover: book.cover, originalPrice: book.price, category: "books" };
  } else {
    const supply = SUPPLIES.find(s => s.id === entry.supplyId);
    return { ...entry, title: supply.title, cover: supply.img, originalPrice: supply.price, category: "supplies" };
  }
}
