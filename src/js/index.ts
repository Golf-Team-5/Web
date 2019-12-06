import { axiosGet } from './importapi'
//import {AxiosGetSwingData} from './position'
import {GetScoreAndNoOfSwings} from './Score'



axiosGet();
//AxiosGetSwingData();



let ParInput: HTMLInputElement = <HTMLInputElement>document.getElementById("parInput2")

let scoreButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ScoreBtn2");
scoreButton.addEventListener("click", function() { GetScoreAndNoOfSwings(Number(ParInput.value))});


