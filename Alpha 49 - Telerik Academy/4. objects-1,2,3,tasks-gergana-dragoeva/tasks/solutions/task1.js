// Clone Objects

export default function (data) {
  // your code starts here
  const clone = {};
  for (const key in data) {
    if (Array.isArray(data[key])) {
      clone[key] = [...data[key]];
    } else if (typeof data[key] === "object" && data[key] !== null) {
      const currentObj = {};
      for (const nestedKey in data[key]) {
        const dataType = typeof data[key][nestedKey];
        if (dataType === "string" || dataType === "number" || dataType === "boolean") {
          currentObj[nestedKey] = data[key][nestedKey];
        } else if (Array.isArray(data[key][nestedKey])) {
          currentObj[nestedKey] = [...data[key][nestedKey]];
        } else if (dataType === "object") {
          currentObj[nestedKey] = cloneObject(data[key][nestedKey]);
        }
      }
      clone[key] = currentObj;
    } else {
      clone[key] = data[key];
    }
  }
  return clone;

    // your code ends here 

}
 

