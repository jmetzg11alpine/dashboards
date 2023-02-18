import { Container, Row, Col } from 'react-bootstrap'
import { CiApple } from 'react-icons/ci'
import { GiBanana, GiGrapes, GiCarrot, GiTomato, GiBroccoli, GiChicken, GiPig, GiCow } from 'react-icons/gi'

const Info = () => {
  return (
    <Container>
      <Row>
        <Col>Fruit</Col>
        <Col>Price</Col>
        <Col>Vegetable</Col>
        <Col>Price</Col>
        <Col>Meat</Col>
        <Col>Price</Col>
      </Row>
      <Row>
        <Col>
          <CiApple size={25} />
        </Col>
        <Col>.20</Col>
        <Col>
          <GiCarrot size={25} />
        </Col>
        <Col>.30</Col>
        <Col>
          <GiChicken size={25} />
        </Col>
        <Col>2</Col>
      </Row>
      <Row>
        <Col>
          <GiBanana size={25} />
        </Col>
        <Col>.40</Col>
        <Col>
          <GiTomato size={25} />
        </Col>
        <Col>.50</Col>
        <Col>
          <GiPig size={25} />
        </Col>
        <Col>3</Col>
      </Row>
      <Row>
        <Col>
          <GiGrapes size={25} />
        </Col>
        <Col>.60</Col>
        <Col>
          <GiBroccoli size={25} />
        </Col>
        <Col>.70</Col>
        <Col>
          <GiCow size={25} />
        </Col>
        <Col>4</Col>
      </Row>
    </Container>
  )
}
export default Info
