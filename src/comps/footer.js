import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="footer div-block-21">
    <div className="footer-quote">
      <div className="footer-quote-cont">
        <p className="body1">
          <em>
            “Mettersi insieme è un inizio, rimanere insieme è un progresso, lavorare insieme un
            successo.”
          </em>{' '}
          <strong>HENRY FORD</strong>
        </p>
      </div>
    </div>
    <div className="footer-cont">
      <div className="footer-logo">
        <a href="/" className="w-inline-block w--current">
          <img src="img/hack-logo.svg" className="hack-logo" alt="logo collettivo hack" />
        </a>
      </div>
      <div className="footer-content">
        <div className="footer-row border-bottom-1">
          <div className="footer-col-1">
            <h4 className="body2">Facciamo crescere la community?</h4>
            <Link
              to="/codice-condotta"
              className="btn small secondary mt-lg-8 w-inline-block w--current"
            >
              <div className="btn-wrap">
                <p className="text-button">Codice di condotta</p>
              </div>
            </Link>
          </div>
          <div className="footer-col-2">
            <a
              href="https://www.facebook.com/collettivohack/"
              className="link-block cloud w-inline-block"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="img/facebook.svg" width="48" className="mr-lg-8" alt="facebook icon" />
              <p className="text-button">Seguici su Facebook</p>
            </a>
            <a
              href="https://slackin-dxseeqlwwn.now.sh/"
              rel="noopener noreferrer"
              target="_blank"
              className="link-block cloud w-inline-block"
            >
              <img src="img/slack.svg" width="48" className="mr-lg-8" alt="slack icon" />
              <p className="text-button">Iscriviti al canale Slack</p>
            </a>
          </div>
        </div>
        <div className="footer-row border-bottom-1">
          <div className="footer-col-1">
            <h5 className="body2">Entra in contatto con noi</h5>
          </div>
          <div className="footer-col-2 align-center">
            <a
              href="mailto:info@collettivohack.org"
              className="link-block mr-lg-16 mt-md-16 w-inline-block"
            >
              <img src="img/email.png" width="48" className="mr-lg-8" alt="email icon" />
              <p className="text-button">info@collettivohack.org</p>
            </a>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-col-1">
            <p className="subtitle2 mb-lg-8">Sponsor</p>
            <div className="sponsor-group mt-md-16">
              <a
                href="https://bolket.com/"
                target="_blank"
                className="mr-lg-24 mr-md-0 w-inline-block"
                rel="noopener noreferrer"
              >
                <img src="img/bolket-logo.svg" width="100" alt="bolket logo" />
              </a>
              <a
                href="http://futuring.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-inline-block"
              >
                <img src="img/futuring-logo.svg" width="100" alt="futuring logo" />
              </a>
            </div>
          </div>
          <div className="footer-col-2">
            <a
              href="https://paypal.me/pools/c/84rYN728jo"
              target="_blank"
              rel="noopener noreferrer"
              className="link-block cloud w-inline-block"
            >
              <img src="img/paypal.svg" width="48" className="mr-lg-8" alt="paypal icon" />
              <p className="text-button">Fai una donazione con Paypal</p>
            </a>
          </div>
          <div className="border-bottom-1" />
        </div>
      </div>
    </div>
    <div className="div-block-20">
      <p className="caption">
        Handcrafted with{' '}
        <span role="img" aria-label="love">
          ️❤️
        </span>
      </p>
    </div>
  </div>
);
