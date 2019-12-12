
import axios, {AxiosResponse, AxiosError} from '../../node_modules/axios/index'

let  eventList:string[]= 
[
    "Du står fuld fokuseret og begynder at tag bevægelserne i at gøre klar til at svinge din golfkølle. Du holder øje med kun golfkuglen nu og skal lige til at svinge golfkøllen, MEN du finder i øjenkrogen et lille egern!<br>...<br>  I det mister du alt form for koncentration samt du svinger golfkøllen.",
    "Fast besluttet på at dette bliver dit heldige slag, så kigger du kort på golfkuglen og derefter flaget til golfhullet, du bemærkede at der skulle virkelig kraft på dit næste slag. Du begynder at lave bevægelserne til at tag svinget og slår golfkuglen med alt din kraft!<br>…<br> Du ser spændt ud over golfbanen i håb om den blev skudt langt nok, men du kan ikke se den. Du tager et kort blik ned, hvor golfkuglen er skudt ned i jorden.",
    "I håb om at du kan lave noget fremskridt på banen, så har du et stærk fokus på golfkuglen og den rute som kuglen skal følge for at komme i mål. I det du lavede bevægelserne for at slå golfkuglen, så ser du noget som kommer flyvende hen imod dig. Du kan kun lige ane 2 store vinger.<br>…<br> DET VAR EN ØRN. Du mister grebet på golfkøllen og springer ned på jorden. Ørn lavede et dyk og snuppede golfkuglen og fløj væk med golfkuglen. Ørnen tabte kuglen tættere på hullet.",
    "Fuld fokuseret havde du øje på golfkuglen. Du havde på fornemmelsen dette bliver dit heldige sving. Du kastede et kort blik på flaget til golfhullet. Du begyndte at lave bevægelserne til svinge golfkøllen, i det millisekund du skulle til at ramme golfkuglen bliver du blindet af solens skær.<br>… <br> Du rammer luften.",
    "Fuld af selvtillid kigger du over golfbanen. Dette er intet i forhold til dine evner. Du gør bevægelserne til det næste sving. I det du skal til at svinge hører du en skrækkelig lyd som ødelægger alt form for koncentration, det var en MÅGE!<br>…<br> Du svinger ikke efter golfkuglen mere, men den forbandede måge!",
    "Du kan mærke en kraftig vind, men intet er fortabt endnu siden det er medvind! Du tager chancen i håb om kuglen ville blive skudt længere end forventet. Du laver bevægelserne til at svinge golfkøllen og du rammer lige på!<br>…<br> Golfkuglen fløj +400 meter.",
    "Du kan mærke gud er med dig. Du føler dig kraftfuld og har potentiale til at gå udover dine egne forventninger. I det du begynder at lave bevægelserne for at svinge, ser du en solstråle ned fra skyede himmel som lander på dig. Du svinger med alle dine kræfter! <br>…<br> Golfkuglen flyver som aldrig før. Det blev en Hole-In-One.",
    "Du føler dig kraftfuld, du er selvsikker på at dit næste slag vil blive en Hole-In-One. Du begynder at lave bevægelserne til at lave slaget. I det du svinger kan du mærke en form for energi som du aldrig har følt før. Da du rammer golfkuglen kan du se gnister i golfkøllen. Der er lyden af et kæmpe brag og golfkuglen flyver med utrolig kraft! <br> …<br> Golfkuglen flyver ud i horisonten…",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang.",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang.",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang.",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang.",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang.",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang.",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang.",
    "Du ramte golfkuglen uden problemer og den fløj som den skulle <br>…<br> Denne gang."
]
let imageUrilist:string[]=
[
    "./img/msg-hit-a-pidgen.png",
    "./img/msg-earth.jpg",
    "./img/msg-Eagle-steales-the-ball.jpg",
    "./img/msg-stickman-misses.jpg",
    "./img/msg-seagull-with-golfball.jpg",
    "./img/msg-vind-takes-the-ball.jpg",
    "./img/msg-golf-hole-in-one.jpg",
    "./img/msg-moon.jpg",
    "./img/golf-course-bg.jpg"
]
export function GetEvent(){
    
    let eventOutput: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("event")
    let eventImage: HTMLImageElement = <HTMLImageElement> document.getElementById('MsgBoxImg')
    let index:number = getRandomInt(0,eventList.length)
    eventOutput.innerHTML = eventList[index];
    if (index>=0&&index <9) {
        eventImage.src = imageUrilist[index]
    } else {
        eventImage.src = imageUrilist[8]
    } 
    

}


function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}