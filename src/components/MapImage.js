import planSegrais from "../assets/images/plan-segrais.png";

export default function MapImage() {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white text-center">
        Carte du secteur Segrais – 77185 LOGNES
      </div>
      <div className="card-body text-center">
        <img
          src={planSegrais}
          alt="Plan de distribution Segrais"
          className="img-fluid rounded"
           style={{ maxHeight: "600px", width: "100%" }}
        />
      </div>
    </div>
  );
}
