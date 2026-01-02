document.addEventListener("DOMContentLoaded", () => {
    const roomsBtn = document.getElementById("roomsBtn");
    const pgsBtn = document.getElementById("pgsBtn");
    const detailsSection = document.getElementById("detailsSection");
    const detailsHeading = document.getElementById("detailsHeading");
    const detailsContainer = document.getElementById("detailsContainer");

    let currentType = null;

    function render(data, title, type, btn) {
        if (detailsSection.style.display === "block" && currentType === type) {
            detailsSection.style.display = "none";
            roomsBtn.classList.remove("active");
            pgsBtn.classList.remove("active");
            currentType = null;
            return;
        }

        roomsBtn.classList.remove("active");
        pgsBtn.classList.remove("active");
        btn.classList.add("active");

        detailsHeading.textContent = title;
        detailsContainer.innerHTML = "";

        data.forEach((item, index) => {
            detailsContainer.innerHTML += `
                <div class="details-item" style="animation-delay: ${index * 0.1}s">
                    <div class="card-header">
                        <h3 class="card-name">${item.name}</h3>
                        <span class="gender-badge">${item.gender}</span>
                    </div>
                    <div class="card-body">
                        <div class="card-left">
                            <p>
                                <span class="label">Location:</span> 
                                <span class="data">
                                    ${item.location && item.location !== 'Not specified' && item.location.startsWith('http') 
                                        ? `<a href="${item.location}" target="_blank">View Map</a>` 
                                        : item.location}
                                </span>
                            </p>
                            <p>
                                <span class="label">Contact:</span> 
                                <span class="data">
                                    ${item.contact && item.contact !== 'Not specified' && /[\d\s]+/.test(item.contact)
                                        ? `<a href="tel:${item.contact.replace(/\s/g, '')}">${item.contact}</a>` 
                                        : item.contact}
                                </span>
                            </p>
                        </div>
                        <div class="card-right">
                            <p class="price"><span class="label">Price:</span> <span class="data">${item.price}</span></p>
                            <p><span class="label">Type:</span> <span class="data">${item.type}</span></p>
                            <p><span class="label">Limit:</span> <span class="data">${item.limit}</span></p>
                            <p><span class="label">Advance:</span> <span class="data">${item.advance}</span></p>
                            ${item.food ? `<p><span class="label">Food:</span> <span class="data">${item.food}</span></p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        });

        detailsSection.style.display = "block";
        currentType = type;
        detailsSection.scrollIntoView({ behavior: "smooth" });
    }

    roomsBtn.onclick = () => render(roomsData, "Available Rooms", "rooms", roomsBtn);
    pgsBtn.onclick = () => render(pgsData, "Available PGs", "pgs", pgsBtn);

    // Contact toggle
    const contactBtn = document.getElementById("contactBtn");
    const contactForm = document.getElementById("contactForm");
    const closeForm = document.getElementById("closeForm");

    contactBtn.onclick = () => {
        contactForm.style.display = contactForm.style.display === "block" ? "none" : "block";
    };
    closeForm.onclick = () => contactForm.style.display = "none";

    // FEEDBACK LOGIC
    // Check LocalStorage on load
    checkFeedbackStatus('feedbackItemQ1', 'feedback_q1_done');
    checkFeedbackStatus('feedbackItemQ2', 'feedback_q2_done');
    checkFeedbackStatus('feedbackItemQ3', 'feedback_q3_done');

    // Handle suggestion submit
    const submitBtnQ2 = document.getElementById("submitFeedbackQ2");
    const feedbackInput = document.getElementById("feedbackQ2");

    if (submitBtnQ2 && feedbackInput) {
        submitBtnQ2.onclick = () => {
            const hasText = feedbackInput.value.trim().length > 0;
            if (hasText) {
                // Track only that they typed something (privacy safe)
                if (typeof gtag === 'function') {
                    gtag('event', 'feedback_suggestion', {
                        'has_text': true
                    });
                }
                console.log('Feedback suggestion tracked: true');
                
                // Mark as done
                markAsSubmitted('feedbackItemQ2', 'feedback_q2_done');
            }
        };
    }
});

function markAsSubmitted(itemId, storageKey) {
    localStorage.setItem(storageKey, 'true');
    const item = document.getElementById(itemId);
    if (item) {
        item.innerHTML = '<p class="feedback-submitted-msg">Thanks for your feedback!</p>';
    }
}

function checkFeedbackStatus(itemId, storageKey) {
    if (localStorage.getItem(storageKey) === 'true') {
        const item = document.getElementById(itemId);
        if (item) {
             item.innerHTML = '<p class="feedback-submitted-msg">✓ Submitted</p>';
        }
    }
}

// Exposed global function for button clicks (inline onclick)
function trackFeedback(question, answer, btnElement) {
    // Determine which question group this is
    let itemId = '';
    let storageKey = '';

    if (question === 'helpful') {
        itemId = 'feedbackItemQ1';
        storageKey = 'feedback_q1_done';
    } else if (question === 'student') {
        itemId = 'feedbackItemQ3';
        storageKey = 'feedback_q3_done';
    }

    // Track event
    if (typeof gtag === 'function') {
        gtag('event', 'feedback_action', {
            'question': question,
            'answer': answer
        });
    }
    console.log(`Feedback tracked: ${question} - ${answer}`);

    // Update UI and Storage
    markAsSubmitted(itemId, storageKey);
}
