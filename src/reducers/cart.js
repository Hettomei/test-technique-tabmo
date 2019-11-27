/*
 * State will look like
    {
      "bulbasaur": 3,
      "pikachu": 10,
    }
 */

export function cart(state = {}, action) {
  switch (action.type) {
    case "add-pokemon": {
      const count = state[action.pokename] || 0;
      return {
        ...state,
        [action.pokename]: count + 1
      };
    }
    case "remove-pokemon": {
      const count = state[action.pokename] || 0;
      if (count < 1) {
        return state;
      }
      return {
        ...state,
        [action.pokename]: count - 1
      };
    }
    default:
      return state;
  }
}
