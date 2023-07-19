// Imported JSON array from https://gist.github.com/mshafrir/2646763
const ALL_STATES = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}];

// Function to create a card with the correct values
function createCard (state, uniqueId) {
   return `
   <div id=${uniqueId} class="card has-background-info fifth-width js-modal-trigger" data-target="modal-js-example">
   <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4 has-text-white">${state.name}</p>
                    <p class="subtitle is-6 has-text-white">${state.abbreviation}</p>
                </div>
            </div>
        </div>
    </div>
    `
}

// Variable for the main container that holds all cards
const containerEl = document.getElementById('container');

// Populates the whole page with cards
for (let i = 0; i < ALL_STATES.length; i++) {
    let stateId = "card-" + i;
    let stateCard = createCard(ALL_STATES[i], stateId)

    containerEl.innerHTML += stateCard;
}


// Bulma JS Code for opening Modal
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

// Selects all elements with class "card"
const cardElements = document.querySelectorAll('.card');

// Simple function to add click listeners to each card
cardElements.forEach(card => {
  card.addEventListener('click', cardClickHandler);
});

// Changes the card color when clicked
function cardClickHandler(event) {
  const cardEl = event.currentTarget;
  cardEl.classList.remove('has-background-info');
  cardEl.classList.add('has-background-danger');

  let cardId = cardEl.id;
  let isDanger = cardEl.classList.contains('has-background-danger');
  
  localStorage.setItem(cardId, isDanger)

}

// Loads the color of each card when you refresh page
function loadCardStates() {
  cardElements.forEach(card => {
    let cardId = card.id;
    let isDanger = localStorage.getItem(cardId);

    if (isDanger === 'true') {
        card.classList.remove('has-background-info');
        card.classList.add('has-background-danger');
    }
  });
}

// Calls function on page load
loadCardStates();