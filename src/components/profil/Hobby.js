const Hobby = ({ listeHobbies, categorie }) => {
  const data = listeHobbies.map((element) => {
    return <p>{element}</p>;
  });

  const elementtofind = listeHobbies.find((element) => element === "Basket");
  return (
    <div>
      <p>{categorie}</p>
      {data}
    </div>
  );
};

export default Hobby;
