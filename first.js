//....opening login...
//...Accessing login using button ...
document.getElementById('button1').addEventListener('click', function() {
    document.querySelector('.login').classList.add('active');
});

//... login close btn ACTIVATED...
document.querySelector('.close-login-btn').addEventListener('click', function() {
    document.querySelector('.login').classList.remove('active');
});
document.querySelector('.LOGIN-btn').addEventListener('click', function() {
    document.querySelector('.login').classList.remove('active');
});

//button3 letst talk
document.getElementById('button3').addEventListener('click', function() {
    document.querySelector('.consult').classList.add('active');
    document.querySelector('.consult').scrollIntoView({ behavior: 'smooth' });
});

// ...consult page colse button...
document.querySelector('.consult-btn').addEventListener('click', function() {
    document.querySelector('.consult').classList.remove('active');
    document.querySelector('.Main_body').style.display = ''; // Show main section again
});

// ...openig signIn ...
// Hide sign in page by default
document.querySelector('.sign_In').style.display = 'none';

// Show sign in page when "Create an account" is clicked
document.querySelector('a[href="#sign_In"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.sign_In').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
});

// Back to main section on clicking login button in sign in section
document.querySelector('.sign_In .LOGIN-btn').addEventListener('click', function() {
    document.querySelector('.sign_In').style.display = 'none';
    document.querySelector('.Main_body').style.display = '';
});

// ...button2 Consult Now...
document.getElementById('button2').addEventListener('click', function() {
    document.querySelector('.consult').classList.add('active');
    document.querySelector('.consult').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.Main_body').style.display = 'none'; // Hide main section
});

// ...changing color of chatbot btn...
window.addEventListener('scroll', function() {
    const page3 = document.querySelector('.knowMore');
    const page6 = document.querySelector('.contact');
    const chatbotBtn = document.getElementById('openChatbot');

    if (!chatbotBtn || !page3 || !page6) return;

    const page3Rect = page3.getBoundingClientRect();
    const page6Rect = page6.getBoundingClientRect();

    // If page 3 is in view
    if (page3Rect.top < window.innerHeight && page3Rect.bottom > 0) {
        chatbotBtn.style.backgroundColor = "#ffffff";
        chatbotBtn.style.color = "#3b2a21";
    }
    // If page 6 is in view
    else if (page6Rect.top < window.innerHeight && page6Rect.bottom > 0) {
        chatbotBtn.style.backgroundColor = "#ffffff";
        chatbotBtn.style.color = "#3b2a21";
    }
    // Default style
    else {
        chatbotBtn.style.backgroundColor = "#3b2a21";
        chatbotBtn.style.color = "#fff0e8ff";
    }
});
//... Accessing chatbot all btn functions
const floatingBtn = document.getElementById('openChatbot');
const chatWidget = document.getElementById('chat-widget');
const chatCloseBtn = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
// Toggle chat open
floatingBtn.addEventListener('click', () => {
    chatWidget.classList.remove('hidden');
    floatingBtn.style.display = 'none';
    chatInput.focus();
});
      
// Close chat
chatCloseBtn.addEventListener('click', () => {
    chatWidget.classList.add('hidden');
    floatingBtn.style.display = 'flex';
    floatingBtn.focus();
});
// Enable/disable send button based on input content
chatInput.addEventListener('input', () => {
  chatSendBtn.disabled = chatInput.value.trim().length === 0;
});

// Function to add message bubbles
function addMessage(text, sender) {
  const message = document.createElement('div');
  message.className = 'message ' + sender;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatMessages.focus();
}

// Basic bot response logic
function getBotResponse(userMsg) {
  const msg = userMsg.toLowerCase().trim();
  if(msg.includes('hi') || msg.includes('hello')) {
    return 'Hi, how can I help you?';
  } else if(msg.includes('help')) {
    return 'Sure, please tell me what you need help with.';
  } else if(msg.includes('bye') || msg.includes('thanks')) {
    return 'You\'re welcome! Have a nice day!';
  }else if(msg.includes('how are you')){
    return 'I\'m just a bot, but thanks for asking! How can I assist you?';
  }else if(msg.includes('i have fever') || msg.includes('fever')) {
    return 'A fever is an elevated body temperature, often a sign that your body is fighting off an infection. Most fevers resolve on their own within a few days, but its important to monitor your temperature and seek medical advice if it gets too high or if you experience other concerning symptoms';
  } else if(msg.includes('tell me about yourself') || msg.includes('about you')) {
    return 'I am a chatbot designed to assist you with your queries. What would you like to know?';
  } else if(msg.includes('what can you do') || msg.includes('capabilities')) {
    return 'I can help answer questions, provide information, and assist with various tasks. Just ask!';
  } else if(msg.includes('joke') || msg.includes('funny')) {
    return 'Why did the scarecrow win an award? Because he was outstanding in his field!';  
  } else {
    return 'Sorry, I didn\'t understand that. Can you please rephrase?';
  }
}

// Handle message form submit
document.getElementById('chat-input-area').addEventListener('submit', e => {
  e.preventDefault();
  const userText = chatInput.value.trim();
  if(userText.length === 0) return;
  
  addMessage(userText, 'user');
  chatInput.value = '';
  chatSendBtn.disabled = true;
  
  // Simulate bot delay
  setTimeout(() => {
    const botReply = getBotResponse(userText);
    addMessage(botReply, 'bot');
  }, 700);
});