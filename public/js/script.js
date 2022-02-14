function refreshPage() {
    setTimeout(() => {
        window.location.reload();
    }, 250);
}

function searchDish() {
    let formData = new FormData(document.getElementById("search-dish-form"));
    const dishName = formData.get('dish_name');
    console.log('adding dish', dishName);
    location.href = '/search-dish?' + new URLSearchParams({
        name: dishName
    })
}



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