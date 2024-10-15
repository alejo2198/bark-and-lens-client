import './Services.scss'
import Service from '@/app/components/Service/Service';
const Services = () => {
  const services = [
    {
      price:100,
      type:"basic",
      perks:[
        "30 minutes",
        "1 portrait shot of your lovely pup",
        "1 portrait shot of you/family with your pup"
      ]
    },
    {
      price:160,
      type:"recommended",
      perks:[
        "1 hour",
        "2 portrait shot of your lovely pup",
        "2 portrait shot of you/family with your pup"
      ]
    },
    {
      price:200,
      type:"premium",
      perks:[
        "2 hours",
        "3 portrait shot of your lovely pup",
        "3 portrait shot of you/family with your pup"
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