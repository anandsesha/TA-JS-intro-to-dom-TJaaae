{/* <li class="list">
    <div class="img-name">
        <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="Ed Stark">
        <h2>Eddard "Ned" Stark</h2>
    </div>
    <p>Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark</p>
    <button>Learn More!</button>
</li> */}

let eachPerson = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let ul = document.querySelector('ul')

eachPerson.forEach((val) => {
    let li = document.createElement('li')
    li.classList.add('list')
    let div = document.createElement('div')
    div.classList.add('img-name')
    let img = document.createElement('img')
    img.src = val.image;
    let h2 = document.createElement('h2')
    h2.innerText = val.name;
    div.append(img,h2)

    let p = document.createElement('p')
    p.innerText = val.description;
    let button = document.createElement('button')
    button.innerText = "Learn More!"
    
    
    

    
    


    ul.append(div,p,button)
})