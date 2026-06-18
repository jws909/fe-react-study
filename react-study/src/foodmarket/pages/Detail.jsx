import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import './Detail.css'

function Detail({ foods }) {

    //Detail 페이지에서 보여줄 상품정보

    // 접속path = /detail/:id
    // /detail/fd000   /detail/fd001

    // :id 위치에 넘어온 값이 무엇이냐? ---> foods 데이터 id 가 동일한 상품 찾기

    //------------------------------------------------------------

    /*
        useEffect(실행할함수, 의존성배열)
        useEffect(실행할함수, [])
        useEffect(실행할함수)

        useEffect(실행할함수{
            return ()=>{clean up function}
        }, 의존성 배열)
    */

    let [ orderCount, setOrderCount ] = useState(0);
    let [ test, setTest ] = useState(0);

    let [ orderButton, setOrderButton ] = useState('');

    useEffect(() => {
        console.log('useEffect 함수 실행 (의존성 배열 없음)')
    })  //의존성배열X -> 로딩될때마다 매번 실행

    useEffect(() => {
        console.log('useEffect 함수 실행 [] 빈배열 의존')
    }, [])  //빈배열 -> 생성/로딩시 1회 실행

    useEffect(() => {
        console.log('useEffect 함수 실행 [orderCount] 의존성배열')
        console.log('useEffect[orderCount] : ' + orderCount)

        return () => {    //clean up function
            console.log('useEffect[orderCount] -> return () 실행')
        }

    }, [ orderCount ]) //의존성 배열에 존재하는 값 -> 참고

    useEffect(() => {
        console.log('useEffect 함수 실행 [test] 의존성배열')
    }, [ test ]) //의존성 배열에 존재하는 값 -> 참고

    useEffect(() => {
        console.log('useEffect 함수 실행 [test, orderCount] 의존성배열')
    }, [ test, orderCount ]) //의존성 배열에 존재하는 값 -> 참고




    let [ viewStatus, setViewStatus ] = useState('')

    useEffect(() => {
        // setViewStatus('end')

        setTimeout(() => {
            setViewStatus('end')
        }, 500)

    }, [])

    let [ modalShow, setModalShow ] = useState(true); //모달창 표시 여부 true/false

    //Modal 창 자동으로 닫히게 적용
    useEffect(() => {
        //modalShow  state변수 true -> false

        setTimeout(() => {
            setModalShow(false)
        }, 2000)
        //2초 후 자동 닫기

    }, [])

    useEffect(() => {

        //setTimeout
        //setInterval
        //비동기방식

        //clearTimeout
        //clearInterval

        const interv = setInterval(() => {
            console.log('interval');
        }, 1000)

        //clean up function
        return () => {
            clearInterval(interv);
        }

    }, [ orderCount ])

    //------------------------------------------------------------

    //경로에 있는 값을 읽어오기
    // /:id
    let { id } = useParams();
    // console.log(id);

    // id확인 -> foods 배열 데이터 id 값 같은 food 데이터 찾기 -> food 화면에 표시 (imgPath, title, content, price)

    //filter
    let food = foods.find((item) => item.id == id);

    useEffect(() => {
        if (food.stockCount == 0) {
            setOrderButton(<Button variant="secondary" disabled="true">품절</Button>)
        } else {
            setOrderButton(<Button variant="primary">주문하기</Button>)
        }
    }, [])

    let foodIndex = foods.findIndex((item) => item.id == id);
    //foods[foodIndex].title
    //foods[foodIndex].content

    let navigate = useNavigate();
    //해당하는 id에 상품이 없으면? 필터링
    if (food == undefined || food == null || food == "") {
        return (
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant="info" onClick={() => { navigate("/") }}>홈으로 돌아가기</Button>
            </div>
        );
    }


    //----------------------------------------------------------------------------

    // 스타일 적용

    /*
        조건에 따라서 스타일 적용
        가격표시
            1만원 이상 -> 빨간색
            1만원 미만 -> 파란색

        1) js 객체

        <p style={ {color:'red', fontSize:'20px'} }>{food.price}</p>

        const priceTextStyle = {
            color: food.price >= 10000 ? 'red' : 'blue'
        }
        //{ color:'red' }  { color:'blue' }

        <p>{ food.price }</p>
        <p style={priceTextStyle}>{food.price}</p>

        2) js 함수 방식

        const priceTextStyleFunc = (price)=>{
            if(food.price >= 10000){
                return {color:'red'}
            }else{
                return {color:'blue'}
            }

            // return {price >= 10000 ? 'red' : 'blue'}
        }

        3) css 클래스 연계 사용

        //클래스이름 단일
        <p className={food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>

        //클래스이름 여러개
        <p className={'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue')}>{food.price}</p>

        // className=속성값에 들어가는 변수 형태로도 활용
        const priceTextClassName = (food.price >= 10000 ? 'price-red' : 'price-blue')
        <p className={'text-strong ' + priceTextClassName}>{food.price}</p>

        // 배열단위로 관리 join 함수 활용
        ['text-strong', 'price-red'].join(" ") -> "text-strong price-red"
        ['text-strong', 'price-red'].join("/") -> "text-strong/price-red"

        <p className={['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue')].join(" ")}>{food.price}</p>

        // 백틱문자 활용 `````
        <p className={`text-strong ${priceTextClassName}`}>{food.price}</p>
        <p className={`text-strong ${(food.price >= 10000 ? 'price-red' : 'price-blue')}`}>{food.price}</p>

        4) css class + useState + useEffect 조합 활용 -> 효과 발생

        let [ viewStatus, setViewStatus ] = useState('')

        useEffect(() => {
            // setViewStatus('end')

            setTimeout(() => {
                setViewStatus('end')
            }, 500)
        }, [])

        <Container className={"start " + viewStatus}>

        5) js 객체로 내부에서 스타일 정의 후 사용

        const styles = {
            redStyle: { color: 'red' },     //styles.redStyle
            blueStyle: { color: 'blue' },   //styles.blueStyle
            fontBigBold: {
                fontSize: '36px',
                fontWeight: 'bold'
            },
            titleStyle: {
                paddingTop: '30px',
                fontSize: '40px',
                fontWeight: 'bold'
            }
        }

    */

    const styles = {
        redStyle: { color: 'red' },     //styles.redStyle
        blueStyle: { color: 'blue' },   //styles.blueStyle
        fontBigBold: {
            fontSize: '36px',
            fontWeight: 'bold'
        },
        titleStyle: {
            paddingTop: '30px',
            fontSize: '40px',
            fontWeight: 'bold'
        }
    }

    const priceTextStyleFunc = (price) => {
        if (food.price >= 10000) {
            return { color: 'red' }
        } else {
            return { color: 'blue' }
        }

        // return {price >= 10000 ? 'red' : 'blue'}
    }

    const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
    }

    const priceTextClassName = (food.price >= 10000 ? 'price-red' : 'price-blue')


    //----------------------------------------------------------------------------


    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={import.meta.env.BASE_URL + food.imgPath} style={{ width: "100%" }} />
                </Col>
                <Col md={6}>
                    <h4 style={{paddingTop: '30px' }}>{food.title}</h4>
                    <h4 style={styles.titleStyle}>{food.title}</h4>
                    <p style={styles.fontBigBold}>{food.content}</p>
                    <p>{food.price}</p>
                    <p style={priceTextStyle}>{food.price}</p>
                    <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

                    <p className={food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>
                    <p className={'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue')}>{food.price}</p>
                    <p className={'text-strong ' + priceTextClassName}>{food.price}</p>
                    <p className={[ 'text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue') ].join(" ")}>{food.price}</p>
                    <p className={`text-strong ${priceTextClassName}`}>{food.price}</p>
                    <p className={`text-strong ${(food.price >= 10000 ? 'price-red' : 'price-blue')}`}>{food.price}</p>

                    <p>
                        <Button variant="dard" onClick={() => {
                            (orderCount > 0) && setOrderCount(orderCount - 1)
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dard" onClick={() => {
                            (food.stockCount > orderCount) && setOrderCount(orderCount + 1)
                        }}>+</Button>
                    </p>

                    {orderButton}
                    {/* <Button variant="primary">주문하기</Button> */}
                </Col>
            </Row>

            <Modal
                show={modalShow}
                onHide={() => { setModalShow(false) }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        어서오세요~
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Food Good!!!</h4>
                    <p>
                        많이 많이 구매하세요~
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setModalShow(false) }}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Detail;