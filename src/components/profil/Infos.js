import datas from "./Datas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Infos = () => {
  return (
    <div>
      <h2 className="text-5xl font-sans font-bold text-yellow-400 p-12 text-center underline-offset-8">
        5 infos vite fait, bien fait !
      </h2>

      <div className="grid grid-cols-2 gap-8 bg-blue-700 p-8 rounded-xl">
        {datas && // Vérification de l'existence de la variable et de sa longueur
          datas.length > 0 &&
          datas.map((element, index) => {
            console.log(index + 1);
            //Puis parcours du tableau

            return (
              <div
                key={index}
                className="tableau-infos bg-white rounded-xl p-4"
              >
                <h2 className="tableau-title text-2xl font-bold">
                  {element.title}
                </h2>
                <p className="tableau-category text-x ">{element.category}</p>
                <button className="numero">{index + 1}</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Infos;
