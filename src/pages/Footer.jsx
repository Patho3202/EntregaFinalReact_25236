import React from 'react'

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#b22222",
        padding: "20px 10px",
        textAlign: "center",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
        marginTop: "auto",   
      }}
    >
     

      <p style={{ margin: "5px 0", fontSize: "0.95rem" }}>
        © 2025 - Mi Aplicación React
      </p>

      <p style={{ margin: "0", fontSize: "0.85rem", opacity: 0.9 }}>
        Desarrollado por: <strong>@patorahal</strong>
      </p>
    </footer>
  )
}

export default Footer