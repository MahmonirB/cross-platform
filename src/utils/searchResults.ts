/**
 * @function searchResults
 * @param results
 * @description curring function
 * @returns results
 */
function searchResults<T>(results: T[]): (value: string) => Array<T> {
  return (searchText: string) => {
    return results?.filter((item: any) =>
      JSON.stringify(
        Object.values(item).map((ele: any) =>
          ele?.value?.toString().toLowerCase(),
        ),
      ).includes(searchText.toLowerCase()),
    );
  };
}
export default searchResults;
