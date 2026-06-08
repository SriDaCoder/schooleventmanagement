const events = {
    15: [
        {
            title: "Science Fair 2026",
            location: "School Hall"
        }
    ],
    22: [
        {
            title: "Inter-House Sports Day",
            location: "School Field"
        }
    ],
    30: [
        {
            title: "Programming Competition",
            location: "Computer Lab"
        }
    ]
};

const calendar = document.getElementById("calendar");
const bottomSheet = document.getElementById("bottomSheet");
const sheetTitle = document.getElementById("sheetTitle");
const sheetContent = document.getElementById("sheetContent");

const headers = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

headers.forEach(day => {
    const header = document.createElement("div");
    header.className = "day-header";
    header.textContent = day;
    calendar.appendChild(header);
});

// June 2026 starts on Monday
calendar.appendChild(document.createElement("div")).className = "empty";

for (let day = 1; day <= 30; day++) {
    const cell = document.createElement("div");
    cell.className = "day";

    if (events[day]) {
        cell.classList.add("event-day");
    }

    let html = `<div class="day-number">${day}</div>`;

    if (events[day]) {
        events[day].forEach(event => {
            html += `
                <div class="event-preview">
                    ${event.title}
                </div>
            `;
        });
    }

    cell.innerHTML = html;

    cell.addEventListener("click", () => {

        document.querySelectorAll(".day").forEach(d => {
            d.classList.remove("selected-day");
        });

        cell.classList.add("selected-day");

        sheetTitle.textContent = `Events on June ${day}`;
        sheetContent.innerHTML = "";

        if (events[day]) {
            events[day].forEach(event => {
                sheetContent.innerHTML += `
                    <div class="sheet-event">
                        <h3>${event.title}</h3>
                        <p>${event.location}</p>
                    </div>
                `;
            });
        } else {
            sheetContent.innerHTML = `
                <div class="sheet-event">
                    <p>No events scheduled.</p>
                </div>
            `;
        }

        bottomSheet.classList.add("open");
    });

    calendar.appendChild(cell);
}

document.addEventListener("click", (e) => {
    if (
        bottomSheet.classList.contains("open") &&
        !bottomSheet.contains(e.target) &&
        !e.target.closest(".day")
    ) {
        bottomSheet.classList.remove("open");

        document.querySelectorAll(".day").forEach(d => {
            d.classList.remove("selected-day");
        });
    }
});