$(document).ready(function(){

    $('#start').on('click', function(){
        $('#start').remove();
        loadQuestion();
       
    });
    $(document).on('click', '.answerButton', function(){
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
            correctAnswer: "Good dog",
            correctGif: '<iframe src="https://giphy.com/embed/j5QcmXoFWl4Q0" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
            incorrectGit:'<iframe src="https://giphy.com/embed/26xBN6I5tVKveX2wg" width="480" height="256" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'

            
        },
        {
            question: "Who said this line 'You either die a hero or live long enough to see yourself becoem the villian.'?",
            answer: ['The Joker', 'Chewbacca', 'Two face', 'Bane' ],
            correctAnswer: 'Two face',
            correctGif: '<iframe src="https://giphy.com/embed/wrJviA71z6gO4" width="480" height="193" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/batman-the-dark-knight-theperfectcell-wrJviA71z6gO4">via GIPHY</a></p>',
            incorrectGit: '<iframe src="https://giphy.com/embed/AwoDg0wJImOjK" width="480" height="449" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
         {
            question: "How did Red Skull become the guardian of the soul stone?",
            answer: ["He volunteered himself", "He tried to hold the space stone", "Captain America sent him there with a photon blast", "He was never the guardian" ],
            correctAnswer: "He tried to hold the space stone",
            correctGif: '<iframe src="https://giphy.com/embed/kkYbDLFmNvO4E" width="480" height="319" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kkYbDLFmNvO4E">via GIPHY</a></p>',
            incorrectGit: '<iframe src="https://giphy.com/embed/3ofT5BfhnQdT3bldRe" width="480" height="202" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/no-frustrated-rocket-3ofT5BfhnQdT3bldRe">via GIPHY</a></p>'
        },
         {
            question: "What did Tony Stark wanted to eat when he got off the plane in Iron Man 1?",
            answer: ["Doritos", "Shawarma", "Chesse cake", 'Cheese burger'],
            correctAnswer: 'Cheese burger',
            correctGif: '<iframe src="https://giphy.com/embed/Nz4NVkyMO6Xni" width="480" height="442" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/robert-downey-jr-iron-man-the-avengers-Nz4NVkyMO6Xni">via GIPHY</a></p>',
            incorrectGit: '<iframe src="https://giphy.com/embed/eTJVioIvcrfrO" width="480" height="472" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/marvel-tony-stark-eTJVioIvcrfrO">via GIPHY</a></p>'
    
        },
         {
            question: "Who is Heisenberg?",
            answer: ['TimTim', 'Walt Wiltman', "Walter White", "Walter Green"],
            correctAnswer: "Walter White",
            correctGif: '<iframe src="https://giphy.com/embed/3oFzmkkwfOGlzZ0gxi" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/breaking-bad-walter-white-youre-goddamn-right-3oFzmkkwfOGlzZ0gxi">via GIPHY</a></p>',
            incorrectGit: '<iframe src="https://giphy.com/embed/26BRQaiZM0IeyoJfa" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gus-fring-giancarlo-esposito-explain-yourself-26BRQaiZM0IeyoJfa">via GIPHY</a></p>'
    
        },
         {
            question: "Who plays Ron Woodroof in Dallas Buyer's Club?",
            answer: ['Matthew Roberts', "Matthew McConaughey", "Jared Letto", "Leonardo DiCaprio"],
            correctAnswer: "Matthew McConaughey",
            correctGif: '<iframe src="https://giphy.com/embed/l3vRjZN3rXQBWYjBu" width="480" height="247" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cmaawards50-cma-awards-50th-l3vRjZN3rXQBWYjBu">via GIPHY</a></p>',
            incorrectGit: '<iframe src="https://giphy.com/embed/13qN7J7DTEscMM" width="480" height="274" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/13qN7J7DTEscMM">via GIPHY</a></p>'
        },
         {
            question: "In what movie did Leonardo DiCaprio win his first Oscars?",
            answer: ['The Revenant', 'Titanic', 'Wolf Of Walstreet', 'The Great Gatzby'],
            correctAnswer: 'The Revenant',
            correctGif: '<iframe src="https://giphy.com/embed/g9582DNuQppxC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hero0fwar-karmawhore-rhyming-g9582DNuQppxC">via GIPHY</a></p>',
            incorrectGit: 'https://giphy.com/gifs/leonardo-dicaprio-intense-the-wolf-of-wall-street-7LgKUsZiSjcRO'
        },
        {
            question: "What was Thor's access code to the Queenjet?",
            answer: ['God of Thunder', 'Strongest Avenger', 'Ruler of Asgard', 'Pointbreak'],
            correctAnswer: 'Pointbreak',
            correctGif: '<iframe src="https://giphy.com/embed/xkzG4BR1iiyOI" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thor-ragnarok-xkzG4BR1iiyOI">via GIPHY</a></p>',
            incorrectGit: '<iframe src="https://giphy.com/embed/3ePb1CHEjfSRhn6r3c" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tom-hiddleston-3ePb1CHEjfSRhn6r3c">via GIPHY</a></p>'
        
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
        $('#options').html('<h2>' + randQuestions[currentQuestion].question+'</h2>');
        for (var i = 0; i < randQuestions[currentQuestion].answer.length; i++){
            $('#options').append('<button class = "answerButton row" id = "button-'+i+'">' + randQuestions[currentQuestion].answer[i]+'</button>');

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
        $('#options').append('| Correct: ' + correct);
        $('#options').append('| Incorrect: ' + incorrect);
        $('#options').append('| Unanswered: ' + unanswered);
        $('#options').append('<button id = "reset">Reset </button>')
        
        
        
        
        
        
    }
   var clicked= function(){
        clearInterval(timer);
        if(userAnswer===randQuestions[currentQuestion].correctAnswer){
            answeredCorrectly();
        }else{
            answeredIncorrectly();
        }
       

        

    }
    var answeredCorrectly= function(){
        
        clearInterval(timer);
        correct++;
        $("#options").html('<h2>You Got it!!</h2>');
        $('#options').append(randQuestions[currentQuestion].correctGif)
        if (currentQuestion == randQuestions.length-1){
            setTimeout(results, 5*1000);
        }
        else{
            setTimeout(nextQuestion, 5*1000);
        }

    }
    var answeredIncorrectly= function(){
        
        clearInterval(timer);
        incorrect++;
        $("#options").html('<h2>You Got it Wrong!!</h2>');
        $('#options').append('<h3>The corrent answer was: '+randQuestions[currentQuestion].correctAnswer+'</h3>');
        $('#options').append(randQuestions[currentQuestion].incorrectGit);
        if (currentQuestion == randQuestions.length-1){
            setTimeout(results, 5*1000);
        }
        else{
            setTimeout(nextQuestion, 5*1000);
        }

    }
    var reset= function(){

        currentQuestion = 0;
        counter = 30;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        loadQuestion();

    }


    
})
    
    
 
    
    
    
    




