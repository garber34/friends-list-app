function builder(friend) {
  const container = document.createElement("li");

  const name = document.createElement("h2");
  name.innerText = friend.name;
  container.appendChild(name);

  const rating = document.createElement("p");
  rating.innerText = friend.rating;
  container.appendChild(rating);

  const btnAdd = document.createElement("button");
  btnAdd.innerText = "+";
  btnAdd.addEventListener("click", async () => {
    rating.innerText++;

    updateDatabase(friend.id, rating.innerText);
    moveElement(rating.innerText, container, "up");
  });

  container.appendChild(btnAdd);

  const btnSubtract = document.createElement("button");
  btnSubtract.innerText = "-";
  btnSubtract.addEventListener("click", async () => {
    rating.innerText--;

    updateDatabase(friend.id, rating.innerText);
    moveElement(rating.innerText, container, "down");
  });
  container.appendChild(btnSubtract);

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "x";
  container.appendChild(btnDelete);
  btnDelete.addEventListener("click",()=>{
    deleteFriend(friend.id);
    container.parentNode.removeChild(container);

  })

  return container;
}

async function deleteFriend(id){
  await fetch(`/api/friends/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    }
  });
}
async function updateDatabase(id, newRating) {


  await fetch(`/api/friends/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({"rating":newRating}),
  });
}

function moveElement(newRating, container, direction) {
  if (direction === "up") {
    while (newRating > container.previousSibling.childNodes[1].innerText) {
      container.parentNode.insertBefore(container, container.previousSibling);
    }
  } else if (direction === "down") {
    while (newRating < container.nextSibling.childNodes[1].innerText) {
      container.parentNode.insertBefore(container.nextSibling, container);
    }
  }
}
module.exports = builder;
