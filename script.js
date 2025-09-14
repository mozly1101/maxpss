function toggleVisibility(elementId) {
    const content = document.getElementById(elementId);
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

function copyToClipboard(elementId, button) {
    const textToCopy = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000); // Revert back after 2 seconds
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Gagal menyalin teks!');
    });
}