export function getAllObjValues(obj: any): Array<string> {
  let result = [];
  for (const prop in obj) {
    const value = obj[prop];
    if (typeof value === 'object') {
      result.push(getAllObjValues(value));
    } else {
      result.push(value.toString());
    }
  }

  return [...new Set(result.flat())];
}
