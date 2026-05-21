export default function TestimonialCard({ item }) {
  const [name, place, title, text] = item;
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__head">
        <div className="avatar" aria-hidden="true" />
        <div>
          <h3>{name}</h3>
          <p>{place}</p>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
