import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Info from './Info'
import Adjuster from './Adjuster'
import Bar from './Bar'
import Circle from './Cricle'
import './styles.css'

const prepareBarData = (data) => {
  let tempData = []
  const categories = Object.keys(data)
  for (let i = 0; i < categories.length; i++) {
    const items = Object.keys(data[categories[i]])
    for (let j = 0; j < items.length; j++) {
      const item = data[categories[i]][items[j]]
      tempData.push([items[j], item[0]])
    }
  }
  return tempData.sort(function (a, b) {
    return a[1] - b[1]
  })
}

const prepareCircleData = (data) => {
  let tempData = {}
  const categories = Object.keys(data)
  for (let i = 0; i < categories.length; i++) {
    const items = Object.keys(data[categories[i]])
    let total = []
    for (let j = 0; j < items.length; j++) {
      const item = data[categories[i]][items[j]]
      total.push([items[j], item[1]])
    }
    tempData[categories[i]] = total
  }
  return tempData
}
const startingData = { fruit: { apple: [1, 0.2], banana: [2, 0.8], grapes: [3, 1.8] }, meat: { beef: [2, 8], pork: [4, 12], chicken: [5, 10] }, vegetable: { tomato: [9, 4.5], carrot: [6, 1.8], broccoli: [2, 1.4] } }

const Fruits = () => {
  const [data, setData] = useState(startingData)
  const [barData, setBarData] = useState(prepareBarData(startingData))
  const [circleData, setCircleData] = useState(prepareCircleData(startingData))
  prepareCircleData(startingData)
  useEffect(() => {
    setBarData(prepareBarData(data))
    setCircleData(prepareCircleData(data))
  }, [data])
  return (
    <Container className='ms-2 w-100'>
      <Row>
        <Adjuster data={data} setData={setData} />
      </Row>
      <Row>
        <Col xs={6}>
          <Bar data={barData} />
        </Col>
        <Col xs={6}>
          <Circle data={circleData} />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Info />
        </Col>
      </Row>
    </Container>
  )
}
export default Fruits
