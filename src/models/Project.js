import mongoose from "mongoose";

const Schema = mongoose.Schema;
const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    company: {
      type: String,
      required: true,
    },
    contactPerson: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        fixed: {
          type: String,
          required: true,
        },
        mobile: {
          type: String,
          required: true,
        },
      },
      password: {
        type: String,
        required: true,
      },
    },
  },
  type: [
    {
      type: String,
      required: true,
    },
  ],
  industry: [
    {
      type: String,
      required: true,
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  language: {
    type: String,
    default: "english",
  },
  root: {
    type: Boolean,
    default: false,
  },
  timestamps: true,
});

let Dataset =
  mongoose.model.project || mongoose.model("project", projectSchema);

export default Dataset;
