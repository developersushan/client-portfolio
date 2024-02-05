import React, { useEffect, useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import ImageModal from './Dashboard/ImageModal'

const AllImages = () => {
  const [clickedImage,setClickedImage] = useState(null)
  const [currentImage,setCurrentImage] = useState(null)
  const [images,setImages] = useState([])
  async function imageFetch(){
    const res = await fetch('http://localhost:8500/image')
    const data = await res.json()
    setImages(data)
  }
  useEffect(()=>{
    imageFetch()
  },[])


  const handleShowImage =(item,index)=>{
    setCurrentImage(index)
    setClickedImage(item.filename)

  }
const handleRotationRight =()=>{
  const totalLength = images.length
  if(currentImage +1 >= totalLength){
    setCurrentImage(0);
    const newUrl = images[0].filename
    setClickedImage(newUrl)
    return
  }
  const newIndex = currentImage+1;
  const newUrl = images.filter((item)=>{
    return images.indexOf(item)===newIndex
  })
  const newItem = newUrl[0].filename
  setClickedImage(newItem)
  setCurrentImage(newIndex)
}

const handleRotationLeft =()=>{
  const totalLength = images.length
  if(currentImage ===0){
    setCurrentImage(totalLength -1)
    const newUrl = images[totalLength-1].filename
    setClickedImage(newUrl)
    return
  }
  const newIndex = currentImage-1
  const newUrl = images.filter((item)=>{
    return images.indexOf(item)===newIndex
  })
  const newItem = newUrl[0].filename
  setClickedImage(newItem)
  setCurrentImage(newIndex)
}



  return (
    <div className='py-3 sm:w-8/12 w-full mx-auto'>
      <h3 className='capitalize text-2xl py-4'>image gallery:</h3>
      <div className='grid sm:grid-cols-3 grid-cols-2 gap-3'>
        {
          images.map((item,index)=>{
            return(
              <div className='' key={item._id}>
                <img className='shadow-lg rounded-md h-[300px] object-cover' width={600} src={`http://localhost:8500/${item.filename}`} alt="" onClick={()=>handleShowImage(item,index)} />
            </div>
            )
          })
        }
        {
          clickedImage && <ImageModal clickedImage={clickedImage} setClickedImage={setClickedImage} handleRotationRight={handleRotationRight} handleRotationLeft={handleRotationLeft}/>
        }

      </div>
    </div>
  )
}

export default AllImages
