async function loadContent() {
    try {
        const headerResponse = await fetch('header.html');
        if (!headerResponse.ok) throw new Error('Failed to load header');
        const headerContent = await headerResponse.text();
        document.getElementById('site-header').innerHTML = headerContent;

        const footerResponse = await fetch('footer.html');
        if (!footerResponse.ok) throw new Error('Failed to load footer');
        const footerContent = await footerResponse.text();
        document.getElementById('site-footer').innerHTML = footerContent;
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('site-header').innerHTML = '<p>Error loading header.</p>';
        document.getElementById('site-footer').innerHTML = '<p>Error loading footer.</p>';
    }
}

function selectRandomImage() {
    const images = [
        '160 CT Scanner.JPG',
        'A & E.JPG',
        'Admin block side.JPG',
        'Admin block.JPG',
        'CMD RSFUTH.JPG',
        'CMD\'s reception.JPG',
        'DSCN0665.JPG',
        'DSCN0666.JPG',
        'DSCN0667.JPG',
        'DSCN0669.JPG',
        'DSCN0727.JPG',
        'DSCN0730.JPG',
        'DSCN0736.JPG',
        'DSCN0738.JPG',
        'DSCN0739.JPG',
        'DSCN0740.JPG',
        'DSCN0743.JPG',
        'DSCN0744.JPG',
        'DSCN0745.JPG',
        'DSCN0748.JPG',
        'DSCN0749.JPG',
        'DSCN0751.JPG',
        'DSCN0752.JPG',
        'DSCN0753.JPG',
        'Inside A&E.JPG',
        'VC Fud, minister & CMD.JPG',
        'X-ray Machine.JPG',
        'minister of health and cmd.JPG',
        'visit of minister.JPG'
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    document.getElementById('randomImage').src = `./photo/${selectedImage}`;
}

window.onload = async function() {
    await loadContent();
    selectRandomImage(); // Call the function to select and display a random image
};