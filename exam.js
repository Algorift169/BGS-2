// Phase 1: Question Bank (70 Extracted Board-Relevant MCQs from Guide Book Images)
const questions = [
    // Q1: Who determines the electoral area?
    { id: 1, q: "Who determines the electoral area?", opt: ["Deputy Commissioner", "Returning Officer", "Election Commission", "National Parliament"], ans: 2 },
    // Q2: If democratic rule is established—
    { id: 2, q: "If democratic rule is established—\ni. Opportunities for people's self-development increase\nii. People's rights are upheld\niii. Dominance of beaurocracy is established", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 0, multi: true },
    // Q3: Whose job is to prepare the voter list? [D. B.-25]
    { id: 3, q: "Whose job is to prepare the voter list? [D. B.-25]", opt: ["Human Rights Commission", "Election Commissioner", "Anti Corruption Commission", "Voter Commission"], ans: 1 },
    // Q4: On which date is the first general election of Bangladesh held? [R. B.-25]
    { id: 4, q: "On which date is the first general election of Bangladesh held? [R. B.-25]", opt: ["7 March", "7 April", "7 May", "7 June"], ans: 2 },
    // Q5: In what year was the 9th national parliament election held in the country? [R. B.-25]
    { id: 5, q: "In what year was the 9th national parliament election held in the country? [R. B.-25]", opt: ["1991", "1996", "2001", "2008"], ans: 3 },
    // Q6: Who acts as the chairman of the election commission? [D. B.-25]
    { id: 6, q: "Who acts as the chairman of the election commission? [D. B.-25]", opt: ["President", "Prime Minister", "Senior Secretary", "Chief Election Commissioner"], ans: 3 },
    // Q7: The president of which country is elected by electoral college? [C. B.-25]
    { id: 7, q: "The president of which country is elected by electoral college? [C. B.-25]", opt: ["England", "Japan", "China Republic", "USA"], ans: 3 },
    // Q8: Which country is the origin of modern democracy? [Ctg. B.-25]
    { id: 8, q: "Which country is the origin of modern democracy? [Ctg. B.-25]", opt: ["Greece", "The USA", "England", "France"], ans: 0 },
    // Q9: What is the punishment for voting with Pseudonym? [Ctg. B.-25]
    { id: 9, q: "What is the punishment for voting with Pseudonym? [Ctg. B.-25]", opt: ["Six months rigorous imprisonment with fine.", "One year imprisonment with fine.", "Two years rigorous imprisonment with fine.", "One year rigorous imprisonment with fine."], ans: 2 },
    // Q10: During the period of election, for which criminal activities are given punishment at least 2 years rigorous imprisonment? [S. B.-25]
    { id: 10, q: "During the period of election, for which criminal activities are given punishment at least 2 years rigorous imprisonment? [S. B.-25]", opt: ["Mass meeting on the high way", "To use govt. leaflets", "To give fidgetiness of speech", "For casting vote on a pseudonym"], ans: 3 },
    // Q11: Which is the main source state of democratic trend of thoughts in the world? [J. B.-25]
    { id: 11, q: "Which is the main source state of democratic trend of thoughts in the world? [J. B.-25]", opt: ["England", "India", "America", "Switzerland"], ans: 0 },
    // Q12: What is the main objective of the political parties? [J. B.-25]
    { id: 12, q: "What is the main objective of the political parties? [J. B.-25]", opt: ["Adoption of party programmes", "Forming public opinion", "Taking state power", "Electoral Campaign"], ans: 2 },
    // Q13: Why should we vote the honest persons? [B. B.-25]
    { id: 13, q: "Why should we vote the honest persons? [B. B.-25]", opt: ["To maintain democracy", "For good communication", "For good governance", "To run the state"], ans: 2 },
    // Q14: "Modern democratic governance is the political party government in practice." — who said this? [B. B.-25]
    { id: 14, q: "\"Modern democratic governance is the political party government in practice.\" — who said this? [B. B.-25]", opt: ["Maclver", "Finer", "Getel", "Aristotle"], ans: 1 },
    // Q15: What is the function of returning officer? [DR-4]
    { id: 15, q: "What is the function of returning officer? [DR-4]", opt: ["Fixation of the election area", "Sorting out of the nomination papers", "Conducting the election", "Making the list of voters"], ans: 2 },
    // Q16: How many seats are reserved for women in Jatiya Sangsad? [D/B-24]
    { id: 16, q: "How many seats are reserved for women in Jatiya Sangsad? [D/B-24]", opt: ["30", "50", "300", "350"], ans: 1 },
    // Q17: The head administrative officer of ministry is — [DR-B-24]
    { id: 17, q: "The head administrative officer of ministry is — [DR-B-24]", opt: ["Minister", "Secretary", "Additional Secretary", "Joint Secretary"], ans: 1 },
    // Q18: "Cha" is a political party. Which is the work of "Cha" party? [CB-B-24]
    { id: 18, q: "\"Cha\" is a political party. Which is the work of \"Cha\" party? [CB-B-24]", opt: ["Explain the law", "Composing constitution", "Implementation of law", "Formative opposition"], ans: 3 },
    // Q19: Which is most important matter of democracy? [CB-B-24]
    { id: 19, q: "Which is most important matter of democracy? [CB-B-24]", opt: ["Election", "Responsible citizen", "Formative politics", "Good judgment"], ans: 0 },
    // Q20: Modern democratic governance is mainly — [CB-B-24]
    { id: 20, q: "Modern democratic governance is mainly — [CB-B-24]", opt: ["powerful and organized government system", "an election organization based on public representatives", "governance of trustworthy and majority people", "a political party government"], ans: 3 },
    // Q21: At present, direct democracy is prevailed/run in which country? [B-B-24]
    { id: 21, q: "At present, direct democracy is prevailed/run in which country? [B-B-24]", opt: ["Norway", "England", "Greece", "Switzerland"], ans: 3 },
    // Q22: In which article of the constitution of Bangladesh is said about the establishment of Jatiyo Sangasad? [B-B-24]
    { id: 22, q: "In which article of the constitution of Bangladesh is said about the establishment of Jatiyo Sangasad? [B-B-24]", opt: ["47", "53", "65", "71"], ans: 2 },
    // Q23: The characteristics of a political party are — [D-B-25] i. arranging program ii. creating public support iii. taking over power
    { id: 23, q: "The characteristics of a political party are — [D-B-25]\ni. arranging program\nii. creating public support\niii. taking over power", opt: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"], ans: 3, multi: true },
    // Q24: Political party is important in democracy. Because it — [M-B-25] i. conducts the government on the right way ii. improves standard of living of people iii. increases political awareness
    { id: 24, q: "Political party is important in democracy. Because it — [M-B-25]\ni. conducts the government on the right way\nii. improves standard of living of people\niii. increases political awareness", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 3, multi: true },
    // Q25: In democratic ruling system — [R-B-24] i. opinion of the majority is granted in the legislature ii. interest of people is protected iii. corrupted people also get the opportunity to represent
    { id: 25, q: "In democratic ruling system — [R-B-24]\ni. opinion of the majority is granted in the legislature\nii. interest of people is protected\niii. corrupted people also get the opportunity to represent", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 0, multi: true },
    // Q26: Democracy means — [R-B-24] i. administrative by the people ii. administrative welfare iii. administrative by the representative
    { id: 26, q: "Democracy means — [R-B-24]\ni. administrative by the people\nii. administrative welfare\niii. administrative by the representative", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 3, multi: true },
    // Q27: In school 'A', the students of eighth grade elected five students through voting. Those five students sat together and unanimously selected one of them as the class captain. [MR-B-24] In which type of election the students took part?
    { id: 27, q: "In school 'A', the students of eighth grade elected five students through voting. Those five students sat together and unanimously selected one of them as the class captain. [MR-B-24]\nIn which type of election the students took part?", opt: ["Direct", "Democratic", "Electoral", "Dictatorial"], ans: 0 },
    // Q28: In Bangladesh the reflection of such election will occur— i. in president election ii. in general election iii. in female MP election
    { id: 28, q: "In school 'A', the students of eighth grade elected five students through voting. Those five students sat together and unanimously selected one of them as the class captain. [MR-B-24]\nIn Bangladesh the reflection of such election will occur—\ni. in president election\nii. in general election\niii. in female MP election", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 1, multi: true },
    // Q29: Bangladesh Government has an institution named as 'A'; whose duty is to conduct free and fair elections. [MR-B-24] What is the name of the institution—"A"?
    { id: 29, q: "Bangladesh Government has an institution named as 'A'; whose duty is to conduct free and fair elections. [MR-B-24]\nWhat is the name of the institution—\"A\"?", opt: ["Public service commission", "Anti-corruption commission", "Narcotics control commission", "Election commission"], ans: 3 },
    // Q30: Activities of that institution— i. to appoint returning officers ii. to solve nomination related disputes iii. to ensure public support
    { id: 30, q: "Bangladesh Government has an institution named as 'A'; whose duty is to conduct free and fair elections. [MR-B-24]\nActivities of that institution—\ni. to appoint returning officers\nii. to solve nomination related disputes\niii. to ensure public support", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 0, multi: true },
    // Q31: Modern democratic governance is the political party government in practice—who said this? [The Millennium Stars School and College, Rangpur]
    { id: 31, q: "Modern democratic governance is the political party government in practice—who said this? [The Millennium Stars School and College, Rangpur]", opt: ["Maclver", "Finer", "Gattel", "Aristotle"], ans: 1 },
    // Q32: Why should we vote the honest persons? [The Millennium Stars School and College, Rangpur]
    { id: 32, q: "Why should we vote the honest persons? [The Millennium Stars School and College, Rangpur]", opt: ["To maintain democracy", "For good communication", "For good governance", "To run the state"], ans: 2 },
    // Q33: What is the main objective of the political party? [Chattogram Cantonment Public College, Chattogram]
    { id: 33, q: "What is the main objective of the political party? [Chattogram Cantonment Public College, Chattogram]", opt: ["To give support to the public", "To establish domination of others", "To find the obstacles of the country", "To achieve the development of the party"], ans: 3 },
    // Q34: Who fixes the boundary of the constituency? [Halishahar Cantonment Public School & College, Chattogram]
    { id: 34, q: "Who fixes the boundary of the constituency? [Halishahar Cantonment Public School & College, Chattogram]", opt: ["home Minister", "information Ministry", "chief justice", "election commission"], ans: 3 },
    // Q35: Democracy was first introduced in—[Halishahar Cantonment Public School & College, Chattogram]
    { id: 35, q: "Democracy was first introduced in—[Halishahar Cantonment Public School & College, Chattogram]", opt: ["United Kingdom", "America", "Greece", "Paris"], ans: 2 },
    // Q36: Political parties are important in democracy because— [Swar Cantonment Public School & College, Dhaka] i. constitutes public opinion ii. shows strength of the party iii. increase political awareness
    { id: 36, q: "Political parties are important in democracy because— [Swar Cantonment Public School & College, Dhaka]\ni. constitutes public opinion\nii. shows strength of the party\niii. increase political awareness", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 3, multi: true },
    // Q37: In how many primary methods is democracy implemented? (Knowledge)
    { id: 37, q: "In how many primary methods is democracy implemented? (Knowledge)", opt: ["2", "4", "3", "5"], ans: 2 },
    // Q38: What is the other name for Direct Democracy? (Knowledge)
    { id: 38, q: "What is the other name for Direct Democracy? (Knowledge)", opt: ["Pure Democracy", "Representative Democracy", "Indirect Democracy", "Autocracy"], ans: 0 },
    // Q39: Due to the expansion of state systems, which type of democracy is almost impossible to practice? (Comprehension)
    { id: 39, q: "Due to the expansion of state systems, which type of democracy is almost impossible to practice? (Comprehension)", opt: ["Representative Democracy", "Indirect Democracy", "Pure Democracy", "Public Opinion Democracy"], ans: 2 },
    // Q40: According to Abraham Lincoln, the elected government serves for — (Comprehension)
    { id: 40, q: "According to Abraham Lincoln, the elected government serves for — (Comprehension)", opt: ["President", "Prime Minister", "Bureaucrats", "The people"], ans: 3 },
    // Q41: Which country is regarded as the root of democratic values? (Knowledge)
    { id: 41, q: "Which country is regarded as the root of democratic values? (Knowledge)", opt: ["Greece", "England", "Australia", "France"], ans: 1 },
    // Q42: Which one is the most acceptable government system in the contemporary world? (Knowledge)
    { id: 42, q: "Which one is the most acceptable government system in the contemporary world? (Knowledge)", opt: ["Socialist", "Monarchical", "Autocratic", "Democratic"], ans: 3 },
    // Q43: According to the definition of democracy by Professor Getel, people can enjoy what power? (Comprehension)
    { id: 43, q: "According to the definition of democracy by Professor Getel, people can enjoy what power? (Comprehension)", opt: ["Citizenship", "Sovereignty", "Law", "State"], ans: 1 },
    // Q44: What has the government of Bangladesh established for the parliamentary election? (Knowledge)
    { id: 44, q: "What has the government of Bangladesh established for the parliamentary election? (Knowledge)", opt: ["Election Commission", "Secretariat", "Public Works Department", "National Board of Revenue"], ans: 0 },
    // Q45: Democracy is a result of what government system? (Comprehension)
    { id: 45, q: "Democracy is a result of what government system? (Comprehension)", opt: ["Divine", "Historic", "Social contract", "Natural"], ans: 1 },
    // Q46: In which century was democratic system observed in many countries? (Knowledge)
    { id: 46, q: "In which century was democratic system observed in many countries? (Knowledge)", opt: ["19th & 20th centuries", "18th & 19th centuries", "17th & 18th centuries", "16th & 17th centuries"], ans: 1 },
    // Q47: After Medieval period, where did democracy reemerge? (Knowledge)
    { id: 47, q: "After Medieval period, where did democracy reemerge? (Knowledge)", opt: ["America", "Africa", "Europe", "Asia"], ans: 2 },
    // Q48: What is the successful outcome of flourishing democracy? (Comprehension)
    { id: 48, q: "What is the successful outcome of flourishing democracy? (Comprehension)", opt: ["Democratic culture", "Civil society", "Political administration", "Popular government"], ans: 0 },
    // Q49: Political Science Professor Asif was telling about a government system which is a popular concept of the 20th century. What government system was the teacher referring to? (Application)
    { id: 49, q: "Political Science Professor Asif was telling about a government system which is a popular concept of the 20th century. What government system was the teacher referring to? (Application)", opt: ["Monarchy", "Autocracy", "Socialism", "Democracy"], ans: 3 },
    // Q50: The people of which country assume that democracy is such a political administrative system where all the citizens can directly participate? (Knowledge)
    { id: 50, q: "The people of which country assume that democracy is such a political administrative system where all the citizens can directly participate? (Knowledge)", opt: ["Australia", "South Africa", "Greece", "America"], ans: 2 },
    // Q51: Democracy is such a political administrative system — (Comprehension) i. provision of the change in government after the end of the tenure ii. fair election system iii. right of votes of the eligible voters
    { id: 51, q: "Democracy is such a political administrative system — (Comprehension)\ni. provision of the change in government after the end of the tenure\nii. fair election system\niii. right of votes of the eligible voters", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 3, multi: true },
    // Q52: Democracy means — (Comprehension) i. rulers of the people ii. representative government iii. welfare based administrative system
    { id: 52, q: "Democracy means — (Comprehension)\ni. rulers of the people\nii. representative government\niii. welfare based administrative system", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 3, multi: true },
    // Q53: Europe in the Medieval period had — (Comprehension) i. dual-system rule by religion and king ii. autocracy iii. feudal system
    { id: 53, q: "Europe in the Medieval period had — (Comprehension)\ni. dual-system rule by religion and king\nii. autocracy\niii. feudal system", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 3, multi: true },
    // Q54: After a long time democracy reemerged in Europe — (Comprehension) i. in 17th century ii. in 18th century iii. in 19th century
    { id: 54, q: "After a long time democracy reemerged in Europe — (Comprehension)\ni. in 17th century\nii. in 18th century\niii. in 19th century", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 0, multi: true },
    // Q55: What was direct democracy effective? (Application) [Stem: Democracy is the most popular government system...]
    { id: 55, q: "Democracy is the most popular government system of the present time. Democracy is a system that is run by the representatives elected by the people. Democracy upholds freedom of speech and basic rights of the citizens. At present, there is no better government system in the world in terms of ensuring welfare to its citizens.\nWhat was direct democracy effective? (Application)", opt: ["Ancient Greece", "Rome", "USA", "China"], ans: 0 },
    // Q56: Why is not direct democracy observed in the contemporary world? (Higher Ability) i. Because of large area of the states ii. Because of over population iii. Because of instability of the government
    { id: 56, q: "Democracy is the most popular government system of the present time. Democracy is a system that is run by the representatives elected by the people. Democracy upholds freedom of speech and basic rights of the citizens. At present, there is no better government system in the world in terms of ensuring welfare to its citizens.\nWhy is not direct democracy observed in the contemporary world? (Higher Ability)\ni. Because of large area of the states\nii. Because of over population\niii. Because of instability of the government", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 0, multi: true },
    // Q57: What is the other name of direct democracy? (Knowledge)
    { id: 57, q: "What is the other name of direct democracy? (Knowledge)", opt: ["Indirect democracy", "Representative democracy", "Pure democracy", "Autocracy"], ans: 2 },
    // Q58: What is the other name of indirect democracy? (Knowledge)
    { id: 58, q: "What is the other name of indirect democracy? (Knowledge)", opt: ["Pure democracy", "Direct democracy", "Representative democracy", "Basic democracy"], ans: 2 },
    // Q59: What is the ruling system that enables the citizens to participate in the administration directly called? (Comprehension)
    { id: 59, q: "What is the ruling system that enables the citizens to participate in the administration directly called? (Comprehension)", opt: ["Direct democracy", "Indirect democracy", "Representative democracy", "Feudal system"], ans: 0 },
    // Q60: Large area and over population of the states is an obstacle for which administrative system? (Comprehension)
    { id: 60, q: "Large area and over population of the states is an obstacle for which administrative system? (Comprehension)", opt: ["Direct democracy", "Indirect democracy", "Representative democracy", "Autocracy"], ans: 0 },
    // Q61: What is the administrative system run by the election of the representatives called? (Knowledge)
    { id: 61, q: "What is the administrative system run by the election of the representatives called? (Knowledge)", opt: ["Direct democracy", "Indirect democracy", "Pure democracy", "Monarchy"], ans: 1 },
    // Q62: In which ruling system do the elected representatives perform the administrative tasks including lawmaking? (Comprehension)
    { id: 62, q: "In which ruling system do the elected representatives perform the administrative tasks including lawmaking? (Comprehension)", opt: ["Direct democracy", "Autocracy", "Monarchy", "Indirect democracy"], ans: 3 },
    // Q63: What kind of democratic system is observed in the modern states? (Knowledge)
    { id: 63, q: "What kind of democratic system is observed in the modern states? (Knowledge)", opt: ["Representative democracy", "Direct democracy", "Monarchy", "Autocracy"], ans: 0 },
    // Q64: How is the democratic system conducted? (Comprehension)
    { id: 64, q: "How is the democratic system conducted? (Comprehension)", opt: ["By public opinion", "By population", "By judiciary", "By acknowledgement"], ans: 0 },
    // Q65: In democracy, the interest of the people is given priority to determine what? (Comprehension)
    { id: 65, q: "In democracy, the interest of the people is given priority to determine what? (Comprehension)", opt: ["Collection of state funds", "Policies of the state", "Campaigning the activities of the state", "Demarcating the boundaries of the state"], ans: 1 },
    // Q66: What is the main purpose of democracy? (Knowledge)
    { id: 66, q: "What is the main purpose of democracy? (Knowledge)", opt: ["To express the opposition", "To ensure people's welfare", "To establish socialist state", "To establish rule of law"], ans: 1 },
    // Q67: Why can illiterate, unworthy and corrupt people come into power by winning the election in democracy? (Comprehension)
    { id: 67, q: "Why can illiterate, unworthy and corrupt people come into power by winning the election in democracy? (Comprehension)", opt: ["Rule of the minority", "Rule of the majority", "Ignorant people", "Illiterate people"], ans: 1 },
    // Q68: In the democratic system, why can't the minorities elect their representatives in the legislature? (Comprehension)
    { id: 68, q: "In the democratic system, why can't the minorities elect their representatives in the legislature? (Comprehension)", opt: ["Rule of the minority", "Rule of the majority", "Weak administrative system", "Administrative system of the ignorant"], ans: 1 },
    // Q69: What happens when the ruling party of an underdeveloped country performs the activities in light of its party interests? (Comprehension)
    { id: 69, q: "What happens when the ruling party of an underdeveloped country performs the activities in light of its party interests? (Comprehension)", opt: ["Partiality gets hampered", "Neutrality gets hampered", "Interests of the minorities get protected", "People's confidence on the government gets hampered"], ans: 3 },
    // Q70: For most of the democratic states, the true information is—(Comprehension) i. citizens do not directly participate in the administrative functions ii. elected representatives conduct the administrative functions iii. direct interference of the citizens in law making
    { id: 70, q: "For most of the democratic states, the true information is—(Comprehension)\ni. citizens do not directly participate in the administrative functions\nii. elected representatives conduct the administrative functions\niii. direct interference of the citizens in law making", opt: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"], ans: 0, multi: true },
];

// Phase 2: JavaScript Application Logic
let userAnswers = new Array(questions.length).fill(null).map(() => []);
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
const submitBtn = document.getElementById('submit-exam-btn');

const viewResultsBtn = document.getElementById('view-results-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const previousResultsBody = document.getElementById('previous-results-body');
const noResultsMsg = document.getElementById('no-results-msg');
const clearResultsBtn = document.getElementById('clear-results-btn');
const clearContainer = document.getElementById('clear-container');

// Validation and Start
document.getElementById('start-exam-btn').addEventListener('click', () => {
    const name = document.getElementById('studentName').value.trim();
    const roll = document.getElementById('examNumber').value.trim();
    const subject = document.getElementById('subject').value.trim();

    if (!name || !roll || !subject) {
        alert("Please enter your name and Roll/ID before starting the exam.");
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
    
    const selectedIndexes = userAnswers[index] || [];
    const isMulti = q.multi === true;
    
    q.opt.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        if (selectedIndexes.includes(i)) div.classList.add('selected');

        const input = document.createElement('input');
        input.type = isMulti ? 'checkbox' : 'radio';
        input.name = `q${q.id}`;
        input.value = i;
        input.checked = selectedIndexes.includes(i);

        input.addEventListener('change', () => {
            if (isMulti) {
                if (input.checked) {
                    if (!userAnswers[index].includes(i)) {
                        userAnswers[index].push(i);
                    }
                } else {
                    userAnswers[index] = userAnswers[index].filter(val => val !== i);
                }
                div.classList.toggle('selected', input.checked);
            } else {
                // For radio buttons, clear all others in this question
                userAnswers[index] = [i];
                document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                // Update other radio inputs
                document.querySelectorAll(`input[name="q${q.id}"]`).forEach(el => {
                    el.checked = el.value == i;
                });
            }
        });

        const span = document.createElement('span');
        span.textContent = `${labels[i]}. ${opt}`;

        div.appendChild(input);
        div.appendChild(span);
        
        div.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                input.checked = !input.checked;
                input.dispatchEvent(new Event('change'));
            }
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
        submitBtn.click();
    }
});

// Timer Logic
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timeLeft = 60 * 60; // 1 hour in seconds
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
submitBtn.addEventListener('click', () => {
    if (isSubmitted) return;
    
    const unanswered = userAnswers.filter(a => a.length === 0).length;
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

function saveAttempt(name, roll, score, total, details) {
    let attempts = JSON.parse(localStorage.getItem('examAttempts')) || [];
    attempts.push({
        name: name,
        roll: roll,
        score: score.toFixed(1),
        total: total,
        details: details,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('examAttempts', JSON.stringify(attempts));
}

function calculateAndShowResults() {
    if (timerInterval) clearInterval(timerInterval);
    let correct = 0;
    let wrong = 0;
    let attempted = 0;
    const details = [];

    userAnswers.forEach((ans, index) => {
        const q = questions[index];
        const isCorrect = arraysEqual(ans.sort(), q.ans.sort());
        if (ans.length > 0) {
            attempted++;
            if (isCorrect) {
                correct++;
            } else {
                wrong++;
            }
        }
        details.push({
            question: q.q,
            userAnswer: ans.map(i => String.fromCharCode(65 + i)).join(', '),
            correctAnswer: q.ans.map(i => String.fromCharCode(65 + i)).join(', '),
            isCorrect: isCorrect,
            attempted: ans.length > 0
        });
    });

    const unanswered = questions.length - attempted;
    const finalScore = correct - (wrong * 0.5);

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
    document.getElementById('res-final-score').textContent = finalScore.toFixed(1);

    // Show detailed answer review
    const reviewContainer = document.getElementById('answer-review');
    reviewContainer.innerHTML = '<h3>Answer Review</h3>';
    const table = document.createElement('table');
    table.style.cssText = 'width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;';
    table.innerHTML = `
        <thead>
            <tr style="background: #f5f5f5;">
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">#</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Question</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Your Answer</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Correct Answer</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: center;">Status</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    const tbody = table.querySelector('tbody');
    
    details.forEach((d, i) => {
        const tr = document.createElement('tr');
        const status = d.attempted ? (d.isCorrect ? '✓' : '✗') : '—';
        const statusColor = d.attempted ? (d.isCorrect ? '#28a745' : '#dc3545') : '#6c757d';
        tr.innerHTML = `
            <td style="padding: 6px 8px; border: 1px solid #ddd;">${i + 1}</td>
            <td style="padding: 6px 8px; border: 1px solid #ddd; max-width: 300px;">${d.question.substring(0, 100)}${d.question.length > 100 ? '...' : ''}</td>
            <td style="padding: 6px 8px; border: 1px solid #ddd;">${d.attempted ? d.userAnswer : 'Not attempted'}</td>
            <td style="padding: 6px 8px; border: 1px solid #ddd;">${d.correctAnswer}</td>
            <td style="padding: 6px 8px; border: 1px solid #ddd; text-align: center; color: ${statusColor}; font-weight: bold;">${status}</td>
        `;
        tbody.appendChild(tr);
    });
    
    reviewContainer.appendChild(table);

    // Save history
    saveAttempt(studentName, examNumber, finalScore, questions.length, details);

    examPage.style.display = 'none';
    resultPage.style.display = 'flex';
}

// Helper function to compare arrays
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Restart
document.getElementById('restart-btn').addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    userAnswers = new Array(questions.length).fill(null).map(() => []);
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
        clearContainer.style.display = 'none';
    } else {
        document.querySelector('.results-table').style.display = 'table';
        noResultsMsg.style.display = 'none';
        clearContainer.style.display = 'flex';
        
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

if (clearResultsBtn) {
    clearResultsBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear all previous results history? This action cannot be undone.")) {
            localStorage.removeItem('examAttempts');
            showPreviousResults();
        }
    });
}