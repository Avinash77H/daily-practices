import React from 'react'

function Switch({day}) {
      
        switch(day){
            case 'sunday': return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Today is Sunday</p>
            case 'monday': return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Today is Monday</p>
            case 'tuesday': return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Today is Tuesday</p>
            case 'wednesday': return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Today is Wednesday</p>
            case 'thursday': return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Today is Thursday</p>
            case 'friday': return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Today is Friday</p>
            case 'saturday': return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Today is Saturday</p>
            default : return <p className='font-bold text-center text-white bg-purple-500 p-4 mt-8 text-3xl'>Please Enter valid Day...</p>
        }
      
  
}

export default Switch
