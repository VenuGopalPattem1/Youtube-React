import React from 'react'
import ContentButtons from './ContentButtons'

function ButtonsList() {
  const btnNames = ["Sports", "Cricket", "Movies", "Dances", "Tech", "React", "Java", "News", "Health","Company","Science","Mibiles","Bikes"]

  return (
    <div className=' container-fluid'>
         <div className=' d-flex p-2 m-2'>
        <ContentButtons name={btnNames[0]} />
        <ContentButtons name={btnNames[1]} />
        <ContentButtons name={btnNames[2]} />
        <ContentButtons name={btnNames[3]} />
        <ContentButtons name={btnNames[4]} />
        <ContentButtons name={btnNames[5]} />
        <ContentButtons name={btnNames[6]} />
        <ContentButtons name={btnNames[7]} />
        <ContentButtons name={btnNames[8]} />
        <ContentButtons name={btnNames[9]} />
        <ContentButtons name={btnNames[10]} />
        <ContentButtons name={btnNames[11]} />
      </div>
    </div>
  )
}

export default ButtonsList