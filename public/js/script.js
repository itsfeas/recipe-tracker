/**
 *  Refreshes the page after a set time
*/
function refreshPage(time=250) {
    setTimeout(() => {
        window.location.reload();
    }, time);
}

/**
 *  Adds a dish to the dish repository using form data
*/
function addDish() {
    let formData = new FormData(document.getElementById("add-dish-form"));
    const dishName = formData.get('dish_name');
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
    refreshPage();
}

/**
 *  Deletes a dish from the dish repository using form data
*/
function deleteDish() {
    let formData = new FormData(document.getElementById("delete-dish-form"));
    const dishId = formData.get('dish_id');
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
    refreshPage();
}