type PropertyValueAliasReturn = {
  categories: [string, string][];
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

  return {
    categories: categories.sort((a, b) => a[2].localeCompare(b[2])).map((
      [, abbreviation, category],
    ) => [category, abbreviation]),
  };
};
