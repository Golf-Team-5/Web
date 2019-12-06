import { axiosGet } from './importapi'
//import {AxiosGetSwingData} from './position'
import {GetScoreAndNoOfSwings} from './Score'



axiosGet();
//AxiosGetSwingData();


//element der henter par tallet til beregning af score, fra siden. 
let ParInput: HTMLInputElement = <HTMLInputElement>document.getElementById("parInput")

//knap der kalder GetScoreAndNoOfSwings metoden med ParInput. 
let scoreButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ScoreBtn");
scoreButton.addEventListener("click", function() { GetScoreAndNoOfSwings(Number(ParInput.value))});


