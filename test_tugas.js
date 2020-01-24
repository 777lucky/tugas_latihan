function calculateRectangleArea(width, length){
   return(width * length);
   function validate() {};
   return validate;
}

console.log(calculateRectangleArea('a', 5))
console.log(calculateRectangleArea(3, 5))

function calculateTriangleArea(base, height){
    return((base * height)/2);
    function validate() {};
    return validate;
}
 
console.log(calculateTriangleArea('a', 3))
console.log(calculateTriangleArea(2, 3))

function calculateCubeVolume(length) {
    return (length * length * length);
    function validate() {};
    return validate;
}

console.log(calculateCubeVolume(3))
console.log(calculateCubeVolume('a'))

function calculateTrianglePrismVolume(length) {
    return ((length * length * length)/2);
    function validate() {};
    return validate;
}

console.log(calculateTrianglePrismVolume(2))
console.log(calculateTrianglePrismVolume('a'))

function validate() {
    for (let i in data) {
        if(data[i] !== 'number') {
            console.error;
            return false
        }
    } return true
}
