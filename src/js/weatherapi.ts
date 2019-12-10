import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

const Uri : string= "https://vejr.eu/api.php?location=Roskilde&degree=C"

let resultWeather: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("result-weather")
export function GetWeather() {
    axios.get(Uri,{
        
    })
    .then(function (response: AxiosResponse) {
        console.log(response.data)
        resultWeather.innerHTML = response.data
    })
    .catch(function (error: AxiosError){
        console.log(error)
    })
    
}