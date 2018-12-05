var mongoose = require("mongoose");

var curriculumSchema = mongoose.Schema({
    major: {
        type: String,
        required: true
    }, // 학과
    lecture: {
        type: String,
        required: true
    }, // 강의명
    description: {
        type: String,
        required: true
    }, // 강의정의
    semester: {
        type: String,
        required: true
    }, // 강의 해당학기
    prequisite: [{
        name: String
    }], // 선수과목
    type: {
        type: String,
        required: true
    }, // 전공, 교양 인지
    isPre: {
        type: Boolean,
    },
}, {
    versionKey: false
});

var Curriculum = mongoose.model("Curriculum", curriculumSchema, "Curriculumlist");
module.exports = Curriculum;