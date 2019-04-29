import {FAIL, LOAD_HEROES, START, SUCCESS} from '../constans'
import {OrderedMap, Record} from 'immutable'

const DefaultReducerState = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: ''
});

export default (heroes = new DefaultReducerState(), action) => {
  const {type, payload} = action;
  function arrayToMap(arr) {
    return arr.reduce((acc, el) => acc.set(el.name, el), new OrderedMap({}))
  }
  switch (type) {
    case LOAD_HEROES + START:
      return heroes
        .set('loading', true);

    case LOAD_HEROES + SUCCESS:
      return heroes
        .set('entities', arrayToMap(payload.response))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_HEROES + FAIL:
      return heroes
          .set('error', "Something was wrong!")
          .set('loading', false)
          .set('loaded', true);

    default:
      return heroes
  }
}