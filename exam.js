// Phase 1: Question Bank (90 Extracted Board-Relevant MCQs)
const questions = [
    // Page 298, Q11
    { id: 1, q: "Which person has the most executive power in Bangladesh?", opt: ["The President", "The Chief Justice", "The Prime Minister", "The Chief Election Commissioner"], ans: 2 },
    // Page 298, Q12
    { id: 2, q: "In which year was Upazila system in Bangladesh introduced?", opt: ["1983", "1985", "2000", "2009"], ans: 0 },
    // Page 298, Q13
    { id: 3, q: "The party 'P' won 151 seats in Jatiya Sangsad election of Bangladesh. How many reserved women seats will the party get?", opt: ["50", "45", "31", "25"], ans: 2 },
    // Page 298, Q14
    { id: 4, q: "Which one is the administrative power of President?", opt: ["To appoint the Prime Minister", "To start the session of parliament", "To proclaim the emergency", "To appoint the Chief Justice"], ans: 0 },
    // Page 298, Q15
    { id: 5, q: "Which one is the work of judicial department?", opt: ["To keep human rights", "Abuse of law", "Defence", "To create people's support"], ans: 0 },
    // Page 298, Q18
    { id: 6, q: "Mr. Azad is a Joint Secretary as his post. He is the chief of which self-governance?", opt: ["Divisional", "District", "Upazila", "Thana"], ans: 1 },
    // Page 298, Q19
    { id: 7, q: "What is the main aim of Judiciary Department?", opt: ["Protect the independence and sovereignty of a country", "Keep the citizen's personal liberty and right", "To establish the political motto", "To manage the education of all citizens"], ans: 1 },
    // Page 298, Q20
    { id: 8, q: "Who appoints the Attorney General?", opt: ["The President", "The Prime Minister", "The Law Minister", "The Chief Justice"], ans: 0 },
    // Page 298, Q21
    { id: 9, q: "Who dissolved the Parliament by the assent of Prime Minister?", opt: ["Whip of parliament", "Speaker", "Chief Justice", "President"], ans: 3 },
    // Page 298, Q22
    { id: 10, q: "Who is in the highest rank?", opt: ["The Prime Minister", "Justice", "The President", "Law Minister"], ans: 2 },
    // Page 298, Q23
    { id: 11, q: "Freedom of the individuals is protected by which department?", opt: ["The legislature", "The judiciary", "The executive", "The administrative"], ans: 1 },
    // Page 298, Q24
    { id: 12, q: "Who is titular head of the state in the parliamentary system of government?", opt: ["The Prime Minister", "The Speaker", "The President", "The Chief Justice"], ans: 2 },
    // Page 298, Q25
    { id: 13, q: "Bicameral Legislature are—", opt: ["Britain", "India", "Bangladesh", "USA"], ans: 0 },
    // Page 298, Q26
    { id: 14, q: "The reason for which the President can issue ordinances—", opt: ["if the parliament is dissolved", "if there is no session", "if urgent action is required", "All of the above"], ans: 3 },
    // Page 298, Q27
    { id: 15, q: "Government system is the machinery of the state. The significance of this statement is—", opt: ["the state performs its activities through the government", "government is the reflection of the state", "the power of the state is exercised by the government", "All of the above"], ans: 3 },
    // Page 298, Q28
    { id: 16, q: "Defense system build up—", opt: ["combination of navy soldiers", "combination of land forces", "combination of air force", "All of the above"], ans: 3 },
    // Page 298, Q29
    { id: 17, q: "The roles of the political party in the democratic state are—", opt: ["to create public support", "election campaigning", "to develop political consciousness", "All of the above"], ans: 3 },
    // Page 299, Q31
    { id: 18, q: "Mr. 'X' is an officer of which administration?", opt: ["Upazila administration", "District administration", "Divisional administration", "Central administration"], ans: 1 },
    // Page 299, Q34
    { id: 19, q: "The Speaker is elected by whose votes?", opt: ["Members of parliament", "People", "Journalists", "Minister"], ans: 0 },
    // Page 299, Q35
    { id: 20, q: "Which one will sit in the question marked place? [Diagram: Deputy Commissioner -> ? -> Assistant Secretary]", opt: ["Additional Secretary", "Assistant Secretary", "Senior Secretary", "Joint Secretary"], ans: 2 },
    // Page 299, Q36
    { id: 21, q: "On which year was the Upazila system introduced?", opt: ["1983", "1985", "1998", "2009"], ans: 0 },
    // Page 300, Q50
    { id: 22, q: "What is the department that manages the administration of the state called?", opt: ["Legislative Department", "Executive Department", "Judiciary Department", "Legislative Council"], ans: 1 },
    // Page 300, Q51
    { id: 23, q: "The Legislative Department is a part of what?", opt: ["Supreme Court", "Government", "National Parliament", "Executive Department"], ans: 1 },
    // Page 300, Q52
    { id: 24, q: "Which of the following is the function of the Legislative Department?", opt: ["Establishing justice", "Enacting laws", "Punishing lawbreakers", "Managing administrative and official work"], ans: 1 },
    // Page 300, Q53
    { id: 25, q: "Which department implements the decisions and the development activities of the state?", opt: ["Administrative department", "Law department", "Judiciary", "Supreme Court"], ans: 0 },
    // Page 300, Q54
    { id: 26, q: "Which one is the example for a state consisting of a two-house legislature?", opt: ["India", "Nepal", "South Africa", "Bhutan"], ans: 0 },
    // Page 300, Q55
    { id: 27, q: "Who controls the executive body of the state?", opt: ["Legislature", "Chief Justice", "President", "Secretary"], ans: 0 },
    // Page 300, Q56
    { id: 28, q: "Which one of the following is the function of the legislature?", opt: ["To establish justice", "To frame laws", "To punish the culprits", "To conduct the administrative and secretarial tasks"], ans: 1 },
    // Page 300, Q57
    { id: 29, q: "What is the name of the organ of the government that performs the judicial functions as per the existing laws?", opt: ["Legislature", "Executive", "Judiciary", "Executive"], ans: 2 },
    // Page 300, Q58
    { id: 30, q: "The functions of the executive are —", opt: ["To conduct administrative tasks", "To maintain law and order", "To perform judicial functions", "i, ii & iii"], ans: 0 },
    // Page 300, Q59
    { id: 31, q: "The government is formed —", opt: ["To run the state", "To maintain law and order", "To run different departments", "i, ii & iii"], ans: 3 },
    // Page 300, Q60
    { id: 32, q: "Important function(s) of the government is/are —", opt: ["Maintaining the administration", "Enacting laws", "Establishing justice", "i, ii & iii"], ans: 3 },
    // Page 300, Q61
    { id: 33, q: "A part of the legislative body is —", opt: ["Legislature", "Executive", "Parliament", "i, ii & iii"], ans: 2 },
    // Page 300, Q62
    { id: 34, q: "Bi-cameral legislature includes —", opt: ["House of the Lord", "House of the Commons", "General Council", "i & ii"], ans: 0 },
    // Page 302, Q78
    { id: 35, q: "Important functions performed by the president—", opt: ["Maintaining administrative tasks", "Enactment of laws", "Formation of the government", "i, ii & iii"], ans: 3 },
    // Page 302, Q79
    { id: 36, q: "Function(s) of the president is/are—", opt: ["Appointment of the ministers and distribution of the portfolios", "Protecting the right of the members of parliament", "Calling the parliamentary session", "i, ii & iii"], ans: 2 },
    // Page 302, Q80
    { id: 37, q: "The president appoints—", opt: ["Chief Justice of the Supreme Court", "Judges of the Supreme Court", "Government higher officials", "i, ii & iii"], ans: 3 },
    // Page 302, Q81
    { id: 38, q: "In relation to the prime minister it is applicable that —", opt: ["He/she is the leader of the parliament", "He/she is the leader of the cabinet", "He/she is the center of administrative system", "i, ii & iii"], ans: 3 },
    // Page 302, Q85
    { id: 39, q: "Before the twelfth amendment in the constitution, which form of government was in the country?", opt: ["Undemocratic military rule", "Democratic rule", "Democratic rule", "Zamindari system"], ans: 0 },
    // Page 302, Q86
    { id: 40, q: "What is the name of the legislature of Bangladesh?", opt: ["National Parliament", "Congress", "Parliament", "Majlish"], ans: 0 },
    // Page 302, Q87
    { id: 41, q: "What does the resignation of the prime minister mean?", opt: ["Resignation of the President", "Resignation of the Prime Minister only", "Resignation of the entire cabinet", "Resignation of the MPs"], ans: 2 },
    // Page 302, Q88
    { id: 42, q: "When was the 12th amendment of the constitution made?", opt: ["1981", "1991", "2001", "2011"], ans: 1 },
    // Page 302, Q89
    { id: 43, q: "Parliamentary form of government system was introduced in Bangladesh amendment through which amendment?", opt: ["11th", "12th", "13th", "14th"], ans: 1 },
    // Page 302, Q90
    { id: 44, q: "Which section of the constitution mentions that National Parliament of Bangladesh shall be named as Jatiya Sangsad?", opt: ["59", "53", "59", "65"], ans: 3 },
    // Page 302, Q91
    { id: 45, q: "Whose approval is required for the utilization of the state funds?", opt: ["Prime Minister", "Finance Minister", "President", "Jatiya Sangsad"], ans: 1 },
    // Page 304, Q109
    { id: 46, q: "Which one is the latest division?", opt: ["Rangpur", "Sylhet", "Cumilla", "Mymensingh"], ans: 3 },
    // Page 304, Q110
    { id: 47, q: "The head of the department is known as —", opt: ["Director general", "Secretary", "Director", "Deputy secretary"], ans: 0 },
    // Page 304, Q111
    { id: 48, q: "Which one is at the center of the administrative system of Bangladesh?", opt: ["Jatiya Sangsad", "Ganabhaban", "Secretariat", "Divisional administration"], ans: 2 },
    // Page 304, Q112
    { id: 49, q: "Mr. Shamsul Haque is serving as the chief executive officer or administrative officer of the ministry. What position does he belong to?", opt: ["Secretary", "Additional Secretary", "Director General", "Minister"], ans: 0 },
    // Page 304, Q113
    { id: 50, q: "In order to run the ministry, the minister takes into consideration whose opinion?", opt: ["Secretary", "President", "Prime Minister", "Attorney General"], ans: 0 },
    // Page 304, Q118
    { id: 51, q: "Mr. Zahir is an upazila officer. What is the designation of Mr. Zahir?", opt: ["Additional secretary", "Deputy secretary", "Assistant secretary", "Joint secretary"], ans: 2 },
    // Page 304, Q119
    { id: 52, q: "The workplace of Mr. Zahir is —", opt: ["Ministry", "Secretariat", "High Court", "Ministry"], ans: 1 },
    // Page 305, Q121
    { id: 53, q: "Whose position is next to the divisional commissioner?", opt: ["Senior assistant secretary", "Assistant secretary", "Joint secretary", "District commissioner"], ans: 3 },
    // Page 305, Q122
    { id: 54, q: "Which one of the following has the connection with the central administration?", opt: ["Local government", "Upazila administration", "District administration", "Divisional commissioner"], ans: 3 },
    // Page 305, Q123
    { id: 55, q: "Where are all district related decisions made by the Secretariat sent to?", opt: ["Divisional commissioner", "District administration", "Straight to the divisional commissioner", "Straight to the district commissioner"], ans: 0 },
    // Page 305, Q124
    { id: 56, q: "Deputy commissioner is accountable for his/her works to —", opt: ["Central government", "MPs", "Divisional commissioner", "Government"], ans: 2 },
    // Page 305, Q125
    { id: 57, q: "Who imposes and collects land revenues and other taxes of the district?", opt: ["Divisional commissioner", "Additional divisional commissioner", "Assistant secretary", "District commissioner"], ans: 3 },
    // Page 305, Q127
    { id: 58, q: "Salauddin Ahmed is an administrative officer. He discharges the duties at the supervisor of the Upazila Parishad and the union parishad. What is his designation?", opt: ["Divisional commissioner", "Upazilanirbahi officer", "District commissioner", "Additional secretary"], ans: 1 },
    // Page 305, Q131
    { id: 59, q: "According to the passage, the function(s) of the district commissioner is/are —", opt: ["Collecting revenues", "Maintaining law and order", "Enacting laws", "i & ii"], ans: 0 },
    // Page 305, Q132
    { id: 60, q: "The district commissioner is an administrator and a judge as well because —", opt: ["He/she performs judicial tasks for criminal cases", "He/she performs judicial tasks for civil cases", "He/she performs all penal cases and the cases related to law and order", "He/she maintains law and order"], ans: 2 },
    // Page 306, Q137
    { id: 61, q: "Union Parishad local government system was introduced in Bangladesh in which year?", opt: ["1885", "1919", "1976", "1997"], ans: 0 },
    // Page 306, Q139
    { id: 62, q: "In which year was major change brought in the structure of Union Council?", opt: ["1976", "1985", "1997", "1998"], ans: 2 },
    // Page 306, Q140
    { id: 63, q: "Which one structure is applicable in terms of the formation of Union Parishad?", opt: ["1 chairman + 8 members", "1 chairman + 9 members", "1 chairman + 9 members + 4 women members", "1 chairman + 9 members + 3 women members"], ans: 3 },
    // Page 306, Q141
    { id: 64, q: "In the context of present Bangladesh, which organization of the local autonomous government is considered most effective?", opt: ["Village government", "Union Parishad", "Upazila administration", "Divisional administration"], ans: 1 },
    // Page 306, Q142
    { id: 65, q: "Mr. Aslam works with 13 members at the local autonomous organization. Which organization has he been mentioned here?", opt: ["Upazila Council", "District parishad", "Union Council", "Village parishad"], ans: 2 },
    // Page 306, Q143
    { id: 66, q: "How many general members of a ward are elected by the voters?", opt: ["One", "Two", "Three", "Nine"], ans: 0 },
    // Page 306, Q144
    { id: 67, q: "A woman member is elected in how many wards?", opt: ["2 wards", "3 wards", "4 wards", "5 wards"], ans: 1 },
    // Page 306, Q145
    { id: 68, q: "What is the tenure of the Union Council?", opt: ["4 years", "5 years", "6 years", "8 years"], ans: 1 },
    // Page 307, Q158
    { id: 69, q: "On which date was the District Council Law-2000 introduced?", opt: ["April 6", "May 6", "July 6", "August 6"], ans: 1 },
    // Page 307, Q159
    { id: 70, q: "The district council performs the development tasks for its local people —", opt: ["Religious", "Ethical", "Materialistic", "i, ii & iii"], ans: 2 },
    // Page 307, Q160
    { id: 71, q: "Optional function of the district council includes —", opt: ["Establishing healthcare centers", "Supplying water for irrigation", "Improving the communication system", "i, ii & iii"], ans: 3 },
    // Page 307, Q161
    { id: 72, q: "Mandatory function of the district council includes —", opt: ["Observing all the development tasks of the district", "Providing wages of the educational institutes", "Planting trees besides the roads for the people", "i & ii"], ans: 0 },
    // Page 307, Q162
    { id: 73, q: "What is the top official of the district council like Mr. Babui is called?", opt: ["Mayor", "Chairman", "District commissioner", "Councilor"], ans: 1 },
    // Page 307, Q163
    { id: 74, q: "Optional function of Mr. Babui includes —", opt: ["Giving license", "Social welfare", "Economic development", "i, ii & iii"], ans: 3 },
    // Page 307, Q164
    { id: 75, q: "Through the legal means the Dhaka City Corporation has been divided into how many parts?", opt: ["Two", "Three", "Four", "Five"], ans: 0 },
    // Page 307, Q165
    { id: 76, q: "Which organization manages the tasks related to fire controlling and fire safety?", opt: ["Pourashava", "Upazilaparishad", "District parishad", "Union parishad"], ans: 0 },
    // Page 307, Q166
    { id: 77, q: "In the pourashava area the buildings are constructed based on what approved plan?", opt: ["District parishad", "Upazila parishad", "Pourashava", "Union parishad"], ans: 2 },
    // Page 307, Q167
    { id: 78, q: "For the overall development in the city area which organization prepares and implements various projects?", opt: ["City corporation", "District parishad", "Upazila parishad", "Pourashava"], ans: 0 },
    // Page 307, Q168
    { id: 79, q: "Narsingdi is a district. Which one may be available in this district?", opt: ["High Court", "City corporation", "Pourashava", "Divisional administration"], ans: 2 },
    // Page 307, Q169
    { id: 80, q: "Due to local administrative system, local development has been possible—", opt: ["Not to face the central government", "To be free from the bureaucratic complexities", "To be free from law related complexities", "i, ii & iii"], ans: 3 },
    // Page 307, Q170
    { id: 81, q: "Social welfare related function of the pourashava is—", opt: ["Establishing delivery centers", "Establishing welfare centers", "Establishing orphanages", "i, ii & iii"], ans: 3 },
    // Page 307, Q171
    { id: 82, q: "Pourashava can adopt arbitration-related initiative to resolve—", opt: ["Family problems", "Quarrelling", "Fighting and aggression", "i, ii & iii"], ans: 3 },
    // Page 307, Q172
    { id: 83, q: "City corporation has been established —", opt: ["To resolve various problems of the city dwellers", "To increase the benefits of the city dwellers", "To ensure overall development of the city", "i, ii & iii"], ans: 3 },
    // Page 307, Q173
    { id: 84, q: "Education related function of the pourashava is —", opt: ["Imparting training to the teachers", "Construction of hotels", "Distributing books at free of cost", "i & ii"], ans: 2 },
    // Page 308, Q176
    { id: 85, q: "The work of Judiciary is —", opt: ["establishing the rule of law", "preserving Fundamental Rights Protection Act", "explaining the law", "i and ii"], ans: 0 },
    // Page 308, Q177
    { id: 86, q: "To manage the finances and resources of the state properly is —", opt: ["mandatory work", "functions of Governance department", "work of the legal department", "i and ii"], ans: 1 },
    // Page 308, Q179
    { id: 87, q: "The mentioned component is composed of—", opt: ["the law department", "the governance department", "the judicial department", "ii and iii"], ans: 1 },
    // Page 308, Q180
    { id: 88, q: "What kind of work of the state has been indicated by the stem?", opt: ["Mandatory or main", "Welfare", "Optional", "Involuntary"], ans: 0 },
    // Page 309, Q4 (SSC Previous Year)
    { id: 89, q: "Mr. 'Y' is a member of an organization that includes three reserved female members. The organization of Mr. 'Y' is —", opt: ["Municipality", "Union Council", "Upazila Council", "District Council"], ans: 1 },
    // Page 309, Q8 (SSC Previous Year)
    { id: 90, q: "Which country's legislature is unicameral?", opt: ["Bangladesh", "India", "United Kingdom", "United States"], ans: 0 }
];

// Phase 2: JavaScript Application Logic
let userAnswers = new Array(questions.length).fill(null);
let currentIndex = 0;
let isSubmitted = false;
let timerInterval = null;
let timeLeft = 0;

// DOM Elements
const landingPage = document.getElementById('landing-page');
const examPage = document.getElementById('exam-page');
const resultPage = document.getElementById('result-page');
const previousResultsPage = document.getElementById('previous-results-page');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const viewResultsBtn = document.getElementById('view-results-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const previousResultsBody = document.getElementById('previous-results-body');
const noResultsMsg = document.getElementById('no-results-msg');


// Validation and Start
document.getElementById('start-exam-btn').addEventListener('click', () => {
    const name = document.getElementById('studentName').value.trim();
    const roll = document.getElementById('examNumber').value.trim();
    const subject = document.getElementById('subject').value.trim();

    if (!name || !roll || !subject) {
        alert("Please fill in all fields (Name, Roll/ID, Subject) before starting the exam.");
        return;
    }

    localStorage.setItem('studentName', name);
    localStorage.setItem('examNumber', roll);
    localStorage.setItem('subject', subject);

    landingPage.style.display = 'none';
    examPage.style.display = 'flex';
    document.getElementById('exam-instruction-card').style.display = 'block';
    document.getElementById('exam-interface').style.display = 'none';
    resultPage.style.display = 'none';
    if (previousResultsPage) previousResultsPage.style.display = 'none';

    document.getElementById('instruction-name').textContent = name;
    document.getElementById('instruction-roll').textContent = roll;
});

document.getElementById('begin-exam-btn').addEventListener('click', () => {
    document.getElementById('exam-instruction-card').style.display = 'none';
    document.getElementById('exam-interface').style.display = 'flex';

    totalQNum.textContent = questions.length;
    renderQuestion(0);
    startTimer();
});

// Rendering Logic
function renderQuestion(index) {
    if (isSubmitted) return;
    const q = questions[index];
    questionText.textContent = `${q.id}. ${q.q}`;
    currentQNum.textContent = index + 1;
    
    // Update Header Info
    document.getElementById('display-name').textContent = `Name: ${localStorage.getItem('studentName')}`;
    document.getElementById('display-roll').textContent = `Roll: ${localStorage.getItem('examNumber')}`;

    optionsContainer.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    
    q.opt.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        if (userAnswers[index] === i) div.classList.add('selected');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `q${q.id}`;
        radio.value = i;
        radio.checked = userAnswers[index] === i;

        radio.addEventListener('change', () => {
            userAnswers[index] = i;
            document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
        });

        const span = document.createElement('span');
        span.textContent = `${labels[i]}. ${opt}`;

        div.appendChild(radio);
        div.appendChild(span);
        
        div.addEventListener('click', () => {
            radio.checked = true;
            radio.dispatchEvent(new Event('change'));
        });

        optionsContainer.appendChild(div);
    });

    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = index === questions.length - 1 ? 'Finish' : 'Next';
}

// Navigation
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
    } else {
        document.getElementById('submit-exam-btn').click();
    }
});

// Timer Logic
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timeLeft = 85 * 60; // 1 hour 25 mins in seconds
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSubmitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        const hStr = String(hours).padStart(2, '0');
        const mStr = String(minutes).padStart(2, '0');
        const sStr = String(seconds).padStart(2, '0');
        timerDisplay.textContent = `${hStr}:${mStr}:${sStr}`;

        // Change color to danger if less than 5 minutes left
        if (timeLeft < 300) {
            timerDisplay.parentElement.style.color = 'var(--danger)';
            timerDisplay.parentElement.style.borderColor = 'var(--danger)';
        } else {
            timerDisplay.parentElement.style.color = 'var(--primary)';
            timerDisplay.parentElement.style.borderColor = 'transparent';
        }
    }
}

function autoSubmitExam() {
    alert("Time is up! Your exam will be submitted automatically.");
    isSubmitted = true;
    calculateAndShowResults();
}

// Submission and Results
document.getElementById('submit-exam-btn').addEventListener('click', () => {
    if (isSubmitted) return;
    
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered === questions.length) {
        alert("You haven't answered any questions. Please attempt at least one question before submitting.");
        return;
    }

    if (confirm("Are you sure you want to submit your exam? You cannot change your answers afterward.")) {
        isSubmitted = true;
        if (timerInterval) clearInterval(timerInterval);
        calculateAndShowResults();
    }
});

function saveAttempt(name, roll, score, total) {
    let attempts = JSON.parse(localStorage.getItem('examAttempts')) || [];
    attempts.push({
        name: name,
        roll: roll,
        score: score.toFixed(1),
        total: total,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('examAttempts', JSON.stringify(attempts));
}

function calculateAndShowResults() {
    if (timerInterval) clearInterval(timerInterval);
    let correct = 0;
    let wrong = 0;
    let attempted = 0;

    userAnswers.forEach((ans, index) => {
        if (ans !== null) {
            attempted++;
            if (ans === questions[index].ans) {
                correct++;
            } else {
                wrong++;
            }
        }
    });

    const unanswered = questions.length - attempted;
    const positiveMarks = correct;
    const wrongPenalty = wrong * 0.5;
    const unansweredPenalty = unanswered * 0.7;
    const negativeMarks = wrongPenalty + unansweredPenalty;
    const finalScore = positiveMarks - negativeMarks;

    const studentName = localStorage.getItem('studentName');
    const examNumber = localStorage.getItem('examNumber');
    const subjectName = localStorage.getItem('subject');

    // Fill result page
    document.getElementById('res-name').textContent = studentName;
    document.getElementById('res-roll').textContent = examNumber;
    document.getElementById('res-subject').textContent = subjectName;

    document.getElementById('res-total').textContent = questions.length;
    document.getElementById('res-attempted').textContent = attempted;
    document.getElementById('res-correct').textContent = correct;
    document.getElementById('res-wrong').textContent = wrong;
    document.getElementById('res-unanswered').textContent = unanswered;
    document.getElementById('res-pos').textContent = positiveMarks.toFixed(1);
    document.getElementById('res-wrong-penalty').textContent = wrongPenalty.toFixed(1);
    document.getElementById('res-unanswered-penalty').textContent = unansweredPenalty.toFixed(1);
    document.getElementById('res-neg').textContent = negativeMarks.toFixed(1);
    document.getElementById('res-final-score').textContent = finalScore.toFixed(1);

    // Save history
    saveAttempt(studentName, examNumber, finalScore, questions.length);

    examPage.style.display = 'none';
    resultPage.style.display = 'flex';
}

// Restart
document.getElementById('restart-btn').addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    userAnswers = new Array(questions.length).fill(null);
    currentIndex = 0;
    isSubmitted = false;
    resultPage.style.display = 'none';
    landingPage.style.display = 'flex';
    document.getElementById('studentName').value = '';
    document.getElementById('examNumber').value = '';
});

// Previous Results View Logic
function showPreviousResults() {
    landingPage.style.display = 'none';
    previousResultsPage.style.display = 'flex';
    
    const attempts = JSON.parse(localStorage.getItem('examAttempts')) || [];
    previousResultsBody.innerHTML = '';
    
    if (attempts.length === 0) {
        document.querySelector('.results-table').style.display = 'none';
        noResultsMsg.style.display = 'block';
    } else {
        document.querySelector('.results-table').style.display = 'table';
        noResultsMsg.style.display = 'none';
        
        // Display newest first
        attempts.slice().reverse().forEach(attempt => {
            const tr = document.createElement('tr');
            
            const tdName = document.createElement('td');
            tdName.textContent = attempt.name;
            
            const tdRoll = document.createElement('td');
            tdRoll.textContent = attempt.roll;
            
            const tdScore = document.createElement('td');
            tdScore.textContent = `${attempt.score} / ${attempt.total}`;
            
            const tdTime = document.createElement('td');
            tdTime.textContent = attempt.timestamp;
            
            tr.appendChild(tdName);
            tr.appendChild(tdRoll);
            tr.appendChild(tdScore);
            tr.appendChild(tdTime);
            
            previousResultsBody.appendChild(tr);
        });
    }
}

if (viewResultsBtn) {
    viewResultsBtn.addEventListener('click', () => {
        showPreviousResults();
    });
}

if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', () => {
        previousResultsPage.style.display = 'none';
        landingPage.style.display = 'flex';
    });
}


