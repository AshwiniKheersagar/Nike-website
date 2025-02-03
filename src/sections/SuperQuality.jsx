import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full ">
      <div className="flex flex-1 flex-col">
         <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
          <p className="mt-4 lg:max-w-lg info-text">  
          Ensuring premium comfort and style ,our meticulously crafted footwear is designed to elevate your 
          experience,providing you with unmatched quality,
          innovation and a touch of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedicated to excellence ensures that every 
            step you take is a step in the right direction.
          </p>
          <div className="mt-11">
            <Button label="View details"/>
          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
           src={shoe8}
           alt="shoe8"
           width={570}
           height={522}
           className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality