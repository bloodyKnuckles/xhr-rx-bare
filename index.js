module.exports = function (url) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.send()
  return Rx.Observable.fromEvent(xhr, 'load').map(function (ev) {
    var request = ev.currentTarget

    if (request.status === 200) {
      return request.responseText
    }
  })
}

