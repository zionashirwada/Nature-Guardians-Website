document.addEventListener('DOMContentLoaded', function() {
    // Initialize step completion variables
    let step1Completed = false;
    let step2Completed = false;
    let step3Completed = false;
    let step1skiped = true;
    let step2skiped = true;
    let step3skiped = true;
    // Select the buttons
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');
    const btn4 = document.getElementById('btn-4');
    const btn5 = document.getElementById('btn-5'); //NEW ADD
    const submitBtn = document.getElementById('submit-btn');
    const card1 = document.getElementById('section-card-1')
    const card2 = document.getElementById('section-card-2')
    const card3 = document.getElementById('section-card-3')

// Initialize variables to track input field completion

    const ticksvg =  `
    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"/>
`;
    // HTML for the popups of each step
    const step1PopupHTML = `
        <div class="popup">
            <h1>Personal Details</h1>
            <div class="input-container">
  <input required="" id="step1-input-1" type="text" />
  <label class="label" for="input">Name</label>
  <div class="underline"></div>
</div>
<div class="input-container">
  <input required="" id="step1-input-2" type="text" />
  <label class="label" for="step1-input-2">Email</label>
  <div class="underline"></div>
</div>
<div class="input-container">
  <input required="" id="step1-input-3" type="text" />
  <label class="label" for="input">Phone</label>
  <div class="underline"></div>
</div>
<div class="input-container">
  <input required="" id="step1-input-4" type="text" />
  <label class="label" for="input">DOB</label>
  <div class="underline"></div>
</div>
<div class="input-container">
  <input required="" id="step1-input-5" type="text" />
  <label class="label" for="input">Address</label>
  <div class="underline"></div>
</div>

         
            <button id="done-btn-step1" class="done-btn">Step 1 Done</button>
            <button id="skip-btn-step1" class="skip-btn">Skip</button>
        </div>
        <i class='bx bx-x' id="close-popup"></i>
    `;


    const step2PopupHTML = `
        <div class="popup">
            <h1>-Volunteer Details-</h1>
            <div class="input-container">
            <input required="" id="step2-input-1" type="text" />
            <label class="label" for="input">Volunteer</label>
            <div class="underline"></div>
          </div>
          <div class="input-container">
          <input required="" id="step2-input-2" type="text" />
          <label class="label" for="input">Volunteer Type</label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
        <input required="" id="step2-input-3" type="text" />
        <label class="label" for="input">Volunteer Time</label>
        <div class="underline"></div>
      </div>
            
            <button id="done-btn-step2" class="done-btn">Step 2 Done</button>
            <button id="skip-btn-step2" class="skip-btn">Skip</button>
        </div>
        <i class='bx bx-x' id="close-popup"></i>
    `;

    const step3PopupHTML = `
        <div class="popup">
            <h1>-Qualification Details-</h1>
            <div class="input-container">
        <input required="" id="step3-input-1" type="text" />
        <label class="label" for="input">What is your highest level education?</label>
        <div class="underline"></div>
      </div>
      <div class="input-container">
        <input required="" id="step3-input-2" type="text" />
        <label class="label" for="input">Have you completed any certifications related wildlife?</label>
        <div class="underline"></div>
      </div>
      <div class="input-container">
        <input required="" id="step3-input-3" type="text" />
        <label class="label" for="input">Can you describe any projects you have participated in?</label>
        <div class="underline"></div>
      </div>
      <div class="input-container">
        <input required="" id="step3-input-4" type="text" />
        <label class="label" for="input">Have you been involved with any organizations ?</label>
        <div class="underline"></div>
      </div>

            <button id="done-btn-step3" class="done-btn">Step 3 Done</button>
            <button id="skip-btn-step3" class="skip-btn">Skip</button>
            </div>
        <i class='bx bx-x' id="close-popup"></i>
    `;

    // Select the overlay
    const overlay = document.getElementById('overlay');

    // Select the dynamic data section
    const dynamicDataSection = document.querySelector('.dynamic-data');

    // Function to show the overlay with the specified HTML content
    function showOverlay(htmlContent) {
        overlay.style.display = 'flex';
        overlay.innerHTML = htmlContent;
    }

    // Function to hide the overlay
    function hideOverlay() {
        overlay.style.display = 'none';
    }

    // Function to handle Step 1
    // Function to handle Step 1
function step1() {
    showOverlay(step1PopupHTML);
    const doneButton = document.getElementById('done-btn-step1');
    const skipButton = document.getElementById('skip-btn-step1');
    
    if (doneButton) {
        doneButton.addEventListener('click', handleStep1DoneButtonClick);
    }

    if (skipButton) {
        skipButton.addEventListener('click', handleStep1SkipButtonClick);
    }
}

// Function to handle Step 1 "Done" button click
function handleStep1DoneButtonClick() {
    step1Completed = true;
    step1skiped = false;
    hideOverlay();
    updateButtonVisibility(2);
    updateDynamicDataSection1();
    updateProgressBar(2);
    updateSectionCard(1);
    addsvg(1);
   
}

// Function to handle Step 1 "Skip" button click
function handleStep1SkipButtonClick() {
    
    hideOverlay();
    updateButtonVisibility(2);
    
    updateProgressBar(2);
    updateSectionCard(1);
}



// Function to handle Step 2
function step2() {
    showOverlay(step2PopupHTML);
    const doneButton = document.getElementById('done-btn-step2');
    const skipButton = document.getElementById('skip-btn-step2');
    
    if (doneButton) {
        doneButton.addEventListener('click', handleStep2DoneButtonClick);
    }

    if (skipButton) {
        skipButton.addEventListener('click', handleStep2SkipButtonClick);
    }
}

// Function to handle Step 2 "Done" button click
function handleStep2DoneButtonClick() {
    step2Completed = true;
    hideOverlay();
    updateButtonVisibility(3);
    updateDynamicDataSection2();
    updateProgressBar(3);
    updateSectionCard(2);
    addsvg(2);
    

    
}

// Function to handle Step 2 "Skip" button click
function handleStep2SkipButtonClick() {
    
    hideOverlay();
    updateButtonVisibility(3);
 
    updateProgressBar(3);
    updateSectionCard(2);
}


// Function to handle Step 3
function step3() {
    showOverlay(step3PopupHTML);
    const doneButton = document.getElementById('done-btn-step3');
    const skipButton = document.getElementById('skip-btn-step3');
    
    if (doneButton) {
        doneButton.addEventListener('click', handleStep3DoneButtonClick);
    }

    if (skipButton) {
        skipButton.addEventListener('click', handleStep3SkipButtonClick);
    }
}

// Function to handle Step 3 "Done" button click
function handleStep3DoneButtonClick() {
    step3Completed = true;
    hideOverlay();
    updateButtonVisibility(4);
    updateDynamicDataSection3();
    updateProgressBar(4);
    updateSectionCard(3);
    addsvg(3);
   
}

// Function to handle Step 3 "Skip" button click
function handleStep3SkipButtonClick() {
   
    hideOverlay();
    updateButtonVisibility(4);
 
    updateProgressBar(4);
    updateSectionCard(3);
}

    // Function to handle submission when the submit button is clicked
    function handleSubmitButtonClick() {
        if (step1Completed && step2Completed && step3Completed) {
            // Handle final submission or redirection here
            const thanksSection = document.getElementById('thanks-section');
            const bodySection = document.getElementById('body-section');
            bodySection.style.display = 'none';
            thanksSection.style.display = 'flex';
        } else
        {
            alert('Please complete all steps before submitting.');
        }
    }

    // Function to dynamically show/hide buttons based on the current step
    function updateButtonVisibility(currentStep) {
        // Hide all buttons
        btn1.style.display = 'none';
        btn2.style.display = 'none';
        btn3.style.display = 'none';
        btn4.style.display = 'none';

        // Show the button corresponding to the current step
        if (currentStep === 1) {
            btn1.style.display = 'block';
        } else if (currentStep === 2) {
            btn2.style.display = 'block';
        } else if (currentStep === 3) {
            btn3.style.display = 'block';
        } else if (currentStep === 4) {
            btn4.style.display = 'block';
        }
    }
// Function to update progress bar based on current step
function updateProgressBar(currentStep) {
    const currentProgressBar = document.getElementById(`progress-${currentStep}`);
    if (currentProgressBar) {
        currentProgressBar.classList.add('progress-completed');
    }
}

// Function to update section card based on current step
function updateSectionCard(completedstep) {
    const step = document.getElementById(`section-card-${completedstep}`);
    if (step) {
        step.classList.add('done-card');
        step.classList.remove('clickable');
        
        
    }
}
function addsvg(completedstep) {
    const step = document.getElementById(`section-card-${completedstep}`);
    if (step) {
       
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.setAttribute('fill', '#04543d');
            svg.innerHTML = ticksvg;
            step.appendChild(svg);
    }
}

    // Function to update dynamic data section based on step completion
    function updateDynamicDataSection1() {
        let dynamicDataHtml = dynamicDataSection.innerHTML;
      
        dynamicDataHtml += `
        <hr>
        <div id="personal-details">
            <h2>Personal Details</h2>
            <p id="name">Name: <span class="answer">${document.getElementById('step1-input-1').value}</span></p>
            <p id="email">Email: <span class="answer">${document.getElementById('step1-input-2').value}</span></p>
            <p id="phone">Phone: <span class="answer">${document.getElementById('step1-input-3').value}</span></p>
            <p id="dob">DOB: <span class="answer">${document.getElementById('step1-input-4').value}</span></p>
            <p id="address">Address: <span class="answer">${document.getElementById('step1-input-5').value}</span></p>
        </div>`;
    
        
       
        dynamicDataSection.innerHTML = dynamicDataHtml;
    }
    function updateDynamicDataSection2() {
        let dynamicDataHtml = dynamicDataSection.innerHTML;
      
        dynamicDataHtml += `
        <hr>
        <div id="volunteer-details">
            <h2>Volunteer Details</h2>
            <p id="volunteer">Volunteer: <span class="answer">${document.getElementById('step2-input-1').value}</span></p>
            <p id="volunteer-type">Volunteer Type:<span class="answer">${document.getElementById('step2-input-2').value}</span> </p>
            <p id="volunteer-time">Volunteer Time: <span class="answer">${document.getElementById('step2-input-3').value}</span></p>
        </div>`;
    
        
       
        dynamicDataSection.innerHTML = dynamicDataHtml;
    }
    function updateDynamicDataSection3() {
        let dynamicDataHtml = dynamicDataSection.innerHTML;
      
        dynamicDataHtml += `
        <hr>
        <div id="qualification-details">
            <h2>Qualification Details</h2>
            <p id="qualification"> Highest level of education: <span class="answer">${document.getElementById('step3-input-1').value}</span></p>
            <p id="qualification-type">Coursework or certifications: <span class="answer">${document.getElementById('step3-input-2').value}</span></p>
            <p id="qualification-research">Academic projects, research, or fieldwork: <span class="answer">${document.getElementById('step3-input-3').value}</span></p>
            <p id="qualification-organization">Organizations or clubs: <span class="answer">${document.getElementById('step3-input-4').value}</span></p>
        </div>`;
    
        
       
        dynamicDataSection.innerHTML = dynamicDataHtml;
    }

    // Add event listeners for each step button
    btn1.addEventListener('click', step1);
    btn2.addEventListener('click', step2);
    btn3.addEventListener('click', step3);
    btn4.addEventListener('click', handleSubmitButtonClick);

 

    // Initial setup: Show button for Step 1
    updateButtonVisibility(1);

    // Function to handle closing the overlay
function handleCloseButtonClick() {
    hideOverlay();
}

// Function to show the overlay with the specified HTML content
function showOverlay(htmlContent) {
    overlay.style.display = 'flex';
    overlay.innerHTML = htmlContent;

    // Attach event listener to the close button
    const closeButton = document.querySelector('.bx-x');
    if (closeButton) {
        closeButton.addEventListener('click', handleCloseButtonClick);
    }
}


  

});



