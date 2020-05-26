const STATUS = {
  open: 0,
  occupied: 1,
  hit: 2,
  reveal: 3,
};

const SHIP_TYPES = {
  carrier: 5,
  battleship: 4,
  destroyer: 3,
  submarine: 2,
  patrolboat: 1,
};

const CHARS_LABEL = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const NUMBERS_LABEL = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


export {
  STATUS,
  CHARS_LABEL,
  NUMBERS_LABEL,
  SHIP_TYPES,
};