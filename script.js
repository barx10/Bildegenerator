document.getElementById('imageForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const prompt = document.getElementById('prompt').value;
    
    // Eksempel API-oppringning (juster URL og logikk etter behov)
    const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });
    
    const data = await response.json();
    const imageResult = document.getElementById('imageResult');
    imageResult.innerHTML = `<img src="${data.imageUrl}" alt="Generated Image">`;
});
