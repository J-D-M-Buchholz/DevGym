import React from "react"
import express from "express"
import Topic from "@/models/topic"

export default async function contentController(
  req: express.Request,
  res: express.Response
) {
  try {
    const topic = await Topic.find()
    res.status(200).json(topic)
  } catch (err){
    console.log(err)
  }
}
