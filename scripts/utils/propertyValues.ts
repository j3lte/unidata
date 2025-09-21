export type PropertyValueAliasReturn = {
  categories: [string, string][];
  bidi: [string, string][];
  ages: [string, string][];
};

const sorted = (props: string[][]): [string, string][] =>
  props.sort((a, b) => a[2].localeCompare(b[2])).map((
    [, abbreviation, value],
  ) => [value, abbreviation]);

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
  const ages: [string, string][] = aliases.filter((props) =>
    props.length > 2 && props[0] === "age" && props[2] !== "Unassigned"
  ).map((
    [, value, name],
  ) => [name, value]);

  return {
    categories: sorted(categories),
    bidi: sorted(bidi),
    ages,
  };
};
