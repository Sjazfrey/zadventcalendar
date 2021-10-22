const calendarContainer = document.querySelector(".container");
const calendarDays = 25;
let audio1 = new Audio("music/1Grinch.mp3");
let audio2= new Audio("music/2HotChocolate.mp3");
let audio3= new Audio("music/3cookies.mp3");
let audio4 = new Audio("music/4Frostythesnowman.mp3");
let audio5 = new Audio("music/5JingleBellRock.mp3");
let audio6 = new Audio("music/6christmas.mp3");
let audio7 = new Audio("music/7Penguin.mp3");
let audio8 = new Audio("music/8Dashingthroughthesnow.mp3");
let audio9 = new Audio("music/9drummerboy.mp3");
let audio10 = new Audio("music/10LittleSaintNick.mp3");
let audio11 = new Audio("music/11hollyjolly.mp3");
let audio12= new Audio("music/12daysofchristmas.mp3");
let audio13 = new Audio("music/13DecktheHalls.mp3");
let audio14 = new Audio("music/14wethreekings.mp3");
let audio15 = new Audio("music/15Joytotheworld.mp3");
let audio16 = new Audio("music/16JoytotheWorld.mp3");
let audio17 = new Audio("music/17happybirthday.mp3");
let audio18 = new Audio("music/18Snoopys.mp3");
let audio19 = new Audio("music/19JingleBells3.mp3");
let audio20 = new Audio("music/20winterwonder.mp3");
let audio21 = new Audio("music/21whitechristmas.mp3");
let audio22 = new Audio("music/22silverbells.mp3");
let audio23 = new Audio("music/23There'sNoPlace.mp3");
let audio24 = new Audio("music/24wewishyou.mp3");
let audio25 = new Audio("music/25WeTheKingdom.mp3");
//function to open door and coresponding door will open path function to line 26 imagesPath correct url && term == 11./
const openDoor = (path, open, event) => {
    let date = new Date();   
    const term = date.getMonth();
    const day = date.getDate();    
    if ( open <= day && term == 11){  
        stopmusic()   
    if (open==1) {
        audio1.play()};
    if (open==2) {
        audio2.play()};
    if (open==3) {
        audio3.play()};
    if( open==4 ) { 
        audio4.play()};
    if( open==5 ) { 
        audio5.play()};
    if( open==6 ) { 
        audio6.play()};
    if( open==7 ) {
        audio7.play()};
    if( open==8 ) { 
        audio8.play()};
    if( open==9 ) {
        audio9.play()};
    if( open==10 ) { 
        audio10.play()};
    if( open==11 ) { 
        audio11.play()};
    if( open==12 ){
        audio12.play()};
    if( open==13 ) { 
        audio13.play()};    
    if( open==14 ){
        audio14.play()}; 
    if( open==15 ) { 
        audio15.play()};
    if( open==16 ) { 
        audio16.play()};    
    if( open==17 ){
        audio17.play()}; 
    if( open==18 ){
        audio18.play()}; 
    if( open==19 ){
        audio19.play()}; 
    if( open==20 ){ 
        audio20.play()};    
    if( open==21 ){
        audio21.play()}; 
    if( open==22 ) { 
        audio22.play()};
    if( open==23) { 
        audio23.play()};
    if( open==24 ){
        audio24.play()}; 
    if( open==25 ){
        audio25.play()};  

    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";

    //keeps all doors open after refresh of page
    if (localStorage.getItem("stayOpen") == undefined || open >= parseInt(localStorage.getItem("stayOpen"))){
        localStorage.setItem("stayOpen", open)     
    }
 }
}
//stop music button
function stopmusic() {
    audio1.pause()
    audio2.pause()
    audio3.pause()
    audio4.pause()
    audio5.pause()
    audio6.pause()
    audio7.pause()
    audio8.pause()
    audio9.pause()
    audio10.pause()
    audio11.pause()
    audio12.pause()
    audio13.pause()
    audio14.pause()
    audio15.pause()
    audio16.pause()
    audio17.pause()
    audio18.pause()
    audio19.pause()
    audio20.pause()
    audio21.pause()
    audio22.pause()
    audio23.pause()
    audio24.pause()
    audio25.pause()  
 }

const createCalendar = () => {
    let image = ["gif", "jpeg", "jpeg", "gif", "gif", "jpeg", "gif", "jpeg", "jpeg", "gif", "jpeg", "jpg", "gif", "jpeg", "jpeg", "jpeg", "gif", "jpeg", "png", "jpeg", "jpeg", "gif", "jpeg", "jpeg", "jpg"]
    for(let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image" +i);
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");        
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        let imagesNumbers = i + 1;
        //diplay images from for loop 
        let imagesPath = `./images/image${imagesNumbers}.${image[i]}`;

        //door open with click on.   bind method pass to line 24 then to the function on line 7
        calendarDoorText.addEventListener("click", openDoor.bind(null, imagesPath, imagesNumbers))

        if (i < parseInt(localStorage.getItem("stayOpen"))){
            calendarDoor.style.backgroundImage = `url(${imagesPath})`;
            calendarDoorText.style.opacity = "0";
        }
    }
}
createCalendar();
  