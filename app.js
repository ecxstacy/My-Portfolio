const form = document.getElementById('prompt-form');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copy-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const concept = document.getElementById('concept').value.trim();
  const style = document.getElementById('style').value;
  const placement = document.getElementById('placement').value;
  const mood = document.getElementById('mood').value.trim() || 'balanced and artistic';
  const colors = document.getElementById('colors').value.trim() || 'high contrast black and grayscale';
  const details = document.getElementById('details').value.trim() || 'clean composition, tattoo-friendly linework';

  const prompt = [
    `Create a professional tattoo concept design.` ,
    `Subject: ${concept}.`,
    `Style: ${style}.`,
    `Placement reference: ${placement}.`,
    `Mood and energy: ${mood}.`,
    `Color approach: ${colors}.`,
    `Additional details: ${details}.`,
    `The artwork should be stencil-ready, with strong readability, balanced negative space, and detail hierarchy suitable for skin.`
  ].join(' ');

  result.textContent = prompt;
  copyBtn.classList.remove('copied');
  copyBtn.textContent = 'Copy';
});

copyBtn.addEventListener('click', async () => {
  const text = result.textContent.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.classList.add('copied');
    copyBtn.textContent = 'Copied';
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyBtn.textContent = 'Copy';
    }, 1500);
  } catch {
    copyBtn.textContent = 'Copy failed';
    setTimeout(() => {
      copyBtn.textContent = 'Copy';
    }, 1500);
  }
});
