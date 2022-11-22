import Hobby from "./Hobby";
const ListeHobbies = ({ sports, mangas, food }) => {
  return (
    <div>
      <p>Ceci est ma liste de hobbies :</p>
      <Hobby categorie={"Sports"} listeHobbies={sports} />
      <Hobby categorie={"Mangas"} listeHobbies={mangas} />
      <Hobby categorie={"Food"} listeHobbies={food} />
    </div>
  );
};

export default ListeHobbies;
