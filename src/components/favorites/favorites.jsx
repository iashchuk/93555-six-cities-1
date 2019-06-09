import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import withPrivateRoute from "../../hocs/with-private/with-private.js";
import SvgSprite from "../svg-sprite/svg-sprite.jsx";
import FavoritesCard from "../favorites-card/favorites-card.jsx";

const Favorites = ({ email, avatarUrl, isAuthenticated }) => {
  return (
    <>
      <SvgSprite />
      <Header
        email={email}
        avatarUrl={avatarUrl}
        isAuthenticated={isAuthenticated}
      />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesCard />

                  <FavoritesCard />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesCard />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

Favorites.propTypes = {
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

export default withPrivateRoute(Favorites);
