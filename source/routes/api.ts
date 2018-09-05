"use strict";

import * as express from "express";

module Route {
  export class API {
    public async main(_req: express.Request, res: express.Response, next: express.NextFunction) {
      try {
        res.json({
          "Bastion": "Cleverbot API"
        });
      }
      catch (e) {
        next(e);
      }
    }
  }
}

export = Route;
