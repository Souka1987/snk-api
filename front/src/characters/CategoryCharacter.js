const CategoryCharacter = [
  "Jeagerists",
  "Male",
  "Jeager_Family",
  "Wall_Maria",
  "Wall_Rose",
  "Wall_Sheena",
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default CategoryCharacter.map((category) => ({
  id: category,
  name: capitalizeFirstLetter(category),
}));
