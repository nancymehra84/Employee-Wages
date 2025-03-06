const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
<<<<<<< HEAD
const WORKING_DAYS_PER_MONTH = 20;

=======
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;


>>>>>>> UC-5
function getWorkHours(workType) {
    switch (workType) {
        case 1:
            console.log("Employee worked Part Time");
            return PART_TIME_HOURS;
        case 2:
            console.log("Employee worked Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee did not work");
            return 0;
    }
}


let totalWage = 0;
<<<<<<< HEAD

for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
    let workType = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(workType);
    let dailyWage = workHours * WAGE_PER_HOUR;
    totalWage += dailyWage;
    console.log(`Day ${day}: Daily Wage = $${dailyWage}`);
}

=======
let totalHours = 0;
let totalDays = 0;

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);
    
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours; 
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalWage += dailyWage;
    totalHours += workHours;
    totalDays++;

    console.log(`Day ${totalDays}: Worked ${workHours} hours, Daily Wage = $${dailyWage}`);
}

console.log(`Total Days Worked: ${totalDays}, Total Hours Worked: ${totalHours}`);
>>>>>>> UC-5
console.log(`Total Monthly Wage: $${totalWage}`);