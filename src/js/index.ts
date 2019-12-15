import { axiosGet } from './importapi'
//import {AxiosGetSwingData} from './position'
import {GetHit} from './position'
import {GetWeather} from './weatherapi'


GetHit()


//axiosGet();
//AxiosGetSwingData();
GetWeather()



axiosGet();
//AxiosGetSwingData();


// Får fat i det navn som vælges og gemmer det i en local storage variabel
let pNameInput: HTMLInputElement = <HTMLInputElement> document.getElementById('usernameInput')
let confirmName: HTMLInputElement = <HTMLInputElement> document.getElementById('ConfirmNameButton')
confirmName.addEventListener("click", () => {
    // Sætter key: pName til value: pNameInput.value | (key-value par) -> Henter den igen med getItem + key: getItem("pName")
    localStorage.setItem("pName", pNameInput.value)
})









