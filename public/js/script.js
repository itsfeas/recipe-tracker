/**
 *  Refreshes the page after a set time
*/
function refreshPage(time=250) {
    setTimeout(() => {
        window.location.reload();
    }, time);
}

/**
 *  Checks which dishes can be created with given set of ingredients
*/
async function checkDish() {
    let formData = new FormData(document.getElementById("check-dish-form"));
    const ingredients = formData.getAll('ingredients');
    console.log(ingredients);
    
    // location.href = "/check-dish?" + new URLSearchParams({
    // ingredients: ingredients})
    let response = await fetch('/check-dish', {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            ingredients: ingredients
        }),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    });
    let js = await response.json();
    console.log('dishes', js);
}

/**
 *  Adds a dish to the dish repository using form data
*/
function addDish() {
    let formData = new FormData(document.getElementById("add-dish-form"));
    const dishName = formData.get('dish_name');
    const ingredients = formData.getAll('ingredients');
    console.log('adding dish', dishName);
    fetch('/api/v1/dish', {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            name: dishName,
            ingredients: ingredients
        }),
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