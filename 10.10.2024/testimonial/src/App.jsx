import React from 'react'
import profile1 from '../src/assets/profile1.jpg'
import profile2 from '../src/assets/profile2.jfif'
import profile3 from '../src/assets/profile3.jfif'
import profile4 from '../src/assets/profile4.jfif'
import profile5 from '../src/assets/profile5.png'
import Testimonial from './components/Testimonial'

const data=[
  {
    name:'John Doe',
    profession:'Software Developer',
    about:'Designing software architectures and creating diagrams, flowcharts, and models to illustrate the code needed ',
    profile:profile1
  },
  {
    name:'David gorgins',
    profession:'web Developer',
    about:'Designing software architectures and creating diagrams, flowcharts, and models to illustrate the code needed ',
    profile:profile2
  },
  {
    name:'James Wal',
    profession:'App Developer',
    about:'Designing software architectures and creating diagrams, flowcharts, and models to illustrate the code needed ',
    profile:profile3
  },
  {
    name:'Nics Jonas',
    profession:'Software Developer',
    about:'Designing software architectures and creating diagrams, flowcharts, and models to illustrate the code needed ',
    profile:profile4
  },
  {
    name:'Avinash Rakholiya',
    profession:'Full Stack Developer',
    about:'Designing website architectures and creating diagrams, flowcharts, and models to illustrate the code needed ',
    profile:profile5
  }
]

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-1/4 border-2 border-red-500 p-8'>
      <h1 className='text-3xl font-bold text-center'>Testimonial</h1>
      <div className='w-38 border-2 border-green-500 mt-4'></div>
      <Testimonial data={data}/>
      </div>
      
    </div>
  )
}

export default App
