const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');


  text.init(form, items);
});

const text = (() => {
  let items;
  var txt;    // texti
  var check;  // checkbox 
  var del;    // delete buttons
  var list; // texti í lista


  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler); //submit text

   
    // TODO láta hluti í _items virka
    txt =    document.querySelector('.form__input')
    item =  document.querySelectorAll(".item");
    check =  document.querySelectorAll(".item__checkbox");
    del =    document.querySelectorAll('.item__button');
    list =   document.querySelectorAll('.item__text');



    // EventListener fyrir delete takka nú þegar til staðar 
    // EventListener fyrir checkbox nú þegar til staðar 
    for ( var i = 0 ; i < check.length; i++){
      list[i].addEventListener('click', edit);
      del[i].addEventListener('click', deleteItem);
      check[i].addEventListener( 'change', function(){

      if(check[0].checked) item[0].classList.add("item--done");
      else item[0].classList.remove("item--done");

      if (check[1].checked) item[1].classList.add("item--done");
      else item[1].classList.remove("item--done");
      
      if (check[2].checked) item[2].classList.add("item--done");
      else item[2].classList.remove("item--done");

      });}

        
    
} 

  

  function formHandler(e) {
    e.preventDefault();

    var text = txt.value;
    add(text);


  }

  // event handler fyrir það að klára færslu
  function finish(e) {
   
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  
    this.contentEditable = "true";
    this.style.textDecoration = "none"; 
    this.addEventListener('keydown', function(e) {
      if(e.keyCode == 13)
         this.contentEditable="false";

    });


    
    commit(this);


  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    finish(this);

  }

  // fall sem sér um að bæta við nýju item
  function add(value) {

    //Strengur má ekki vera tómur né einungis bil
    if(/\S/.test(value)) {

    //búa til öll element sem þarf
    var node = document.createElement("LI");
    var btn = document.createElement("BUTTON");
    var check = document.createElement("INPUT");
    var newtxt = document.createElement("span");

    // búa til texta hnúta
    var textnode = document.createTextNode(value);
    var btnText  = document.createTextNode("Eyða");

    // skilgreina checkbox
    check.setAttribute("type", "checkbox");
    check.addEventListener('change', function() {

      if(check.checked) node.classList.add("item--done");
      else node.classList.remove("item--done");

    });

    btn.addEventListener('click', deleteItem);
    newtxt.addEventListener('click',edit);


    //til þess að .css skráin virki rétt
    btn.className =    "item__button";
    check.className =  "item__checkbox";
    newtxt.className = "item__text";
    node.className =   "item";

    // svo texti og staðsetning sé rétt
    newtxt.appendChild(textnode);
    btn.appendChild(btnText);
    items.appendChild(node);
    node.appendChild(check);   
    node.appendChild(newtxt);
    node.appendChild(btn);

    
    // Hreinsar út input eftir að hefur verið bætt í lista
    document.querySelector('.form__input').value = "";

  }}


  // event handler til að eyða færslu
  function deleteItem(e) {
      var li = e.target.parentElement;
      items.removeChild(li);
  }




  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
