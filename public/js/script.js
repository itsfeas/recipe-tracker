function refreshPage() {
    setTimeout(() => {
        window.location.reload(true);
    }, 500);
}

function addDish() {
    const dishName = document.getElementById("dish_name").value;
    console.log('adding dish', dishName);
    fetch('/api/v1/dish', {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({name: dishName}),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })
    .then(() => {
        refreshPage();
    })
}

function deleteDish() {
    const dishId = document.getElementById("dish_id").value;
    console.log('deleting dish', dishId);
    fetch('/api/v1/dish', {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({ id: dishId }),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })
    .then(() => {
        refreshPage();
    })
}