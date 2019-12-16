import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";
import {GetEvent} from "./events"
//import { NameSetter,  SetName} from "./importapi";



interface Player {

    PlayerName: string;
    PlayerSwings: number;
    PlayerScore: number;

}

// Sætter spiller navnet i spillerboksen
let welcome: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('WelcomePlayer')
let playerName = localStorage.getItem("pName")
welcome.innerHTML = playerName


/* let yourNewString = yourHTMLString.replace('/<DashboardName>/g', dashboardName);

const inputName: HTMLInputElement = <HTMLInputElement> document.getElementById("usernameInput");
const btnSubmitName: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ConfirmNameButton");
const ShowName: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("WelcomePlayer");

btnSubmitName.addEventListener("click", SetName) */
 
/* function SetName(){
    /* if(btnSubmitName == null){
        console.log("input = null");
    }
    else{
        console.log("input har value");
    } */
//    console.log("Hej! jeg virker!")} 
 


// Uri til et slag fra Rest Service
const Uri : string= "http://localhost:52549/api/swingdata"
let test: string = "http://localhost:64005/api/players"


// banelængde, senere  kan det statiske tal udskiftes til at vøre mere dynamisk
let courseLength: number = 1000

// reference til Næste slag knappen, samt dens "listener"
const getDataBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('ScoreBtn')
getDataBtn.addEventListener("click", GetHit)


// Vil se om vi kan køre vores "Næste slag automatisk, dvs. hvis der findes en 
// værdi i databasen, så hent den. Det er den værdi som kommer fra Pi'en"




// her skrives banelængden ud
let course: HTMLFontElement = <HTMLFontElement> document.getElementById('course-lenght')
course.innerHTML = String(courseLength) 
let totalHits: number = 0;
let totalDistance:number = 0;




// funktionen henter et slag fra Rest Service ved hjælp af Axios
export function GetHit ()  {
    
    axios.get(Uri)
    .then (function (response: AxiosResponse) {
        
        if(totalDistance > 0){
            // GetEvent skal hente en random event fra eventList.
            GetEvent()
        }

        totalHits +=1;
        console.log(response.data)
        // her vises et enkelt slag, plus den samlet længde
        totalDistance += Number(response.data);
        let currentSwing: HTMLFontElement = <HTMLFontElement> document.getElementById('current-hit')   
        currentSwing.innerHTML = String(response.data)       
        let currentDistance: HTMLFontElement = <HTMLFontElement> document.getElementById('current-distance')
        currentDistance.innerHTML = String(totalDistance)
        
        CHeckIfCourseIsDone()
       
    })
    // hvis der er en fejl, så opfangere vi fejlbeskeden og udskriver den
    .catch (function (error: AxiosError) {
        console.log(error)
    })
    
}



function PostPlayer(player: Player)
{
    
axios.post(Uri+"/PostPlayerScore", {
    
        
            Playername: player.PlayerName ,
            PlayerSwings: player.PlayerSwings,
            PlayerScore: player.PlayerScore,
        
    
})
.then(function (response: AxiosResponse){
    console.log(response.data)
})
.catch(function(Error:AxiosError){
    console.log(Error);
    
})
}

// Afslut bane
function EndCourse ()  {
    console.log("tester 123")
    const ActivateModalBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('NextCourseBtn')
    const ActivatedModal: HTMLDivElement = <HTMLDivElement> document.getElementById('nextCourseModal')
  
    
    
    
/* 
    ActivateModalBtn.addEventListener("click", () => {
    console.log("tester 123 - indre") 
    */

    EndScore()
    
    if (ActivatedModal.style.display != "block") {
        ActivatedModal.style.display = "block";

    }
    else {
        ActivatedModal.style.display = "none";
    }

//} )   
    
}

let score: number
let scoreCountElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("scoreCount")
let swingCountElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("swingCount")


let finalScore: number;

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

        score = response.data
        
        
        
        finalScore = score;
        pScore.innerHTML = response.data
    })
    .catch(function (error: AxiosError) {
        console.log(Error);
        
    })

}


function EndScore() {
    // finder vores html elementer
    const pName: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('nameTotal')
    const pSwing: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('swingCountTotal')
    const pScore: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('scoreCountTotal')

    const pBtnScore: HTMLButtonElement = <HTMLButtonElement> document.getElementById('ScoreBtn')
    const pBtnSkip: HTMLButtonElement = <HTMLButtonElement> document.getElementById('SkipBtn')


    // Kalder vores metode fra score.ts med score dataerne allerede printet ud. 3 = vores par for banen
    GetScoreAndNoOfSwings(3, totalHits)

    // udskriver vores antal slag
    pSwing.innerHTML = String(totalHits); 
    pName.innerHTML = playerName
 
    // Så knapperne på spil siden forsvinder når en bane er færdig
    pBtnScore.style.display = "none";
    pBtnSkip.style.display = "none";
}

let postButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("SkipDoneBtn")
postButton.addEventListener("click", postScore)

function postScore()
{
    console.log("Playername is: " + playerName)
    console.log("score is: " + finalScore)
    console.log("total swings are: " + totalHits)

    let PlayerForDatabase: Player = {
        PlayerName: String(playerName),
        PlayerSwings: Number(totalHits),
        PlayerScore: Number(finalScore),
        
    };

    PostPlayer(PlayerForDatabase);
 
}

// Hvis total længde af alle slag er over banens længde: Du vandt!
function CHeckIfCourseIsDone() {  
    if(totalDistance >= courseLength){        
        EndCourse()        
    }
}


