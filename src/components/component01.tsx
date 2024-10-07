import image01 from '../assets/component-01/Image-01.jpg';
import image02 from '../assets/component-01/Image-02.jpg';
import image03 from '../assets/component-01/Image-03.jpg';
import { onClick } from './actions';
function FirstComponent() {

  return (
    <>
      <div className='flex flex-col items-center md:flex-row gap-5 -mx-4'>
        <div>
            <a href="" target="_blank" 
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    const imgElement = e.currentTarget.querySelector('img') as HTMLImageElement; // Type assertion
                    onClick(imgElement);
                }}>
            <img src={image01} className="transition-transform transform hover:scale-110 duration-300 ease-in-out" alt="Vite logo" />
            </a>
        </div>
        <div className=' flex flex-col gap-5'>
            <a href="" target="_blank" 
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    const imgElement = e.currentTarget.querySelector('img') as HTMLImageElement; // Type assertion
                    onClick(imgElement);
                }}>
            <img src={image02} className="transition-transform transform hover:scale-110 duration-300 ease-in-out" alt="React logo" />
            </a>
            <a href="" target="_blank"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    const imgElement = e.currentTarget.querySelector('img') as HTMLImageElement; // Type assertion
                    onClick(imgElement);
                }}>
            <img src={image03} className="transition-transform transform hover:scale-110 duration-300 ease-in-out" alt="React logo" />
            </a>
        </div>
        <div className='flex flex-col min-w-80'>
            <div className='mb-6'>
                <p className='text-3xl font-light'>
                    ANSWERS YOUR BODY'S NEEDS
                </p>
                <hr className='my-4' />
                <p className='w-[400px] md:text-left text-[19px] font-light leading-relaxed tracking-wide'>
                    The way ingredients are sourced affects the way we nourish out bodies. 
                    Author Mark Schatzer believes our body naturally develops
                    an appetite for the foods and nutrients it needs to be healthy, but that
                    artificial flavourings are getting in the way. This can be reversed by focusing
                    on high-quality ingredients and being mindful as your appetite guides you to 
                    consume according to your body's needs
                </p>
            </div>
            <div>
                <p className='text-red-900 md:text-left font-medium text-lg my-4'>
                    BE MINDFUL
                </p>
                <p className='font-semibold md:text-left text-lg w-96'>
                    Sourcing local or organic food is a good way to start being more mindful about what
                    you're cooking and eating
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default FirstComponent;
