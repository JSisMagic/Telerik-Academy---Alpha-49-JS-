// Game of Key-owns


  
 
/**
 * 
 * @param {{ keys: string[], first: object, second: object }} data 
 */
export default function (data) {
//your code starts here
  const { first, second, keys } = data;
  const outputObject = {};
 
  keys.forEach((key) => {
    const firstKey = first[key];
    const secondKey = second[key];
 
    if (firstKey !== undefined && secondKey !== undefined) {
      outputObject[key] = [firstKey, secondKey];
    } else if (firstKey !== undefined) {
      outputObject[key] = firstKey;
    } else if (secondKey !== undefined) {
      outputObject[key] = secondKey;
    } else {
      outputObject[key] = null;
    }
  });
  return outputObject;
  // your code ends here

}


