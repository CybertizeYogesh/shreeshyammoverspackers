import Button from "./Button";

export default function QuoteForm({ compact = false }) {
  return (
    <form className="quote-form" action="#" aria-label="Get a free quote form">
      <h2>{compact ? "Feedback Form" : "Get a Free Quote"}</h2>
      <div className="quote-form__grid">
        <label className="field">
          <span className="sr-only">Your Name</span>
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label className="field">
          <span className="sr-only">Phone Number</span>
          <input type="tel" name="phone" placeholder="Phone Number" required />
        </label>
        <label className="field">
          <span className="sr-only">Your Email</span>
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        {!compact ? (
          <>
            <label className="field field-small">
              <span className="sr-only">From City</span>
              <input type="text" name="from" placeholder="From City" required />
            </label>
            <label className="field field-small">
              <span className="sr-only">To City</span>
              <input type="text" name="to" placeholder="To City" required />
            </label>
            <div className="field field-small"><div className="captcha-clone">reCAPTCHA</div></div>
            <div className="field field-small"><Button>submit Now</Button></div>
          </>
        ) : (
          <>
            <label className="field">
              <span className="sr-only">Message</span>
              <textarea name="message" placeholder="Message" />
            </label>
            <div className="field"><Button>Submit Now</Button></div>
          </>
        )}
      </div>
    </form>
  );
}
