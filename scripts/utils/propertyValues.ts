type PropertyValueAliasReturn = {
  categories: [string, string][];
  bidi: [string, string][];
};

export const getPropertyValueAliases = (txt: string): PropertyValueAliasReturn => {
  const aliases = txt
    .split(/\n/)
    .filter((line) => line !== "" && !line.startsWith("#"))
    .map((line) => {
      const props = line.split(";").map((prop) => prop.trim().split("#")[0].trim());
      return props;
    })
    .filter((props) => props.length > 1);

  const categories = aliases.filter((props) => props.length > 2 && props[0] === "gc");
  const bidi = aliases.filter((props) => props.length > 2 && props[0] === "bc");

  return {
    categories: categories.sort((a, b) => a[2].localeCompare(b[2])).map((
      [, abbreviation, category],
    ) => [category, abbreviation]),
    bidi: bidi.sort((a, b) => a[2].localeCompare(b[2])).map((
      [, abbreviation, bidi],
    ) => [bidi, abbreviation]),
  };
};
