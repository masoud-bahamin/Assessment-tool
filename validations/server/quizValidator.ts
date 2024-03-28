const validator = require("fastest-validator");
const v = new validator();

export const createQuizValidator = v.compile({
  title: { type: "string" },
  questions: { type: "array" },
  isOpen: { type: "boolean" },
});
