window.getArray = (strName) => Array.from(document.querySelectorAll(strName), (inp) => parseInt(inp.value));
window.min = (y) => {
    y.sort((a, b) => a - b);
    return y[0];
}
window.max = (y) => {
    y.sort((a, b) => a - b);
    return y[y.length - 1];
}
window.add = (y) => y.reduce((total, num) => total + num)