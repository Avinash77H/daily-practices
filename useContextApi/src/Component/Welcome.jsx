import React from 'react'

function Welcome({todo}) {
  return (
    <div>
     {todo.length === 0 &&  <h3 className='text-center mt-8 mx-20' >Enjoy Your Day</h3>}
    </div>
  )
}

export default Welcome
