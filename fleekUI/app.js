import {Tooltip} from './tooltip.js';
import {Drop} from './dropdown.js';
import {Tabs} from './tabs.js'
import {Alert} from './alert.js'

//tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();


//dropdown init


const dropdowns = document.querySelectorAll('.dropingson');
dropdowns.forEach( dropdown => {
    const instance = new Drop(dropdown);
    instance.init();
});

//tabs

const tabs= new Tabs (document.querySelector('.tabs'));
tabs.init();



///alert
const alert= new Alert();
alert.init();

const button= document.querySelector('button')
button.addEventListener('click', ()=>{
    alert.poruka('Bravo Majstore');
});
