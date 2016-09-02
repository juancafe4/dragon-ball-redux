export default function dragonballReducers(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_CHARACTERS': 
      return action.payload.characters;

    default:
      return state;
  }
}