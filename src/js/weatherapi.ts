import axios, {AxiosResponse, AxiosError} from '../../node_modules/axios/index'

const Uri = "https://api.openweathermap.org/data/2.5/weather"

let resultWeather: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('result-weather')

export function GetWeather() {
    console.log('dd')
    axios.get(Uri, {
        params: {
            id:2614481,
            appid: "287eaa6bc17a135ce846e22a4d9418f2"            
        }
    })
    .then(function(res: AxiosResponse) {
        console.log(res.data)
        resultWeather.innerHTML = JSON.stringify(res.data)
    })
    .catch(function(err: AxiosError) {
        console.log(err)
    })
}