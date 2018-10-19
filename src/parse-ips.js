import * as _ from 'lodash';

/**
 * Checks if a file is a valid ips file
 * @param {Buffer} ips The file to check
 * @returns {boolean} Determines if the file is a valid ips
 */
export const isIPS = ips => {
  const patch = _.slice(ips, 0, 5);
  const end = _.slice(ips, -3);
  return (
    _.isEqual(patch, [0x50, 0x41, 0x54, 0x43, 0x48]) &&
    _.isEqual(end, [0x45, 0x4f, 0x46])
  );
};

const parseIPSData = ipsData => {
  const address = ipsData[0] * 0x10000 + ipsData[1] * 0x100 + ipsData[2];
  const length = ipsData[3] * 0x100 + ipsData[4];
  const data = _.slice(ipsData, 5, 5 + length);
  const remaining = _.slice(ipsData, 5 + length);

  const parsed = {
    address,
    length,
    data,
  };

  if (remaining.length > 0) {
    return [parsed, ...parseIPSData(remaining)];
  }

  return [parsed];
};

const parseIPS = ips => {
  const data = _.slice(ips, 5, -3);

  if (isIPS(ips)) {
    return parseIPSData(data);
  }

  return [];
};

const flattenPatch = ipsJson => {
  const { address, length, data } = ipsJson;
  return _.reduce(
    _.range(length),
    (result, value, index) => {
      result[address + index] = data[index];
      return result;
    },
    {},
  );
};

/**
 * Applies an IPS patch to a file
 * @param {Buffer} file The file to patch
 * @param {Buffer} ips The patch to apply
 * @returns {Buffer} The patched file
 */
export const applyPatch = (file, ips) => {
  const parsedIPS = parseIPS(ips);
  const flatPatch = _.merge(..._.map(parsedIPS, flattenPatch));

  return _.reduce(
    file,
    (result, value, index) => {
      const newValue = _.get(flatPatch, index, value);

      result[index] = newValue;
      return result;
    },
    Buffer.alloc(file.length),
  );
};
