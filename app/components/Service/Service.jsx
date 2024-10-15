'use client'
import Image from "next/image";
import './Service.scss';

const Service = ({service}) => {
    
    return (
        <article className={`service service--${service.type}`}>
            <div className="service__price">${service.price}</div>
                <h3 className="service__type">{service.type}</h3>
            <div className="service__info">
                <ul className="service__list">
                    {service.perks.map((perk,index)=>{
                        return(
                            <li key={index} className="service__perk">
                                <Image
                                    src="/icons/paw.svg"
                                    width={25}
                                    height={25}
                                    alt="a paw to indicate a bullet point"
                                />
                                <p className="service__text">{perk}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </article>
    )
}
export default Service