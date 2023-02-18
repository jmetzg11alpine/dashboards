import * as d3 from 'd3'
import { useState, useEffect, useRef } from 'react'

const Bar = ({ data }) => {
  const [svgWidth, setSvgWidth] = useState(0)
  const [svgHeight, setSvgHeight] = useState(0)
  const [bufferHeight, setBufferHeight] = useState(0)
  const [bufferWidth, setBufferWidth] = useState(0)
  const svgRef = useRef()

  useEffect(() => {
    const container = d3.select(svgRef.current).select('svg')
    container.selectAll('*').remove()
    const innerWidth = window.innerWidth
    setSvgWidth((parseInt(container.style('width')) * innerWidth) / 100)
    const innerHeight = window.innerHeight
    setSvgHeight((parseInt(container.style('height')) * innerHeight) / 100)
    setBufferWidth(innerWidth / 25)
    setBufferHeight(innerHeight / 22)

    // y axis
    const yAxisScale = d3
      .scaleLinear()
      .domain([d3.max(data, (d) => d[1]), 0])
      .range([bufferHeight, svgHeight - bufferHeight])
    const yAxis = d3.axisLeft(yAxisScale).tickSizeOuter(0).tickSizeInner(0)
    const yAxisG = container.append('g').attr('id', 'yBarG')
    yAxis(yAxisG)
    yAxisG.attr('transform', `translate(${bufferWidth}, 0)`)
    container
      .append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', bufferWidth - 20)
      .attr('x', -svgHeight / 2)
      .text('Count')
      .style('font-size', 15)
    // x axis
    const xAxisScale = d3
      .scaleLinear()
      .domain([0.5, data.length + 0.5])
      .range([bufferWidth, svgWidth - bufferWidth])
    const xAxis = d3
      .axisBottom(xAxisScale)
      .tickSizeOuter(0)
      .tickSizeInner(0)
      .tickFormat((i) => {
        return data[i - 1][0]
      })
    const xAxisG = container.append('g').attr('id', 'xBarG')
    xAxis(xAxisG)
    xAxisG
      .attr('transform', `translate(0, ${svgHeight - bufferHeight})`)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-45)')
      .style('font-size', '11')
    // render bars
    const barWidth = (svgWidth - 2 * bufferWidth) / data.length - 4
    container
      .append('g')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d, i) => xAxisScale(i + 0.6))
      .attr('y', (d, i) => yAxisScale(d[1]))
      .attr('height', (d, i) => svgHeight - bufferHeight - yAxisScale(d[1]) - 1)
      .attr('width', barWidth)
      .style('fill', 'blue')
  }, [data, bufferHeight, bufferWidth, svgHeight, svgWidth])

  return (
    <div>
      <h5 className='text-center'>Count of each item</h5>
      <div ref={svgRef}>
        <svg style={{ height: '40vh', width: '35vw' }}></svg>
      </div>
    </div>
  )
}
export default Bar
