export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "abcdefg"
    );
  }
  // used ChatGPT below here
  if (query.toLowerCase().includes("largest")) {
    const cleanedString = query.replace(/[^0-9 ]/g, '').trim(); // Keep spaces between numbers
    const valuesArray = cleanedString.split(/\s+/); // Split by one or more spaces
    const intArray = valuesArray
      .map((value) => parseInt(value, 10))
      .filter((value) => !isNaN(value)); // Filter out NaN values

    const maxNum = intArray.length > 0 ? Math.max(...intArray) : "No numbers found";
    return maxNum.toString();
  }
  if (query.toLowerCase().includes("plus")) {
    const cleanedString = query.replace(/[^0-9 ]/g, " ").trim();
    const valuesArray = cleanedString.split(/\s+/).filter(Boolean); // Split on any amount of whitespace and remove empty strings
    const intArray = valuesArray
        .map((value) => parseInt(value, 10))
        .filter((value) => !isNaN(value)); // Convert to integers and filter out NaN values

    const sum = intArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum.toString();
  }
  if (query.toLowerCase().includes("multiplied")) {
    const cleanedString = query.replace(/[^0-9 ]/g, " ").trim();
    const valuesArray = cleanedString.split(/\s+/).filter(Boolean); // Split on any amount of whitespace and remove empty strings
    const intArray = valuesArray
        .map((value) => parseInt(value, 10))
        .filter((value) => !isNaN(value)); // Convert to integers and filter out NaN values

    const ans = intArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return ans.toString();
  }
  if (query.toLowerCase().includes("both a square and a cube")) {
    const cleanedString = query.replace(/[^0-9 ]/g, " ").trim();
    const valuesArray = cleanedString.split(/\s+/).filter(Boolean); // Split on any amount of whitespace and remove empty strings
    const intArray = valuesArray
        .map((value) => parseInt(value, 10))
        .filter((value) => !isNaN(value)); // Convert to integers and filter out NaN values
    const isSixthPower = (n:number) => {
      const sixthRoot = Math.pow(n, 1/6);
      return sixthRoot === Math.floor(sixthRoot);
    };
    const sixthPowers = intArray.filter(isSixthPower)
    if (sixthPowers.length === 0) {
      return "";
    }
    if (sixthPowers.length === 1) {
      return sixthPowers[0].toString();
    }
    return sixthPowers.join(", ");
  }
  if (query.toLowerCase().includes("power")) {
    const cleanedString = query.replace(/[^0-9 ]/g, " ").trim();
    const valuesArray = cleanedString.split(/\s+/).filter(Boolean); // Split on any amount of whitespace and remove empty strings
    const intArray = valuesArray
        .map((value) => parseInt(value, 10))
        .filter((value) => !isNaN(value)); // Convert to integers and filter out NaN values
    const ans = Math.pow(intArray[0], intArray[1]);
    return ans.toString();
  }
  if (query.toLowerCase().includes("primes")) {
    const cleanedString = query.replace(/[^0-9 ]/g, " ").trim();
    const valuesArray = cleanedString.split(/\s+/).filter(Boolean); // Split on any amount of whitespace and remove empty strings
    const intArray = valuesArray
        .map((value) => parseInt(value, 10))
        .filter((value) => !isNaN(value)); // Convert to integers and filter out NaN values
    const isSixthPower = (n:number) => {
      const sixthRoot = Math.pow(n, 1/6);
      return sixthRoot === Math.floor(sixthRoot);
    };
    const sixthPowers = intArray.filter(isSixthPower)
    if (sixthPowers.length === 0) {
      return "";
    }
    if (sixthPowers.length === 1) {
      return sixthPowers[0].toString();
    }
    return sixthPowers.join(", ");
  }
  return "";
}
