const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://www.biggerbolderbaking.com/wp-content/uploads/2014/03/1C5A0907-1024x781.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPaE7SNER2XskkPFuyuuRzfj3Z91YRXxLq7AzLYYq1VPEYDsLqOXXUBoCArpHL8--U6U&usqp=CAU",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://d3hkrbfxf7jd3r.cloudfront.net/article/lead_image/6371095/0_DSC_5334-copy-1.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.livemint.com/img/2019/01/22/600x338/8e60a944-1e33-11e9-b09d-ec8e717504b6_1548182310697_1548182334634.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/10/e2/8f/26/food.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://i.pinimg.com/originals/b6/6e/02/b66e020ccea22b24b159f66a2ee644de.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://mykitchenserenity.com/wp-content/uploads/2019/03/AvocadoBakedEggs_horizontal-2.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://thefutureisred.typepad.com/.a/6a00e0099468ea8833013480ada526970c-500wi",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Scrambled Egg and Greens Sandwich",
    category: "shakes",
    price: 16.99,
    img: "https://data.thefeedfeed.com/static/2019/09/09/15680468445d767efce4b7e.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Proper dish",
    category: "lunch",
    price: 16.99,
    img: "http://cdn.one.org/africa/wp-content/uploads/2014/11/Screen-Shot-2014-11-25-at-15.05.41.png",
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const buttons = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu)
});

function displayMenuItem(menuItem){
  let displayMenu = menuItem.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

buttons.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const cat = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItems){
      // console.log(menuItems.category)
      if(menuItems.category === cat){
        return menuItems;
      }
    })
       if (cat === 'all'){
        displayMenuItem(menu)
      }else{
        displayMenuItem(menuCategory)
      }

  })
  
})