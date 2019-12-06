import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface IScore {
    rank: number;
    name: string;
    shots: number;
    score: number;
}

function axiosGet(){
    let jsonplaceholderString : string = "http://jsonplaceholder.typicode.com/todos";
    // Test URI - test data
    let playerScoresUri: string = "http://localhost:64005/api/players"

    axios.get<IScore[]>(playerScoresUri, {
   /*      params: {
            _limit:5
        } */
    })
    .then(function(response: AxiosResponse<IScore[]>) {
        // Content Area
        let mainLeft: HTMLDivElement = <HTMLDivElement> document.getElementById('main-left')
        let mainLeftTable: HTMLTableElement = <HTMLTableElement> document.getElementById('myTable')
        console.log(response.data)
        
        // Kalder her en metode som formatere inholdet fra JSON objekterne og stiller dem pænt op
        // response er JSON der kommer tilbage fra URI
        // mainLeft er det element vi tilføjer hvert under-element til
        addScoreToDOM(response, mainLeft)
        addScoreToTable(response, mainLeftTable)
        
    })
    .catch(function(err: AxiosError){
        console.log(err)
    })
}

function addScoreToDOM(res: AxiosResponse<IScore[]>, ele: HTMLDivElement){

    let i: number = 1;

    res.data.forEach((score: IScore) => {
        let titleParagraph: HTMLParagraphElement = <HTMLParagraphElement> document.createElement<'p'>("p")
        titleParagraph.innerHTML = i + score.name + " | " + score.score
        ele.appendChild(titleParagraph)
        i += 1
    })
}


function addScoreToTable(res: AxiosResponse<IScore[]>, ele: HTMLTableElement){
    res.data.forEach((score: IScore) => {

        let row = ele.insertRow(0)
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
    
        cell1.innerHTML = score.name
        cell2.innerHTML = String(score.score)
        
    });  



}

export {axiosGet}

