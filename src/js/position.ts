import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface IScore{
    swingData:number
}
function CurrentPosition(bane:number, hit:number) {
    var currentPosition = bane - hit;

    return currentPosition;
}
// Medtoden tager data'en fra Swingdata
function AxiosGetSwingData () {
    console.log("axiosGetSwingData function works")
    let element:HTMLDivElement = <HTMLDivElement>document.getElementById('positionFromHole')
        axios.get<IScore>('http://localhost:52549/api/swingdata')
        .then(function (response:AxiosResponse<IScore>) {
            console.log(response.data)
            let data = response.data
            element.innerHTML = String(CurrentPosition(1000, data.swingData))
        })
        .catch(function (error:AxiosError ){
            console.log(error)
        })
        
    
    
}

export {AxiosGetSwingData}
