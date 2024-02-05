import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const GigSlider = ({viewData}) => {
    // console.log(viewData?.files)

  return (
    <div>
      <Carousel showArrows={true}>
                {viewData?.files?.map((items,index)=>{
              return(
                          <div key={index} className='overflow-hidden'>
                            {/* {console.log(items)} */}
                            <img className='scale-105 hover:scale-125  w-full transition duration-300 ease-in delay-100' src={`http://localhost:8500/${items?.filename}`} height={300} alt={items?.fieldname} />
                          </div>
                        )
          })}
            </Carousel>
    </div>
  )
}

export default GigSlider
