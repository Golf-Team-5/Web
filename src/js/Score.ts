import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";
import { axiosGet } from "./importapi";

function GetScoreAndNoOfSwings(par: number)
{
    
    axios.get("http://localhost:52549/api/swingdata/GetScore")
    .then(function (response: AxiosResponse){
        console.log(response.data)
    })
    .catch(function (error: AxiosError) {
        console.log(Error);
        
    })

}

let scoreButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ScoreBtn");
scoreButton.addEventListener("click", function() {GetScoreAndNoOfSwings(3) });

export {GetScoreAndNoOfSwings}