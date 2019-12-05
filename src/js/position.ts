import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

const Uri : string= "http://localhost:52549/api/swingdata"

let courseLength: number = 1000
let resultatDiv: HTMLDivElement = <HTMLDivElement> document.getElementById('resultat-af-et-slag')
const getDataBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('PositionButton')
getDataBtn.addEventListener("click", GetHit)

export function GetHit ()  {
    axios.get(Uri)
    .then (function (response: AxiosResponse) {
        
        let element: HTMLParagraphElement = <HTMLParagraphElement> document.createElement<'p'>('p')
        element.innerHTML = String(courseLength - response.data)
        resultatDiv.appendChild(element)
        
       // return courseLength - (response.data)
    })
    
    .catch (function (error: AxiosError) {
        console.log(error)
    })
    
}
