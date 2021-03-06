import Errorhandler from "../error";
import * as Joi from "@hapi/joi";

const createValidator =
  (schema: Joi.Schema): Function =>
  async (payload: any): Promise<any> => {
    try {
      return await schema.validateAsync(payload);
    } catch (err) {
      throw new Errorhandler(400, "ValidationError", "");
    }
  };

export default createValidator;
