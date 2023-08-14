import { ObjectId } from "mongoose";

export interface ContentsDB  {
    _id : ObjectId,
    title: string,
    topic: string,
    explanation: {
      heading: string,
      text: string
    },
    question : {
        heading: string,
        text: string
      },
    map : any
  }
  