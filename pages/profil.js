import Name from "../src/components/profil/Name";
import Age from "../src/components/profil/Age";
import Hobbies from "../src/components/profil/Hobbies";
const profil = {
  prenom: "Ryan",
  nom: "Pina-silasse",
  age: "22",
  hobbies: {
    sports: ["Basket", "Muscu", "Judo"],
    mangas: ["One Piece", "Bleach", "JoJo"],
    food: ["riz", "poulet"],
  },
};
const Profil = () => {
  return (
    <div>
      <h1>Mon profil</h1>
      <Name prenom={profil.prenom} nom={profil.nom} />
      <Age age={profil.age} />
      <Hobbies
        sports={profil.hobbies.sports}
        mangas={profil.hobbies.mangas}
        food={profil.hobbies.food}
      />
    </div>
  );
};
export default Profil;
