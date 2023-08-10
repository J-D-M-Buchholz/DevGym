import React from "react"
import express from "express"
import Content from "@/models/contentModel"

export default async function contentController(
  req: express.Request,
  res: express.Response
) {
  try {
    const content = await Content.find()
    res.status(200).json(content)
  } catch (err){
    console.log(err)
  return res.status(400).json({ message: "Error processing request 🤡" })
  }
}
