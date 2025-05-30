// Simulated Data (JSON format)
const data = {
    "files": [
        {
            "image": "../image/ChatGPT Image May 8, 2025, 02_45_07 PM.png",
            "file_name": "Best Mixx Song Of Blaisebeatz ( Vuba ) With Selecter gash",
            "date": "2024-10-11",
            "author": "Gashema Francis",
            "description": " 🎧 🎧 🎧Best Mixx Song of Blaisebeatz (Vuba) with Selecter Gash is a high-energy, genre-blending DJ mix that fuses the infectious rhythms of Blaisebeatz's signature Afrobeat production with the sharp transitions and musical storytelling of Selecter Gash. This mix captures the pulse of modern African sound, driven by deep percussions, hypnotic melodies, and smooth vocal drops—all curated with flair and finesse. Whether you're on the dancefloor or vibing through headphones, this is the ultimate soundtrack to elevate your mood and move your body.",
            "download_url": "https://drive.google.com/file/d/1XM_wvYca2xiOiB43VlHcN58l0RAQxBmg/view?usp=drive_link"
        },
        {
            "image": "../image/download.jpg",
            "file_name": "Jumong_S01e25",
            "date": "2006-feb",
            "author": "SAVIMBI",
            "description": "Jumong (Korean: 삼한지: 주몽 편) is a South Korean epic series that aired on MBC from 2006 to 2007 as the network's 45th anniversary special..",
            "download_url": "https://anonsharing.com/video/embed/bc3f7c4c83a78b1b/640x320/Jumong_S01e25.mp4"
        },
        {
            "image": "../image/download (2).jpg",
            "file_name": "LIMITLESS",
            "date": "March 8, 2011",
            "author": "Savimbi",
            "description": "Released in 2011, the action-thriller film ‘Limitless’, directed by Neil Burger, stars Bradley Cooper, Abbie Cornish and Robert De Niro. The film follows the 28 day evolution of Eddie Morra (Cooper), a writer with a low life who discovers NZT a drug that brings out the best in him. Success is gained but there are dangers and moral problems as well Cooper plays Eddie the main character a dreamer and an addict at the same time and his performance is great as he depicts the journey from average to great. The film is very visible, the cinematography and the editing are quite dynamic and the fast cutting rate of the film makes the audience feel that they are part of Eddie’s fast pace life. The score of the film also fits well with the story since it reflects the high and low of Eddie’s life",
            "download_url": "https://anonsharing.com/file/23aea850585d10d3/Limitless.mp4"
        },
        {
            "image": "../image/download (1).jpg",
            "file_name": "G20",
            "date": "April 10, 2025",
            "author": " ROCKY",
            "description": "When terrorists take over the G20 summit, US President Danielle Sutton uses her governing and military experience to defend her family, fellow leaders, and the world.",
            "download_url": "https://vod3.cf.dmcdn.net/sec2(Ftji10itZDKA-ZGH0PmvYZMPAMdOihdykFU1kQxpelmk_7kPhI56r4d-G_DQ0LzwI0DqgxD9mfmk0VmBxJTwKeQEtjpxuuF7iZnCShZ_qKp20QN6_OurSOInQRIuZgbm7_wgQz68kOAfbLsGvdndswcVnKcArorytInE_kndRWPb4IgP0hFAjck38J7gEssMKsVGtADrO_B8ks3r3OOjDg)/download/621/073/576370126_mp4_h264_aac_hq_1.mp4#cell=cf3"
        },
        {
            "image": "../image/ChatGPT Image May 8, 2025, 10_34_54 AM.png",
            "file_name": "Best OF selecter gash 2024 Vo2",
            "date": "2024-07",
            "author": "Gashema Francis",
            "description": "🎧 🎧 🎧 Best Mix of Selector Gash Vol 2 Get ready to vibe with the hottest fusion of Afrobeat Dancehall and Amapiano—carefully blended by Selector GashGashema Francis.Volume 2 takes you on a non- stop musical journey filled with energy, rhythm, and signature transitions that define true party vibes.Whether you're chilling, partying, or working out, this mix brings the fire you need..",
            "download_url": "https://drive.google.com/file/d/1DW7K_SPYMTRDZrtyr1nywuRg-XTalBje/view?usp=drive_link"
        },
    ]
};

// Function to get the file details from the URL and populate the page
function loadFileDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('file');

    // Find the file from the data
    const file = data.files.find(f => f.file_name === fileName);

    if (file) {
        document.getElementById('file-image').src = file.image;
        document.getElementById('file-name').textContent = file.file_name;
        document.getElementById('file-author').textContent = file.author;
        document.getElementById('file-date').textContent = file.date;
        document.getElementById('file-description').textContent = file.description;
        document.getElementById('download-link').href = file.download_url;
    } else {
        document.getElementById('file-details').innerHTML = "<p>File not found.</p>";
    }
}

// Initialize the page content when loaded
window.onload = loadFileDetails;


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
