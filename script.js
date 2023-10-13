document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            // Get the <tbody> element to populate the table
            const courseTable = document.getElementById("course-table");

            // Iterate through the courses and create table rows
            data.forEach(course => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${course.course_name}</td>
                                 <td>${course.platform}</td>
                                 <td>${course.free_course}</td>
                                 <td>${course.difficulty}</td>
                                 <td>${course.module_number}</td>
                                 <td>${course.certification === "free" ? "Free" : "Paid"}</td>
                                 <td><a href="${course.link}" target="_blank">Visit Course</a></td>`;
                courseTable.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
