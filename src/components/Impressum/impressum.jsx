import React from "react";
import "./impressum.css"; // This assumes you have a corresponding CSS file
import Header from "../common/header/Header";

const Impressum = () => (
  window.scrollTo(0, 0),
  (
    <div>
      <Header />
      <div className="impressum">
        <h2>Impressum</h2>
        <section className="section-content">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Pflege- und Betreuungsdienst Malik GmbH
            <br />
            Fahrstraße 11
            <br />
            64832 Babenhausen
          </p>
          <p>
            Handelsregister: HRB 101659
            <br />
            Registergericht: Amtsgericht Darmstadt
          </p>
          <p>
            Vertreten durch:
            <br />
            Feroza Malik
            <br />
            Taimur Malik
          </p>
        </section>
        <section className="section-content">
          <h3>Kontakt</h3>
          <p>
            Telefon: 06106 7797 307
            <br />
            Telefax: 06106 7797 298
            <br />
            E-Mail: datenschutz@pflegedienst-malik.de
          </p>
        </section>
        <section className="section-content">
          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            folgt
          </p>
        </section>
        <section className="section-content">
          <h3>EU-Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/">
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>
        <section className="section-content">
          <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
        <p className="source">
          Quelle:{" "}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </div>
    </div>
  )
);

export default Impressum;
