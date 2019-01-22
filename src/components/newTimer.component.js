const uuid = require("uuidv4");

const NewTimer = (attrs = {}) => {
  return {
    title: attrs.title || "Timer",
    project: attrs.project || "Project",
    id: uuid(), // eslint-disable-line no-undef
    elapsed: 0
  };
};

export default NewTimer;
