import React, { useState } from "react";
import DateButtons from "./DateButtons";

const DateExo = () => {
  const [jour, setDate] = React.useState(new Date());

  const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const addYear = () => {
    const dateWithOneDay = jour.setFullYear(jour.getFullYear() + 1);
    const dateUpdated = new Date(dateWithOneDay);
    setDate(dateUpdated);
  };

  const removeYear = () => {
    const dateWithOneDay = jour.setFullYear(jour.getFullYear() - 1);
    const dateUpdated = new Date(dateWithOneDay);
    setDate(dateUpdated);
  };

  const addDay = () => {
    const dateWithOneDay = jour.setDate(jour.getDate() + 1);
    const dateUpdated = new Date(dateWithOneDay);
    setDate(dateUpdated);
  };

  const removeDay = () => {
    const dateWithOneDay = jour.setDate(jour.getDate() - 1);
    const dateUpdated = new Date(dateWithOneDay);
    setDate(dateUpdated);
  };

  return (
    <div>
      <h2 className="Date-titre text-2xl font-light p-6">{`Aujourd'hui, nous sommes le ${jour.getDate()} ${
        mois[jour.getMonth()]
      } ${jour.getFullYear()}.`}</h2>
      <DateButtons
        addYear={addYear}
        removeYear={removeYear}
        addDay={addDay}
        removeDay={removeDay}
      />
    </div>
  );
};
export default DateExo;
