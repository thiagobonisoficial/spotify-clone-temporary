const generateUUID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const UUID = () => {
  return `${generateUUID()}${generateUUID()}-${generateUUID()}-${generateUUID()}-${generateUUID()}-${generateUUID()}${generateUUID()}${generateUUID()}${generateUUID()}`;
};

export default UUID;
