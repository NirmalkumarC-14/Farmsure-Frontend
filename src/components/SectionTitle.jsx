function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title text-center">

      <h2 className="title">
        {title}
      </h2>

      {subtitle && (
        <p className="subtitle">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;
