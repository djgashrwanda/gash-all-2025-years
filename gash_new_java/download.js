const files = [
    {
        name: "SWDBF501 Blockchains Fundamentals.pdf",
        size: "1.5 MB",
        author: "TVEV/REB",
        date: "May 3, 2024",
        url: "https://drive.google.com/file/d/13CrYZTjGXEDVGrL4vq1Eukfgn9mvXeZT/view?usp=drive_link"
    },
    {
        name: "SWDFA501 Front-End App Development with React.JS.pdf",
        size: "3.2 MB",
        author: "Selector Gash",
        date: "April 20, 2025",
        url: "https://drive.google.com/file/d/1tgPAzZuNKTNIDQrwXgAJWHY39uBit81H/view?usp=drive_link"
    },
    {
        name: "Spreadsheet.xlsx",
        size: "1.8 MB",
        author: "Gashema Francis",
        date: "March 15, 2025",
        url: "files/Spreadsheet.xlsx"
    },
    {
        name: "SWDBF501 Blockchains Fundamentals.pdf",
        size: "1.5 MB",
        author: "TVEV/REB",
        date: "May 3, 2024",
        url: "https://drive.google.com/file/d/13CrYZTjGXEDVGrL4vq1Eukfgn9mvXeZT/view?usp=drive_link"
    },
    {
        name: "SWDFA501 Front-End App Development with React.JS.pdf",
        size: "3.2 MB",
        author: "Selector Gash",
        date: "April 20, 2025",
        url: "https://drive.google.com/file/d/1tgPAzZuNKTNIDQrwXgAJWHY39uBit81H/view?usp=drive_link"
    },
    {
        name: "Spreadsheet.xlsx",
        size: "1.8 MB",
        author: "Gashema Francis",
        date: "March 15, 2025",
        url: "files/Spreadsheet.xlsx"
    },
];

let filesShown = 3; // Show this many files initially

function displayFiles(filesToDisplay) {
    const fileList = document.getElementById("file-list");
    const fileCount = document.getElementById("file-count");
    fileList.innerHTML = "";
    fileCount.textContent = `${filesToDisplay.length} file(s) found`;

    filesToDisplay.slice(0, filesShown).forEach(file => {
        const fileItem = document.createElement("div");
        fileItem.classList.add("file-item");

        fileItem.innerHTML = `
            <h3>${file.name}</h3>
            <p><strong>Size:</strong> ${file.size}</p>
            <p><strong>Author:</strong> ${file.author}</p>
            <p><strong>Date:</strong> ${file.date}</p>
            <a href="${file.url}" class="download-button" download>Download</a>
        `;

        fileList.appendChild(fileItem);
    });

    const showMoreButton = document.getElementById("show-more-button");
    if (filesShown >= filesToDisplay.length) {
        showMoreButton.style.display = "none";
    } else {
        showMoreButton.style.display = "block";
    }
}

function searchFiles() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(query) ||
        file.author.toLowerCase().includes(query)
    );
    filesShown = 3; // Reset when searching
    displayFiles(filteredFiles);
}

function showMore() {
    filesShown += 3; // Increase the number of files shown
    displayFiles(files);
}

document.getElementById("show-more-button").addEventListener("click", showMore);

// Initial display
displayFiles(files);


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});