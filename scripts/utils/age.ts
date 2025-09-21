export type DerivedAge = {
  start: number;
  end: number | null;
  version: string;
};

export const getDerivedAges = (txt: string) => {
  const ages: DerivedAge[] = txt
    .split(/\n/)
    .map((line) => line.trim())
    .filter((line) => line !== "" && !line.startsWith("#"))
    .map((line) => {
      const [range, value] = line.split(";").map((part) => part.trim());
      const [version, comment] = value.split("#").map((part) => part.trim());
      const [start, end] = range.split("..");
      const startVal = parseInt(start, 16);

      if (typeof end !== "undefined") {
        const endVal = parseInt(end, 16);
        const len = endVal - startVal + 1;
        // Find the [x] in the comment
        const count = comment.match(/\[([0-9]+)\]/)?.[1];
        if (typeof count !== "undefined") {
          const countVal = parseInt(count, 10);
          if (countVal !== len) {
            throw new Error(`Length mismatch for derived age ${start}..${end}: ${len} !== ${countVal}`);
          }
        } else {
          throw new Error(`No count found for derived age ${start}..${end}`);
        }
      }
      return { start: startVal, end: typeof end !== "undefined" ? parseInt(end, 16) : null, version };
    });

  return ages;
};

export const getDerivedAge = (ages: DerivedAge[], code: number) => {
  const exact = ages.find((age) => age.start === code && age.end === null);
  if (exact) {
    return exact.version;
  }
  const range = ages.find((age) => age.end !== null && code >= age.start && code <= age.end);
  if (range) {
    return range.version;
  }
  return null;
};
