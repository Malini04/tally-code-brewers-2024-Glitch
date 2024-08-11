import mongoose , { Schema } from "mongoose";

// const ProblemSchema = new Schema(
//   {
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   constraints: { type: String, required: false,  default: "" },
//   testCases: {
//     type: [
//       {
//         input: { type: String, required: false, default: "" },
//         output: { type: String, required: true },
//       },
//     ],
//     required: true, // If testCases are mandatory
//   },
//   createdAt: { type: Date, default: Date.now },
//   }
// );

const ProblemSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    constraints: { type: String, default: "" },
    testCases: {
      type: [
        {
          input: { type: String, default: "" },  // Optional field with default value
          output: { type: String, required: true },  // Required field
        },
      ],
    },
    solution: { type: String},
  },{
    timestamps: true
  }
)

// const ProblemSchema = new Schema(
//   {
//     "bsonType": "object",
//     "required": ["title", "description"],
//     "properties": {
//       "title": {
//         "bsonType": "string"
//       },
//       "description": {
//         "bsonType": "string"
//       },
//       "constraints": {
//         "bsonType": "string"
//       },
//       "testCases": {
//         // "bsonType":["string"],
//         "bsonType": "array",
//         "items": {
//           "bsonType": "object",
//           "required": ["output"],
//           "properties": {
//             "input": {
//               "bsonType": "string"
//             },
//             "output": {
//               "bsonType": "string"
//             }
//           }
//         }
//       }
//     }
//   },
//   {
//     timestamps: true,
//   }
// )

const Problem = mongoose.models.Problem || mongoose.model("Problem", ProblemSchema);

export default Problem;
