import db from "../models";
import { Request, Response, NextFunction } from "express";
// import { Purchase } from "./../utils/types";

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { purchaseObject } = req.body;

    await db.Purchase.create({ purchaseObject });

    res.status(200).send({ message: "Purchase created succesfully!" });
  } catch (error: any) {
    res.status(500).send({
      message: "Error creating purchase",
      error: error.message,
    });
  }
}

export const purchaseController = { create };
