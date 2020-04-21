import axios from 'axios'

const url = "https://covid19.mathdro.id/api";

export const getData = async (country) => {
    let changableUrl = url;
    if(country){
        changableUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl);
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error);

    }
}

export const getDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        console.log(countries);
        countries.unshift({name:"global"})
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}