
import axios, {AxiosResponse, AxiosError} from '../../node_modules/axios/index'

// Uri til 3. parts api
const Uri = "https://api.openweathermap.org/data/2.5/weather"

// vi laver et interface til at gemme de del af api'en som vi bruger.
// Vi tager bynavn, temperatur og beskrivelsen af vejret.
interface IWeather {
    name: string
    main: {
        temp: number
    }
    weather: {
        [0]: {
            description: string
        }
    }
}
// Axiosfunktion til at hente api'en med en Get.
// Som parameter bruges id til at hente byen, units til at hente celsius grader og appid er vores apikey.
export function GetWeather() {
    axios.get<IWeather>(Uri, {
        params: {
            //q: "Roskilde", - Bynavn, eller by-id
            id:2614481,
            units: "metric", // Vis grader i celcius
            appid: "287eaa6bc17a135ce846e22a4d9418f2"            
        }
    })
    .then(function(res: AxiosResponse) {
       console.log(res.data)
        AddWeatherToPage(res)
        
        
    })
    .catch(function(err: AxiosError) {
        console.log(err)
    })
}
// Denne metode kaldes i vores Axios Get metode, 
// den opretter nogle HTML elementer som vi bruger til at udskrive data i.
function AddWeatherToPage(res: AxiosResponse<IWeather>) {
    
    let cityName: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('city-name')
    let cityTemperature: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('city-temperature')
    let cityWeather: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('city-weather')

    cityName.innerHTML = res.data.name
    cityTemperature.innerHTML = String(Math.floor(res.data.main.temp))
    cityWeather.innerHTML = Weather(res.data.weather[0].description)
}

// Hjælpemetode til at vælge billeder som viser nuværende vejr i forhold til api'en.
function Weather(description:string):string
{
    let weatherImage: HTMLImageElement = <HTMLImageElement> document.getElementById("weather-img")

    switch (description) {
        case "clear sky":
            weatherImage.src = "./img/Weather-icons-sun.png";
            return "Skyfrit";         
        case "few clouds":
            weatherImage.src = "./img/Weather-icons-cloud-sun.png"
            return "Let skyet";
        case "scattered clouds":
            weatherImage.src = "./img/Weather-icons-rain-sun.png"
            return "Overskyet";
        case "broken clouds":
            weatherImage.src = "./img/Weather-icons-cloud.png"
            return "Overskyet";
        case "overcast clouds":
            weatherImage.src = "./img/Weather-icons-heavy-rain.png"
            return "Gråvejr"
        case "shover rain":
            weatherImage.src = "./img/Weather-icons-rain.png"
            return "Regnvejr";
        case "rain":
            weatherImage.src = "./img/Weather-icons-rain.png"
            return "Regnvejr";
        case "thunderstorm":
            weatherImage.src = "./img/Weather-icons-thunder.png"
            return "Tordenvejr";
        case "snow":
            weatherImage.src = "./img/Weather-icons-sun-snow.png"
            return "Snevejr";
        case "mist":
            weatherImage.src = "./img/Weather-icons-cloud.png"
            return "Tåget";
        default:
            weatherImage.src = "./img/Weather-icons-cloud.png"
            return "Skyet";
    }
}