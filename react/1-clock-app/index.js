
// using plain js code
function jsClock(props) {
    let indianClock = document.querySelector('#indianClock');
    let dubaiClock = document.querySelector('#dubaiClock');
    let americanClock = document.querySelector('#americanClock');

    let date = new Date().toLocaleTimeString('en-US', { timeZone: props });

    var ui = `
    <div class='card'>
        <div class='card-header'> <span> ${props}</span> </div>
       <div class='card-body'>
       <p class='badge badge-primary'> ${date}</p>
       </div>
        
    </div>
    `
    return ui;
}

function reactClock(props) {

    let date = new Date().toLocaleTimeString('en-US', { timeZone: props });
    var ui = <div class='card'>
        <div class='card-header'>
            <span> {props}</span>
        </div>
        <div class='card-body'>
            <p class='badge badge-success'> {date}</p>
        </div>

    </div>


    return ui;
}


let indianClockV1 = document.querySelector('#indianClockV1');
let dubaiClockV1 = document.querySelector('#dubaiClockV1');
let americanClockV1 = document.querySelector('#americanClockV1');

setInterval(() => {
    indianClock.innerHTML = jsClock('Asia/Kolkata');
    dubaiClock.innerHTML = jsClock('Asia/Dubai');
    americanClock.innerHTML = jsClock('America/New_York');

    ReactDOM.render(reactClock('Asia/Kolkata'), indianClockV1);
    ReactDOM.render(reactClock('Asia/Dubai'), dubaiClockV1);
    ReactDOM.render(reactClock('America/New_York'), americanClockV1);



}, 1000)
