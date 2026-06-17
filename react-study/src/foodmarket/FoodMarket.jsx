import './FoodMarket.css';
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Navbar, Row, Col, Button } from 'react-bootstrap';
// import banner_bg from './img/banner_bg.jpg';
// import food1 from './img/food1.jpg';
// import food2 from './img/food2.jpg';
// import food3 from './img/food3.jpg';

// 화면에 보여주는 푸드 정보 기준 data import
import foodsData from './data/foodsData';
import { useState } from 'react';
import FoodCard from './components/FoodCard';

function FoodMarket() {

    let [ foods, setFoods ] = useState(foodsData);

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
                이미지 사용
                
                1. css 에서 사용
                    이미지 경로 (상대경로 ./img/...)
                
                2. js(jsx) 에서 사용

                상대경로 연결 사용 XXX
                <img src="../../image.menu.png"/> XXX


                react 컴포넌트에서 이미지 사용시, import -> 사용
                <img src="https://...외부url"/>
                <img src={import한이미지}/>

                3. public 폴더에 이미지를 미리 저장해놓고 사용
                현재 실행중인 서버가 public 경로를 통해 image 에 접근할 수 있는 서버 역할
                이미지 외부url에 접근해서 사용하듯이...사용

                <img src={'http://localhost:5173/images/food1.jpg'} />
                <img src={'/images/food1.jpg'} />

                CRA     :   <img src={ process.env.PUBLIC_URL + '/images/food1.jpg'} />
                            package.json
                            "homepage":"/detailServicePath" 상세경로설정

                Vite    :   <img src={ import.meta.env.BASE_URL + '/images/food1.jpg'} />
                            vite.config.js
                            base: "detailServicePath/" 상세경로설정 

            */}

            {/* <img src={banner_bg} /> */}
            {/* <div className='main-bg' style={{backgroundImage:'url('+ banner_bg +')'}}></div> */}
            <div className='main-bg'></div>

            {/*
                bootstrap 한줄 기준 : 12
            */}
            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={2} key={index}>
                                    <FoodCard food={food} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>


            {/* <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> */}
            {/* <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button> */}
        </div>
    );
}

export default FoodMarket;