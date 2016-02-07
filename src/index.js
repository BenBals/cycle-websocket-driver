import Cycle from '@cycle/core';
import {makeDOMDriver, h} from '@cycle/dom';
import Rx from 'rx';

import makeWebsocketDriver from './websocket-driver.js';

function main (sources) {
    let sinks = {
        DOM: sources.ws
            .map(x => x.data)
            .startWith('no message yet')
            .map(text =>
                 h('div', [
                     h('p', text),
                     h('input', {type: 'text'})
                 ])
            ),
        ws: sources.DOM.select('input').events('change')
            .map(ev => ev.target.value)
    };
    return sinks;
}

let drivers = {
    DOM: makeDOMDriver('#app'),
    ws: makeWebsocketDriver('ws://echo.websocket.org/')
};

Cycle.run(main, drivers);
