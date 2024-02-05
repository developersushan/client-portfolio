import React from 'react'

const ComparePremium = ({valPremium,setValPremium}) => {

        //add package
        const handleAddPremium=()=>{
            const values = [...valPremium,[]]
            setValPremium(values)
            // console.log(values)
        }
        const handleChangePremium =(onChangeValue,i)=>{
            const inputs=[...valPremium]
            inputs[i] = onChangeValue.target.value 
            setValPremium(inputs)
        }
        const handleDeleteValPremium =(i)=>{
            const deleteVal =[...valPremium]
            deleteVal.splice(i)
            setValPremium(deleteVal)
        }
  return (
    <div>
                          <div>
                        Compare Package :
                        <div onClick={()=>handleAddPremium()} className='w-2/12 text-center text-md hover:bg-green-500 cursor-pointer bg-orange-500 px-2 py-2 rounded text-white'>+ADD</div>
                        {
                            valPremium.map((data,i)=>(
                                <div key={i} className='my-3'>
                                    <div className='flex items-center gap-3'>
                                    <input type="text" onChange={(e)=>handleChangePremium(e,i)} name='basicPackage' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='Compare packages premium' />
                                    <span onClick={()=>handleDeleteValPremium(i)} className='text-2xl bg-red-500 px-3 py-1 rounded text-white hover:bg-green-400 cursor-pointer'>&times;</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
    </div>
  )
}

export default ComparePremium
