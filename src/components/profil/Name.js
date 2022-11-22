const Name = ({ prenom, nom }) => {
  // Const = Déclaration de variable - Nom de la variable  = props (propriétés de la variable)
  return (
    <div>
      <p>Prénom : {prenom}</p>
      <p>Nom : {nom}</p>
    </div>
  );
};

export default Name;

// Composant React prêt à être importé dans une page
