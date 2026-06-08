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

const bottomSheet = document.getElementById("bottomSheet");
const sheetTitle = document.getElementById("sheetTitle");
const sheetContent = document.getElementById("sheetContent");

document.querySelectorAll(".event-day").forEach(day => {
    day.addEventListener("click", () => {

        document.querySelectorAll(".day").forEach(d => {
            d.classList.remove("selected-day");
        });

        day.classList.add("selected-day");

        const dayNumber = day.dataset.day;

        sheetTitle.textContent = `Events on June ${dayNumber}`;

        sheetContent.innerHTML = "";

        events[dayNumber].forEach(event => {
            sheetContent.innerHTML += `
                <div class="sheet-event">
                    <h3>${event.title}</h3>
                    <p>${event.location}</p>
                </div>
            `;
        });

        bottomSheet.classList.add("open");
    });
});

document.addEventListener("click", (e) => {
    if (
        bottomSheet.classList.contains("open") &&
        !bottomSheet.contains(e.target) &&
        !e.target.classList.contains("event-day")
    ) {
        bottomSheet.classList.remove("open");

        document.querySelectorAll(".day").forEach(d => {
            d.classList.remove("selected-day");
        });
    }
});