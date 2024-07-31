const users = [
  {
    name: "Iron Man",
    username: "@CosmicArtisan",
    role: "@Sculptor",
    img: "./images/Iron.png",
    bid: "1.35 ETH",
    cirecle: "./images/Ironmaster.png",
    virgole: ",",
  },
  {
    name: "Feline Brushstrokes",
    username: "@Robotica",
    role: "@MysticInk",
    img: "./images/catiron.png",
    bid: "1.86 ETH",
    cirecle: "./images/Catmaster.png",
    virgole: ",",
  },
  {
    name: "Illuminated Enigma",
    username: "@EtherFlow",
    role: "@NanoNebula",
    img: "./images/Monster.png",
    bid: "2.05 ETH",
    cirecle: "./images/Monstermaster.png",
    virgole: ",",
    boder: "border-[0.1rem] border-purple-200",
  },
  {
    name: "Pint-Sized Voyager",
    username: "@BinaryBard",
    role: "",
    img: "./images/juje.png",
    bid: "1.87 ETH",
    cirecle: "./images/jujemaster.png",
    virgole: "",
  },
  {
    name: "Charmingly Fluffed",
    username: "@LunarArt",
    role: "@Robotica",
    img: "./images/kute.png",
    bid: "2.32 ETH",
    cirecle: "./images/kutemaster.png",
    virgole: ",",
  },
];
function renderCards(list) {
  const cardsContainer = document.querySelector(".containerNft");
  cardsContainer.innerHTML = "";
  list.forEach((user, index) => {
    const card = document.createElement("div");
    card.className =
      "card_1 w-[30.88rem] h-[37.7rem] rounded-[1.5rem] flex flex-col items-center justify-center";
    if (index === 2) {
      card.classList.add(
        "border-[0.1rem]",
        "border-purple-200",
        "rounded-[1.5rem]"
      );
    }

    card.innerHTML = `
            <img src="${user.img}" alt="#" />
            <div class="content_cars__1 w-[28.48rem] h-[7.7rem] flex flex-col justify-around ">
                <div class="w-[22.8rem] h-[4.2rem] flex items-center">
                    <h3 class="text-purple-100 font-bold text-[2.1rem]">${user.name}</h3>
                </div>
                <div class="content_cars__1___deatail flex justify-between items-center w-[21.8rem] h-[2.7rem]">
                    <div class="content_cars__1___deatail____images">
                        <img src="${user.cirecle}"/>
                    </div>
                    <div class="content_cars__1___deatail____addres text-black-100 font-medium text-[1.2rem] w-[16.8rem] h-[2.7rem] flex justify-between items-center">
                        <span>${user.username}</span>
                        <span>${user.virgole}</span>
                        <span>${user.role}</span>
                    </div>
                </div>
            </div>
            <br />
            <span class="w-full h-[0.1rem] bg-gray-line block"></span>
            <br />
            <div class="footer_cars__1 w-[28.1rem] font-medium text-[1.2rem] flex justify-between items-center">
                <div class="w-[7.4rem] h-[4rem] flex flex-col justify-between">
                    <span class="text-gray-100"> Current Bid :</span>
                    <span class="flex justify-between items-center w-full text-black-100">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.33334 6.41677L7.00001 7.58335L11.6667 6.41669M2.33334 6.41677L7.00001 1.16669M2.33334 6.41677L7.00001 5.25007M11.6667 6.41669L7.00001 1.16669M11.6667 6.41669L7.00001 5.25007M7.00001 1.16669V5.25007M3.20834 8.75002L7.00008 12.8334L10.7917 8.75002L7.00001 9.62502L3.20834 8.75002Z" stroke="#6F4FF2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        ${user.bid}
                    </span>
                </div>
                <a class="w-[8.6rem] h-[2.9rem] rounded-[2.4rem] bg-purple-200 flex justify-center items-center text-while-100 font-medium text-[1.2rem]" href="#">Place a Bid</a>
            </div>
        `;
    cardsContainer.appendChild(card);
  });
}

const searchBox = document.getElementById("search");

searchBox.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  console.log(keyword);
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(keyword) ||
      user.username.toLowerCase().includes(keyword) ||
      user.role.toLowerCase().includes(keyword) ||
      user.bid.toLowerCase().includes(keyword)
  );
  renderCards(filteredUsers);
});
renderCards(users);
