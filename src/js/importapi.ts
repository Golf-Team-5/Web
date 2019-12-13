import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface IScore {
    rank: number;
    playerName: string;
    playerSwings: number;
    playerScore: number;
}

/* export class NameSetter{
    static playerConfirmedName: string
} */

/* let ConfirmNameButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ConfirmNameButton")
ConfirmNameButton.addEventListener("click", SetName)

function SetName()
{
    console.log("BLIVER METODEN TRICKET-JA")
    let playerName: HTMLInputElement = <HTMLInputElement> document.getElementById('inputName')
    let playerBox: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('WelcomePlayer')
    playerBox.innerHTML = playerName.value
    console.log(playerBox)
    //NameSetter.playerConfirmedName = playerName.value
}
 */
function axiosGet(){


     // Test api | returnerer en liste af Player med name og score
    let playerScoresUri: string = "http://localhost:52549/api/swingdata/getleaderboard"


    axios.get<IScore[]>(playerScoresUri, {

    })
    .then(function(response: AxiosResponse<IScore[]>) {
        // Content Area
        let leaderboardTable: HTMLTableElement = <HTMLTableElement> document.getElementById('LeaderTableModal')
        let leaderboardTable2: HTMLTableElement = <HTMLTableElement> document.getElementById('LeaderTableModal2')
        let leaderboardTable3: HTMLTableElement = <HTMLTableElement> document.getElementById('EndgameLeaderboard')
        
        console.log(response.data)
  

        // Kalder her en metode som formatere inholdet fra JSON objekterne og stiller dem pænt op
        // response er JSON der kommer tilbage fra URI
        // mainLeftTable er det element vi tilføjer hvert under-element til
        // addScoreToDOM(response, mainLeft)
        addScoreToTable(response, leaderboardTable)
        addScoreToTable(response, leaderboardTable2)
        addScoreToTable(response, leaderboardTable3)
        
        
    })
    .catch(function(err: AxiosError){
        console.log(err)
    })
}

function addScoreToTable(res: AxiosResponse<IScore[]>, ele: HTMLTableElement){

   //ele.innerHTML = '<thead class="thead-dark"><tr><th colspan="3">Top 3 score</th></tr><tr><th>#</th><th>Navn</th><th>Score</th></tr></thead>'
    
    
   

   let i: number = 1

    res.data.forEach((score: IScore) => {

        

        if (i <= 5) { 
            let row = ele.insertRow(-1)
            let cell1 = row.insertCell(0)
            let cell2 = row.insertCell(1)
            let cell3 = row.insertCell(2)
        
            cell1.innerHTML = String(i)
            cell2.innerHTML = score.playerName
            cell3.innerHTML = String(score.playerScore)
            i += 1
        } 
        
  

    });  

    

}

export {axiosGet} //, SetName

