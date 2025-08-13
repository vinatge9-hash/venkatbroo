/* Main JS for interacting with index.html
   Handles mobile menu, service card details, carousel, chat modal, and subtle UI behaviors. */

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Service cards interactive detail
const serviceCards = document.querySelectorAll('.service-card');
const serviceDetail = document.getElementById('serviceDetail');
const serviceTitle = document.getElementById('serviceTitle');
const serviceDesc = document.getElementById('serviceDesc');
const closeDetail = document.getElementById('closeDetail');

const detailsMap = {
  'Grooming': 'Our grooming team provides gentle baths, brushes and hand-scissor trims. Comfortable, calm environment and senior-friendly options.',
  'Walking': 'Enjoy safe walks with updates and optional GPS tracking. We match energy levels and can arrange social playdates.',
  'Training': 'Positive reinforcement training for puppies and adults. Behavior consults tailored to your goals.'
};

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    const svc = card.getAttribute('data-service');
    serviceTitle.textContent = svc;
    serviceDesc.textContent = detailsMap[svc] || 'Learn more about this service.';
    serviceDetail.classList.remove('hidden');
    serviceDetail.scrollIntoView({ behavior: 'smooth' });
  });
});

if (closeDetail) closeDetail.addEventListener('click', () => serviceDetail.classList.add('hidden'));

// Simple testimonials carousel
const slides = document.getElementById('slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let idx = 0;
const total = slides ? slides.children.length : 0;

function showSlide(i) {
  if (!slides) return;
  idx = (i + total) % total;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}

if (prev) prev.addEventListener('click', () => showSlide(idx - 1));
if (next) next.addEventListener('click', () => showSlide(idx + 1));

// Auto-rotate
let auto = setInterval(() => showSlide(idx + 1), 6000);
[prev, next, slides].forEach(el => {
  if (el) el.addEventListener('mouseover', () => clearInterval(auto));
  if (el) el.addEventListener('mouseleave', () => auto = setInterval(() => showSlide(idx + 1), 6000));
});

// Chat modal
const chatBtn = document.getElementById('chatBtn');
const chatModal = document.getElementById('chatModal');
const closeChat = document.getElementById('closeChat');
const sendChat = document.getElementById('sendChat');
const chatInput = document.getElementById('chatInput');
const chatLog = document.getElementById('chatLog');

if (chatBtn) chatBtn.addEventListener('click', () => chatModal.classList.remove('hidden'));
if (closeChat) closeChat.addEventListener('click', () => chatModal.classList.add('hidden'));
if (chatModal) chatModal.addEventListener('click', (e) => { if (e.target === chatModal) chatModal.classList.add('hidden'); });

if (sendChat) sendChat.addEventListener('click', () => {
  const text = chatInput.value.trim();
  if (!text) return;
  const userLine = document.createElement('div');
  userLine.className = 'bg-primary-700 text-white px-3 py-2 rounded-md inline-block mb-2 text-sm';
  userLine.textContent = text;
  chatLog.appendChild(userLine);
  chatInput.value = '';

  // Simulated bot reply
  setTimeout(() => {
    const botLine = document.createElement('div');
    botLine.className = 'bg-white px-3 py-2 rounded-md inline-block mb-2 text-sm border';
    botLine.textContent = 'Thanks! We received your message. A team member will respond shortly.';
    chatLog.appendChild(botLine);
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 800);
});

// Small hover animation helper
document.querySelectorAll('a, button').forEach(el => {
  el.classList.add('transition', 'duration-200');
});
