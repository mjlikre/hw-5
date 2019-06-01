var randQuestions = {
    question1: {
        queston: "What does John Wick call his dog?",
        answer: ["Good dog", 'Good boy', 'Prince of Barkness', 'Chew Barka']
    },
    question2: {
        question: "Who said this line 'You either die a hero or live long enough to see yourself becoem the villian.'?",
        answer: ['The Joker', 'Chewbacca', 'Two face', 'Bane' ]
    },
    question3: {
        quesiton: "How did Red Skull become the guardian of the soul stone?",
        answer: ["He volunteered himself", "He tried to hold the space stone", "Captain America sent him there with a photon blast", "He was never the guardian" ]
    },
    question4: {
        qustion: "What did Tony Stark wanted to eat when he got off the plane in Iron Man 1?",
        answer: ["Doritos", "Shawarma", "Chesse cake", 'Cheese burger']

    },
    question5: {
        question: "Who is Heisenberg?",
        answer: ['TimTim', 'Walt Wiltman', "Walter White", "Walter Green"]

    },
    question6: {
        question: "Who plays Ron Woodroof in Dallas Buyer's Club?",
        answer: ['Matthew Roberts', "Matthew McConaughey", "Jared Letto", "Leonardo DiCaprio"]
    },
    question7: {
        question: "In what movie did Leonardo DiCaprio win his first Oscars?",
        answer: ['The Revenant', 'Titanic', 'Wolf Of Walstreet', 'The Great Gatzby']
    },
    question8: {
        question: "What was Thor's access code to the Queenjet?",
        answer: ['God of Thunder', 'Strongest Avenger', 'Ruler of Asgard', 'Pointbreak']
    }
}

var questionChosen = false;
var questionAnswered = false; 
var obj;

function start() {
    for (var key in randQuestions){
        obj = randQuestions[key];
        $('#question').text(obj.question);
        $('#option1').text(obj.answer[0]);
        $('#option2').text(obj.answer[1]);
        $('#option3').text(obj.answer[2]);
        $('#option4').text(obj.answer[3]);
    }
}

start()
// var time = 30;
// var invervalId;


// function timer(){
//     intervalId = setInterval(count, 1000)
// }

