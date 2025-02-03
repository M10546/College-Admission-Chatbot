
document.addEventListener("DOMContentLoaded", function () {
  const chatToggle = document.getElementById("chat-toggle");
  const chatbot = document.getElementById("chatbot");
  const closeBtn = document.getElementById("close");

  chatToggle.addEventListener("click", function () {
      chatbot.classList.toggle("hidden"); 
  });

  closeBtn.addEventListener("click", function () {
      chatbot.classList.add("hidden"); 
  });
});

const responses = {
    scholarship : "Those who are eligible shall apply for the following scholarships provided by government. SC/ST Scholarship and Minority Scholarship. If a scholarship holder leaves the college during the semester she will not get the scholarship even if the money is sanctioned, as it will be returned to the scholarship source.",
    scholarships : "Those who are eligible shall apply for the following scholarships provided by government. SC/ST Scholarship and Minority Scholarship. If a scholarship holder leaves the college during the semester she will not get the scholarship even if the money is sanctioned, as it will be returned to the scholarship source.",
    'name' : "My name is Huda. I am a college admission chatbot.",
    hello: "Hello, nice to meet you!",
    hey: "Hello, nice to meet you!",
    hai: "Hi! Nice to meet you!",
    hlo : "Hi!",
    contact:'For more details, contact 9629746444.',
    payment:"The payment method is available in both offline and online.",
    number:'For more details, contact 9629746444.',
    ug : "The ug courses are : <ol><li>BA-English</li><li>BBA</li><li>B.Com</li><li>B.Com (CA)</li><li>BCA</li><li>Bsc. Computer Science</li><li>Bsc. Mathematics</li><li>Bsc. Physics</li><li>Bsc. Nutrition & Dietetics</li><li>Bsc. Apparel & Fashion Technology</li><li>Bsc. Psychology</li></ol>",
    course:"Aiman College of Arts and Science for Women offers 11 UG courses and 4 PG courses.",
    phone:"Mobile phones are not allowed during the college hours. |Hostel students have the permission of using mobile phones from 4:00 p.m. to 7:00 p.m., after which they must submit to the warden.",
    mobile:"Mobile phones are not allowed during the college hours. |Hostel students have the permission of using mobile phones from 4:00 p.m. to 7:00 p.m., after which they must submit to the warden.",
    office :"The office functions from 9:00 a.m. to 5:00 p.m.",
    timing:"The college functions from 9:00 a.m to 3:00 p.m. Students have a break from 10:15 a.m. to 10:30 a.m. |Lunch break is from 1:00 p.m. to 1:30 p.m.",
    club:"There are extra-curricular clubs like NSS, LEO, EXNORA, YRC and RRC that the students must enroll themselves in.",
    'extra-curricular':"There are extra-curricular clubs like NSS, LEO, EXNORA, YRC and RRC that the students must enroll themselves in. |Other courses like tailoring, typewriting, driving and tally are conducted on a regular basis for students who are willing to join.",
    skills:'There are extra-curricular clubs like NSS, LEO, EXNORA, YRC and RRC that the students must enroll themselves in. |Other courses like tailoring, typewriting, driving and tally are conducted on a regular basis for students who are willing to join.',
    assalam : "Wa Alaykum Salam, How can I help you?",
    'how are you':"I'm fine! How can I help you today?",
    'how r u':"I'm fine! How can I help you today?",
    'hw r u':"I'm fine! How can I help you today?",
    'hostel fee': "The annual hostel fees are here as follows: |<img src='src/hostelfees.png' height='175px' width='190px'>",
    facilities:"The campus offers modern facilities, including smart classrooms, computer labs, a well-equipped library, transport services, a gym, and advanced infrastructure. Click <a class='linker' href='https://www.aimancollege.edu.in/facilities.php' target='_blank'>here</a> to know more.", 
    normal:"The annual fees is Rs. 28,000. |<img src='src/normal.jpg' alt='normal room' height='175px' width='190px'>",
    attached:"The annual fees is Rs. 38,000. |<img src='src/normal.jpg' alt='normal room' height='175px' width='190px'>",
    nri:"The annual fees is Rs. 60,000. |<img src='src/nri.jpg' alt='normal room' height='175px' width='190px'>",
    ac:"The annual fees is Rs. 60,000. |<img src='src/nri.jpg' alt='normal room' height='175px' width='190px'>",
    'a/c':"The annual fees is Rs. 60,000. |<img src='src/nri.jpg' alt='normal room' height='175px' width='190px'>",
    hostel: "Aiman College Hostel provides comfortable accommodation with a mess hall, open gym, mosque, and essential amenities like 24/7 water supply and security. It ensures a disciplined environment with strict regulations for students.| There are three types of rooms <ol><li>Normal Room(Max 4 per Room)</li><li>Attached Bath Room (Max 4 per Room)</li><li>AC Attached Bath Room (Max 4 per Room)</li></ol>",
    location: 'Aiman College is located near KK Nagar K, Sathanur, Tiruchirappalli, Tamil Nadu 620021. Click <a class="linker" href="https://www.google.com/maps/place/AIMAN+COLLEGE+OF+ARTS+AND+SCIENCE+FOR+WOMEN/@10.7490254,78.6830116,17z/data=!3m1!4b1!4m6!3m5!1s0x3baaf51d3fffffff:0x4d9114ec19d59c38!8m2!3d10.7490254!4d78.6855865!16s%2Fg%2F11b809tfb2?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">here</a> for a map overview.',
    map: 'Aiman College is located near KK Nagar K, Sathanur, Tiruchirappalli, Tamil Nadu 620021. Click <a class="linker" href="https://www.google.com/maps/place/AIMAN+COLLEGE+OF+ARTS+AND+SCIENCE+FOR+WOMEN/@10.7490254,78.6830116,17z/data=!3m1!4b1!4m6!3m5!1s0x3baaf51d3fffffff:0x4d9114ec19d59c38!8m2!3d10.7490254!4d78.6855865!16s%2Fg%2F11b809tfb2?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">here</a> for a map overview.',
    located: 'Aiman College is located near KK Nagar K, Sathanur, Tiruchirappalli, Tamil Nadu 620021. Click <a class="linker" href="https://www.google.com/maps/place/AIMAN+COLLEGE+OF+ARTS+AND+SCIENCE+FOR+WOMEN/@10.7490254,78.6830116,17z/data=!3m1!4b1!4m6!3m5!1s0x3baaf51d3fffffff:0x4d9114ec19d59c38!8m2!3d10.7490254!4d78.6855865!16s%2Fg%2F11b809tfb2?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">here</a> for a map overview.',
    bus:"The day scholar commute by 13 buses from the city places 25km from the college.",
    transport:"The day scholar commute by 13 buses from the city places 25km from the college.",
    sport:"The hostel offers basic sports facilities, including a basketball ground and an indoor games room for recreational activities. These amenities promote physical fitness and leisure for students.|<img src='src/basketball.jpg' height='175px' width='190px'>|<img src='basketball.jpg' height='200px' width='250px'>",
    ok:"Anything else I can help with? Please do ask!",
    okay:"Anything else I can help with? Please do ask!", 
    'where is': 'Aiman College is located near KK Nagar K, Sathanur, Tiruchirappalli, Tamil Nadu 620021. Click <a class="linker" href="https://www.google.com/maps/place/AIMAN+COLLEGE+OF+ARTS+AND+SCIENCE+FOR+WOMEN/@10.7490254,78.6830116,17z/data=!3m1!4b1!4m6!3m5!1s0x3baaf51d3fffffff:0x4d9114ec19d59c38!8m2!3d10.7490254!4d78.6855865!16s%2Fg%2F11b809tfb2?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">here</a> for a map overview.',
    application : "All admission process will be executed only through online mode. |For detailed reference, click <a class='linker' href='https://www.aimancollege.edu.in/admission.php' target='_blank'>here</a>.",
    admission : "All admission process will be executed only through online mode. |For detailed reference, click <a class='linker' href='https://www.aimancollege.edu.in/admission.php' target='_blank'>here</a>.",
    muballiga:"A Muballiga course is a program that teaches Islamic principles, traditions, practices, and way of life. It includes: Quran, Hadis, Fiqh, Arabic or Urdu languages, Islamic practices, and Islamic history. |The diploma is taught in Tamil and has an annual fees of Rs. 4000.",
    eligibility: "The eligibility criteria for a student varies depending on the course. The basic eligibility is that the student must have completed their 12th grade.",
    criteria: "The eligibility criteria for a student varies depending on the course. The basic eligibility is that the student must have completed their 12th grade.",
    document :"Applicants should produce the following certificates during the time of Admission <ol><li> Higher Secondary Mark Statement</li><li>Transfer Certificate</li><li>Conduct Certificate</li></ol>",
    requirements :"Applicants should produce the following certificates during the time of Admission <ol><li> Higher Secondary Mark Statement</li><li>Transfer Certificate</li><li>Conduct Certificate</li></ol>",
    'college fee': 'The fees differs depending on the course taken. Refer to the list below for your chosen course.|<img src="src/ugfees.png" alt="ug fees" width="175px" height="190px" />',
    'pg fee':"The annual postgraduate fee structure is below: |<img src='src/pgfees.png' height='175px' width='190px'>",
    pg : "The pg courses are: <ol><li>M.A - English</li><li>M.Com- Commerce</li><li>Msc. Computer Science</li><li>Msc. Food Service Management & Dietetics</li></ol>",
    vision:"Our college's vision is 'Education to Women is Education to Society'.",
    mission:"We engage the students to excel in academics and empower them with competency to emerge as leaders with high ethical values to build a better society.",
    refund:"Please note that <b>College Fee & Hostel Fee once paid will not be refunded under any circumstances.</b>",
    mess:"The hostel mess offers nutritious meals, catering to both vegetarian and non-vegetarian preferences, with a focus on hygiene.|The mess fees is monthly Rs.3000 fixed.",
    fee:"Please specify the type of fees you require to know about.",
    'aiman college':"AIMAN College of Arts and Science for Women was established by the AIMAN Education and Welfare Society as an institution with a primary objective of providing higher education to the socially backward section of the society in general and minority women in particular. The college was inaugurated in the year 2000 in Tiruchirappalli, Tamil Nadu.",
    campus: "The serene campus of AIMAN College consists of an administrative Block, two-storeyed academic blocks, one resplendent auditorium, futuristic Computer lab, ultra-modern fashion technology laboratory, well stacked automated library, well equipped Physics and Chemistry labs and a revolutionary Nutrition and Dietetics lab. |<img src='src/aiman.jpeg' alt='clg' width='175px' height='190px' />",
    infrastructure: "The serene campus of AIMAN College consists of an administrative Block, two-storeyed academic blocks, one resplendent auditorium, futuristic Computer lab, ultra-modern fashion technology laboratory, well stacked automated library, well equipped Physics and Chemistry labs and a revolutionary Nutrition and Dietetics lab.",
    language:"The mandatory Part -II language is English. The student has the choice to choose between Tamil, Arabic and French for her Part - I language. |If an UG student likes to study a Language other than Tamil, ie. Hindi/ French under Part –I Language, she should pay Rs. 4,000/-per year.",
    university: "Aiman College is affliated to the Bharathidasan University in Tiruchirapalli.",
    photo : "<img src='src/clg.jpg' alt='college' height='175px' width='190px'> | <img src='src/hos.jpg' alt='hostel' height='175px' width='190px'>",

    hi: "Hello, nice to meet you!",
    bye: "Bye! See you soon!"

};

  
  function chatbot(input) {
    input = input.toLowerCase();
    for (const key in responses) {
      if (input.includes(key)) {
        return responses[key];
      }
    }
    return "Sorry, I don't understand that. Please try something else.| If your query is not solved, please contact 9629746444 for detailed information.";
  }
  
function displayInitialBotMessage() {
    let chat = document.getElementById("chat-body");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botName = document.createElement("div");
    botName.classList.add("name");
    botName.innerText = "Huda";
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerText = "Hi, I am Huda. How can I assist you today?";
    botMessage.appendChild(botName);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
}


window.onload = function() {
    setTimeout(function() {
        displayInitialBotMessage();
    }, 1000); 
};

function displayUserMessage(message) {
    let chat = document.getElementById("chat-body");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let botName = document.createElement("div");
    botName.classList.add("name");
    botName.innerHTML = "You";
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(botName);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }
  function displayBotMessage(message) {
    let chat = document.getElementById("chat-body");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botName = document.createElement("div");
    botName.classList.add("name");
    botName.innerHTML = "Huda";
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botName);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      let [part1, part2] = output.split("|");
      setTimeout(function() {
        displayBotMessage(part1);
      }, 1500);
      if (part2) {
        setTimeout(function() {
          displayBotMessage(part2);
        }, 2000);
      }
  
      document.getElementById("input").value = "";
    }
  }
  
  document.getElementById("btn").addEventListener("click", sendMessage);
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });
  