/* properties */

// tagName: return tag for element nodes
// innerText: return the text content of the element and all its children
// innerHTML: return the plain text or HTML contents in the element
// textContent: return textual content event for hidden element


/* Attribute */

// getAttribute(attr) -> to get the attribute value
// setAttribute(attr,value) -> to set the attribute value 

/* style */

// node.style


/* insert Element */

// node.append(ele) :- adds at the end of node(inside)
// node.prepend(ele) :- adds at the start of node(inside)
// node.before(ele) :- adds before the node(outside)
// node.after(ele) :- adds after the node(outside)

// node.appendChild(ele) :- adds at the end of node(inside)
// node.prependChild(ele) :- add at the start of node(inside)

// question => what is difference between append() and appendchild()
// answer: append can add multiple elements at once, while appendChild can only add one.


/* delete Element */

// node.remove() :- removes the node


/* classList */

// classList is a property of elements in the Document Object Model (DOM) that provides a convenient way to manage the classes of an element. It returns a live collection of all the classes that are currently applied to the element.

// node.classList.add("classname")
// node.classList.remove("classname")



/* events */

// The change in the state of an object is knows as an event
// Events are fired to notify code of "interesting changes" that may affect code execution

/* event listeners */

// node.addEventListener(event,callback)
// node.removeEventListener(event,callback)

// Note:- the callback reference should be same to remove

let btn = document.querySelector("#btn-1")
let body = document.querySelector("body")
let count = 0;
let toggle = ()=>{
  if(count == 0){
    body.style.backgroundColor = "black"
    btn.innerText = 'light'
    count = 1;
  }else{
    body.style.backgroundColor = 'white';
    btn.innerText = 'dark'
    count = 0;
  }
}
btn.addEventListener("click",toggle)