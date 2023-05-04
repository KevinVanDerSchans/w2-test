const checkIfTextContainsAllVowels = (word) => {
  const allVoewls = ['a', 'e', 'i', 'o', 'u'];

  return allVoewls.every((index) => 
  word.includes(index)
  );
};

checkIfTextContainsAllVowels('aeiou');








export default {checkIfTextContainsAllVowels, }