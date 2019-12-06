import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";
import { axiosGet } from "./importapi";



let scoreCountElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("scoreCount")
let swingCountElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("swingCount")

function GetScoreAndNoOfSwings(par: number)
{
    console.log(par)
    
    axios.get("http://localhost:52549/api/swingdata/GetScore"  ,{
        params: {
            Par:  par
        }
    } )
    
    .then(function (response: AxiosResponse){
        console.log("Data: "+ response.data)
        scoreCountElement.innerHTML = "Point: " + response.data[0]
        swingCountElement.innerHTML = "Antal Sving: " + response.data[1]
    })
    .catch(function (error: AxiosError) {
        console.log(Error);
        
    })

}



export {GetScoreAndNoOfSwings}