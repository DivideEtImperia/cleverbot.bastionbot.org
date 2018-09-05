"use strict";

import * as express from "express";
import write from "../methods/write";

module Route {
  export class API {
    public async main(req: express.Request, res: express.Response, next: express.NextFunction) {
      try {
        if (req.query && req.query.message) {
          let reply: object = await write(decodeURIComponent(req.query.message))

          res.json(reply);
        }
        else {
          res.json({
            status: "success",
            response: "Beep. Beep. Boop. Boop."
          });
        }
      }
      catch (e) {
        next(e);
      }
    }
  }
}

export = Route;
