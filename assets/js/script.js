// HTML should have welcome nav bar
// View states on page load
//  > We need to pull our states from somewhere
//  > We need to be able to create all of the cards using a function
//  > The function must insert the state card into the html
// Clickable cards
// Modal opening upon click
// Modal bigger than text box 
// Modal to populate current state facts
// Capital 
// Population
// state flag
// Weather
// Year added to the U.S
// Modal to minimize
// Chosen card to remain highlighted


// Example of card
/* <div class="card">
<div class="card-content">
  <div class="media">
    <div class="media-content">
      <p class="title is-4">Illinois</p>
      <p class="subtitle is-6">Springfield</p>
    </div>
  </div>
</div>
</div> */

// Imported JSON array from https://gist.github.com/mshafrir/2646763
const ALL_STATES = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}];
let testState = "illinois";
const containerEl = document.getElementById('container');


function createCard (state) {
   return `
   <div class="card is-three-quarters has-background-primary is-2">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">${state.name}</p>
                    <p class="subtitle is-6">${state.abbreviation}</p>
                </div>
            </div>
        </div>
    </div>
    `
}

for (let i = 0; i < ALL_STATES.length; i++) {
    let stateCard = createCard(ALL_STATES[i])
    containerEl.innerHTML += stateCard;
}