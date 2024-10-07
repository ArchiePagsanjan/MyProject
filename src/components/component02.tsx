import image01 from '../assets/component-02/Image-01.jpg';
import image02 from '../assets/component-02/Image-02.jpg';
import image03 from '../assets/component-02/Image-03.jpg';
import { onClick } from './actions';

interface Card{
    img: string,
    title: string,
    content: string
}
function SecondComponent() {
  const cards: Card[] = [
    {
        img : image01,
        title: "Summer Lunch Menu By Mark Best",
        content: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    },{
        img : image02,
        title: "A Traditional Christmas Eve, Mark Best Style",
        content: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests."
    },{
        img : image03,
        title: "Taking Taste Further",
        content: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food."
      }

    ]
  return (
    <>
      <div>
        <p className='text-5xl font-extralight mb-20'>
           ALL THE LATEST FROM AEG 
        </p>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row gap-5 mx-0 md:-mx-4'>
        {cards.map(card=>{
            return(
                <div className='text-left'>
                    <div className='mb-6'>
                        <a href="" target="_blank"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                const imgElement = e.currentTarget.querySelector('img') as HTMLImageElement; // Type assertion
                                onClick(imgElement);
                            }}>
                        <img src={card.img} className="border-b-4 border-red-900 transition-transform transform hover:scale-110 duration-300 ease-in-out" alt={card.title} />
                        </a>
                    </div>
                    <p className='text-[19px] font-medium'>
                        {card.title}
                    </p>
                    <p className='text-neutral-600 max-w-96 text-[17px]'>
                        {card.content}
                    </p>
                    <div  className='my-6'>
                        <a href="http://" target="_blank" className='border-b-4 border-red-900 pb-2 text-light' >
                            READ MORE
                        </a>
                    </div>
                </div>
            )
        })}
        
      </div>
    </>
  )
}

export default SecondComponent;