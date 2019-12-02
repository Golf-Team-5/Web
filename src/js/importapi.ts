import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface IScore {
    rank: number;
    title: string;
    shots: number;
    score: number;
}

// Main content div

function axiosGet(){
    let jsonplaceholderString : string = "http://jsonplaceholder.typicode.com/todos";

    axios.get<IScore[]>(jsonplaceholderString, {
        params: {
            _limit:5
        }
    })
    .then(function(response: AxiosResponse<IScore[]>) {
        // Content Area
        let mainLeft: HTMLDivElement = <HTMLDivElement> document.getElementById('main-left')

        console.log(response.data)
        
        // Kalder her en metode som formatere inholdet fra JSON objekterne og stiller dem pænt op
        // response er JSON der kommer tilbage fra URI
        // mainLeft er det element vi tilføjer hvert under-element til
        addScoreToDOM(response, mainLeft)
        
    })
    .catch(function(err: AxiosError){
        console.log(err)
    })
}

function addScoreToDOM(res: AxiosResponse<IScore[]>, ele: HTMLDivElement){

    res.data.forEach((score: IScore) => {
        let titleParagraph: HTMLParagraphElement = <HTMLParagraphElement> document.createElement<'p'>("p")
        titleParagraph.innerHTML = score.title
        ele.appendChild(titleParagraph)
    })
}

export {axiosGet}

