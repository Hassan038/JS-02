////problem 1
function add(num) {
    return function (value) {
      return num + value;
    };
  }
  let addfive = add(5);
  console.log(addfive(10))
  //////////problem 2
  let numbers = [1, 2, 3, 4, 5, 6];
  function ArraySearch(numbers, val) {
      if (numbers.length === 0) {
        return false;
      }
      if (numbers[0] === val) {
        return true;
      }
      return ArraySearch(numbers.slice(1), val);
    }
    console.log(ArraySearch(numbers,9))
  ///////problem 3
  const addParagraph = (text)=>{
   const newElement =  document.createElement("p")
   newElement.append("this is paragraph");
   document.getElementById("newTextArea").append(newElement)
  }
  //////problem 4
  function addListItem(textContent) {
    const li = document.createElement("li");
    li.textContent = textContent;
    const ul = document.querySelector("ul");
    ul.appendChild(li);
  }
  ///////problem 5
  function  changeColor(id , color ){
    let element = document.getElementById("mybutton")
    document.getElementById(id).style.backgroundColor = color;
  }
  ///////problem 6
  let local = localStorage;
  setData = ()=> {
    let data = {
      "fistName" :prompt ("enter first name") ,
      "LastName" : prompt ("enter last name") ,
      "age" : prompt ("enter age") ,
    }
    local.setItem("user-info", JSON.stringify(data));
    console.log('user-info', JSON.stringify(data))
  }
  ///////problem 7,8
  getData = () =>{
    let data = local.getItem('user-info');
    console.log(data);
  }  