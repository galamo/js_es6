$(function () {


    const regions = countries.reduce((regionsObj, country) => {
        const { region } = country;
        const oldRegions = regionsObj[region] || []
        return { ...regionsObj, [region]: [...oldRegions, country] }

    }, {})

    $("#ddl_regions").html(getRegionsOptions(Object.keys(regions)))
    $("#ddl_countries").html(getCountriesOptions(regions[Object.keys(regions)[0]]))
    $("#ddl_regions").on("change", function () {
        $("#ddl_countries").html(getCountriesOptions(regions[this.value]))
    })


})

function getCountriesOptions(countriesRegionsArray) {
    return countriesRegionsArray.
        map(country => `<option value="${country.name}"> ${country.name} </option>`)
}
function getRegionsOptions(regionsArray) {
    return regionsArray.filter((region) => region).
        map(region => `<option value="${region}"> ${region} </option>`)
}