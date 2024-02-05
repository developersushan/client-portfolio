import React from 'react'

const CompareStandard = ({valStand,setValStand}) => {

        //add package
        const handleAddStand=()=>{
            const values = [...valStand,[]]
            setValStand(values)
            // console.log(values)
        }
        const handleChangeStand =(onChangeValue,i)=>{
            const inputs=[...valStand]
            inputs[i] = onChangeValue.target.value 
            setValStand(inputs)
        }
        const handleDeleteValStand =(i)=>{
            const deleteVal =[...valStand]
            deleteVal.splice(i)
            setValStand(deleteVal)
        }
  return (
    <div>
                          <div>
                        Compare Package :
                        <div onClick={()=>handleAddStand()} className='w-2/12 text-center text-md bg-pink-500 cursor-pointer hover:bg-indigo-500 px-2 py-2 rounded text-white'>+ADD</div>
                        {
                            valStand.map((data,i)=>(
                                <div key={i} className='my-3'>
                                    <div className='flex items-center gap-3'>
                                    <input type="text" onChange={(e)=>handleChangeStand(e,i)} name='basicPackage' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='Compare packages standard' />
                                    <span onClick={()=>handleDeleteValStand(i)} className='text-2xl bg-red-500 px-3 py-1 rounded text-white hover:bg-green-400 cursor-pointer'>&times;</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
    </div>
  )
}

export default CompareStandard
