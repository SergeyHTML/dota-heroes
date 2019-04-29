import {LOAD_HEROES, START, SUCCESS, FAIL} from '../constans'

export function loadHeroes() {
  return (dispatch) => {
    dispatch({
      type: LOAD_HEROES + START,
    });

    fetch(`https://api.opendota.com/api/heroStats`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch({
        type: LOAD_HEROES + SUCCESS,
        payload: {response}
      }))
      .catch(() => {
        dispatch({
          type: LOAD_HEROES + FAIL,
        })
      });
  }
}
