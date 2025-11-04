export interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  type: string;
  category: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  // 🏠 Residential Construction (3)
  {
    id: "R001",
    title: "Luxury Villa - TS147",
    location: "Manikonda, Hyderabad",
    area: "7000 sft",
    type: "G+2",
    category: "Residential Construction",
    description:
      "A luxury contemporary home designed with open spaces, natural light, and lush garden views.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "R002",
    title: "Modern Duplex - TS316",
    location: "Sainikpuri, Hyderabad",
    area: "8000 sft",
    type: "Duplex",
    category: "Residential Construction",
    description:
      "An elegant duplex villa with sleek architecture, abundant lighting, and energy-efficient features.",
   images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "R003",
    title: "Elegant Bungalow - TS218",
    location: "Madhapur, Hyderabad",
    area: "6000 sft",
    type: "G+1",
    category: "Residential Construction",
    description:
      "A stylish bungalow combining modern comfort with classic aesthetics and serene surroundings.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },

  // 🏢 Commercial Construction (3)
  {
    id: "C001",
    title: "Tech Park - TS313",
    location: "Financial District, Hyderabad",
    area: "20000 sft",
    type: "G+5",
    category: "Commercial Construction",
    description:
      "A premium commercial complex with glass façade and state-of-the-art amenities for enterprises.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "C002",
    title: "Business Tower - TS314",
    location: "Hitech City, Hyderabad",
    area: "15000 sft",
    type: "G+4",
    category: "Commercial Construction",
    description:
      "An innovative workspace designed with glass facades and modern interiors for tech startups.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "C003",
    title: "Metro Plaza - TS315",
    location: "Kondapur, Hyderabad",
    area: "10000 sft",
    type: "G+3",
    category: "Commercial Construction",
    description:
      "A retail and business plaza offering versatile spaces for offices and showrooms.",
   images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },

  // 🏗️ Architecture Service (3)
  {
    id: "A001",
    title: "Skyline Villa Concept",
    location: "Gachibowli, Hyderabad",
    area: "7200 sft",
    type: "G+2",
    category: "Architecture Service",
    description:
      "Contemporary architectural design integrating smart space utilization and minimalistic elegance.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "A002",
    title: "Concept Tower Design",
    location: "Kukatpally, Hyderabad",
    area: "11000 sft",
    type: "G+7",
    category: "Architecture Service",
    description:
      "A unique architectural vision focusing on balance between aesthetics and sustainability.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "A003",
    title: "Green Courtyard Residence",
    location: "Madhapur, Hyderabad",
    area: "5000 sft",
    type: "G+1",
    category: "Architecture Service",
    description:
      "A modern home designed with indoor-outdoor blending and eco-friendly materials.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },

  // 🛋️ Interior & Smart Home (3)
  {
    id: "I001",
    title: "Smart Apartment",
    location: "Kompally, Hyderabad",
    area: "1800 sft",
    type: "3BHK",
    category: "Interior & Smart Home",
    description:
      "Smart home with integrated automation, elegant decor, and warm lighting ambience.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "I002",
    title: "Luxury Penthouse Interiors",
    location: "Banjara Hills, Hyderabad",
    area: "2500 sft",
    type: "4BHK",
    category: "Interior & Smart Home",
    description:
      "A luxurious penthouse featuring modern smart automation with high-end furnishing.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "I003",
    title: "Minimalist Studio Design",
    location: "Gachibowli, Hyderabad",
    area: "1200 sft",
    type: "Studio",
    category: "Interior & Smart Home",
    description:
      "Minimalist yet luxurious smart home setup optimized for comfort and style.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },

  // 🧱 Project Management (3)
  {
    id: "P001",
    title: "Sunshine Residency",
    location: "Tellapur, Hyderabad",
    area: "25000 sft",
    type: "G+8",
    category: "Project Management",
    description:
      "Complete end-to-end project management with detailed tracking, planning, and execution.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "P002",
    title: "Elite Corporate Hub",
    location: "Gachibowli, Hyderabad",
    area: "30000 sft",
    type: "G+10",
    category: "Project Management",
    description:
      "Professional management of large-scale commercial projects ensuring quality and delivery.",
    images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
  {
    id: "P003",
    title: "Harmony Towers",
    location: "Madhapur, Hyderabad",
    area: "22000 sft",
    type: "G+9",
    category: "Project Management",
    description:
      "Turnkey project execution service managing multiple contractors, timelines, and budgets.",
   images: [
      "https://www.chennaiproperties.com/projectsgallery/6040/salepageimages/Vishaka_Sai_1.jpeg",
      "https://lscdn.blob.core.windows.net/add-post/subcategoryid/11238035-add-17094855987334998.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mt0vhh5wdaJuMm2AH8fF-kNs6upw3nKoCJY7GA_p8FdAfG7F6EGpSmEFccLrZ6-YWD8&usqp=CAU",
    ],
  },
];
