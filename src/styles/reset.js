window.onload = window.onresize = function () {
  var windows = document.body.clientWidth
  var htmlPx = windows / 320 * 10
  document.getElementsByTagName('html')[0].style.fontSize = htmlPx + 'px'
}
