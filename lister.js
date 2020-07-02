if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
}
else {
  ready()
}

function ready() {
  addSubmitListener()
  addDeleteListener()
}

function addSubmitListener() {
  document.getElementById("addButton").addEventListener("click", addItem)
  document.getElementById("newItem").addEventListener("keyup", enterItem)
}

function addItem() {
  let newItem = document.getElementById("newItem")
  let list = document.getElementById("groceryList")
  let li = document.createElement("li")
  let checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.name = "select"
  checkbox.classList.add("checkbox-delete")
  checkbox.addEventListener('click', checkboxListener)

  li.appendChild(checkbox)
  li.appendChild(document.createTextNode(newItem.value))
  list.appendChild(li)

  newItem.value = ""
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

  checkBoxes.forEach(checkbox => {
    if(checkbox.checked) {
      checkbox.parentElement.remove()
    }
  })
}
