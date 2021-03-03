import "./haeder.css";
const artsList = [
  { title: "Les arts de terre", link: "https://www.facebook.com/" },
  { title: "Les arts de cuir", link: "https://www.linkedin.com/" },
  { title: "Les arts du bois", link: "https://www.instagram.com/" },
  { title: "Les arts du textiles", link: "https://twitter.com/" },
  { title: "Les arts du metal", link: "https://twitter.com/" },
  { title: "Les arts de la bijouterie", link: "https://twitter.com/" },
  { title: "Les arts du bien-être", link: "https://twitter.com/" },
  { title: "Les arts de la vannerie", link: "https://twitter.com/" },
  { title: "Les autres arts", link: "https://twitter.com/" },
];

const categoriesList = [
  { title: "Les arts de terre", link: "https://www.facebook.com/" },
  { title: "Les arts de cuir", link: "https://www.linkedin.com/" },
  { title: "Les arts du bois", link: "https://www.instagram.com/" },
  { title: "Les arts du textiles", link: "https://twitter.com/" },
  { title: "Les arts du metal", link: "https://twitter.com/" },
  { title: "Les arts de la bijouterie", link: "https://twitter.com/" },
  { title: "Les arts du bien-être", link: "https://twitter.com/" },
  { title: "Les arts de la vannerie", link: "https://twitter.com/" },
  { title: "Les autres arts", link: "https://twitter.com/" },
];
function Haeder() {
  return (
    // <!-- Header -->
    <header id="home" className="header">
      <nav className="nav">
        <div className="container nav-content">
          {/* <div className="nav-right"> */}
          <div className="logo">
            <a href="/">
              <h1>M-Shop</h1>
            </a>
          </div>
          <div className="nav-search">
            <input type="text" placeholder="Rechercher" />
            <button type="submit">
              <i class="bx bx-search-alt"></i>
            </button>
          </div>
          {/* </div> */}

          <ul className="nav-list">
            {/* <li className="nav-item">
              <a href="/account" className="nav-button">
                <i class="bx bx-help-circle"></i>
                Contactez-nous
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/account" className="nav-button">
                <i className="bx bx-user"></i>
                Connexion
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-button">
                <i class="bx bx-shopping-bag"></i>
                Mon Panier
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="art-list">
        {artsList.map((art, i) => (
          <li className="nav-item" key={i}>
            <a className="art-item" href={`${art.link}`}>
              {art.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="row">
        <div className="categories-container">
          <div className="categories-title">
            <h3>Acheter par catégorie</h3>
          </div>
          <ul className="categories-list">
            {categoriesList.map((categorie, i) => (
              <li key={i}>
                <a className="categories-link" href={`${categorie.link}`}>
                  {categorie.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="slideshow-container">
          <div className="slide-item">
            <div className="image-bg"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Haeder;
