export function setupCopy() {
  const copyButtons = document.querySelectorAll('.highlighted-code .btn-copy');
  copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const codeElement = button.parentElement?.querySelector('code');
      if (codeElement) {
        navigator.clipboard
          .writeText(codeElement.textContent || '')
          .then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
              button.textContent = 'Copy';
            }, 2000);
          })
          .catch((err) => {
            console.error('Failed to copy text: ', err);
          });
      }
    });
  });
}
