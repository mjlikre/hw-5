$(document).ready(function(){

    $('#start').on('click', function(){
        $('#start').remove();
        loadQuestion();
       
    });
    $(document).on('click', '.answer-button', function(){
        userAnswer = $(this).text();
        clicked();

        
    });
    $(document).on('click', '#reset', function(){
        reset();
    })
    var randQuestions = [
        {
            question: "What does John Wick call his dog?",
            answer: ["Good dog", 'Good boy', 'Prince of Barkness', 'Chew Barka'],
            correctAnswer: "Good dog"
        },
        {
            question: "Who said this line 'You either die a hero or live long enough to see yourself becoem the villian.'?",
            answer: ['The Joker', 'Chewbacca', 'Two face', 'Bane' ],
            correctAnswer: 'Two face'
        },
         {
            question: "How did Red Skull become the guardian of the soul stone?",
            answer: ["He volunteered himself", "He tried to hold the space stone", "Captain America sent him there with a photon blast", "He was never the guardian" ],
            correctAnswer: "He tried to hold the space stone"
        },
         {
            question: "What did Tony Stark wanted to eat when he got off the plane in Iron Man 1?",
            answer: ["Doritos", "Shawarma", "Chesse cake", 'Cheese burger'],
            correctAnswer: 'Cheese burger'
    
        },
         {
            question: "Who is Heisenberg?",
            answer: ['TimTim', 'Walt Wiltman', "Walter White", "Walter Green"],
            correctAnswer: "Walter White"
    
        },
         {
            question: "Who plays Ron Woodroof in Dallas Buyer's Club?",
            answer: ['Matthew Roberts', "Matthew McConaughey", "Jared Letto", "Leonardo DiCaprio"],
            correctAnswer: "Matthew McConaughey"
        },
         {
            question: "In what movie did Leonardo DiCaprio win his first Oscars?",
            answer: ['The Revenant', 'Titanic', 'Wolf Of Walstreet', 'The Great Gatzby'],
            correctAnswer: 'The Revenant'
        },
        {
            question: "What was Thor's access code to the Queenjet?",
            answer: ['God of Thunder', 'Strongest Avenger', 'Ruler of Asgard', 'Pointbreak'],
            correctAnswer: 'Pointbreak'
        
    }]


    
    
    var userAnswer; 
    var currentQuestion = 0
    var counter= 30
    var correct= 0
    var incorrect=0
    var unanswered= 0
    var coundown = function(){
        counter --;
        $("#timer").html(counter);
        if(counter <=0){
            
            timeUp();
        }
    }
    var loadQuestion= function(){
        timer = setInterval(coundown, 1000);
        $('#question').html('<h2>' + randQuestions[currentQuestion].question+'</h2>');
        for (var i = 0; i < randQuestions[currentQuestion].answer.length; i++){
            $('#options').append('<button class = "answer-button" id = "button-'+i+'"data-name="'+ randQuestions[currentQuestion].answer[i]+'">' + randQuestions[currentQuestion].answer[i]+'</button>');

        }

    }
    var nextQuestion= function(){
        counter = 30;
        $("#timer").html(counter);
        currentQuestion ++;
        loadQuestion();


    }
    var timeUp= function(){
        clearInterval(timer);
        $("#options").html('<h2>Out of time</h2>');
        $('#options').append('<h3>The corrent answer was: '+randQuestions[currentQuestion].correctAnswer+'</h3>');
        if (currentQuestion == randQuestions.length-1){
            setTimeout(results, 3*1000);
        }
        else{
            setTimeout(nextQuestion, 3*1000);
        }
        unanswered++;

    }
    var results= function(){
        clearInterval(timer);
        $('#options').html('All Done');
        $('#options').append('Correct: ' + correct);
        $('#options').append('Incorrect: ' + incorrect);
        $('#options').append('Unanswered: ' + unanswered);
        $('#options').append('<button id = "reset">Reset </button>')
        
        
        
        
        
        
    }
   var clicked= function(){
        clearInterval(timer);
        if(userAnswer===randQuestions[currentQuestion].correctAnswer){
            answeredCorrectly();
        }else{
            answeredIncorrectly();
        }
        console.log($('#options').text());

        

    }
    var answeredCorrectly= function(){
        
        clearInterval(timer);
        correct++;
        $("#options").html('<h2>You Got it!!</h2>');
        if (currentQuestion == randQuestions.length-1){
            setTimeout(results, 3*1000);
        }
        else{
            setTimeout(nextQuestion, 3*1000);
        }

    }
    var answeredIncorrectly= function(){
        
        clearInterval(timer);
        incorrect++;
        $("#options").html('<h2>You Got it Wrong!!</h2>');
        $('#options').append('<h3>The corrent answer was: '+randQuestions[currentQuestion].correctAnswer+'</h3>');
        if (currentQuestion == randQuestions.length-1){
            setTimeout(results, 3*1000);
        }
        else{
            setTimeout(nextQuestion, 3*1000);
        }

    }
    var reset= function(){
        currentQuestion = 0;
        counter = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        loadQuestion();

    }


    
})
    
    
 
    
    
    
    




