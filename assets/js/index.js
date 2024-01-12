const products = document.getElementById("products");
const btn = document.getElementById("btn");

let page = 1;
let limit = 4;
let pro = [];

async function myFunc() {
  try {
    const response = await axios.get(
      `https://655c84d425b76d9884fd7251.mockapi.io/product?page=${page}&limit=${limit}`
    );
    const data = await response.data;
    pro = data;
    pro.map((item) => {
      const myDiv = document.createElement("div");
      myDiv.className = "box col-xl-3 col-md-6 col-12";
      myDiv.innerHTML = `
        
                    <img src="${item.image}" alt="">
                    <p>${item.title}</p>
                    <h6>${item.name}</h6>
                    <p>${item.price}</p>
                    <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                    <button id="wish" onclick="addToWish(${item.id})">Add wishlist</button>
        `;
      products.appendChild(myDiv);
    });
    page++;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", myFunc);

function addToBasket(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(pro.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToWish(id) {
  let heart = JSON.parse(localStorage.getItem("heart")) || [];
  heart.push(pro.find((item) => item.id == id));
  localStorage.setItem("heart", JSON.stringify(heart));
}

myFunc();

//

const inp = document.getElementById('inp')
const srchBtn = document.getElementById('srchBtn')

function findByName(){
    products.innerHTML = ''
    axios.get('https://655c84d425b76d9884fd7251.mockapi.io/product')
    .then(res =>{
        pro = res.data
        let filterData = pro.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
            const myDiv = document.createElement("div");
            myDiv.className = "box col-xl-3 col-md-6 col-12";
            myDiv.innerHTML = `
              
                          <img src="${item.image}" alt="">
                          <p>${item.title}</p>
                          <h6>${item.name}</h6>
                          <p>${item.price}</p>
                          <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                          <button id="wish" onclick="addToWish(${item.id})">Add wishlist</button>
              `;
            products.appendChild(myDiv);
        })
    })
}

srchBtn.addEventListener('click', findByName)


// sort


function sortFunc(){
    products.innerHTML = ''
    let listSort = selectFive.value

    if(listSort === "1"){
        let page = 1
        let limit = 4
        axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product?page=${page}&limit=${limit}`)
        .then(res =>{
            pro = res.data
            pro.map(item =>{
                const myDiv = document.createElement("div");
                myDiv.className = "box col-xl-3 col-md-6 col-12";
                myDiv.innerHTML = `
                  
                              <img src="${item.image}" alt="">
                              <p>${item.title}</p>
                              <h6>${item.name}</h6>
                              <p>${item.price}</p>
                              <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                              <button id="wish" onclick="addToWish(${item.id})">Add wishlist</button>
                  `;
                products.appendChild(myDiv);
            })
        })
    }
}

selectFive.addEventListener('change', sortFunc)



function sortFuncOne(){
    products.innerHTML = ''
    let listSort = selectFive.value

    if(listSort === "2"){
        axios.get('https://655c84d425b76d9884fd7251.mockapi.io/product')
        .then(res =>{
            pro = res.data
            let sortCerge = pro.sort((a, b) => (a.title.localeCompare(b.title)))
            sortCerge.map(item =>{
                const myDiv = document.createElement("div");
                myDiv.className = "box col-xl-3 col-md-6 col-12";
                myDiv.innerHTML = `
                  
                              <img src="${item.image}" alt="">
                              <p>${item.title}</p>
                              <h6>${item.name}</h6>
                              <p>${item.price}</p>
                              <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                              <button id="wish" onclick="addToWish(${item.id})">Add wishlist</button>
                  `;
                products.appendChild(myDiv);
            })
        })
    }
}

selectFive.addEventListener('change', sortFuncOne)


function sortFuncTwo(){
    products.innerHTML = ''
    let listSort = selectFive.value

    if(listSort === "3"){
        axios.get('https://655c84d425b76d9884fd7251.mockapi.io/product')
        .then(res =>{
            pro = res.data
            let sortCerge = pro.sort((a, b) => (b.title.localeCompare(a.title)))
            sortCerge.map(item =>{
                const myDiv = document.createElement("div");
                myDiv.className = "box col-xl-3 col-md-6 col-12";
                myDiv.innerHTML = `
                  
                              <img src="${item.image}" alt="">
                              <p>${item.title}</p>
                              <h6>${item.name}</h6>
                              <p>${item.price}</p>
                              <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                              <button id="wish" onclick="addToWish(${item.id})">Add wishlist</button>
                  `;
                products.appendChild(myDiv);
            })
        })
    }
}

selectFive.addEventListener('change', sortFuncTwo)



function sortFuncThree(){
    products.innerHTML = ''
    let listSort = selectFive.value

    if(listSort === "4"){
        axios.get('https://655c84d425b76d9884fd7251.mockapi.io/product')
        .then(res =>{
            pro = res.data
            let sortCergeE = pro.sort((a, b) => (b.price - a.price))
            sortCergeE.map(item =>{
                const myDiv = document.createElement("div");
                myDiv.className = "box col-xl-3 col-md-6 col-12";
                myDiv.innerHTML = `
                  
                              <img src="${item.image}" alt="">
                              <p>${item.title}</p>
                              <h6>${item.name}</h6>
                              <p>${item.price}</p>
                              <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                              <button id="wish" onclick="addToWish(${item.id})">Add wishlist</button>
                  `;
                products.appendChild(myDiv);
            })
        })
    }
}

selectFive.addEventListener('change', sortFuncThree)


function sortFuncFive(){
    products.innerHTML = ''
    let listSort = selectFive.value

    if(listSort === "5"){
        axios.get('https://655c84d425b76d9884fd7251.mockapi.io/product')
        .then(res =>{
            pro = res.data
            let sortCergeE = pro.sort((a, b) => (a.price - b.price))
            sortCergeE.map(item =>{
                const myDiv = document.createElement("div");
                myDiv.className = "box col-xl-3 col-md-6 col-12";
                myDiv.innerHTML = `
                  
                              <img src="${item.image}" alt="">
                              <p>${item.title}</p>
                              <h6>${item.name}</h6>
                              <p>${item.price}</p>
                              <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                              <button id="wish" onclick="addToWish(${item.id})">Add wishlist</button>
                  `;
                products.appendChild(myDiv);
            })
        })
    }
}

selectFive.addEventListener('change', sortFuncFive)