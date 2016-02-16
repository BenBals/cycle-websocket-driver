let rx = require ('rx')

function makeWebsocketDriver (url) {
    let ws = new WebSocket(url)
    return function websocketDriver (requests$) {
        let $responses = Rx.Observable.create(function (observer) {
            ws.onmessage = msg => {
                console.log('received message:')
                console.log(msg)
                observer.onNext(msg)
            }
            ws.onopen = ev => console.log('connection opened')
            ws.onerror = ev => console.log(ev)
        })

        requests$.subscribe(request => {
            console.log('sending message: ' + request)
            ws.send(request)
        })
        return $responses
    }
}

export default makeWebsocketDriver
