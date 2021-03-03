import "./haeder.css";

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
            <li className="nav-item">
              <a href="/contact" className="nav-button">
                <i class="bx bx-help-circle"></i>
                Contactez-nous
              </a>
            </li>
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
      <hr />
    </header>
  );
}

export default Haeder;
