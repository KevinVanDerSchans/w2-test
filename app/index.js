const checkIfTextContainsAllVowels = (word) => {
  const allVoewls = ['a', 'e', 'i', 'o', 'u'];

  return allVoewls.every((index) => word.includes(index)
  );
};

checkIfTextContainsAllVowels('aeiou');


const checkIfNumberIsEven = (number) => number % 2 === 0;

checkIfNumberIsEven('2');






export default {
  checkIfTextContainsAllVowels, 
  checkIfNumberIsEven, 
}