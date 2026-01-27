import React from 'react'

const HeadTitle = ({title}) => {
  return (
    <div className='block-head'>
      <div className='block-title mt-1'>
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>
    </div>
  )
}

export default HeadTitle