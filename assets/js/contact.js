/* Contact form handling: validation, save draft to localStorage, and simulated submission */

const contactForm = document.getElementById('contactForm');
const saveDraft = document.getElementById('saveDraft');
const formMsg = document.getElementById('formMsg');

// Load draft if present
function loadDraft() {
  const draft = localStorage.getItem('ht_contact_draft');
  if (!draft) return;
  try {
    const data = JSON.parse(draft);
    document.getElementById('name').value = data.name || '';
    document.getElementById('email').value = data.email || '';
    document.getElementById('phone').value = data.phone || '';
    document.getElementById('service').value = data.service || 'Grooming';
    document.getElementById('message').value = data.message || '';
    formMsg.textContent = 'Loaded saved draft.';
    setTimeout(()=> formMsg.textContent = '', 2500);
  } catch (e) {
    console.warn('Could not parse draft', e);
  }
}

loadDraft();

// Save draft
if (saveDraft) saveDraft.addEventListener('click', () => {
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    message: document.getElementById('message').value
  };
  localStorage.setItem('ht_contact_draft', JSON.stringify(data));
  formMsg.textContent = 'Draft saved locally.';
  setTimeout(()=> formMsg.textContent = '', 2500);
});

// Simple validation and simulated submit
if (contactForm) contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    formMsg.textContent = 'Please complete the required fields.';
    return;
  }

  // Simulate network delay
  formMsg.textContent = 'Sending...';
  setTimeout(() => {
    // clear draft on successful send
    localStorage.removeItem('ht_contact_draft');
    contactForm.reset();
    formMsg.textContent = 'Thanks! Your message has been sent. We will respond within 24 hours.';
    setTimeout(()=> formMsg.textContent = '', 5000);
  }, 1000);
});
