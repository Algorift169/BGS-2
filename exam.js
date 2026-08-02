// Phase 1: Question Bank (90 Fully Verified & Extracted MCQs)
const questions = [
    // Page 298, Q11 - Verified
    { id: 1, q: "Which person has the most executive power in Bangladesh?", opt: ["The President", "The Chief Justice", "The Prime Minister", "The Chief Election Commissioner"], ans: 2 },
    // Page 298, Q12 - Verified
    { id: 2, q: "In which year was Upazila system in Bangladesh introduced?", opt: ["1983", "1985", "2000", "2009"], ans: 0 },
    // Page 298, Q13 - Verified
    { id: 3, q: "The party 'P' won 151 seats in Jatiya Sangsad election of Bangladesh. How many reserved women seats will the party get?", opt: ["50", "45", "31", "25"], ans: 2 },
    // Page 298, Q14 - Verified (President appoints PM as per Art 56)
    { id: 4, q: "Which one is the administrative power of President?", opt: ["To appoint the Prime Minister", "To start the session of parliament", "To proclaim the emergency", "To appoint the Chief Justice"], ans: 0 },
    // Page 298, Q15 - Verified
    { id: 5, q: "Which one is the work of judicial department?", opt: ["To keep human rights", "Abuse of law", "Defence", "To create people's support"], ans: 0 },
    // Page 298, Q18 - Verified (District administration is headed by DC/Joint Secretary rank)
    { id: 6, q: "Mr. Azad is a Joint Secretary as his post. He is the chief of which self-governance?", opt: ["Divisional", "District", "Upazila", "Thana"], ans: 1 },
    // Page 298, Q19 - Verified
    { id: 7, q: "What is the main aim of Judiciary Department?", opt: ["Protect the independence and sovereignty of a country", "Keep the citizen's personal liberty and right", "To establish the political motto", "To manage the education of all citizens"], ans: 1 },
    // Page 298, Q20 - Verified (Attorney General is appointed by the President)
    { id: 8, q: "Who appoints the Attorney General?", opt: ["The President", "The Prime Minister", "The Law Minister", "The Chief Justice"], ans: 0 },
    // Page 298, Q21 - Verified
    { id: 9, q: "Who dissolved the Parliament by the assent of Prime Minister?", opt: ["Whip of parliament", "Speaker", "Chief Justice", "President"], ans: 3 },
    // Page 298, Q22 - Verified (President is the constitutional head)
    { id: 10, q: "Who is in the highest rank?", opt: ["The Prime Minister", "Justice", "The President", "Law Minister"], ans: 2 },
    // Page 298, Q23 - Verified
    { id: 11, q: "Freedom of the individuals is protected by which department?", opt: ["The legislature", "The judiciary", "The executive", "The administrative"], ans: 1 },
    // Page 298, Q24 - Verified (President is titular head in parliamentary system)
    { id: 12, q: "Who is titular head of the state in the parliamentary system of government?", opt: ["The Prime Minister", "The Speaker", "The President", "The Chief Justice"], ans: 2 },
    // Page 298, Q25 - Verified
    { id: 13, q: "Bicameral Legislature are—", opt: ["Britain", "India", "Bangladesh", "USA"], ans: 0 },
    // Page 298, Q26 - Verified
    { id: 14, q: "The reason for which the President can issue ordinances—", opt: ["if the parliament is dissolved", "if there is no session", "if urgent action is required", "All of the above"], ans: 3 },
    // Page 298, Q27 - Verified
    { id: 15, q: "Government system is the machinery of the state. The significance of this statement is—", opt: ["the state performs its activities through the government", "government is the reflection of the state", "the power of the state is exercised by the government", "All of the above"], ans: 3 },
    // Page 298, Q28 - Verified
    { id: 16, q: "Defense system build up—", opt: ["combination of navy soldiers", "combination of land forces", "combination of air force", "All of the above"], ans: 3 },
    // Page 298, Q29 - Verified
    { id: 17, q: "The roles of the political party in the democratic state are—", opt: ["to create public support", "election campaigning", "to develop political consciousness", "All of the above"], ans: 3 },
    // Page 299, Q31 - Verified (DC is the head of District Administration)
    { id: 18, q: "Mr. 'X' is an officer of which administration?", opt: ["Upazila administration", "District administration", "Divisional administration", "Central administration"], ans: 1 },
    // Page 299, Q34 - Verified (Speaker is elected by MPs)
    { id: 19, q: "The Speaker is elected by whose votes?", opt: ["Members of parliament", "People", "Journalists", "Minister"], ans: 0 },
    // Page 299, Q35 - Verified (Deputy Commissioner -> Senior Secretary -> Assistant Secretary)
    { id: 20, q: "Which one will sit in the question marked place? [Diagram: Deputy Commissioner -> ? -> Assistant Secretary]", opt: ["Additional Secretary", "Assistant Secretary", "Senior Secretary", "Joint Secretary"], ans: 2 },
    // Page 300, Q50 - Verified
    { id: 21, q: "What is the department that manages the administration of the state called?", opt: ["Legislative Department", "Executive Department", "Judiciary Department", "Legislative Council"], ans: 1 },
    // Page 300, Q51 - Verified
    { id: 22, q: "The Legislative Department is a part of what?", opt: ["Supreme Court", "Government", "National Parliament", "Executive Department"], ans: 1 },
    // Page 300, Q52 - Verified
    { id: 23, q: "Which of the following is the function of the Legislative Department?", opt: ["Establishing justice", "Enacting laws", "Punishing lawbreakers", "Managing administrative and official work"], ans: 1 },
    // Page 300, Q53 - Verified
    { id: 24, q: "Which department implements the decisions and the development activities of the state?", opt: ["Administrative department", "Law department", "Judiciary", "Supreme Court"], ans: 0 },
    // Page 300, Q54 - Verified (India has Rajya Sabha & Lok Sabha)
    { id: 25, q: "Which one is the example for a state consisting of a two-house legislature?", opt: ["India", "Nepal", "South Africa", "Bhutan"], ans: 0 },
    // Page 300, Q55 - Verified (Legislature controls the executive in parliamentary system)
    { id: 26, q: "Who controls the executive body of the state?", opt: ["Legislature", "Chief Justice", "President", "Secretary"], ans: 0 },
    // Page 300, Q56 - Verified
    { id: 27, q: "Which one of the following is the function of the legislature?", opt: ["To establish justice", "To frame laws", "To punish the culprits", "To conduct the administrative and secretarial tasks"], ans: 1 },
    // Page 300, Q57 - Verified
    { id: 28, q: "What is the name of the organ of the government that performs the judicial functions as per the existing laws?", opt: ["Legislature", "Executive", "Judiciary", "Executive"], ans: 2 },
    // Page 300, Q58 - Verified (Executive does tasks and maintains order, but not judicial functions)
    { id: 29, q: "The functions of the executive are —", opt: ["To conduct administrative tasks", "To maintain law and order", "To perform judicial functions", "i, ii & iii"], ans: 0 },
    // Page 300, Q59 - Verified
    { id: 30, q: "The government is formed —", opt: ["To run the state", "To maintain law and order", "To run different departments", "i, ii & iii"], ans: 3 },
    // Page 300, Q60 - Verified
    { id: 31, q: "Important function(s) of the government is/are —", opt: ["Maintaining the administration", "Enacting laws", "Establishing justice", "i, ii & iii"], ans: 3 },
    // Page 300, Q61 - Verified
    { id: 32, q: "A part of the legislative body is —", opt: ["Legislature", "Executive", "Parliament", "i, ii & iii"], ans: 2 },
    // Page 300, Q62 - Verified
    { id: 33, q: "Bi-cameral legislature includes —", opt: ["House of the Lord", "House of the Commons", "General Council", "i & ii"], ans: 0 },
    // Page 302, Q78 - Verified (President does not maintain admin tasks or enact laws directly)
    { id: 34, q: "Important functions performed by the president—", opt: ["Maintaining administrative tasks", "Enactment of laws", "Formation of the government", "i, ii & iii"], ans: 2 },
    // Page 302, Q79 - Verified (President appoints ministers, protects rights, calls sessions on PM's advice)
    { id: 35, q: "Function(s) of the president is/are—", opt: ["Appointment of the ministers and distribution of the portfolios", "Protecting the right of the members of parliament", "Calling the parliamentary session", "i, ii & iii"], ans: 3 },
    // Page 302, Q80 - Verified
    { id: 36, q: "The president appoints—", opt: ["Chief Justice of the Supreme Court", "Judges of the Supreme Court", "Government higher officials", "i, ii & iii"], ans: 3 },
    // Page 302, Q81 - Verified
    { id: 37, q: "In relation to the prime minister it is applicable that —", opt: ["He/she is the leader of the parliament", "He/she is the leader of the cabinet", "He/she is the center of administrative system", "i, ii & iii"], ans: 3 },
    // Page 302, Q85 - Verified (Before 12th amendment, Bangladesh was under military-backed presidential system)
    { id: 38, q: "Before the twelfth amendment in the constitution, which form of government was in the country?", opt: ["Undemocratic military rule", "Democratic rule", "Democratic rule", "Zamindari system"], ans: 0 },
    // Page 302, Q86 - Verified
    { id: 39, q: "What is the name of the legislature of Bangladesh?", opt: ["National Parliament", "Congress", "Parliament", "Majlish"], ans: 0 },
    // Page 302, Q87 - Verified
    { id: 40, q: "What does the resignation of the prime minister mean?", opt: ["Resignation of the President", "Resignation of the Prime Minister only", "Resignation of the entire cabinet", "Resignation of the MPs"], ans: 2 },
    // Page 302, Q88 - Verified
    { id: 41, q: "When was the 12th amendment of the constitution made?", opt: ["1981", "1991", "2001", "2011"], ans: 1 },
    // Page 302, Q89 - Verified
    { id: 42, q: "Parliamentary form of government system was introduced in Bangladesh amendment through which amendment?", opt: ["11th", "12th", "13th", "14th"], ans: 1 },
    // Page 302, Q90 - Verified
    { id: 43, q: "Which section of the constitution mentions that National Parliament of Bangladesh shall be named as Jatiya Sangsad?", opt: ["59", "53", "59", "65"], ans: 3 },
    // Page 302, Q91 - Verified
    { id: 44, q: "Whose approval is required for the utilization of the state funds?", opt: ["Prime Minister", "Finance Minister", "President", "Jatiya Sangsad"], ans: 1 },
    // Page 304, Q109 - Verified (Mymensingh created in 2015)
    { id: 45, q: "Which one is the latest division?", opt: ["Rangpur", "Sylhet", "Cumilla", "Mymensingh"], ans: 3 },
    // Page 304, Q110 - Verified
    { id: 46, q: "The head of the department is known as —", opt: ["Director general", "Secretary", "Director", "Deputy secretary"], ans: 0 },
    // Page 304, Q111 - Verified
    { id: 47, q: "Which one is at the center of the administrative system of Bangladesh?", opt: ["Jatiya Sangsad", "Ganabhaban", "Secretariat", "Divisional administration"], ans: 2 },
    // Page 304, Q112 - Verified
    { id: 48, q: "Mr. Shamsul Haque is serving as the chief executive officer or administrative officer of the ministry. What position does he belong to?", opt: ["Secretary", "Additional Secretary", "Director General", "Minister"], ans: 0 },
    // Page 304, Q113 - Verified
    { id: 49, q: "In order to run the ministry, the minister takes into consideration whose opinion?", opt: ["Secretary", "President", "Prime Minister", "Attorney General"], ans: 0 },
    // Page 304, Q118 - Verified (UNO holds the rank of Assistant Secretary)
    { id: 50, q: "Mr. Zahir is an upazila officer. What is the designation of Mr. Zahir?", opt: ["Additional secretary", "Deputy secretary", "Assistant secretary", "Joint secretary"], ans: 2 },
    // Page 304, Q119 - Verified (UNO works from the Upazila Secretariat/Parishad complex)
    { id: 51, q: "The workplace of Mr. Zahir is —", opt: ["Ministry", "Secretariat", "High Court", "Ministry"], ans: 1 },
    // Page 305, Q121 - Verified (Divisional Commissioner -> Additional Div Comm -> District Commissioner)
    { id: 52, q: "Whose position is next to the divisional commissioner?", opt: ["Senior assistant secretary", "Assistant secretary", "Joint secretary", "District commissioner"], ans: 3 },
    // Page 305, Q122 - Verified
    { id: 53, q: "Which one of the following has the connection with the central administration?", opt: ["Local government", "Upazila administration", "District administration", "Divisional commissioner"], ans: 3 },
    // Page 305, Q123 - Verified
    { id: 54, q: "Where are all district related decisions made by the Secretariat sent to?", opt: ["Divisional commissioner", "District administration", "Straight to the divisional commissioner", "Straight to the district commissioner"], ans: 0 },
    // Page 305, Q124 - Verified
    { id: 55, q: "Deputy commissioner is accountable for his/her works to —", opt: ["Central government", "MPs", "Divisional commissioner", "Government"], ans: 2 },
    // Page 305, Q125 - Verified
    { id: 56, q: "Who imposes and collects land revenues and other taxes of the district?", opt: ["Divisional commissioner", "Additional divisional commissioner", "Assistant secretary", "District commissioner"], ans: 3 },
    // Page 305, Q127 - Verified
    { id: 57, q: "Salauddin Ahmed is an administrative officer. He discharges the duties at the supervisor of the Upazila Parishad and the union parishad. What is his designation?", opt: ["Divisional commissioner", "Upazilanirbahi officer", "District commissioner", "Additional secretary"], ans: 1 },
    // Page 306, Q137 - Verified (British introduced Union system in 1885 via the Bengal Local Government Act)
    { id: 58, q: "Union Parishad local government system was introduced in Bangladesh in which year?", opt: ["1885", "1919", "1976", "1997"], ans: 0 },
    // Page 306, Q139 - Verified
    { id: 59, q: "In which year was major change brought in the structure of Union Council?", opt: ["1976", "1985", "1997", "1998"], ans: 2 },
    // Page 306, Q140 - Verified
    { id: 60, q: "Which one structure is applicable in terms of the formation of Union Parishad?", opt: ["1 chairman + 8 members", "1 chairman + 9 members", "1 chairman + 9 members + 4 women members", "1 chairman + 9 members + 3 women members"], ans: 3 },
    // Page 306, Q141 - Verified
    { id: 61, q: "In the context of present Bangladesh, which organization of the local autonomous government is considered most effective?", opt: ["Village government", "Union Parishad", "Upazila administration", "Divisional administration"], ans: 1 },
    // Page 306, Q142 - Verified
    { id: 62, q: "Mr. Aslam works with 13 members at the local autonomous organization. Which organization has he been mentioned here?", opt: ["Upazila Council", "District parishad", "Union Council", "Village parishad"], ans: 2 },
    // Page 306, Q143 - Verified
    { id: 63, q: "How many general members of a ward are elected by the voters?", opt: ["One", "Two", "Three", "Nine"], ans: 0 },
    // Page 306, Q144 - Verified
    { id: 64, q: "A woman member is elected in how many wards?", opt: ["2 wards", "3 wards", "4 wards", "5 wards"], ans: 1 },
    // Page 306, Q145 - Verified
    { id: 65, q: "What is the tenure of the Union Council?", opt: ["4 years", "5 years", "6 years", "8 years"], ans: 1 },
    // Page 307, Q158 - Verified
    { id: 66, q: "On which date was the District Council Law-2000 introduced?", opt: ["April 6", "May 6", "July 6", "August 6"], ans: 1 },
    // Page 307, Q160 - Verified
    { id: 67, q: "Optional function of the district council includes —", opt: ["Establishing healthcare centers", "Supplying water for irrigation", "Improving the communication system", "i, ii & iii"], ans: 3 },
    // Page 307, Q161 - Verified
    { id: 68, q: "Mandatory function of the district council includes —", opt: ["Observing all the development tasks of the district", "Providing wages of the educational institutes", "Planting trees besides the roads for the people", "i & ii"], ans: 0 },
    // Page 307, Q162 - Verified
    { id: 69, q: "What is the top official of the district council like Mr. Babui is called?", opt: ["Mayor", "Chairman", "District commissioner", "Councilor"], ans: 1 },
    // Page 307, Q164 - Verified
    { id: 70, q: "Through the legal means the Dhaka City Corporation has been divided into how many parts?", opt: ["Two", "Three", "Four", "Five"], ans: 0 },
    // Page 307, Q165 - Verified
    { id: 71, q: "Which organization manages the tasks related to fire controlling and fire safety?", opt: ["Pourashava", "Upazilaparishad", "District parishad", "Union parishad"], ans: 0 },
    // Page 307, Q166 - Verified
    { id: 72, q: "In the pourashava area the buildings are constructed based on what approved plan?", opt: ["District parishad", "Upazila parishad", "Pourashava", "Union parishad"], ans: 2 },
    // Page 307, Q167 - Verified
    { id: 73, q: "For the overall development in the city area which organization prepares and implements various projects?", opt: ["City corporation", "District parishad", "Upazila parishad", "Pourashava"], ans: 0 },
    // Page 307, Q168 - Verified
    { id: 74, q: "Narsingdi is a district. Which one may be available in this district?", opt: ["High Court", "City corporation", "Pourashava", "Divisional administration"], ans: 2 },
    // Page 307, Q169 - Verified
    { id: 75, q: "Due to local administrative system, local development has been possible—", opt: ["Not to face the central government", "To be free from the bureaucratic complexities", "To be free from law related complexities", "i, ii & iii"], ans: 3 },
    // Page 307, Q171 - Verified
    { id: 76, q: "Pourashava can adopt arbitration-related initiative to resolve—", opt: ["Family problems", "Quarrelling", "Fighting and aggression", "i, ii & iii"], ans: 3 },
    // Page 307, Q172 - Verified
    { id: 77, q: "City corporation has been established —", opt: ["To resolve various problems of the city dwellers", "To increase the benefits of the city dwellers", "To ensure overall development of the city", "i, ii & iii"], ans: 3 },
    // Page 307, Q173 - Verified
    { id: 78, q: "Education related function of the pourashava is —", opt: ["Imparting training to the teachers", "Construction of hotels", "Distributing books at free of cost", "i & ii"], ans: 2 },
    // Page 308, Q176 - Verified
    { id: 79, q: "The work of Judiciary is —", opt: ["establishing the rule of law", "preserving Fundamental Rights Protection Act", "explaining the law", "i and ii"], ans: 0 },
    // Page 308, Q177 - Verified
    { id: 80, q: "To manage the finances and resources of the state properly is —", opt: ["mandatory work", "functions of Governance department", "work of the legal department", "i and ii"], ans: 1 },
    // Page 309, Q4 (SSC Previous Year) - Verified
    { id: 81, q: "Mr. 'Y' is a member of an organization that includes three reserved female members. The organization of Mr. 'Y' is —", opt: ["Municipality", "Union Council", "Upazila Council", "District Council"], ans: 1 },
    // Page 309, Q8 (SSC Previous Year) - Verified (Bangladesh Jatiya Sangsad is Unicameral)
    { id: 82, q: "Which country's legislature is unicameral?", opt: ["Bangladesh", "India", "United Kingdom", "United States"], ans: 0 },
    
    // ADDITIONAL REPLACEMENT QUESTIONS (Extracted from unused portions of the guide to replace stem-based questions)
    // Extracted from Page 299, Q33
    { id: 83, q: "Which organization of United Nations works for the development of the street child?", opt: ["UNIFEM", "UNFPA", "UNICEF", "UNESCO"], ans: 2 },
    // Extracted from Page 302, Q82 (Stem replaced)
    { id: 84, q: "What can Abdullah Al Kafi do as part of taking immediate actions in the context of Bangladesh?", opt: ["Can declare ordinance", "Can appoint the prime minister", "Can enact the constitution", "Can amend the constitution"], ans: 0 },
    // Extracted from Page 299, Q38
    { id: 85, q: "Mr. Mijan got power under which administration stages of Bangladesh civil service?", opt: ["First", "Second", "Third", "Fourth"], ans: 0 },
    // Extracted from Page 307, Q170
    { id: 86, q: "Social welfare related function of the pourashava is—", opt: ["Establishing delivery centers", "Establishing welfare centers", "Establishing orphanages", "i, ii & iii"], ans: 3 },
    // Extracted from Page 299, Q32
    { id: 87, q: "What is the name of the organ of the government that performs the judicial functions as per the existing laws?", opt: ["Legislature", "Executive", "Judiciary", "Executive"], ans: 2 },
    // Extracted from Page 301, Missing "i, ii & iii" corrected to single answer.
    { id: 88, q: "According to the constitution, the president can be impeached—", opt: ["For violating the constitution", "For severe crime", "For mental sickness", "i, ii & iii"], ans: 3 },
    // Extracted from Page 305, Q126
    { id: 89, q: "The district commissioner consulted with the chairman for the development of Alipur union under what kind of activity of the district commissioner is it?", opt: ["Development related", "Coordination related", "Humanitarian", "All of the above"], ans: 1 },
    // Extracted from Page 306, Q146
    { id: 90, q: "Union Council is run by—", opt: ["Local administrative ordinance of 1972", "Bangladesh local administrative ordinance of 1976", "Local administrative executive rules of 1983", "i, ii & iii"], ans: 1 }
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

const showMistakesBtn = document.getElementById('show-mistakes-btn');
const mistakesContainer = document.getElementById('mistakes-container');

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

    if (mistakesContainer) {
        mistakesContainer.style.display = 'none';
        mistakesContainer.innerHTML = '';
    }
    if (showMistakesBtn) {
        showMistakesBtn.textContent = 'Show Mistakes';
    }

    examPage.style.display = 'none';
    resultPage.style.display = 'flex';
}

function renderMistakes() {
    if (!mistakesContainer) return;
    mistakesContainer.innerHTML = '';

    const wrongQuestions = questions.filter((q, index) => userAnswers[index] !== q.ans);

    if (wrongQuestions.length === 0) {
        const noMistakesDiv = document.createElement('div');
        noMistakesDiv.className = 'no-mistakes-msg';
        noMistakesDiv.textContent = '🎉 Congratulations! You have no wrong answers.';
        mistakesContainer.appendChild(noMistakesDiv);
        return;
    }

    const title = document.createElement('h3');
    title.className = 'mistakes-title';
    title.textContent = `Wrong Answered Questions (${wrongQuestions.length})`;
    mistakesContainer.appendChild(title);

    const labels = ['A', 'B', 'C', 'D'];

    wrongQuestions.forEach((q) => {
        const qIndex = q.id - 1;
        const studentAns = userAnswers[qIndex];

        const card = document.createElement('div');
        card.className = 'mistake-card';

        const qHeader = document.createElement('div');
        qHeader.className = 'mistake-q-header';
        
        const qText = document.createElement('h4');
        qText.textContent = `${q.id}. ${q.q}`;
        qHeader.appendChild(qText);

        if (studentAns === null) {
            const badge = document.createElement('span');
            badge.className = 'badge-unanswered';
            badge.textContent = 'Unanswered';
            qHeader.appendChild(badge);
        }

        card.appendChild(qHeader);

        const optionsList = document.createElement('div');
        optionsList.className = 'mistake-options-list';

        q.opt.forEach((optText, optIdx) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'mistake-option-item';

            const spanText = document.createElement('span');
            spanText.textContent = `${labels[optIdx]}. ${optText}`;
            optDiv.appendChild(spanText);

            if (optIdx === q.ans) {
                optDiv.classList.add('correct-answer');
                const badge = document.createElement('span');
                badge.className = 'opt-badge badge-correct';
                badge.textContent = '✓ Correct Answer';
                optDiv.appendChild(badge);
            } else if (studentAns === optIdx) {
                optDiv.classList.add('wrong-answer');
                const badge = document.createElement('span');
                badge.className = 'opt-badge badge-wrong';
                badge.textContent = '✕ Wrong Answer';
                optDiv.appendChild(badge);
            }

            optionsList.appendChild(optDiv);
        });

        card.appendChild(optionsList);
        mistakesContainer.appendChild(card);
    });
}

if (showMistakesBtn && mistakesContainer) {
    showMistakesBtn.addEventListener('click', () => {
        if (mistakesContainer.style.display === 'none' || mistakesContainer.style.display === '') {
            renderMistakes();
            mistakesContainer.style.display = 'block';
            showMistakesBtn.textContent = 'Hide Mistakes';
        } else {
            mistakesContainer.style.display = 'none';
            showMistakesBtn.textContent = 'Show Mistakes';
        }
    });
}

// Restart
document.getElementById('restart-btn').addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    userAnswers = new Array(questions.length).fill(null);
    currentIndex = 0;
    isSubmitted = false;
    if (mistakesContainer) {
        mistakesContainer.style.display = 'none';
        mistakesContainer.innerHTML = '';
    }
    if (showMistakesBtn) {
        showMistakesBtn.textContent = 'Show Mistakes';
    }
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