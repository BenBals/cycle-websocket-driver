import Rx from 'rx';

function makeWebsocketDriver (url) {
    return function websocketDriver ($requests) {
        let $responses = Rx.Observable.interval(1000).map(() => "i am an event");
        return $responses;
    };
};
