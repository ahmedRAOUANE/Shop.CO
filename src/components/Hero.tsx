import image from "@/assets/image1.png";
import Image from "next/image";

const Hero = () => {
    return (
        <div className='hero full-with viewport-height'>
            <div className="container full-height box">
                <div className="hero-text box column">
                    <h2 className="full-width text-start disable-guitters">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                    <div className="box full-width">
                        <button className='rounded'>Shop Now</button>
                    </div>

                    <div className="box center-x">
                        <div className='box column small-gap'>
                            <strong className="full-width text-center">200+</strong>
                            <small className='full-width'>International Brands</small>
                        </div>

                        <div className='box column small-gap'>
                            <strong className="full-width text-center">2,000+</strong>
                            <small className='full-width'>High-Quality Products</small>
                        </div>

                        <div className='box column small-gap'>
                            <strong className="full-width text-center">30,000+</strong>
                            <small className='full-width'>Happy Customers</small>
                        </div>
                    </div>
                </div>

                <div className="hero-image box">
                    <Image src={image} alt="" height={500} />
                </div>
            </div>
        </div>
    )
}

export default Hero