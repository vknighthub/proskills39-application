import mouse from '@/assets/images/svg/mouse.svg'
import Image from 'next/image'
import Link from 'next/link'
import background_academy from '@/assets/images/service/background-academy.png'
import academy from '@/assets/images/service/academy.png'
import vector_academy from '@/assets/images/service/vector-academy.png'

export const HomeAcademy = () => {
    return (
        <div className="container-academy">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Academy on<span className="gradient-text"> Proskills39</span>
                </div>
            </div>
            <div className="background-academy">
                <div className="featured-box-wrapper grid-3-columns">                
                    <div className="component-acedemy" >
                        <div className="overlap-group">
                            <Image className="vector" alt="Vector" src={vector_academy} />
                            <Image className="img" alt="Vector" src={background_academy} />
                            <Image className="chuot-punk" alt="Chuot punk" src={academy} />
                            <p className="mother-care-service">Mother care service after giving birth</p>
                        </div>
                    </div>

                    <div className="component-acedemy" >
                        <div className="overlap-group">
                            <Image className="vector" alt="Vector" src={vector_academy} />
                            <Image className="img" alt="Vector" src={background_academy} />
                            <Image className="chuot-punk" alt="Chuot punk" src={academy} />
                            <p className="mother-care-service">Mother care service after giving birth</p>
                        </div>
                    </div>

                    <div className="component-acedemy" >
                        <div className="overlap-group">
                            <Image className="vector" alt="Vector" src={vector_academy} />
                            <Image className="img" alt="Vector" src={background_academy} />
                            <Image className="chuot-punk" alt="Chuot punk" src={academy} />
                            <p className="mother-care-service">Mother care service after giving birth</p>
                        </div>
                    </div>

                

                </div>
            </div>
        </div>
    )
}
