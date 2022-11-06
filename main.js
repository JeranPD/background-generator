const menu = [
    {
        title: 'Burger Super Cold',
        category: 'breakfast',
        id: 0,
        price: '₱ 99.99',
        img: 'img/burger.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, possimus nobis placeat quaerat laborum culpa nam doloremque?'
    },
    {
        title: 'Spaghetti With Balls',
        category: 'dinner',
        id: 1,
        price: '₱ 159.99',
        img: 'img/spaghetti.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, possimus nobis placeat quaerat laborum culpa nam doloremque?'
    },
    {
        title: 'Chicken without Skin',
        category: 'lunch',
        id: 2,
        price: '₱ 899.99',
        img: 'img/chicken.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, possimus nobis placeat quaerat laborum culpa nam doloremque?'
    },
    {
        title: 'Pancake with Gas Syrup',
        category: 'snacks',
        id: 3,
        price: '₱ 1.99',
        img: 'img/menu.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, possimus nobis placeat quaerat laborum culpa nam doloremque?'
    }
];

const btnsFilter = document.querySelectorAll('.btn');
const menuSection = document.querySelector('.menu-section');

const modalOverlay = document.querySelector('.modal-overlay');
const image = document.querySelector('.menu-photo');
const slideBtn = document.querySelectorAll('.slidebtn');
const close = document.querySelector('.close');
const photo = document.querySelectorAll('.item-btn');

let currentTarget = 0;

window.addEventListener('DOMContentLoaded', function(){
    displayMenu(menu);
    modalControl(currentTarget);
    
})


btnsFilter.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const btnCategory = e.currentTarget.dataset.id;
        const categoryFilter = menu.filter(function(categoryItems){
            if(categoryItems.category == btnCategory){
                return categoryItems;
            }
        })

        if(btnCategory == 'all'){
            displayMenu(menu);                                                                                 
        } else{
            displayMenu(categoryFilter);
        }
    })
})


function displayMenu(menuItems){
    let displayAll = menuItems.map(function(item){

        return `<div class="menu">
        <img src=${item.img} class="photo" alt="">
        <h2>${item.title}</h2>
        <h3>${item.price}</h3>
        <p>${item.desc}</p>
    </div>`
    })
    displayAll = displayAll.join('');
    menuSection.innerHTML = displayAll;
}

slideBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const targetBtn = e.currentTarget.classList;
        // currentTarget++;
        if(targetBtn.contains('right')){
            currentTarget++;
        } else if(targetBtn.contains('left')){
            currentTarget--;
        }

        if(currentTarget > menu.length - 1){
            currentTarget = 0;
        } else if(currentTarget < 0){
            currentTarget = menu.length - 1;
        }
        modalControl(currentTarget)
    })
})

photo.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const photoTarget = e.currentTarget.dataset.id;
        console.log(photoTarget);
        const idTarget = menu.filter(function(idItem){
            if(idItem.id == photoTarget){
                return idItem;
            }
        })
        
        if(photoTarget == 'all'){
            return false;
        } else { 
            currentTarget = photoTarget;
            modalOverlay.classList.add('show');
            modalControl(photoTarget);
            // console.log(photoTarget);
            // console.log('current target ' + currentTarget)
        }
        
    })
})

close.addEventListener('click', function(){
    modalOverlay.classList.remove('show');
})

function modalControl(menuControl){
    const displayImg = menu[menuControl];
    image.src = displayImg.img;
}

