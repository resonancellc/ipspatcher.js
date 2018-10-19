export const numToBuf = num => {
  return Buffer.from([
    (num >>> 24) & 0xff,
    (num >>> 16) & 0xff,
    (num >>> 8) & 0xff,
    (num >>> 0) & 0xff,
  ]);
};
