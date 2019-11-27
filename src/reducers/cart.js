/*
 * State will save price
 * Easier when same pokemon has different price
 * (let say, they can have different xp and so cost more)
    {
      "bulbasaur": [30, 30],
      "pikachu": [],
    }
 */

export function cart(state = {}, action) {
  switch (action.type) {
    case "add-pokemon": {
      const { name, price } = action.pokemon;
      const prices = (state[name] || []).concat(price);
      return {
        ...state,
        [name]: prices
      };
    }
    case "remove-pokemon": {
      // It only works because every pokemon as same price
      const { name } = action.pokemon;
      const prices = (state[name] || []).slice(1);
      return {
        ...state,
        [name]: prices
      };
    }
    default:
      return state;
  }
}
