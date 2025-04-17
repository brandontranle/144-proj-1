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
  // remove Hidden attribute from the div
  moreExp.classList.toggle('expanded');

  if (moreExp.classList.contains('expanded')) {
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



/* edu section js */
// Function to toggle dropdown visibility independently
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const card = dropdown.closest('.education-card');
  
  // Toggle the clicked dropdown only
  dropdown.classList.toggle('active');
  
  // Toggle active class on the parent card
  card.classList.toggle('active');
  
  // Prevent the click event from bubbling up
  event.stopPropagation();
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.education-card')) {
      const allDropdowns = document.querySelectorAll('.edu-dropdown');
      const allCards = document.querySelectorAll('.education-card');
      
      allDropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
      });
      
      allCards.forEach(card => {
          card.classList.remove('active');
      });
  }
});

// Prevent dropdown from closing when clicking inside it
document.querySelectorAll('.edu-dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
  });
});




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





    // Get reference to the dark mode toggle checkbox and label
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeLabel = document.querySelector('.dark-mode-label');


// Initialize the icon based on any saved preference or default state
function initDarkMode() {
  // Check if we have a saved preference
  const darkModePreference = localStorage.getItem('darkMode');
  
  if (darkModePreference === 'enabled') {
    darkModeToggle.checked = true;
  } else {
    darkModeToggle.checked = false;
  }
 
}

// Event listener for the dark mode toggle
darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
  
});

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDarkMode);