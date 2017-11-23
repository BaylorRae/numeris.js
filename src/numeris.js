const MAP = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X'
};

const SORTED_KEYS = Object.keys(MAP).map(i => parseInt(i)).sort((x, y) => x < y);

export default class Numeris {

  toNumeral(number) {
    let result = '';

    while (number > 0) {
      const key = SORTED_KEYS.find(x => x <= number),
            letter = MAP[key];

      result += letter;
      number -= key;
    }

    return result;
  }

}
