import React, { useEffect } from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { fetchVisitors } from '../../redux/slices/apiSlice'
import HeadTitle from './HeadTitle'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const formatLegentValue = (value) => {
  return value.replace('_' , ' ')
}

const formatTooltipValue = (value, name) => {
  return `${value.replace('_', ' ')} : ${name}`
}

const CustomTooltipContent = ({payload}) => {
  if(!payload || !payload.length) return null
  
  return (
    <div className='custom-rechart-tooltip'>
      <p className='recharts-tooltip'>
        {
          payload[0].payload?.month.charAt(0).toUpperCase() + payload[0].payload?.month.slice(1)
        }
      </p>
      <ul className='recharts-tooltip-item-list'>
        {
          payload.map((item, index) => {
            return (
              <li key={index}>
                {formatTooltipValue(item.name, item.value)}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const Visitors = () => {

  const dispatch = useDispatch()
  const state = useSelector((state) => state.apis.visitorsData)

  useEffect(() => {
    dispatch(fetchVisitors())
  }, [dispatch])
  
  // console.log(state)  

  // rechart options : https://react
  return (
    <div className='block-wrap'>
      <HeadTitle title="Visitors Insights" />
      <div className='line-chart w-full h-[230px]'>
        {!state ? (
          <div className='flex items-center justify-center h-full text-gray-500'>Loading...</div>
        ) : (
        <ResponsiveContainer width="100%" height="100%" >
          

            <LineChart
              data={state}
              margin={{
                top: 10,
                right: 5,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                horizontal={true}
                vertical={false}
                stroke="#333"
              />
              <XAxis 
                dataKey="month" 
                tickSize={0}
                axisLine={false}
                padding={{left:0}}
                tick={({payload, x, y, dy}) => (
                  <text 
                    x={x}
                    y={y + 20}
                    dy={dy}
                    textAnchor='middle'
                    fill="#777"
                    fontSize={14}
                  >{payload.value.charAt(0).toUpperCase() + payload.value.slice(1)}</text>
                )} 
              />
              <YAxis 
                tickSize={0}
                axisLine={false}
                ticks={[0, 100,200,300,400]}
                tick={{fill:"#777" , fontSize:14}}
              />
              <Tooltip content={<CustomTooltipContent />}/>
              <Legend iconType="square" formatter={formatLegentValue}/>
              <Line 
                dot={false}
                strokeWidth={3}
                type="basis"
                dataKey="loyal_customer"
                stroke="#a700ff"
              />
              <Line 
                dot={false}
                strokeWidth={3}
                type="basis"
                dataKey="new_customer"
                stroke="#f64260"
              />
              <Line 
                dot={false}
                strokeWidth={3}
                type="basis"
                dataKey="unique_customer"
                stroke="#f3c856"
              />              
            </LineChart>
        </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export default Visitors