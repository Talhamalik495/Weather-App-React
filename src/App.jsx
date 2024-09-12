import { useEffect, useState } from 'react'

function App() {
  const [input,setInput]=useState("")
  const [humaidity,setHumaidaty]=useState(62)
  const [wind,setWind]=useState(6.17)
  const [visibility,setVisibility]=useState(5)
    console.log(input);
    
let search=async(input)=>{
  try {
    const APIKEY="75b4f55b56f54193c128d268511d6572"
    const url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=98092c54b629e85a8a8adc138825a7b2`)
    const response= await url.json();

console.log(response);
  } catch (error) {
    console.log(error); 
  }
}
useEffect(()=>{
  // search()
  console.log("useeffect called");
  search();
  },[input])
return (
   <>
  <div className="w-screen h-screen flex justify-center flex-col">
  <h1 className='text-center text-white font-bold mt-5 text-xl'>Weather App</h1>
   <div className='h-[450px] w-[35%] rounded-xl mt-10 bg-white mx-auto flex justify-center flex-col align-middle items-center'>

<div className='flex gap-3'> 
  <input className='w-80 h-10 rounded-md bg-black' type="text"onChange={(e)=>setInput(e.target.value)} />
<select onChange={(e)=>{
setInput(e.target.value);
}}>
  <option value="Karachi">Karachi</option>
  <option value="Tokyo">Tokyo</option>
  <option value="New York">New York</option>
  <option value="Paris">Paris</option>
  <option value="London">London</option>
  <option value="Shanghal">Shanghal</option>
  <option value="Los Angleles">Los Angleles</option>
  <option value="Beijing">Beijing</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Moscow">Moscow</option>
  <option value="Hong Kong">Hong Kong</option>
  <option value="Dubai">Dubai</option>
  <option value="Singapore">Singapore</option>
  <option value="Bangkok">Bangkok</option>
  <option value="Istambul">Istambul</option>
  <option value="Sydney">Sydney</option>
  <option value="Mexico City">Mexico City</option>
  <option value="Berlin">Berlin</option>
</select>
</div>
<div>
  <div>
    <img src="" alt="" onChange={()=>"ddd"} />
  </div>
<div className='flex items-end gap-10 mt-40'>

<p className='w-28 h-28 bg-black text-white rounded-md'>{wind}</p>
  <p className='w-28 h-28 bg-black text-white rounded-md'>{humaidity}</p>
  <p className='w-28 h-28 bg-black text-white rounded-md'>{visibility}</p>

</div>
</div>
   </div>
  </div> 
   </>
  )
}

export default App
