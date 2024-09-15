// Toggle Buttons

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === "none" ? "block" : "none";
    } else {
        console.error(`Element with id '${sectionId}' not found.`);
    }
}
