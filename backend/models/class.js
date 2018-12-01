var mongoose = require("mongoose");

var classSchema = mongoose.Schema({
    major: { type: String, required: true }, // 어떤 전공의 과목인지
    name: { type: String, required: true }, // 강의 이름
    professor: { type: String, required: true}, // 교수
    description: String,
    prerequisite: String, // 선수과목
    isPre: Boolean, // 선수과목 유무
    semester: { type: String, required: true},
    classId: String,
    type: Number, // 1: 전공필수 2: 전공선택 3: 교양필수 4: 교양선택
    totalGrade: { type: Number, default: 0 },  // 해당 과목에 해당하는 모든 강의 평가의 평균
    evaluation: [{
        id: String, // autoincrease
        writer: String, // username
        teamProject_grade: { // 팀플
            grade: Number,
            count: Number
        },
        homework_grade: { // 과제
            grade: Number,
            count: Number
        },
        test_grade: { // 시험
            grade: Number,
            count: Number
        },
        skill_grade:{ // 강의력
            grade: Number,
            count: Number
        },
        totalGrade: Number, // 강의 평가 각 항목의 총 평균 <- 백에서 계산에서 넣기
        enrollment_level: String, // 상,중,하
        memo1: String,
        memo2: String,
        memo3: String,
        memo4: String,
        createAt: { type: Date, default: Date.now }
    }],
    createAt: { type: Date, default: Date.now },
    updated: [{ contents: String, date: { type: Date, default: Date.now } }]
},{
    versionKey:false
});
var Classes = mongoose.model('Classes', classSchema, 'Classlist');

module.exports =  Classes;
