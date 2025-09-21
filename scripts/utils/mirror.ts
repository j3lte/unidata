export const getBidiMirroring = (txt: string): Map<number, number> => {
  const res = new Map<number, number>();
  const codes = txt.split("\n").filter((line) => line.trim() !== "" && !line.startsWith("#")).map((line) => {
    const [code, mirror] = line.trim().split(";").map((part) => part.trim());
    return { code: parseInt(code, 16), mirror: parseInt(mirror, 16) };
  });
  for (const { code, mirror } of codes) {
    res.set(code, mirror);
  }
  return res;
};
