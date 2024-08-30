import React from 'react';
import { useSelector } from 'react-redux'


const ShimmerCard = () => {
    const darkmode = useSelector((store)=>store.theme.darkMode);

  return (
          <div className='p-2 m-2 w-72 shadow-lg rounded-xl box-border h-80'>
               <div className='w-[95%] h-[50%] mx-auto rounded-xl' style={{backgroundColor : darkmode ? '#1D232A':'#D3D3D3'}}></div>
                <div className='mt-2'>
                   <div className='w-[95%] h-16 rounded-xl mx-auto' style={{backgroundColor : darkmode ? '#1D232A':'#D3D3D3'}}></div>
                   <p className='w-[80%] h-8 mt-2 rounded-lg ml-2' style={{backgroundColor : darkmode ? '#1D232A':'#D3D3D3'}}></p>
                    <p className='w-[60%] h-8 mt-2 rounded-lg ml-2' style={{backgroundColor : darkmode ? '#1D232A':'#D3D3D3'}}></p>
                </div>
               </div>
                 
          
  )
}

const Shimmer = ()=>{
   return (
    <div className='flex flex-wrap'>
      {
        Array(20).fill().map((val,index)=>{
           return <ShimmerCard key={index}/>
        })
      }
    </div>
   )
}

export default Shimmer;
