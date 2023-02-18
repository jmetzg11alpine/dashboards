import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'

const getPieData = (data) => {
  let tempData = []
  Object.entries(data).map(([key, values]) => {
    let newObject = {}
    let total = 0
    newObject['type'] = key
    values.forEach((item) => {
      total += item[1]
    })
    newObject['total'] = total
    tempData.push(newObject)
  })
  return tempData
}

const Cricle = ({ data }) => {
  const [svgHeight, setSvgHeight] = useState(0)
  const [svgWidth, setSvgWidth] = useState(0)
  const [text, setText] = useState('hover for price breakdown')
  const pieData = getPieData(data)
  const svgRef = useRef()

  function handleHover(e, d) {
    let tempText = ''
    data[d.type].forEach((d) => {
      tempText = tempText + d[0] + ' :' + Math.round(d[1] * 10) / 10 + '        '
    })
    d3.select(this).style('stroke', 'black').style('stroke-width', '2')
    setText(tempText)
  }

  function handleLeave(e, d) {
    d3.select(this).style('stroke', 'none').style('stroke-width', '0')
  }

  useEffect(() => {
    const container = d3.select(svgRef.current).select('svg')
    container.selectAll('*').remove()
    const innerWidth = window.innerWidth
    setSvgWidth((parseInt(container.style('width')) * innerWidth) / 100)
    const innerHeight = window.innerHeight
    setSvgHeight((parseInt(container.style('height')) * innerHeight) / 100)

    const CUMSUM = d3.cumsum(pieData, (d) => d.total)
    const SUM = d3.sum(pieData, (d) => d.total)
    pieData.forEach((obj, index) => {
      obj.startAngle = index === 0 ? 0 : (CUMSUM[index - 1] / SUM) * Math.PI * 2
      obj.endAngle = (CUMSUM[index] / SUM) * Math.PI * 2
      obj.innerRadius = (svgWidth / 2) * 0.001
      obj.outerRadius = (svgHeight / 2) * 0.85
      obj.id = index
    })
    const circleG = container
      .append('g')
      .attr('id', 'circle')
      .attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`)
    circleG
      .selectAll('path')
      .data(pieData)
      .join('path')
      .attr(
        'd',
        d3
          .arc()
          .innerRadius((d) => d.innerRadius)
          .outerRadius((d) => d.outerRadius)
          .startAngle((d) => d.startAngle)
          .endAngle((d) => d.endAngle)
          .padAngle(0.0051)
          .cornerRadius(2)
      )
      .style('fill', (d, i) => d3.schemeTableau10[i])
    pieData.forEach((obj, index) => {
      let [x, y] = d3.arc().centroid({
        innerRadius: obj.innerRadius + 12,
        outerRadius: obj.outerRadius + 12,
        startAngle: obj.startAngle,
        endAngle: obj.endAngle,
      })
      circleG.append('text').text(obj.type).attr('x', x).attr('y', y).style('text-anchor', 'middle').attr('class', 'pie-label')
    })
    circleG.selectAll('path').style('cursor', 'pointer')
    circleG.selectAll('path').on('mouseover', handleHover).on('mouseleave', handleLeave)
  }, [data])
  return (
    <div>
      <div ref={svgRef}>
        <svg style={{ height: '35vh', width: '35vw' }}></svg>
      </div>
      <div className='mt-3 me-5 text-center'>{text}</div>
    </div>
  )
}
export default Cricle
