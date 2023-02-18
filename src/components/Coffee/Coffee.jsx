// copy this: https://community.powerbi.com/t5/Data-Stories-Gallery/Coffee-Sales-Analysis/td-p/2975380

import { Container, Row, Col } from 'react-bootstrap'

const Coffee = () => {
  return (
    <Container fluid='xl' className='h-100'>
      <Row className='h-90'>
        <Col className='bg-primary'>1 of 1</Col>
      </Row>
      <Row className='h-90'>
        <Col className='bg-secondary'>2 of 2</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className='bg-danger'>vertical bar</Col>
            <Col xs='8' className='bg-warning'>
              bar horizontal
            </Col>
          </Row>
          <Row>
            <Col xs='8' className='bg-info'>
              Line
            </Col>
            <Col style={{ backgroundColor: 'pink' }}>Text</Col>
          </Row>
        </Col>
        <Col xs='3' style={{ backgroundColor: 'orange' }}>
          Vertical
        </Col>
      </Row>
    </Container>
  )
}
export default Coffee
