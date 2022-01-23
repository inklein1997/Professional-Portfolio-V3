setInterval(() => windowSize(), 1)

function windowSize() {
console.log(window.innerWidth);
if (window.innerWidth > 992) {location.assign('index.html')}
}
