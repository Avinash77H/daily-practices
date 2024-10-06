import { useState } from 'react'
import Agra from '../src/assets/agra.jfif'
import Delhi from '../src/assets/Delhi.jfif'
import Goa from '../src/assets/Goa.jfif'
import Jaipur from '../src/assets/jaipur.jfif'
import Mumbai from '../src/assets/mumbai.jfif'
import Header from './components/Header'
import Tour from './components/Tour'
import Card from './components/Card'

const data = [
  {
    id:1,
    name:"Agra",
    info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres south-east of the national capital Delhi and 330 km west of the state capital Lucknow.",
    image:Agra,
    price:"35,758"
  },
  {
    id:2,
    name:"jaipur",
    info:"Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.",
    image:Delhi,
    price:"23,200"
  },
  {
    id:3,
    name:"Goa",
    info:"Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    image:Goa,
    price:"40,000"
  },
  {
    id:4,
    name:'Delhi',
    info:"Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls. ",
    image:Jaipur,
    price:"23,234"
  },
  {
    id:5,
    name:"Mumbai",
    info:"Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.",
    image:Mumbai,
    price:"20,550"
  }
];

function App() {
  // const[data,setData] = useState(data)

  return (
    <>

      {/* <Header/> */}
      <Tour data={data}/>

    </>
  )
}

export default App
