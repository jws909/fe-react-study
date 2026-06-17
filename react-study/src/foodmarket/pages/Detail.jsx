import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

function Detail({ foods }) {

    //Detail 페이지에서 보여줄 상품정보

    // 접속path = /detail/:id
    // /detail/fd000   /detail/fd001

    // :id 위치에 넘어온 값이 무엇이냐? ---> foods 데이터 id 가 동일한 상품 찾기

    //경로에 있는 값을 읽어오기
    // /:id
    let { id } = useParams();
    // console.log(id);

    // id확인 -> foods 배열 데이터 id 값 같은 food 데이터 찾기 -> food 화면에 표시 (imgPath, title, content, price)

    //filter
    let food = foods.find((item) => item.id == id);

    let foodIndex = foods.findIndex((item) => item.id == id);
    //foods[foodIndex].title
    //foods[foodIndex].content

    let navigate = useNavigate();
    //해당하는 id에 상품이 없으면? 필터링
    if(food == undefined || food == null || food == ""){
        return (
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant="info" onClick={()=>{navigate("/")}}>홈으로 돌아가기</Button>
            </div>
        );
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={import.meta.env.BASE_URL + food.imgPath} style={{width:"100%"}}/>
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <p>
                        <Button variant="dard">-</Button>
                        <span> 0 </span>
                        <Button variant="dard">+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;