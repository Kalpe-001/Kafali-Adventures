const packages = {
  khaptad: {
    title: "Khaptad National Park",
    image: "package3.jpg",
    desc: "Lush forests, rolling hills, serene lakes, and diverse flora and fauna...",
    duration: "5-7 Days",
    difficulty: "Moderate"
  },
  saipal: {
    title: "Saipal Base Camp",
    image: "package2.jpg",
    desc: "Stunning panoramic peaks, glaciers, alpine meadows, and remote villages...",
    duration: "14-16 Days",
    difficulty: "Hard"
  },
  api: {
    title: "Api Base Camp",
    image: "package1.jpg",
    desc: "Breathtaking views of Api Himal, remote Himalayan villages, pristine glaciers...",
    duration: "12-14 Days",
    difficulty: "Hard"
  },
  rara: {
    title: "Rara Lake Tour",
    image: "tour package/package1.jpg",
    desc: "Turquoise waters of Nepal’s largest lake, surrounding hills, and peaceful landscapes...",
    duration: "3-4 Days",
    difficulty: "Easy-Moderate"
  },
  phoksundo: {
    title: "Shey Phoksundo National Park",
    image: "tour package/package2.jpeg",
    desc: "Stunning Phoksundo Lake, Tibetan-influenced villages, diverse wildlife...",
    duration: "7-9 Days",
    difficulty: "Moderate-Hard"
  },
  mustang: {
    title: "Mustang Tour",
    image: "tour package/package3.jpeg",
    desc: "Ancient Lo Manthang palace, monasteries, Mukhtinath, arid valleys...",
    duration: "10-12 Days",
    difficulty: "Hard"
  }
};
function viewPackage(id) {
  localStorage.setItem('selectedPackage', JSON.stringify(packages[id]));
  window.location.href = "package.html";
}