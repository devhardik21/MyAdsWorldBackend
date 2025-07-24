import { CategoryListing } from "../models/listing.models.js";

const InsertingCategory = async () => {
  await CategoryListing.insertMany([
    {
      CategoryName: "IT & Telecom Services",
      CategoryUrl: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Service Providers",
      CategoryUrl: "https://images.unsplash.com/photo-1753024678427-3bd878f1d5d8?q=80&w=618&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Restaurants",
      CategoryUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Jobs",
      CategoryUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Coaching Centers",
      CategoryUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Fitness / Gym",
      CategoryUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Media, PR & Publishing",
      CategoryUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Medicals",
      CategoryUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Sports Goods, Toys & Games",
      CategoryUrl: "https://images.unsplash.com/photo-1593436878396-53d5dc799b5d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Automobile , Parts & Spares",
      CategoryUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Transportation & Logistics",
      CategoryUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Pest Control Services",
      CategoryUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Event Planner & Organizer",
      CategoryUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Apparel & Garments",
      CategoryUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Security Systems & Services",
      CategoryUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Books & Stationery",
      CategoryUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Daily Needs",
      CategoryUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Kitchen Utensils & Appliances",
      CategoryUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Advocates & Lawyers",
      CategoryUrl: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Electronics & Electrical",
      CategoryUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Beauty Parlours & Salons",
      CategoryUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Furniture & Supplies",
      CategoryUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Marble, Granite & Stones",
      CategoryUrl: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Colleges",
      CategoryUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Fashion Accessories & Gear",
      CategoryUrl: "https://images.unsplash.com/photo-1574939298777-0936ee5bbbc9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Caterers",
      CategoryUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Computer & IT Solutions",
      CategoryUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Financial & Legal Services",
      CategoryUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Telecom Equipment & Goods",
      CategoryUrl: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Gems and Jewellery",
      CategoryUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Business & Audit Services",
      CategoryUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Packers and Movers",
      CategoryUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Hotel & Resorts",
      CategoryUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Clinics & Hospitals",
      CategoryUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Home Tutor",
      CategoryUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "MASON",
      CategoryUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Electrician",
      CategoryUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Blacksmith",
      CategoryUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "SOFA CLEANING",
      CategoryUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "HOUSE CLEANING",
      CategoryUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Shoe Maker",
      CategoryUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Carpenter",
      CategoryUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Tailors",
      CategoryUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "A.C. REPAIR",
      CategoryUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "PG and Rooms",
      CategoryUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Gardeners",
      CategoryUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "APPLIANCE REPAIR",
      CategoryUrl: "https://images.unsplash.com/photo-1621905252472-e8592afb8f2f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "PAINTING",
      CategoryUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Plumber",
      CategoryUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "TILES & FLOORING",
      CategoryUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      CategoryName: "Pandits & Purohits",
      CategoryUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]);
};

console.log("All the categories listed !");

export { InsertingCategory };