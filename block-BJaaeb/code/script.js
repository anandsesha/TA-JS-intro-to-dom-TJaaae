/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

function createInputElm(label,type="text"){
  let labelTag = document.createElement('label')
  let inputTag = document.createElement('input')
  inputTag.type = type;
  labelTag.innerText = label;
  labelTag.append(inputTag);
  return labelTag;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function stringLiteral(label,type="text"){
  let string = `<label>${label}: <input type=${type}></label>`
  return string;
}

// TEST
stringLiteral('Your name'); //<label>Your name: <input type="text"></label>
stringLiteral('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>

function createList(array){
  let ul = document.createElement('ul')
  let liOne = document.createElement('li')
  liOne.append(array[0])
  let liTwo = document.createElement('li')
  liTwo.append(array[1])
  let liThree = document.createElement('li')
  liThree.append(array[2])
  let liFour = document.createElement('li')
  liFour.append(array[3])
  
  ul.append(liOne,liTwo,liThree,liFour)
  return ul;
}


function createList1(array){
  let html = `<ul>
    ${array.map((elm) => `<li>${elm}</li>`).join("")}
  </ul>`; 
  return html;
}


// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(array=[]){
  let ul = document.createElement('ul')
  let li = document.createElement('li')
  ul.append(li);
  let p = document.createElement('p')
  p.innerText = array[0].name
  li.append(p);

  let input = document.createElement('input')
  input.type = "checkbox";
  input.checked = array[1].isDone;
  input.name = "";
  input.id = "";
  li.append(input)

  let span = document.createElement('span')
  span.innerText = "X"
  li.append(span);

  return ul;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
