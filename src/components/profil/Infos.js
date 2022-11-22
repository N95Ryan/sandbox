import datas from "./Datas";

const Infos = () => {
  return (
    <div>
      <h2 className="text-4xl font-sans font-bold p-14 text-center">
        5 infos vite fait, bien fait !
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {datas && // Vérification de l'existence de la variable et de sa longueur
          datas.length > 0 &&
          datas.map((element, index) => {
            //Puis parcours du tableau

            return (
              <div key={index} className="bg-white rounded-xl p-4">
                <h2 className="text-2xl text-black">{element.title}</h2>
                <p className="text-black">{element.category}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Infos;
