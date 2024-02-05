import React from 'react'

const ComparePackage = ({val,setVal}) => {

        //add package
        const handleAdd=()=>{
            const values = [...val,[]]
            setVal(values)
            // console.log(values)
        }
        const handleChange =(onChangeValue,i)=>{
            const inputs=[...val]
            inputs[i] = onChangeValue.target.value 
            setVal(inputs)
        }
        const handleDeleteVal =(i)=>{
            const deleteVal =[...val]
            deleteVal.splice(i)
            setVal(deleteVal)
        }
  return (
    <div>
                          <div>
                        Compare Package :
                        <div onClick={()=>handleAdd()} className='w-2/12 text-center text-md hover:bg-pink-500 cursor-pointer bg-indigo-500 px-2 py-2 rounded text-white'>+ADD</div>
                        {
                            val.map((data,i)=>(
                                <div key={i} className='my-3'>
                                    <div className='flex items-center gap-3'>
                                    <input type="text" onChange={(e)=>handleChange(e,i)} name='basicPackage' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='Compare packages basic' />
                                    <span onClick={()=>handleDeleteVal(i)} className='text-2xl bg-red-500 px-3 py-1 rounded text-white hover:bg-green-400 cursor-pointer'>&times;</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
    </div>
  )
}

export default ComparePackage
