import "./Testimonials.scss";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials__header">Testimonials</h2>
      <div className="testimonial__container">
        <div className="chevron__container">
          <Image
            src="/icons/chevron.svg"
            height={20}
            width={10}
            alt="arrow to incate testimonial slider"
            className="chevron--left"
          />
        </div>
        <article className="testimonial">
          <div className="author-container">
            <h5 className="author">Victorie F</h5>
            <div className="testimonial__rating">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/icons/paw-brown.svg"
                  alt="paw to indicate rating out of 5"
                  width={20}
                  height={20}
                  className="testimonial__star"
                />
              ))}
            </div>
            <div className="testimonial__text-container">
              <Image
                src="/icons/quote.svg"
                alt="a quote icon"
                width={25}
                height={15}
                className="testimonial__quote"
              />
              <p className="testimonial__text">
                I had an amazing experience. I got the best photos of my dog
                Delilah look at how adorable she is, I already printed 20 copies
                for me
              </p>
              <Image
                src="/icons/quote.svg"
                alt="a quote icon"
                width={25}
                height={15}
                className="testimonial__quote--reverse"
              />
            </div>
          </div>
          <div className="dog-container">
            <h5 className="dog__name">Delilah's Bio</h5>
            <p className="dog__bio">
              I am spoiled rotten. I’m a pretty princess who eats more than any
              living thing I know. I love to lounge in the sun. I’m an
              incredibly sweet gentle giant who hates to share.
            </p>
          </div>
          <Image
            src="/images/testimonial-delilah.png"
            height={420}
            width={300}
            alt="portrait picture of delilah the dog"
            className="dog__image"
          />
        </article>
        <div className="chevron__container">
          <Image
            src="/icons/chevron.svg"
            height={20}
            width={10}
            alt="arrow to incate testimonial slider"
            className="chevron--right"
          />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
