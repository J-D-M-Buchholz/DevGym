import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema({
    topic : String,
    content: String,
})

const Topic = mongoose.models.Topic || mongoose.model('topic', topicSchema)

export default Topic;

