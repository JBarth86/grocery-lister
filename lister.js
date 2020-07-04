const GROCERIES = "groceries"

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
}
else {
  ready()
}

function ready() {
  addSubmitListener()
  addDeleteListener()

  let groceries = JSON.parse(localStorage.getItem(GROCERIES))

  if(groceries) {
    groceries.forEach(addItemToList)
  }
  else {
    localStorage.setItem(GROCERIES, JSON.stringify([]))
  }
}

function addSubmitListener() {
  document.getElementById("addButton").addEventListener("click", addItem)
  document.getElementById("newItem").addEventListener("keyup", enterItem)
}

function addItem() {
  let groceries= JSON.parse(localStorage.getItem(GROCERIES))
  let newItemInput = document.getElementById("newItem")
  let newItem = newItemInput.value.trim()

  if(!groceries.includes(newItem) && newItem) {
    groceries.push(newItem)
    localStorage.setItem(GROCERIES, JSON.stringify(groceries))
    addItemToList(newItem)
  }

  newItemInput.value = ''
}

function enterItem(e) {
  if(e.keyCode === 13) {
    document.getElementById("addButton").click()
  }
}

function checkboxListener(e) {
  let checkbox = e.target
  if(checkbox.checked) {
    checkbox.parentElement.style.textDecoration = "line-through"
  }
  else {
    checkbox.parentElement.style.textDecoration = "none"
  }
}

function addDeleteListener() {
  document.getElementById("removeButton").addEventListener("click", deleteItems)
}

function deleteItems() {
  let checkBoxes = Array.from(document.getElementsByClassName("checkbox-delete"))
  let groceries = JSON.parse(localStorage.getItem(GROCERIES))

  checkBoxes.forEach(checkbox => {
    if(checkbox.checked) {
      let item = checkbox.parentElement.textContent
      groceries.splice(groceries.indexOf(item), 1)
      checkbox.parentElement.remove()
    }
  })

  localStorage.setItem(GROCERIES, JSON.stringify(groceries))
}

function addItemToList(item) {
  let list = document.getElementById("groceryList")
  let li = document.createElement("li")
  let checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.name = "select"
  checkbox.classList.add("checkbox-delete")
  checkbox.addEventListener('click', checkboxListener)

  li.appendChild(checkbox)
  li.appendChild(document.createTextNode(item))
  list.appendChild(li)
}
