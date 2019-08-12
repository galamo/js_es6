console.log(Array.isArray(countries), countries)

const countriesObj = {};

countries.forEach((country) => {
    const { alpha3Code } = country
    countriesObj[alpha3Code] = country
})

console.log(countriesObj)
console.log(Object.keys(countriesObj).length)
