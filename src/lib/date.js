export let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export let today = new Date();
let year = today.getFullYear();
let startOfYear = new Date(year, 0, 1);
let endOfYear = new Date(year + 1, 0, 1);
let totalDays = (endOfYear - startOfYear) / (1000 * 60 * 60 * 24);
let passedDays = (today - startOfYear) / (1000 * 60 * 60 * 24);

export let progress = passedDays / totalDays;
export let filledSquares = Math.round(progress * 365 / 100);
