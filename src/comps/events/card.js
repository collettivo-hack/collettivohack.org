import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';

function mapStateToProps(state) {
  return {
    categories: state.categories.payload,
    formats: state.formats.payload,
  };
}

const propTypes = {
  payload: PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.instanceOf(Moment),
  }),
  categories: PropTypes.shape({
    name: PropTypes.string,
  }),
  formats: PropTypes.shape({
    name: PropTypes.string,
  }),
};

const Card = ({ payload, categories, formats }) => (
  <div className="card">
    <div className="card-cont">
      <div className="event-image">
        <img alt="cover evento" src={payload.cover} />
      </div>
      <div className="event-description">
        <div className="event-date-block w-hidden-tiny">
          <p className="caption text-center text-weight-600">{payload.date.format('MMM')}</p>
          <p className="h6 text-center">{payload.date.format('D')}</p>
        </div>
        <div className="event-info">
          <div className="title-event-cont">
            <p className="body1 text-weight-600">{payload.title}</p>
          </div>
          <p className="body2 height-72-overflow">{payload.description}</p>
          <div className="event-category-group">
            {!!categories[payload.category] && (
              <p className="overline mr-lg-8 text-weight-600">
                {categories[payload.category].name}
              </p>
            )}
            {!!formats[payload.format] && (
              <p className="overline text-weight-600">{formats[payload.format].name}</p>
            )}
          </div>
          <a
            href={payload.url}
            rel="noopener noreferrer"
            target="_blank"
            className="btn secondary w-inline-block"
          >
            <div className="btn-wrap">
              <p className="text-button">Prendi il biglietto</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = propTypes;

export default connect(mapStateToProps)(Card);
