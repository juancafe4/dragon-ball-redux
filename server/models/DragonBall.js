const mongoose = require('mongoose');



const dragonBallSchema = new mongoose.Schema({
  name: {type: String, required: true},
  race: {type: String, required: true},
  gender: {type: String, enum: ["Male", "Female"], required: true},
  picture: {type: String, required: true},
  appears: [{type: String}]
});
const DrangonBall = mongoose.model('DrangonBall', dragonBallSchema);

module.exports = DrangonBall;



