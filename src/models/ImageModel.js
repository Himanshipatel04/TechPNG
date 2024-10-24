import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isContributed: {
    type: Boolean,
    default: false,
  },
  contributedBy: {
    type: String,
    validate: {
      validator: function (v) {
        // If `isContributed` is true, `contributedBy` must not be empty
        return this.isContributed ? v && v.length > 0 : true;
      },
      message: "contributedBy is required when isContributed is true",
    },
  },
});
const ImageModel = mongoose.model("Image", imageSchema);

export default ImageModel;
