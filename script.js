const details=[
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Laptop" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Smartphone" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Headphones" },
    { id: 4, name: "Running Shoes", price: 89.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Running+Shoes" },
    { id: 5, name: "Yoga Mat", price: 29.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Yoga+Mat" },
    { id: 6, name: "Coffee Maker", price: 79.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Coffee+Maker" },
    { id: 7, name: "Blender", price: 49.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Blender" },
    { id: 8, name: "Novel", price: 14.99, category: "Books", image: "https://via.placeholder.com/250x200?text=Novel" },
];

let inputfield=document.querySelector('.inputfield');

let btnall=document.querySelector('.all');
let btncontainer=document.querySelector('.btncontainer');
// let btnelectronics=document.querySelector('.electronics');
// let btnsports=document.querySelector('.sports');
// let btnhome=document.querySelector('.home');
// let btnbooks=document.querySelector('.books');

const cardcontainer=document.querySelector('.cardcontainer');

function createCard(details){
    details.forEach(field=>{
        let card=document.createElement('div');
        card.classList.add('relative', 'border-2', 'h-80', 'w-64', 'mb-3', 'rounded-md', 'p-4');
        
        let imgtag=document.createElement('img');
        imgtag.src=field.image;
        imgtag.classList.add('object-cover', 'border-2')
        
        let p1=document.createElement('p');
        p1.classList.add('mt-2','mb-2', 'font-bold');
        p1.textContent=field.name;

        let p2=document.createElement('p');
        p2.classList.add('font-bold', 'text-sm', 'text-red-600');
        p2.textContent=`$ ${field.price}`;

        let p3=document.createElement('p');
        p3.classList.add('p-1', 'bg-gray-200', 'w-fit', 'rounded-lg', 'text-xs', 'absolute', 'bottom-1');
        p3.textContent=field.category;

        card.appendChild(imgtag)
        card.appendChild(p1)
        card.appendChild(p2)
        card.appendChild(p3)


        cardcontainer.appendChild(card);
    })
}

function createBtn(){
    const set=new Set();
    const filterItem = details.filter(item => {
        set.add(item.category);
    });
    set.forEach(value => {
        let newbtn=document.createElement('button');
        newbtn.innerText=value;
        newbtn.classList.add('bg-green-800', 'text-white', 'p-2', 'rounded-md');
        btncontainer.appendChild(newbtn);
      });

    console.log(set);
    
}
createBtn();

inputfield.addEventListener('input',()=>{
    cardcontainer.innerHTML = '';
    const q=inputfield.value.toLowerCase();
    if(q){
        const filterItem=details.filter(field=>field.name.toLowerCase().startsWith(q.toLowerCase()));
        if(filterItem!=0){
            createCard(filterItem);
        }else{
            let p1=document.createElement('p');
            p1.classList.add('mt-2','mb-2', 'font-bold');
            p1.textContent='Sorry no item match your search😕';
            cardcontainer.appendChild(p1);
        }
        
    }
});


btnall.addEventListener('click',(e)=>{
    cardcontainer.innerHTML='';
    createCard(details);

})
// btnelectronics.addEventListener('click', (e) => {
//     cardcontainer.innerHTML = '';
//     const filterItem = details.filter(item => item.category === 'Electronics');
//     // console.log(filterItem);
//     createCard(filterItem);
// });

// btnsports.addEventListener('click', (e) => {
//     cardcontainer.innerHTML = '';
//     const filterItem = details.filter(item => item.category === 'Sports');
//     // console.log(filterItem);
//     createCard(filterItem);
// });

// btnhome.addEventListener('click', (e) => {
//     cardcontainer.innerHTML = '';
//     const filterItem = details.filter(item => item.category === 'Home');
//     // console.log(filterItem);
//     createCard(filterItem);
// });

// btnbooks.addEventListener('click', (e) => {
//     cardcontainer.innerHTML = '';
//     const filterItem = details.filter(item => item.category === 'Books');
//     // console.log(filterItem);
//     createCard(filterItem);
// });

// isko_e.target_see_karo_ek_bar