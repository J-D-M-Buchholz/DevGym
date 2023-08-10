import mongoose, {Schema} from "mongoose";

// const ContentsSchema = new Schema({
//     title : String,
//     topic : String,
//     content: String,
// })

// const ContentModel=  mongoose.models.Contents || mongoose.model("contents", ContentsSchema);
// export default ContentModel
const ContentsSchema = new Schema({
    title : String,
    topic : String,
    explanation: Object,
    question: Object,
})

const ContentModel = mongoose.models.Contents || mongoose.model("Contents", ContentsSchema);
export default ContentModel

