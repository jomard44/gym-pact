import mongoose from "mongoose";

const pactSchema = mongoose.Schema(
  {
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    length: {
      type: String,
    },
    goal: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "active", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pact", pactSchema);
