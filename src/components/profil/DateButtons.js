import React, { Children } from "react";

function DateButtons({ addYear, removeYear, addDay, removeDay }) {
  const Buttons = {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  };

  const Button1Style = {
    borderRadius: "14px",
    borderStyle: "none",
    padding: "18px",
    backgroundColor: "#0066cc",
    cursor: "pointer",
    outline: "none",
    fontSize: "14px",
    boxShadow: "0 4px #0f0f0a",
    textAlign: "center",
  };

  const Button2Style = {
    borderRadius: "14px",
    borderStyle: "none",
    padding: "18px",
    color: "black",
    backgroundColor: "#ffcc00",
    cursor: "pointer",
    outline: "none",
    fontSize: "14px",
    boxShadow: "0 4px #0f0f0a",
    textAlign: "center",
  };

  const Button3Style = {
    borderRadius: "14px",
    borderStyle: "none",
    padding: "18px",
    backgroundColor: "#009933",
    cursor: "pointer",
    outline: "none",
    fontSize: "14px",
    boxShadow: "0 4px #0f0f0a",
    textAlign: "center",
  };

  const Button4Style = {
    borderRadius: "14px",
    borderStyle: "none",
    padding: "18px",
    backgroundColor: "#cc0000",
    cursor: "pointer",
    outline: "none",
    fontSize: "14px",
    boxShadow: "0 4px #0f0f0a",
    textAlign: "center",
  };

  return (
    <div style={Buttons}>
      <input
        type="button"
        className="Bouton-1"
        style={Button1Style}
        onClick={addYear}
        value="Ajouter une année"
      />
      <input
        type="button"
        className="Bouton-2"
        style={Button2Style}
        onClick={removeYear}
        value="Retirer une année"
      />
      <input
        type="button"
        className="Bouton-3"
        style={Button3Style}
        onClick={addDay}
        value="Ajouter une journée"
      />
      <input
        type="button"
        className="Bouton-4"
        style={Button4Style}
        onClick={removeDay}
        value="Retirer une journée"
      />
    </div>
  );
}
export default DateButtons;
