import "./Inspiration.scss";

import Photo from "@/app/components/Photo/Photo";

const Inspiration = () => {
  const photos = [
    {
        name:"Puppy",
      src: "/images/inspiration-puppy.png",
      width: 225,
      height: 175,
      alt: "sydney the dog as a puppy",
      className: "photo--left",
    },
    {
        name:"Older Puppy",
      src: "/images/inspiration-adult.png",
      width: 225,
      height: 175,
      alt: "sydney the dog as an adult",
      className: "photo--right",
    },
  ];
  return (
    <section className="inspiration">
      <h2 className="inspiration__header">Meet the Inspiration</h2>
      <div className="inspiration__container">
        <ul className="photo__list">
          {photos.map((photo, index) => {
            return (
              <li key={index}>
                <Photo photo={photo} />
              </li>
            );
          })}
        </ul>
        <div className="inspiration__content">
          <h4 className="inspiration__name">Sydney</h4>
          <p className="inspiration__text">
            Sydney’s lifestyle habits are not cheap, to support her lavish
            needs, her owner created Bark & Lens
          </p>
          <p className="inspiration__text">
            Sydney is a pampered pooch who won’t apologize for it. She demands
            constant homemade treats, massages and high-end toys. Additionally
            she requires handmade crocheted outfits once a month. Her owner
            happily obliges.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Inspiration;
