import React from "react";
import { Link } from "react-router-dom";
import '../admin/pages/Propertise'
const LandingPage = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", color: "#222" }}>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/32870/pexels-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          position: "relative"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "10px"
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
            Find Your Dream Home
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "25px" }}>
            Discover luxury apartments, family homes, and investment properties across Nigeria.
          </p>
          <Link
            to="/propertise"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 25px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Browse Properties
          </Link>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f8f9fa" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2rem" }}>
          Featured Properties
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          {/* Property Card 1 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}
          >
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
              alt="Property"
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3>3-Bedroom Duplex in Lekki</h3>
              <p style={{ color: "#555" }}>
                Elegant and spacious duplex with a private balcony and fitted kitchen.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px"
                }}
              >
                <strong>₦85,000,000</strong>
              </div>
            </div>
          </div>

        

          {/* Property Card 3 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}
          >
            <img
              src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg"
              alt="Property"
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3>Beachfront Villa in Victoria Island</h3>
              <p style={{ color: "#555" }}>
                Enjoy luxury and tranquility with stunning ocean views and a rooftop terrace.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px"
                }}
              >
                <strong>₦1,200,000,000</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Looking to Buy or Sell?</h2>
        <p style={{ marginBottom: "25px", fontSize: "1.1rem" }}>
          Contact our agents today to find your perfect property or list your own.
        </p>
        <Link
          to="/contact"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "12px 25px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Contact Us
        </Link>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#111",
          color: "#ccc",
          textAlign: "center",
          padding: "20px"
        }}
      >
        © {new Date().getFullYear()} DreamHomes Realty. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
