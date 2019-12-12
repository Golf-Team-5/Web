import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";
import { axiosGet } from "./importapi";



let scoreCountElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("scoreCount")
let swingCountElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("swingCount")

function GetScoreAndNoOfSwings(par: number, hits: number)
{
    console.log(par)
    
    axios.get("http://localhost:52549/api/swingdata/GetScore"  ,{
        params: {
            Par:  par,
            Hits: hits
        }
    } )
    
    .then(function (response: AxiosResponse){
        console.log("Data: "+ response.data)
        const pScore: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('scoreCountTotal')

        pScore.innerHTML = response.data
    })
    .catch(function (error: AxiosError) {
        console.log(Error);
        
    })

}



export {GetScoreAndNoOfSwings}