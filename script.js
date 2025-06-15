const quizData = {
    "General Knowledge": [
        { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
        { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], answer: 2 },
        { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: 3 },
        { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Oganesson"], answer: 1 },
        { question: "What is the currency of Japan?", options: ["Won", "Yen", "Ringgit", "Baht"], answer: 1 },
        { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: 1 },
        { question: "What is the tallest mountain in the world?", options: ["K2", "Kilimanjaro", "Mount Everest", "Matterhorn"], answer: 2 },
        { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "South Korea", "Japan", "Thailand"], answer: 2 },
        { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: 1 },
        { question: "Which language is spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: 1 },
        { question: "Who discovered gravity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], answer: 1 },
        { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
        { question: "How many days are in a leap year?", options: ["365", "366", "364", "367"], answer: 1 },
        { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
        { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctica", "Kalahari"], answer: 2 },
        { question: "Who is known as the father of computers?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: 1 },
        { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Pepper"], answer: 1 },
        { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Elephant", "Gorilla"], answer: 1 }
    ],
    "Science": [
        { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], answer: 2 },
        { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
        { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
        { question: "What is the human body's largest organ?", options: ["Liver", "Skin", "Lung", "Heart"], answer: 1 },
        { question: "What is the speed of light?", options: ["299,792 km/s", "150,000 km/s", "1,000,000 km/s", "100,000 km/s"], answer: 0 },
        { question: "What is the main gas found in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 2 },
        { question: "How many bones are in the human body?", options: ["206", "300", "150", "187"], answer: 0 },
        { question: "What is the closest star to Earth?", options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "The Sun"], answer: 3 },
        { question: "Which blood type is known as the universal donor?", options: ["A", "B", "AB", "O negative"], answer: 3 },
        { question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], answer: 2 },
        { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dynamic Nucleic Acid", "Dual Nucleotide Assembly", "Deoxyribose Nitrogen Acid"], answer: 0 },
        { question: "What is the smallest unit of life?", options: ["Atom", "Cell", "Molecule", "Organelle"], answer: 1 },
        { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: 0 },
        { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: 2 },
        { question: "What is the pH value of pure water?", options: ["5", "6", "7", "8"], answer: 2 },
        { question: "Which scientist proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"], answer: 1 },
        { question: "What is the largest organ in the human body?", options: ["Liver", "Heart", "Skin", "Brain"], answer: 2 },
        { question: "Which element has the highest melting point?", options: ["Iron", "Tungsten", "Gold", "Platinum"], answer: 1 },
        { question: "What is the study of fossils called?", options: ["Geology", "Paleontology", "Archaeology", "Meteorology"], answer: 1 },
        { question: "Which planet is known as the 'Morning Star'?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: 0 }
    ],
    "History": [
        { question: "In which year did World War II end?", options: ["1943", "1945", "1950", "1939"], answer: 1 },
        { question: "Who was the first president of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], answer: 2 },
        { question: "The ancient Egyptian writing system is called?", options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Latin"], answer: 1 },
        { question: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Roman", "Ottoman", "Mongol"], answer: 1 },
        { question: "When was the Berlin Wall demolished?", options: ["1985", "1989", "1991", "1975"], answer: 1 },
        { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"], answer: 1 },
        { question: "Which civilization built the Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: 2 },
        { question: "The Industrial Revolution began in which country?", options: ["France", "Germany", "United States", "Great Britain"], answer: 3 },
        { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Maria Goeppert-Mayer"], answer: 0 },
        { question: "In which year did the Titanic sink?", options: ["1905", "1912", "1920", "1898"], answer: 1 },
        { question: "Who was the first emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], answer: 1 },
        { question: "Which ancient wonder was located in Alexandria?", options: ["Colossus of Rhodes", "Hanging Gardens", "Lighthouse of Alexandria", "Temple of Artemis"], answer: 2 },
        { question: "What was the main cause of the French Revolution?", options: ["Religious conflict", "Economic hardship", "Foreign invasion", "Disease outbreak"], answer: 1 },
        { question: "Who wrote the 'I Have a Dream' speech?", options: ["Malcolm X", "Martin Luther King Jr.", "Nelson Mandela", "Barack Obama"], answer: 1 },
        { question: "Which country was not part of the Axis Powers in WWII?", options: ["Germany", "Italy", "Japan", "Soviet Union"], answer: 3 },
        { question: "Who was the first female Prime Minister of the UK?", options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"], answer: 1 },
        { question: "In which year did the American Civil War end?", options: ["1863", "1865", "1870", "1859"], answer: 1 },
        { question: "Which ancient civilization built the pyramids?", options: ["Greeks", "Romans", "Egyptians", "Persians"], answer: 2 },
        { question: "Who was the leader of the Soviet Union during WWII?", options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"], answer: 1 },
        { question: "What event marked the start of World War I?", options: ["Invasion of Poland", "Bombing of Pearl Harbor", "Assassination of Archduke Franz Ferdinand", "Russian Revolution"], answer: 2 }
    ],
    "Technology": [
        { question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol", "HyperText Transmission Protocol"], answer: 0 },
        { question: "Which company developed the first smartphone?", options: ["Apple", "Nokia", "IBM", "Samsung"], answer: 2 },
        { question: "What is the most popular programming language?", options: ["Java", "Python", "C++", "JavaScript"], answer: 3 },
        { question: "What does 'AI' stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Interface", "Algorithmic Intelligence"], answer: 1 },
        { question: "Which year was the first iPhone released?", options: ["2005", "2007", "2010", "2003"], answer: 1 },
        { question: "What does 'CPU' stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"], answer: 0 },
        { question: "Which of these is a cloud computing platform?", options: ["AWS", "IOS", "USB", "HDMI"], answer: 0 },
        { question: "What is the name of Google's AI assistant?", options: ["Siri", "Alexa", "Google Assistant", "Cortana"], answer: 2 },
        { question: "Which company created the Android operating system?", options: ["Google", "Apple", "Microsoft", "Samsung"], answer: 0 },
        { question: "What does 'VPN' stand for?", options: ["Virtual Private Network", "Verified Personal Network", "Virtual Public Network", "Verified Private Network"], answer: 0 },
        { question: "What does 'HTML' stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Language", "High Transfer Machine Language"], answer: 0 },
        { question: "Which of these is not a programming language?", options: ["Python", "Java", "HTML", "Ruby"], answer: 2 },
        { question: "What is the name of Microsoft's cloud service?", options: ["Azure", "AWS", "Google Cloud", "IBM Cloud"], answer: 0 },
        { question: "Which company developed the first graphical web browser?", options: ["Microsoft", "Netscape", "Google", "Apple"], answer: 1 },
        { question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Locator", "Universal Resource Link"], answer: 0 },
        { question: "Which of these is a version control system?", options: ["Git", "Java", "Python", "Docker"], answer: 0 },
        { question: "What does 'RAM' stand for?", options: ["Random Access Memory", "Read Access Memory", "Random Allocation Memory", "Read Allocation Memory"], answer: 0 },
        { question: "Which company owns the Windows operating system?", options: ["Apple", "Google", "Microsoft", "IBM"], answer: 2 },
        { question: "What does 'CSS' stand for?", options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"], answer: 2 },
        { question: "Which of these is not a database?", options: ["MySQL", "MongoDB", "React", "PostgreSQL"], answer: 2 }
    ],
    "Movies": [
        { question: "Who directed the movie 'Inception'?", options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"], answer: 1 },
        { question: "Which actor played Tony Stark in the Marvel movies?", options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], answer: 2 },
        { question: "Which movie won the first Academy Award for Best Picture?", options: ["Gone with the Wind", "Wings", "Casablanca", "The Jazz Singer"], answer: 1 },
        { question: "What is the highest-grossing film of all time?", options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], answer: 1 },
        { question: "Which actress has won the most Academy Awards?", options: ["Meryl Streep", "Katharine Hepburn", "Cate Blanchett", "Frances McDormand"], answer: 1 },
        { question: "What was the first feature-length animated movie?", options: ["Snow White and the Seven Dwarfs", "Cinderella", "Pinocchio", "Bambi"], answer: 0 },
        { question: "Which movie features the quote 'Here's looking at you, kid'?", options: ["Gone with the Wind", "Casablanca", "The Godfather", "Citizen Kane"], answer: 1 },
        { question: "Who played Jack in Titanic?", options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"], answer: 2 },
        { question: "Which film series has the most sequels?", options: ["James Bond", "Fast & Furious", "Godzilla", "Star Wars"], answer: 2 },
        { question: "What was the first Disney animated feature film?", options: ["Cinderella", "Snow White and the Seven Dwarfs", "Fantasia", "Bambi"], answer: 1 },
        { question: "Who directed 'The Shawshank Redemption'?", options: ["Steven Spielberg", "Martin Scorsese", "Frank Darabont", "Quentin Tarantino"], answer: 2 },
        { question: "Which movie won the Oscar for Best Picture in 2020?", options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"], answer: 0 },
        { question: "Who played the Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"], answer: 2 },
        { question: "Which of these is not a Quentin Tarantino film?", options: ["Pulp Fiction", "Inglourious Basterds", "Fight Club", "Django Unchained"], answer: 2 },
        { question: "What is the highest-grossing R-rated movie of all time?", options: ["Deadpool", "Joker", "The Matrix", "Logan"], answer: 1 },
        { question: "Which actress has been nominated for the most Oscars?", options: ["Meryl Streep", "Katharine Hepburn", "Cate Blanchett", "Judi Dench"], answer: 0 },
        { question: "Who directed 'Avatar'?", options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Ridley Scott"], answer: 1 },
        { question: "Which movie features the character Hannibal Lecter?", options: ["Se7en", "The Silence of the Lambs", "Psycho", "American Psycho"], answer: 1 },
        { question: "What was the first movie in the Marvel Cinematic Universe?", options: ["Iron Man", "The Incredible Hulk", "Thor", "Captain America"], answer: 0 },
        { question: "Who played Wolverine in the X-Men films?", options: ["Ryan Reynolds", "Hugh Jackman", "Chris Evans", "Chris Hemsworth"], answer: 1 }
    ],
    "Geopolitics": [
        { question: "Which country is not a permanent member of the UN Security Council?", options: ["United States", "China", "India", "France"], answer: 2 },
        { question: "The European Union was established by which treaty?", options: ["Treaty of Rome", "Maastricht Treaty", "Lisbon Treaty", "Treaty of Paris"], answer: 1 },
        { question: "Which country is the world's largest democracy?", options: ["United States", "Indonesia", "India", "Brazil"], answer: 2 },
        { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
        { question: "Which country has the largest land area?", options: ["China", "United States", "Canada", "Russia"], answer: 3 },
        { question: "The Suez Canal connects which two bodies of water?", options: ["Mediterranean Sea and Red Sea", "Atlantic Ocean and Pacific Ocean", "Indian Ocean and Atlantic Ocean", "Mediterranean Sea and Black Sea"], answer: 0 },
        { question: "Which country is not in the Middle East?", options: ["Egypt", "Iran", "Pakistan", "Saudi Arabia"], answer: 2 },
        { question: "What is the currency of Switzerland?", options: ["Euro", "Pound", "Franc", "Lira"], answer: 2 },
        { question: "Which organization is known for its annual meeting in Davos?", options: ["United Nations", "World Bank", "World Economic Forum", "G20"], answer: 2 },
        { question: "The 'Brexit' refers to the exit of which country from the EU?", options: ["France", "Germany", "Italy", "United Kingdom"], answer: 3 },
        { question: "Which country is the largest by population?", options: ["India", "United States", "China", "Indonesia"], answer: 2 },
        { question: "What is the capital of Canada?", options: ["Toronto", "Montreal", "Ottawa", "Vancouver"], answer: 2 },
        { question: "Which country is not a member of NATO?", options: ["France", "Germany", "Sweden", "United States"], answer: 2 },
        { question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: 1 },
        { question: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "South Korea", "Japan", "Thailand"], answer: 2 },
        { question: "What is the currency of Japan?", options: ["Won", "Yen", "Ringgit", "Baht"], answer: 1 },
        { question: "Which country has the most time zones?", options: ["United States", "Russia", "China", "Australia"], answer: 1 },
        { question: "What is the smallest country in the world?", options: ["Monaco", "Maldives", "Vatican City", "San Marino"], answer: 2 },
        { question: "Which country is not in Africa?", options: ["Egypt", "Algeria", "Iran", "Nigeria"], answer: 2 },
        { question: "What is the capital of South Africa?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], answer: 2 }
    ]
};

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('[data-target]').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        document.getElementById(targetId).classList.add('active');
        
        document.querySelector('.nav-links').classList.remove('active');
        
        if (targetId === 'quiz-setup') {
            resetForm();
        }
        
        if (targetId === 'scores') {
            updateLeaderboard();
        }
    });
});

function resetForm() {
    document.getElementById('playerName').value = '';
    document.getElementById('quizCategory').value = '';
    document.getElementById('difficulty').value = '';
    validateForm();
}

const playerName = document.getElementById('playerName');
const quizCategory = document.getElementById('quizCategory');
const difficulty = document.getElementById('difficulty');
const startBtn = document.getElementById('startBtn');

function validateForm() {
    if (playerName.value && quizCategory.value && difficulty.value) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
}

playerName.addEventListener('input', validateForm);
quizCategory.addEventListener('change', validateForm);
difficulty.addEventListener('change', validateForm);

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let startTime;
let timePerQuestion = [];
let selectedOptions = {};

startBtn.addEventListener('click', function() {
    const category = quizCategory.value;
    
    const allQuestions = [...quizData[category]];
    currentQuestions = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        currentQuestions.push(allQuestions[randomIndex]);
        allQuestions.splice(randomIndex, 1);
    }
    
    currentQuestionIndex = 0;
    score = 0;
    timePerQuestion = [];
    selectedOptions = {};
    
    document.getElementById('player-name-display').textContent = playerName.value;
    document.getElementById('category-display').textContent = category;
    document.getElementById('difficulty-display').textContent = difficulty.value;
    document.getElementById('total-q').textContent = '10';
    document.getElementById('current-q').textContent = '1';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('current-score').textContent = '0';
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('quiz-engine').classList.add('active');
    
    displayQuestion();
});

function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.setAttribute('data-option', index);
        optionElement.textContent = option;
        
        if (selectedOptions[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', selectOption);
        optionsGrid.appendChild(optionElement);
    });
    
    const progress = (currentQuestionIndex / 10) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('current-q').textContent = currentQuestionIndex + 1;
    
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById('time-left').textContent = timeLeft;
    startTimer();
    
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
}

function startTimer() {
    startTime = new Date();
    
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectOption() {
    clearInterval(timer);
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    this.classList.add('selected');
    const selectedOption = parseInt(this.getAttribute('data-option'));
    
    selectedOptions[currentQuestionIndex] = selectedOption;
    
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    timePerQuestion[currentQuestionIndex] = timeTaken;
   
    const question = currentQuestions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
        this.classList.add('correct');
        document.getElementById('current-score').textContent = score;
    } else {
        this.classList.add('incorrect');
        
        document.querySelector(`.option[data-option="${question.answer}"]`).classList.add('correct');
    }
    
   
    document.querySelectorAll('.option').forEach(opt => {
        opt.removeEventListener('click', selectOption);
    });
}


document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);

function nextQuestion() {
    clearInterval(timer);
    
    if (currentQuestionIndex < 9) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
       
        showScoreSummary();
    }
}

function prevQuestion() {
    clearInterval(timer);
    
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}


function showScoreSummary() {
    
    const totalTime = timePerQuestion.reduce((sum, time) => sum + time, 0);
    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime % 60);
    const totalTimeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    
    const fastestTime = Math.min(...timePerQuestion).toFixed(1);
    
   
    document.getElementById('final-score').textContent = `${(score / 10 * 100).toFixed(0)}%`;
    document.getElementById('correct-answers').textContent = `${score}/10`;
    document.getElementById('total-time').textContent = totalTimeFormatted;
    document.getElementById('fastest-answer').textContent = `${fastestTime}s`;
    document.getElementById('summary-category').textContent = quizCategory.value;
    
 
    const motivation = document.getElementById('motivation-message');
    motivation.className = 'motivation ';
    if (score >= 8) {
        motivation.textContent = 'Quiz Champion! 🏆';
        motivation.classList.add('champion');
    } else if (score >= 5) {
        motivation.textContent = 'Great Job! 👍';
        motivation.classList.add('good');
    } else {
        motivation.textContent = 'Keep Practicing! 💪';
        motivation.classList.add('improve');
    }
    
  
    saveScore();
    
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('score-summary').classList.add('active');
}


function saveScore() {
    const playerData = {
        name: playerName.value,
        category: quizCategory.value,
        difficulty: difficulty.value,
        score: (score / 10 * 100).toFixed(0),
        correct: score,
        total: 10,
        date: new Date().toLocaleDateString(),
        time: timePerQuestion.reduce((sum, time) => sum + time, 0).toFixed(1)
    };
    
    
    const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    scores.push(playerData);
    localStorage.setItem('quizScores', JSON.stringify(scores));
}


function updateLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';
    
    
    const sortBy = document.querySelector('.sort-btn.active').getAttribute('data-sort');
    let sortedScores = [...scores];
    
    if (sortBy === 'score') {
        sortedScores.sort((a, b) => b.score - a.score);
    } else if (sortBy === 'time') {
        sortedScores.sort((a, b) => a.time - b.time);
    } else if (sortBy === 'date') {
        sortedScores.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
   
    sortedScores.slice(0, 10).forEach((score, index) => {
        const row = document.createElement('tr');
        
       
        const nameCell = document.createElement('td');
        if (index === 0) {
            nameCell.innerHTML = `<i class="fas fa-crown" style="color: gold;"></i> ${score.name}`;
        } else {
            nameCell.textContent = score.name;
        }
        
        row.appendChild(nameCell);
        row.innerHTML += `
            <td>${score.score}%</td>
            <td>${score.time}s</td>
            <td>${score.date}</td>
            <td>${score.category}</td>
        `;
        
        tbody.appendChild(row);
    });
}


document.getElementById('play-again-btn').addEventListener('click', function() {
    resetForm();
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('quiz-setup').classList.add('active');
});


document.getElementById('leaderboard-btn').addEventListener('click', function() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('scores').classList.add('active');
    updateLeaderboard();
});


document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.sort-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
        updateLeaderboard();
    });
});


validateForm();