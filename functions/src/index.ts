import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {Response} from "express";
admin.initializeApp();
const db = admin.firestore();

interface DatasetType {
  answers: {
    content: string;
    nextId: string;
  }[];
  question: string;
}

const sendResponse = (
  response: Response,
  statusCode: number,
  body: Record<string, unknown>
) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

export const addDataset = functions.https.onRequest(
  async (req: any, res: any) => {
    if (req.method !== "POST") {
      sendResponse(res, 405, {error: "Invalid request method!"});
    } else {
      const dataset = req.body as Record<string, DatasetType>;
      for (const key of Object.keys(dataset)) {
        const data = dataset[key];
        await db.collection("questions").doc(key).set(data);
      }
      sendResponse(res, 200, {message: "Dataset added successfully!"});
    }
  }
);

