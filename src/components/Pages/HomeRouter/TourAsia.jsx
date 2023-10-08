import React from 'react'
import FormPrice from '../../Component/FormPrice/FormPrice'
import ListCardTour from '../../Component/ListCardTour/ListCardTour'
export default function TourAsia() {

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <FormPrice></FormPrice>
      <ListCardTour></ListCardTour>
    </div>
  )
}
