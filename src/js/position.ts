import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

// Uri til et slag fra Rest Service
const Uri : string= "http://localhost:52549/api/swingdata"

// banelængde, senere kan det statiske tal udskiftes til at vøre mere dynamisk
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
        
        totalHits +=1;
        console.log(response.data)
        // her vises et enkelt slag, plus den samlet længde
        totalDistance += Number(response.data);
        let currentSwing: HTMLFontElement = <HTMLFontElement> document.getElementById('current-hit')   
        currentSwing.innerHTML = String(response.data)       
        let currentDistance: HTMLFontElement = <HTMLFontElement> document.getElementById('current-distance')
        currentDistance.innerHTML = String(totalDistance)

       
    })
    // hvis der er en fejl, så opfangere vi fejlbeskeden og udskriver den
    .catch (function (error: AxiosError) {
        console.log(error)
    })
    
}
