import image1 from './../../assets/image/rebook.png'
import image2 from './../../assets/image/puma_logo-removebg-preview.png'
import image3 from './../../assets/image/Lotto-logo-Performance-removebg-preview.png'
import image4 from './../../assets/image/web-183282273-removebg-preview.png'
import image5 from './../../assets/image/yonex.png'
import image6 from './../../assets/image/http___com.ft.imagepublish.upp-prod-eu.s3.amazonaws.avif'
import image7 from './../../assets/image/Website_Logos-768x480.jpg-removebg-preview.png'


const Brand = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-lg md:text-xl lg:text-3xl">Our Brand Partners</h2>
            <div className='grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  '>
                <div className='w-20 md:w-28 lg:w-36'>
                    <img src={image1} alt="" />
                </div>
                <div className='w-20 md:w-28 lg:w-36'>
                    <img src={image2} alt="" />
                </div>
                <div className='w-20 md:w-28 lg:w-36'>
                    <img src={image3} alt="" />
                </div>
                <div className='w-20 md:w-28 lg:w-36'>
                    <img src={image4} alt="" />
                </div>
                <div className='w-20 md:w-28 lg:w-36'>
                    <img src={image5} alt="" />
                </div>
                <div className='w-20 md:w-28 lg:w-36'>
                    <img src={image6} alt="" />
                </div>
                <div className='w-20 md:w-28 lg:w-36'>
                    <img src={image7} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Brand;