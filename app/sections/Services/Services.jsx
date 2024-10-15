import './Services.scss'
import Service from '@/app/components/Service/Service';
const Services = () => {
  const services = [
    {
      price:100,
      type:"basic",
      perks:[
        "30 minutes",
        "1 puppy photo",
        "1 family photo"
      ]
    },
    {
      price:160,
      type:"recommended",
      perks:[
        "1 hour",
        "2 puppy photos",
        "2 family photos"
      ]
    },
    {
      price:200,
      type:"premium",
      perks:[
        "2 hours",
        "3 puppy photos",
        "3 family photos"
      ]
    }
  ]
  return (
    <section className="services" id="services">
      <h2 className='services__header'>Photo Packages</h2>
      <p className="services__text">
        All packages include an edited photo of you and another one of you and
        your dog. I use industry standard editing software to bring out you and
        your pups best features.
      </p>
      <ul className="services__list">
        {services.map((service,index)=> {
          return(
          <li key={index}>
            <Service service={service}/>
          </li>
          )
        })}
      </ul>
    </section>
  );
};
export default Services