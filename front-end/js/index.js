
// $---Appel a l'API grace à fetch---$
    fetch('http://localhost:3000/api/cameras')
    // $---1 then renvoie une Promesse Json---$
    .then(reponse => reponse.json())

    // $---accèdé au data Json---$
    .then(data => addCards(data))

    // $---catch déclare l'erreur s'il y'en à une---$
    .catch((erreur) => {
      console.log("erreur : " + erreur)
      alert("Veuillez nous exuser les produits ne sont pas disponible pour le moment.")
  });

  // $---Fonction pour la création des cards---$
  function addCards(data) {

    // $---boucle pour afficher chaque produit contenue dans l'API---$
    for (produit of data) {

      // $---recupère l'élément liste dans le HTML---$
      const card = document.getElementById("liste")

      const price = convertPrice(produit.price);

      // $---insérsion du HTML dans le document---$
  card.innerHTML += `
        <section class="card">
          <a href="./front-end/page/produits.html?_id=${produit._id}"><img src="${produit.imageUrl}" class="image" alt="${produit. name}"></a>
          <div class="title" >
              <h2 class="card-title">${produit.name}</h2>
          </div>
          <p class="description">${produit.description}</p>
          <div class="price">
              <h3 class="card-price">${price}</h3>
          </div>
          <button class="btn">
              <a href="./front-end/page/produits.html?_id=${produit._id}"><b>En savoir plus</b></a>
          </button>
        </section>
`
    }
  }
  