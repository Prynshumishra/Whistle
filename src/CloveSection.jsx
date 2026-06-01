import cloveImg from "./assets/Clove-Dental.png";

function CloveSection() {
  return (
    <section className="clove-section">
      <div className="clove-card">
        <p className="clove-heading">
          Book Free Orthodontist Consult at a Clove Dental Clinic. 450+ Clinics
          near you{" "}
        </p>
        <div className="clove-right">
          <img src={cloveImg} alt="Clove Dental" className="clove-logo" />
          <button className="clove-find-btn">
            Find Clinic
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CloveSection;
