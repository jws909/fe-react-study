
function CustomerService(){

    /*
        localStorage 사용
        브라우저에 간단한 데이터 저장 및 활용

        읽기 localStorage.getItem(키)
        쓰기 localStorage.setItem(키, 값)
        삭제 localStorage.removeItem(키)

    */

    localStorage.setItem('key1', '안녕하세요');
    localStorage.setItem('hello', 'nice to meet you');

    localStorage.removeItem('abc');
    console.log(localStorage.getItem('msg'));

    /*
        단순 텍스트가 아니라 복잡한 배열이나 객체 단위를 저장

        localStorage 단순 텍스트만 저장

        JSON 포맷의 텍스트

        js객체 -> JSON 포맷의 문자열 변환 -> 저장
        JSON.stringify()

        읽기 -> JSON 포맷의 문자열 -> js 객체 변환
        JSON.parse()

    */
    let tempFood = {
        id: 'fd002',
        title: "Hamburger",
        content: "완전식품 햄버거",
        price: 11000,
        imgPath: 'images/food3.jpg',
        stockCount: 0
    }
    localStorage.setItem('tempFood', tempFood); //[object Object]
    localStorage.setItem('tempFoodJson', JSON.stringify(tempFood));

    let tempFoodJson = localStorage.getItem('tempFoodJson');
    console.log(tempFoodJson);
    console.log(tempFoodJson.title);

    let jsonObject = JSON.parse(tempFoodJson);
    console.log(jsonObject);
    console.log(jsonObject.id);
    console.log(jsonObject.title);

    /*
        [{},{},{}]
        -> JSON.stringify() -> localStorage

        [{d}] -> JSON.stringify -> localStorage : [{d}]

        localStorage -> JSON.parse -> [{a},{b},{c}].push{d}
                -> [{a},{b},{c},{d}] -> JSON.stringify() -> [{a},{b},{c},{d}]
    */

    return (
        <div>
            <h1>고객 서비스 페이지</h1>
            <h2>정성을 다하겠습니다.</h2>
        </div>
    );
}

export default CustomerService;