import React, { useState } from "react";
import "./karriere.css";
import Noty from "noty";
import "noty/lib/noty.css";
import Heading from "../common/heading/Heading";
import "noty/lib/themes/mint.css";
import Header from "../common/header/Header";
import PhoneIcon from "@mui/icons-material/Phone";

import FaxIcon from "@mui/icons-material/Fax";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const ContactForm = () => {
  window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    Vorname: "",
    Nachname: "",
    Email: "",
    Telefonnummer: "",
    Postleitzahl: "",
    Addresse: "",
    geburtsdatum: "mm/dd/yyyy",
  });

  const [formErrors, setFormErrors] = useState({
    Vorname: false,
    Nachname: false,
    Email: false,
    Telefonnummer: false,
    Postleitzahl: false,
    Addresse: false,
    geburtsdatum: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset the error for the field when it is changed
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      // If there are validation errors, set the errors and return
      setFormErrors(errors);
      showNotification("error", "Bitte füllen sie alle Felder aus");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3300/send-email-karriere",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        showNotification("success", "Email sent successfully");
        // Optionally, reset the form after successful submission
        setFormData({
          Vorname: "",
          Nachname: "",
          Email: "",
          Telefonnummer: "",
          Postleitzahl: "",
          Addresse: "",
          geburtsdatum: "mm/dd/yyyy",
        });
      } else {
        showNotification(
          "error",
          "Ihre Addresse ist leider nicht im 30km umkreis"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("error", "Error sending email");
    }
  };

  const showNotification = (type, text) => {
    new Noty({
      type: type,
      text: text,
      timeout: 3000, // Duration for the notification
      progressBar: true,
    }).show();
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Get the first file
  };

  return (
    <>
      <Header />
      <section className="contacts pb-10 sm:px-16">
        <Heading
          subtitle="Karriere"
          title="Starte deine Karriere hier bei uns jetzt!"
        />
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.2377893700454!2d8.882915077185375!3d50.02563997151431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd14c17a35571b%3A0x61362c175aace52!2sLudwigstra%C3%9Fe%2025%2C%2063110%20Rodgau!5e0!3m2!1sde!2sde!4v1700414765599!5m2!1sde!2sde"
              title="Google Maps Location"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Bewirb dich jetzt!</h1>
            <p>Unser Team freut sich schon auf dich!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-5 ">
              <div className="">
                <LocationOnIcon />
                <p>Ludwigstraße 25, 63110 Rodgau</p>
              </div>
              <div>
                <PhoneIcon />
                <p>061067797307</p>
                <FaxIcon />
                <p>061067797298</p>
              </div>
              <div>
                {" "}
                <EmailIcon />
                <p>Info@pflegedienst-malik.de</p>
                <p>Bewerbung@pflegedienst-malik.de</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Vorname"
                placeholder="Vorname"
                onChange={handleChange}
                value={formData.Vorname}
              />
              {formErrors.Vorname && (
                <p className="error-message">Geben sie ihren Vornamen an</p>
              )}

              <input
                type="text"
                name="Nachname"
                placeholder="Nachname"
                onChange={handleChange}
                value={formData.Nachname}
              />
              {formErrors.Nachname && (
                <p className="error-message">Geben sie ihren Nachnamen an</p>
              )}

              <input
                type="email"
                name="Email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.Email}
              />
              {formErrors.Email && (
                <p className="error-message">Geben sie ihre Email an</p>
              )}

              <input
                type="text"
                name="Telefonnummer"
                placeholder="Telefonnummer"
                onChange={handleChange}
                value={formData.Telefonnummer}
              />
              {formErrors.Telefonnummer && (
                <p className="error-message">Geben sie ihre Telefonnummer an</p>
              )}

              <input
                type="text"
                name="Postleitzahl"
                placeholder="Postleitzahl"
                onChange={handleChange}
                value={formData.Postleitzahl}
              />
              {formErrors.Postleitzahl && (
                <p className="error-message">
                  Geben sie ihre Postleitzahl ein an
                </p>
              )}

              <input
                type="text"
                name="Addresse"
                placeholder="Addresse"
                onChange={handleChange}
                value={formData.Addresse}
              />
              {formErrors.Addresse && (
                <p className="error-message">Geben sie ihre Addresse an</p>
              )}

              <input
                type="text"
                name="Geburtsdatum"
                placeholder="Geburtsdatum"
                onChange={handleChange}
                value={formData.geburtsdatum}
                // className="bg-white text-gray-600"
              />
              {formErrors.geburtsdatum && (
                <p className="error-message">Geben sie ihr Geburtsdatum an</p>
              )}

              <button type="submit" className="btn btn-error text-white">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
