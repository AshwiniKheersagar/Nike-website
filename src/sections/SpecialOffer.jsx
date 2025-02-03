import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
          <img src={offer} width={773} height={687} 
               className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
         <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg"> <span className="text-coral-red">Special</span> Offer</h2>
          <p className="mt-4 lg:max-w-lg info-text">  
            Embark on a shopping journey that redefines your expectations and elevates your style. From premier selections to incredible savings, 
            we offer unparalled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique desires and preferences.
           Discover exclusive deals and limited-time offers that cater to your every need. 
           Don't miss out on the chance to experience the best in quality and affordability.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="View details" iconURL={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer