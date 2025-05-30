//
// Select - choice.js
//
// @https://github.com/Choices-js/Choices

import Choices from '../../../../../../node_modules/choices.js/public/assets/scripts/choices';

function choicesInit() {
    const selectElement = document.querySelectorAll('.selectpicker');

    let selectA11yText = {
        'loadingText': 'Loading...',
        'noResultsText': 'No results found',
        'noChoicesText': 'No choices to choose from',
        'itemSelectText': 'Press to select',
    };

    if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'de'){
        selectA11yText = {
            'loadingText': 'Lade...',
            'noResultsText': 'Keine Ergebisse gefunden',
            'noChoicesText': 'Keine Auswahlmöglichkeiten',
            'itemSelectText': 'auswählen',
        };
    }

    selectElement.forEach(function (select) {
        new Choices(select, {
            searchEnabled: false,
            shouldSort: false,
            allowHTML: true,
            itemSelectText: selectA11yText.itemSelectText,
        });
    });
}

export default {};

export const ChoicesInit = choicesInit;
