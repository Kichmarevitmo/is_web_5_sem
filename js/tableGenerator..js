document.addEventListener("DOMContentLoaded", function () {
    const tableForm = document.getElementById("tableForm");
    const tableContainer = document.getElementById("tableContainer");
    const messageContainer = document.getElementById("messageContainer");

    tableForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const weekDays = document.getElementById("weekDays").value;
        const maxLessons = document.getElementById("maxLessons").value;
        const subjectsInput = document.getElementById("subjects");

        const subjectsArray = subjectsInput.value.split(",").map(subject => subject.trim());

        if (!isValidInput(weekDays, maxLessons, subjectsArray)) {
            showMessage("Пожалуйста, введите корректные значения.");
            return;
        }
        const shuffledSubjects = shuffleArray(subjectsArray);

        const tableHTML = generateTable(weekDays, maxLessons, shuffledSubjects);

        tableContainer.innerHTML = tableHTML;

        saveToLocalStorage({ weekDays, maxLessons, subjects: shuffledSubjects });

        showMessage("Таблица успешно сгенерирована!");
    });

    function isValidInput(weekDays, maxLessons, subjects) {
        return weekDays > 0 && maxLessons > 0 && subjects.length > 0;
    }

    function generateTable(weekDays, maxLessons, subjects) {
        let tableHTML = '<table>';
        tableHTML += '<thead><tr>';

        for (let i = 1; i <= weekDays; i++) {
            tableHTML += `<th>День ${i}</th>`;
        }

        tableHTML += '</tr></thead>';
        tableHTML += '<tbody>';

        for (let lesson = 1; lesson <= maxLessons; lesson++) {
            tableHTML += '<tr>';

            for (let day = 1; day <= weekDays; day++) {
                const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
                tableHTML += `<td>Занятие ${lesson} (${randomSubject})</td>`;
            }

            tableHTML += '</tr>';
        }

        tableHTML += '</tbody></table>';

        return tableHTML;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function saveToLocalStorage(params) {
        localStorage.setItem("tableParams", JSON.stringify(params));
    }

    function showMessage(message) {
        messageContainer.textContent = message;
    }
});
