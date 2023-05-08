const types = {
  doughThickness: ["Тонкое", "Толстое"],
  filterChoice: [
    "Все",
    "Пепперони",
    "Курица",
    "Открытая",
    "Закрытая",
    "Вегетарианская",
  ],
  sortChoice: [
    { name: "названию ↑", type: "name" },
    { name: "названию ↓", type: "name" },
    { name: "рейтингу ↑", type: "rating" },
    { name: "рейтингу ↓", type: "rating" },
    { name: "цене ↑", type: "price" },
    { name: "цене ↓", type: "price" },
  ],
};
export default types;
