'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var rx = require('rx');

function makeWebsocketDriver(url) {
    var ws = new WebSocket(url);
    return function websocketDriver(requests$) {
        var $responses = Rx.Observable.create(function (observer) {
            ws.onmessage = function (msg) {
                console.log('received message:');
                console.log(msg);
                observer.onNext(msg);
            };
            ws.onopen = function (ev) {
                return console.log('connection opened');
            };
            ws.onerror = function (ev) {
                return console.log(ev);
            };
        });

        requests$.subscribe(function (request) {
            console.log('sending message: ' + request);
            ws.send(request);
        });
        return $responses;
    };
}

exports.default = makeWebsocketDriver;

//# sourceMappingURL=cycle-websocket-driver.js.map