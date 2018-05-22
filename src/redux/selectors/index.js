import { createSelector } from 'reselect';
import moment from 'moment';
import 'moment/locale/it';

moment.locale('it');
const eventsSelector = state => state.events.payload;

// Selector che converte in array gli eventi
const eventsArraySelector = createSelector(
  eventsSelector,
  payload =>
    (payload
      ? Object.keys(payload).map(key => ({
        key,
        title: payload[key].name.text,
        description: payload[key].description ? payload[key].description.text : '',
        url: payload[key].url,
        date: moment(payload[key].start.local),
        category: payload[key].category_id,
        format: payload[key].format_id,
        cover: payload[key].logo ? payload[key].logo.original.url : '',
      }))
      : []),
);

export const eventsOrderedSelector = createSelector(
  eventsArraySelector,
  (_, props) => props.counterEvents,
  (payload, counter) => payload.sort((a, b) => a.date.isBefore(b.date)).slice(0, counter),
);

export const totalEventsSelector = createSelector(eventsArraySelector, payload => payload.length);
