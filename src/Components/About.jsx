import CountDown from "./CountDown"

const About = () => {
  return (
    <div className="xl:bg-white shadow-md bg-none py-8" >
      <div className="w-8/12 py-2 mx-auto text-center">
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <div className="mx-auto">
            <img className="rounded" src="https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/portrait-of-young-handsome-man-posing-in-the-offic-resize-p2n349gmw4gvog9hnv8ul2plr4hsouhcmu1fkt1lqw.jpg" width={500} alt="" />
          </div>
          <div className="text-left">
            <h2 className="text-xl text-orange-500 mt-2 sm:mt-0 sm:mb-6">About Me</h2>
            <h3 className="text-2xl md:text-5xl mb-2 sm:mb-8">Expert Digital Marketing for Business Solution.</h3>
            <p>Mauris elementum ex vitae arcu finibus, non dictum elit luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dui, tincidunt sagittis urna vitae, posuere viverra ligula. Aliquam vel fringilla nunc, non gravida mauris. Praesent ac congue ipsum.
              Nam ac purus eget lorem cursus suscipit id eu odio. Nam efficitur dignissim nulla, eget tempus metus. Sed fermentum molestie risus, non bibendum ipsum dapibus non.</p>
            <img className="mt-4 mb-3 t" src="https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/2021/02/sign.png" width={100} alt="" />
            <p >— Portia Arthur, Founder Porka</p>
          </div>
        </div>
        <CountDown></CountDown>
      </div>
    </div>
  )
}

export default About
