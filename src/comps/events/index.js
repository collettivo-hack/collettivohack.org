import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import Card from './card';
import { start } from '../../redux/actions';
import { eventsOrderedSelector } from '../../redux/selectors';

function mapStateToProps(state, props) {
  return {
    events: eventsOrderedSelector(state, props),
  };
}

class Events extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    events: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      cover: PropTypes.string,
      url: PropTypes.string,
      date: PropTypes.instanceOf(Moment),
    })),
  };

  componentDidMount() {
    this.props.dispatch(start());
  }

  render() {
    const { events } = this.props;

    return (
      <div className="event">
        <div className="card-container">
          <div className="card">
            <div className="card-cont intro">
              <div className="event-description">
                <div className="div-block-7">
                  <h2 className="h6 mb-lg-16">Eventi digitali da non perdere</h2>
                  <p className="body1">
                    Collettivo Hack organizza{' '}
                    <span className="text-weight-600">
                      {`eventi, workshop, talk e altro, incentrati sui temi del digitale e
                      dell'innovazione, nel territorio Ibleo.`}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {events.map(event => <Card key={event.key} payload={event} />)}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Events);
