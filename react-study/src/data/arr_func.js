

// 반복  for, for in, for of, forEach ...

//기본 배열
let arr = [10,20,30,40];

//js 함수

// 1) map

// 배열안의 요소들을 하나씩 접근하면서 (반복실행) 수행후 return 기능

arr.map(()=>{   //요소 수만큼 단순 반복
    console.log('arr map');
});

//forEach
arr.forEach((v)=>{  //매개변수에 arr 요소 한개씩 대입
    console.log('forEach : ' + v);
});

arr.map((item)=>{   //매개변수 1개 선언된 콜백함수 -> item 배열의 요소 값 주입
    console.log('arr map : ' + item);
});

arr.map((item, index)=>{   //매개변수 2개 선언된 콜백함수 -> item:배열값 index:인덱스값 주입
    console.log('arr map item : ' + item + " index : " + index);
});

let result1 = arr.map(()=>{
                return 99;
            });
console.log(result1);

let result2 = arr.map((item)=>{
                console.log(item);  //return값이 없다
            });
console.log(result2);   //[ undefined, undefined, undefined, undefined ]

let result3 = arr.map((item)=>{
                return item + 100;
            });
console.log(result3);

let result4 = arr.map((item)=>{
                return '원래 가지고 있던 값 : ' + item;
            });
console.log(result4);

let menuArr = ['라면','우동','김밥'];
let result5 = menuArr.map((menu)=>{
    return "<p>" + menu + "</p>";
});
console.log(result5);

let result6 = menuArr.map((menu)=>("<p>" + menu + "</p>"));
console.log(result6);

// 2) filter
// 실행 결과값이 참인 결과만 return
arr = [10,20,30,40];

let result7 = arr.filter((value)=>{
                return true;
            });
console.log(result7);

let result8 = arr.filter((value)=>{ // 10 20 30 40
                return value > 15;
            });
console.log(result8);

arr = [10,20,30,40,30,30,20,10,20];
let result9 = arr.filter((value)=>{ // 10 20 30 40
                // return value != 30;
                return value == 30;
            });
console.log(result9);

// 3) find
let result10 = arr.find((value)=>{  //못찾으면 undefined
                return value == 20;
            });
console.log(result10);

// 4) findIndex
let result11 = arr.findIndex((value)=>{  //못찾으면 -1
                return value == 20;
            });
console.log(result11);

// return
// 구조분해할당 (Destructuring Assignment)

let arr2 = [10,20,30];
console.log(arr2);
console.log(arr2[1]);

let [n1, n2, n3] = [77,88,99];
console.log(n1);
console.log(n2);
console.log(n3);

let [num, setNum] = [77,88];
console.log(num);
console.log(setNum);

function func1(){
    console.log('func1()');
}

let [c, f] = [50, func1];
console.log(c);
f();

/* 
    let [count, setCount] = useState(0);

    function useState(n){
        let v = n;

        function setV(input){
            v = input;
        }

        return [v, setV];
    }
    console.log(count);
    setCount(10);
*/

let obj = {
    num1: 30,
    num2: 50
};
console.log(obj.num1);
console.log(obj.num2);

let obj2 = obj;
console.log(obj2.num1);
console.log(obj2.num2);

let {num1, num2} = obj;
console.log(num1, num2);