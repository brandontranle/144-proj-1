const mobileMenuBtn = document.querySelector('.menu-toggle' || '#menu-toggle');
const nav = document.querySelector('.navbar');
const moreExpBtn = document.getElementById('show-more-experiences');
const moreExp = document.getElementById('more-experiences');


const terminalOutput = document.getElementById('terminal-output');
const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');


const contactForm = document.getElementById('contact-form');



mobileMenuBtn.addEventListener('click', function () {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('.navbar-item').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    nav.classList.remove('active');
  });
});


moreExpBtn.addEventListener('click', function () {
  console.log("clicked");
  // remove Hidden attribute from the div
  moreExp.classList.toggle('hidden');

  if (moreExp.classList.contains('hidden')) {
    moreExpBtn.innerText = 'Show More Experiences';
  } else {
    moreExpBtn.innerText = 'Show Less Experiences';
  }
});



function loadTerminal() {
    //make up some commands
    const commands = [
      'whoami', //sick
      'ls -la ./skills',
      'cat about.md',
      'sudo ./welcome.sh'
    ];
    
    const outputs = [
      'sample text here',
    '', // maybe somethig like drwxr-xr-x python
      '# About Brandon<br><br>Security engineer and software developer with experience in vulnerability assessment, secure coding, and OWASP practices.',
      '👋 Welcome to my portfolio! Feel free to explore my projects and experience.'
    ];
    
    let cmdIndex = 0;
    let charIndex = 0;
    
    function type() {
      if (charIndex < commands[cmdIndex].length) {
        typingText.textContent += commands[cmdIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        // show output after a pause
        setTimeout(() => {
          terminalOutput.innerHTML = outputs[cmdIndex];
          
          setTimeout(() => {
            typingText.textContent = '';
            charIndex = 0;
            cmdIndex = (cmdIndex + 1) % commands.length;
            type();
          }, 3000);
        }, 500);
      }
    }
    
    type();
  }
  



// responsive terminal size adjuster
const terminal = document.querySelector('.terminal');
const terminalTitle = document.querySelector('.terminal-title');

function updateTerminalSize() {
    const containerWidth = terminal.clientWidth;
    const containerHeight = terminal.clientHeight;

    const charWidth = 8; // approximate width of a character in pixels
    const charHeight = 16; // approximate height of a character in pixels

    const columns = Math.floor(containerWidth / charWidth);
    const rows = Math.floor(containerHeight / charHeight);

    terminalTitle.textContent = `brandonle — -zsh — ${columns} x ${rows}`;
}

window.addEventListener('resize', updateTerminalSize);





  // call all functions here
  window.addEventListener('DOMContentLoaded', () => {
    loadTerminal();
    updateTerminalSize();
  });




contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const securityAnswer = document.getElementById('security').value;
      
      if (securityAnswer !== '5') {
        alert('Security check failed. Please try again.');
        return;
      }
      
      // simulate the process
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = 'Message Sent!';
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 2000);
      }, 1500);
    });