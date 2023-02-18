import { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { CiApple } from 'react-icons/ci'
import { GiBanana, GiGrapes, GiCarrot, GiTomato, GiBroccoli, GiChicken, GiPig, GiCow } from 'react-icons/gi'

const prices = { apple: 0.2, banana: 0.4, grapes: 0.6, carrot: 0.3, tomato: 0.5, broccoli: 0.7, chicken: 2, pork: 3, beef: 4 }

const Adjuster = ({ data, setData }) => {
  const [math, setMath] = useState('add')
  const [type, setType] = useState('fruit')
  const [food, setFood] = useState('apple')
  const [quantity, setQuantity] = useState(0)
  const handleCalculate = (math, type, food, quantity) => {
    let newObject = JSON.parse(JSON.stringify(data))
    const price = prices[food]
    if (math === 'add') {
      const spent = quantity * price
      if (Object.hasOwn(newObject[type], food)) {
        newObject[type][food][0] += quantity
        newObject[type][food][1] += spent
      } else {
        newObject[type][food] = [quantity, spent]
      }
      setData(newObject)
    } else {
      const spent = quantity * price
      if (Object.hasOwn(data[type], food)) {
        newObject[type][food][0] -= quantity
        newObject[type][food][1] -= spent
      } else {
        newObject[type][food] = [-quantity, -spent]
      }
      setData(newObject)
    }
  }
  const handleMath = (e) => {
    setMath(e.target.value)
  }
  const handleType = (e) => {
    setType(e.target.value)
  }
  const handleFood = (item) => {
    setFood(item)
  }
  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value))
  }
  const Fruit = (
    <div className='d-flex justify-content-around'>
      <CiApple className='food-display' style={food === 'apple' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('apple')} size={23} />
      <GiBanana className='food-display' style={food === 'banana' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('banana')} size={23} />
      <GiGrapes className='food-display' style={food === 'grapes' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('grapes')} size={23} />
    </div>
  )
  const Vegtables = (
    <div className='d-flex justify-content-around'>
      <GiCarrot className='food-display' style={food === 'carrot' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('carrot')} size={23} />
      <GiTomato className='food-display' style={food === 'tomato' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('tomato')} size={23} />
      <GiBroccoli className='food-display' style={food === 'broccoli' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('broccoli')} size={23} />
    </div>
  )
  const Meat = (
    <div className='d-flex justify-content-around'>
      <GiChicken className='food-display' style={food === 'chicken' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('chicken')} size={23} />
      <GiPig className='food-display' style={food === 'pork' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('pork')} size={23} />
      <GiCow className='food-display' style={food === 'beef' ? { border: '1px solid black' } : { border: 'none' }} onClick={() => handleFood('beef')} size={23} />
    </div>
  )
  return (
    <Container>
      <Row className='align-items-center mb-3'>
        <Col>
          <div className='vstack' onChange={handleMath}>
            <div>
              <input type='radio' value='add' checked={math === 'add'} />
              Add
            </div>
            <div>
              <input type='radio' value='remove' checked={math === 'remove'} />
              Remove
            </div>
          </div>
        </Col>
        <Col>
          <label>
            Type:{' '}
            <select onChange={handleType}>
              <option value='fruit'>Fruit</option>
              <option value='vegetable'>Vegetable</option>
              <option value='meat'>Meat</option>
            </select>
          </label>
        </Col>
        <Col>{type === 'fruit' ? Fruit : type === 'vegetable' ? Vegtables : Meat}</Col>
        <Col>
          <div className='d-flex' onChange={handleQuantity}>
            Count: <Form.Control type='number' size='sm' style={{ width: '40%' }} />
          </div>
        </Col>
        <Col>
          <Button onClick={() => handleCalculate(math, type, food, quantity)}>Caluculate</Button>
        </Col>
      </Row>
    </Container>
  )
}
export default Adjuster
