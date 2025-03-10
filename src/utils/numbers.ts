//function roundToTwo(num: Number) {
//    return Number(Math.round(Number(num + "e+2"))  + "e-2");
//}
function roundTo(num: Number, fract: number) {
    return Number(num.toFixed(fract));
}

export {
  roundTo
}
