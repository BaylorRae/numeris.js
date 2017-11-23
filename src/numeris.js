export default class Numeris {

  toNumeral(number) {
    if (number === 5)
      return 'V';

    return 'I'.repeat(number)
  }

}
