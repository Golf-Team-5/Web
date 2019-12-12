import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";
import {GetEvent} from "./events"

import {GetScoreAndNoOfSwings} from './Score'

// Uri til et slag fra Rest Service
const Uri : string= "http://localhost:52549/api/swingdata"

// banelængde, senere  kan det statiske tal udskiftes til at vøre mere dynamisk
let courseLength: number = 1000

// reference til Næste slag knappen, samt dens "listener"
const getDataBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('ScoreBtn')
getDataBtn.addEventListener("click", GetHit)

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
    pBtnScore.style.display = "none";
    pBtnSkip.style.display = "none";
}

// Hvis total længde af alle slag er over banens længde: Du vandt!
function CHeckIfCourseIsDone() { 
    if(totalDistance >= courseLength){        
        EndCourse()        
    }
}
        