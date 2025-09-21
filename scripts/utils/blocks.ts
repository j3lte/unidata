export const getBlocks = (txt: string) =>
  txt
    .split(/\n/)
    .map((line) => line.match(/^([A-F0-9]+)\.\.([A-F0-9]+); (.+)$/))
    .filter((match) => match !== null)
    .map((match) => {
      const [, startCode, endCode, blockName] = match;
      const enumName = blockName
        .replace(/[^a-zA-Z0-9]/g, "_")
        .replace(/_+$/, "")
        .replace(/^_+/, "");
      return {
        enumName: enumName,
        blockName: blockName,
        startCode: parseInt(startCode, 16),
        endCode: parseInt(endCode, 16),
      };
    });
