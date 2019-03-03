export const generateRandomText = () => {
  const rollNumber = Math.floor(Math.random() * 10);

  if (3 > rollNumber) {
    return 'TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ';
  }

  if (6 > rollNumber) {
    return 'DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  DIMADIMADIMADIMA  ';
  }

  return 'dsakjshkjhasjkhdajks dajhsjsajkhlsajjas wugqyiuwhe dsakjshkjhasjkhdajks dajhsjsajkhlsajjas wugqyiuwhedsakjshkjhasjkhdajks dajhsjsajkhlsajjas wugqyiuwhedsakjshkjhasjkhdajks dajhsjsajkhlsajjas wugqyiuwhedsakjshkjhasjkhdajks dajhsjsajkhlsajjas wugqyiuwhedsakjshkjhasjkhdajks dajhsjsajkhlsajjas wugqyiuwhe';
};
