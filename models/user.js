'use strict';

import mongoose from 'mongoose';
import validate from 'mongoose-validator';
import bcrypt from 'bcrypt-as-promised';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: validate({
      validator: 'isEmail',
      message: 'is not valid',
    }),
  },
  hashed_password: {
    type: String,
  }
});

userSchema.virtual('password')
  .set(function setPassword(value) { this._password = value; })
  .get(function getPassword() { return this._password; });

userSchema.pre('save', async function preSave(next) {
  if (!this.password) return next();
  try {
    this.hashed_password = await bcrypt.hash(this.password);
    next();
  } catch (error) {
    next(error);
  }
})

export default mongoose.model('User', userSchema)

