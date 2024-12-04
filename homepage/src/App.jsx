import './App.css';

const App = () => {
    const specialities = [
        { name: "Endocrino", image: "/endocriono.png" },
        { name: "Ginecología", image: "/ginecologo.png" },
        { name: "Oftalmología", image: "/Oftalmologo.png" },
        { name: "Traumatología", image: "/tramatologia.png" },
        { name: "Oncología", image: "/oncologo.png" },
        { name: "Medicina Interna", image: "/medicoInterno.png" },
      ];
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <img src="logo_medical.png" alt="Logo" className="logo" />
        <button className="login-button">Login</button>
      </header>

      {/* Banner */}
      <div className="banner">
        <img
          src="image_23.png"
          className="banner-image"
        />
        <h1 className="banner-text">
          Explicación de <br /> funcionalidad de la web
        </h1>
      </div>

      {/* Specialities Section */}
      <section className="specialities">
        <h2 className="specialities-title">MEDICAL ESPECIALITIES</h2>
        <div className="specialities-grid">
          {specialities.map((speciality, index) => (
            <div className="speciality-card" key={index}>
              <img
                src={speciality.image}
                alt={speciality.name}
                className="speciality-image"
              />
              <p className="speciality-text">{speciality.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-top">
    <img src="/logo_medical.png" alt="Logo" className="footer-logo" />
    <div className="footer-info">
      <p>📞 988 725 255</p>
      <p>📍 Luis Morote 8, Las Palmas de Gran Canaria</p>
      <p>📧 hospital@medicare.com</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2023 MediCare - All Rights Verifique</p>
    <div className="footer-icons">
      <a href="#!" className="social-icon">🔗</a>
      <a href="#!" className="social-icon">📘</a>
      <a href="#!" className="social-icon">📸</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default App;
