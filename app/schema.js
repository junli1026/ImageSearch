var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  pushId: String,
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question'}],
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

var questionSchema = new Schema({
  imageUrl: String,
  questionText: String, 
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

var answerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref:'User'},
  question: { type:Schema.Types.ObjectId, ref: 'Questoin'},
  answerText: String,
  upVote: Number,
  downVote: Number
});

var User = mongoose.model('User', userSchema);
var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);

exports.User = User;
exports.Question = Question;
exports.Answer = Answer;
