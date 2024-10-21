import React, { useContext } from 'react'
import { TodoContext } from '../store/AppContext'

function Welcome() {
  const{todo} = useContext(TodoContext)
  return (
    <div>
     {todo.length === 0 &&  <h3 className='text-center text-3xl font-semibold mt-8 mx-20' >Enjoy Your Day</h3>}
    </div>
  )
}

export default Welcome
