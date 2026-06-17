import { Col, Container, Row } from "react-bootstrap";
import FoodCard from "../components/FoodCard";
import '../FoodMarket.css'

function Home({foods}) {

    return (
        <div>

            <div className='main-bg'></div>

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
        </div>
    );
}

export default Home;