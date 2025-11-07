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
      "https://5.imimg.com/data5/JZ/ZC/XR/SELLER-33343279/house-design-9.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507735/Rajesh_sir_3d_Designs_2__page-0007_kmb3ht.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507736/Rajesh_sir_3d_Designs_2__page-0009_ztkbo6.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507734/Rajesh_sir_3d_Designs_2__page-0004_iy1r1c.jpg"
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
      "https://api.makemyhouse.com/public/Media/rimage/500/completed-project/1760525004_124.jpg?watermark=false",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507732/Rajesh_sir_3d_Designs_2__page-0003_xatwjw.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507732/Rajesh_sir_3d_Designs_2__page-0008_gcrjag.jpg",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXW__FF3MU8f0gpe3Cy-GHx8XOevIxqfs_w&s",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507713/Rajesh_sir_3d_Designs_2__page-0002_gw8p7c.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507693/Rajesh_sir_3d_Designs_2__page-0001_eacplj.jpg",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnYliGhyY_5ygO1Eo7ZYyi0zLJ2RzRsFrtA&s",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507713/Rajesh_sir_3d_Designs_2__page-0002_gw8p7c.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507693/Rajesh_sir_3d_Designs_2__page-0001_eacplj.jpg",
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
      "https://api.makemyhouse.com/public/Media/rimage/1024/completed-project/1576574130_903.jpg?version=latest?version=latest&watermark=true",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507735/Rajesh_sir_3d_Designs_2__page-0007_kmb3ht.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507736/Rajesh_sir_3d_Designs_2__page-0009_ztkbo6.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507734/Rajesh_sir_3d_Designs_2__page-0004_iy1r1c.jpg"
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiPNTnbDl3GEvcSZj1xzZXfEZsb8_1XNb3g&s",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507736/Rajesh_sir_3d_Designs_2__page-0009_ztkbo6.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507734/Rajesh_sir_3d_Designs_2__page-0004_iy1r1c.jpg"
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
      "data:image/jpeg;base64,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",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRsGk3-7Zw3GC6I_FmDfxUWiXtptcNbCwFQ&s",
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
      "https://5.imimg.com/data5/SELLER/Default/2021/12/WA/VB/WS/78350406/architectural-designing-service-500x500.jpg",
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
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507714/Rajesh_sir_3d_Designs_2__page-0006_xc7d92.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507735/Rajesh_sir_3d_Designs_2__page-0007_kmb3ht.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507751/ram_sai_sir_final_designs_page-0002_d2tjmy.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507750/ram_sai_sir_final_designs_page-0001_u3ma6t.jpg"
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
      "https://img.freepik.com/free-photo/modern-living-room-interior-with-large-tv-screen-displaying-home-automation-system_9975-33164.jpg?semt=ais_hybrid&w=740&q=80",
      "https://media.istockphoto.com/id/185320440/photo/beautiful-family-lounge.jpg?s=612x612&w=0&k=20&c=m3hh8t7lf07bXtw9d7_FU0NHyE4I6Iinx_mIG1Odt3s=",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507813/Praneeth_pranav_flora-413_venkat_Reddy_sir_Final_3D_page-0016_pbtfoa.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507796/Praneeth_pranav_flora-413_venkat_Reddy_sir_Final_3D_page-0009_egh3o9.jpg"
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6ayr6bK0O13rLF4H_oapZ2nIppVL_KVcsg&s",
      "https://img.freepik.com/free-photo/modern-living-room-interior-with-large-tv-screen-displaying-home-automation-system_9975-33164.jpg?semt=ais_hybrid&w=740&q=80",
      "https://media.istockphoto.com/id/185320440/photo/beautiful-family-lounge.jpg?s=612x612&w=0&k=20&c=m3hh8t7lf07bXtw9d7_FU0NHyE4I6Iinx_mIG1Odt3s=",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507813/Praneeth_pranav_flora-413_venkat_Reddy_sir_Final_3D_page-0016_pbtfoa.jpg",
      "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507796/Praneeth_pranav_flora-413_venkat_Reddy_sir_Final_3D_page-0009_egh3o9.jpg"
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Si9DcRVg3xyoCBxr8cRqmh5yivx_0rFC_Q&s",
      "https://lead-academy.org/blog/wp-content/uploads/2022/12/How-to-Become-a-Construction-Project-Manager-1.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hvIMhbPloC9sQ9tbEcFRX-ceeaw4MAgdzdIQuaOvBE_PpqYEXOBoFs3lttkalnRiq34&usqp=CAU",
    ],
  },
  /* {
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
  }, */
];
