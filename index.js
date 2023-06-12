import {data} from "./data.js";

const results = document.querySelector("#results-list");
const search = document.querySelector("#app-search");

const spaceshipProject = (query = "") => {
    const cleaneQuery = query.trim().toLowerCase();
    const filterData = data.filter(item => item.spacecraft.toLowerCase().includes(cleaneQuery));
    results.innerHTML = "";
    filterData.forEach(item => {
        results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`);
    })
    search.addEventListener("keyup", () => {
        spaceshipProject(search.value);
    });
};

spaceshipProject();
