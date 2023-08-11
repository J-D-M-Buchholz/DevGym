import { ObjectId } from "mongoose";

export interface ContentsDB  {
_id : ObjectId,
title: string,
topic: string,
explanation: Object,
question : Object,
map : any
}
