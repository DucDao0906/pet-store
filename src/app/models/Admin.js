const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    avatar: { type: String },
    resetPasswordLink: {
      data: String,
      default: '',
    },
    role: { type: Number },
  }
);

module.exports = mongoose.model('Admin', AdminSchema);