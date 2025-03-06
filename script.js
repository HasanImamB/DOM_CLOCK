function showDateTime() {
    const dateTimeDiv = document.getElementById('datetime');
    dateTimeDiv.innerText = new Date().toLocaleString();
    dateTimeDiv.style.display = 'block';
}
