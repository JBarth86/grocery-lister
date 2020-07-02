if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
}
else {
  ready()
}

function ready() {
  addSubmitListener()
}

function addSubmitListener() {
  document.getElementById("addButton").addEventListener("click", addItem)
  document.getElementById("newItem").addEventListener("keyup", enterItem)
}

function addItem() {
  let newItem = document.getElementById("newItem")
  let list = document.getElementById("grocery-list")
  let li = document.createElement('li')

  li.appendChild(document.createTextNode(newItem.value))
  list.appendChild(li)

  newItem.value = ""
}

function enterItem(e) {
  if(event.keyCode === 13) {
    document.getElementById("addButton").click()
  }
}
