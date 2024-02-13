// 자바스크립트
// int a = 1;
// 자료형 변수명 = 데이터 값;

let a = 1; // int -> number
// let or const 변수명 = 데이터값 ;


// 함수(메소드)
// 1) 일반 함수 선언
// function 함수명() {
//    구현하고자 하는 코드 
// }
function add(num1, num2) { // 매개변수 안에 타입 명시 X -> 오버로딩 불가능(타입이 다른지 모르기 때문)
    return num1 + num2;
}

console.log(add(1, 2)); // 3
let num4 = add(1, 2);
console.log(num4);

// 2) 익명 함수 선언
//  function() {

// }
let sub = function (a, b) {
    return a- b;
}

let result1 = sub(1, 3);
console.log(result1);

// 3) 화살표 함수
// let division = (a, b) => { // js = 변수 안에 함수 가능 , 함수도 값으로 치기 때문에 가능
//     return a / b;
// }

let division = (a, b) => {
    return a / b;
}

console.log(division(10, 5));