const data = [
  
  { category: 'breakfast',
    name: 'buttermilk pancakes',
    price: 15.99,
    description: 'Lorem0 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/pexels-ash-376464.jpg',
    alt: 'buttermilk pancakes'
  },
  { category: 'lunch',
    name: 'diner double',
    price: 13.99,
    description: 'Lorem1 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/pexels-rajesh-tp-1633578.jpg',
    alt: 'diner'
  },
  { category: 'shakes',
    name: 'godzila milkshake',
    price: 6.99,
    description: 'Lorem2 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg',
    alt: 'godzila-milkshake'
  },
  { category: 'dinner',
    name: 'diner delight',
    price: 20.99,
    description: 'Lorem3 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/delight.jpg',
    alt: 'delight'
  },
  { category: 'dinner',
    name: 'egg attack',
    price: 22.99,
    description: 'Lorem4 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/egg-atack.jpg',
    alt: 'egg-attack'
  },
  { category: 'shakes',
    name: 'oreo dream',
    price: 18.99,
    description: 'Lorem5 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/oreo-dream.jpg',
    alt: 'oreo-dream'
  },
  { category: 'lunch',
    name: 'bacon overflow',
    price: 8.99,
    description: 'Lorem6 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/bacon-overflow.jpg',
    alt: 'bacon-overflow'
  },
  { category: 'lunch',
    name: 'american classic',
    price: 12.99,
    description: 'Lorem7 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/american-classic.jpg',
    alt: 'american-classic'
  },
  { category: 'breakfast',
    name: 'quarantine buddy',
    price: 16.99,
    description: 'Lorem8 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/quarantine-buddy.jpg',
    alt: 'quarantine-buddy'
  },
  { category: 'diner',
    name: 'steak',
    price: 39.99,
    description: 'Lorem8 ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quisquam natus necessitatibus inventore exercitationem repellat.',
    image: 'images/source/steak.jpg',
    alt: 'steak'
  }

];


const buttons = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.card');
const content = document.querySelector('.content');


function outputItems(array) {

  const out = array.map(key => {

    return `<div class="card ${key.category}">
              <div class="card__img"><img src="${key.image}" alt="${key.alt}"></div>
              <div class="card__description">
                <div class="card__header-price"> ${key.name} <span class="card__price">$ ${key.price}</span></div>
                <div class="card__description-text">${key.description}</div>
              </div>
            </div>`

});

  content.innerHTML = out.join('');

}


outputItems(data);


function app() {

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;

      let need = data.filter(item => item.category === currentCategory);

      if ( currentCategory !== 'all') {
        outputItems(need);
      }
      else {
        outputItems(data);
      }

    });
  });
}


app();






