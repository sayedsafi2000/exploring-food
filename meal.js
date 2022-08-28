const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    const mealsContainer = document.getElementById("meal-container");
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal)
        const createDiv = document.createElement("div")
        createDiv.classList.add('col')
        createDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>`
        mealsContainer.appendChild(createDiv);
    });
}
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeal(searchText);
    searchField.value = '';
}
const loadMealDetails = (idMeal) => {
    // console.log("food id : ", idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}
const displayMealDetail = meal => {
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = '';
    const createdetail = document.createElement('div');
    createdetail.classList.add('card');
    createdetail.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            
        </div>`
    detailContainer.appendChild(createdetail);
}

loadMeal("");