

const bCompanies = data.networks;

const result = bCompanies.reduce((cities, apiItem) => {

    const currentCity = apiItem.location.city
    // getCompanyFromApiItem(apiItem)
    // console.log(currentCity)
    const { company } = apiItem

    ifCityExist = cities[currentCity] ? [...cities[currentCity], company] : [company]
    return { ...cities, [currentCity]: ifCityExist }

}, {})


function getCompanyFromApiItem(apiItem) {
    return JSON.stringify(apiItem.comapny)
}

console.log(result)




const result2 = bCompanies.reduce((cities, apiItem) => {

    const currentCountry = apiItem.location.country

    // console.log(currentCity)

    ifCountryExist = cities[currentCountry] ? [...cities[currentCountry], apiItem] : [apiItem]
    return { ...cities, [currentCountry]: ifCountryExist }

}, {})


function getCitiesLi(items) {

    return Object.keys(items).map(item => `<li onclick="getData(event)" class="list-group-item" id="${item}">${item}</li>`)

}


function getData(e) {
    console.log(e.currentTarget.id)
    const res = result[e.currentTarget.id];
    $("#data").html(JSON.stringify(res))
}

$("#cities").html(getCitiesLi(result))
console.log(result2)