import React from 'react'

function Carousel({apiList, selectedOption}) {

  // List of APIs in the selected category
  let selectedApiList = apiList.filter( api => api.Category === selectedOption );

  return (
    <section>
      {selectedApiList.map((api, idx) => (
        <div key={`api-${idx}`}>{api}</div>
      ))}
    </section>
  )
}

export default Carousel