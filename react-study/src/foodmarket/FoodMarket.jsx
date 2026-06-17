import { Routes, Route, Link, useNavigate } from 'react-router';
import CustomerService from './pages/CustomerService';
import Home from './pages/Home';

import foodsData from "./data/foodsData";
import { useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';

function FoodMarket() {

    let [ foods, setFoods ] = useState(foodsData);

    // 기본 경로이동
    // <a href="주소"> 새로운 주소로 이동 (새로고침)
    // location.href = '주소'

    // react-router
    // link to=주소
    // navigate(주소)

    let navigate = useNavigate();

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={()=>{navigate("/")}}>FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/detail")}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info")}}>Info</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/help")}}>고객센터</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path='/' element={<Home foods={foods} />} />
                <Route path='/help' element={<CustomerService />} />
                <Route path='/detail' element={<div><h1>detail page</h1></div>} />
                <Route path='/info' element={<div><h1>info page</h1></div>} />
                <Route path='/*' element={<div><h1>잘못된 접근입니다.</h1></div>} />
            </Routes>

        </div>
    );
}

export default FoodMarket;