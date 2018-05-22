import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Events from './events';
import { totalEventsSelector } from '../redux/selectors';

function mapStateToProps(state) {
  return {
    totalEvents: totalEventsSelector(state),
  };
}

class Container extends Component {
  static propTypes = {
    totalEvents: PropTypes.number,
  };

  state = {
    counterEvents: 3,
  };

  onClick = (e) => {
    e.preventDefault();

    this.setState({
      counterEvents: this.state.counterEvents + 2,
    });
  };

  render() {
    const { totalEvents } = this.props;

    return (
      <div className="container home-hero">
        <Events counterEvents={this.state.counterEvents} />
        {totalEvents > this.state.counterEvents && (
          <div className="show-all-events">
            <a href="#" onClick={this.onClick} className="btn extended w-inline-block">
              <div className="btn-wrap">
                <p className="text-button">Mostra tutti gli eventi</p>
              </div>
            </a>
          </div>
        )}
        <div className="about">
          <div className="about-cont">
            <div className="about-content">
              <div className="about-description">
                <h2 className="h5 text-white mb-lg40">
                  {`Cos'è il Collettivo
                Hack`}
                </h2>
                <p className="body1 text-white">
                  La nuova <span className="text-italic">digital community</span> siciliana<br />
                  <br />Il Collettivo Hack è un insieme di persone: professionisti, curiosi,
                  giovani, imprenditori, appassionati che hanno{' '}
                  <span className="text-weight-600">
                    un interesse comune per il mondo digitale
                  </span>{' '}
                  e che si ritrovano periodicamente off line, ma sempre unite nell’online.<br />
                  <br />E’ un network dove relazioni, scambi e condivisioni avvengono attraverso un
                  pensiero e una “mentalità pirata”, cioè di continua{' '}
                  <strong>esplorazione e approfondimento </strong>( da qui hacking e la nostra
                  estrapolazione del nome HACK),{' '}
                  <span className="text-weight-600">
                    per sviluppare un apprendimento e una conoscenza più ampia delle tecnologie
                    digitali.
                  </span>
                </p>
              </div>
              <div className="about-image">
                <img
                  src="img/cosa.svg"
                  className="image"
                  alt="illustrazione insieme di persone"
                  title="digital community illustration"
                />
              </div>
            </div>
            <div className="about-content reverse">
              <div className="about-description">
                <h3 className="h5 text-white mb-lg40">Come nasce il Colletivo Hack</h3>
                <p className="body1 text-white">
                  Nasce dall’interazione diretta di professionisti web, con diverse competenze e
                  passioni, unite fondamentalmente dalla volontà di{' '}
                  <span className="text-weight-600">
                    {`promuovere, incentivare e
                  rafforzare la cultura digitale, nel territorio ibleo.`}
                    <br />
                    <br />
                  </span>
                  <em>“Sentivamo il bisogno di porre in particolar modo l’</em>
                  <span>
                    <em className="text-weight-600">
                      attenzione sull’impatto della trasformazione e innovazione digitale nel nostro
                      territorio ibleo
                    </em>
                  </span>
                  <em>
                    {' '}
                    e soprattutto condividere visioni quotidiane e lavorative con chiunque
                    interessato a conoscere e apprezzare questo mondo.”
                  </em>
                  <br />
                  <br />
                  <em>&zwj;</em>
                </p>
              </div>
              <div className="about-image">
                <img
                  src="img/come.svg"
                  className="image"
                  alt="illustrazione uovo"
                  title="nasce Collettivo Hack"
                />
              </div>
            </div>
            <div className="partecipate-group">
              <div className="partecipate-image">
                <img title="diventare membro" alt="illustrazione porta" src="img/door.svg" />
              </div>
              <div className="partecipate-content">
                <h2 className="h5">Entra a far parte del Collettivo Hack</h2>
                <p className="body1 text-weight-600 mt-lg-8">
                  Per partecipare o sostenere la nostra attività puoi:
                </p>
                <ul className="unordered-list w-list-unstyled">
                  <li className="list-item">
                    <p className="body1 mr-lg-16 mr-sm-0 mb-sm-16">
                      <span role="img" aria-label="microfono">
                        🎤
                      </span>
                    </p>
                    <p className="body1">
                      <span className="text-weight-600">
                        Diventare a tutti gli effetti membro della community{' '}
                      </span>per proporre temi di discussione, fare lo speaker, organizzare
                      incontri, eventi, presentazioni e tanto altro.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="body1 mr-lg-16 mr-sm-0 mb-sm-16">
                      <span role="img" aria-label="persone">
                        👥
                      </span>
                    </p>
                    <p className="body1">
                      <span className="text-weight-600">Partecipare ad incontri e iniziative</span>{' '}
                      organizzate da noi.
                    </p>
                  </li>
                  <li className="list-item">
                    <span className="body1 mr-lg-16 mr-sm-0 mb-sm-16" role="img" aria-label="cuore">
                      ❤️
                    </span>
                    <p className="body1">
                      <span className="text-weight-600">Fare una donazione.</span> Se il tuo
                      contributo non può essere di tipo operativo ma condividi le finalità del
                      Collettivo Hack, puoi comunque contribuire economicamente al sostegno dei
                      costi di gestione e realizzazione degli eventi.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Container);
