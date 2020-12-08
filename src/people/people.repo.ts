import mongoose from 'mongoose';
const { Schema } = mongoose;

const personSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  surname: String,
  email:   String,
  idNo:   String,

});

