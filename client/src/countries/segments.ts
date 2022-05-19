const segments = [
  //  Continents
  "america 🌎",
  "oceania 🌏",
  "europe 🌍",
  "africa 🌍",
  "asia 🌏",
  // Affiliation
  "United Nations 🇺🇳",
  "European Union 🇪🇺",
  "NATO",
  "G7",
  "G20",
];

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default segments.map((segment) => ({
  id: segment,
  name: capitalizeFirstLetter(segment),
}));
