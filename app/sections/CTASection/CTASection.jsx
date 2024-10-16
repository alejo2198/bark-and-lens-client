import "./CTASection.scss";
import Button from "@/app/components/UI/Button/Button";
const CTASection = () => {
  return (
    <section className="cta" id="cta">
      <div className="overlay"></div>
      <div className="cta__content">
        <h2 className="cta__header">Create an Account</h2>
        <p className="cta__text">
          Please sign in to book your appointment and enjoy a personalized
          experience!
        </p>
        <div className="buttons">
          <Button variant="signup" text="Sign Up" />
          <Button variant="login" text="Log In" />
        </div>
      </div>
    </section>
  );
};
export default CTASection;
