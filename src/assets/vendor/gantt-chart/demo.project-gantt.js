$(document).ready(function (e) {
    var s = new Gantt(
        "#tasks-gantt",
        [
            { id: "1", name: "Draft the new contract document for sales team", start: "2019-01-01", end: "2019-01-04", progress: 55 },
            { id: "2", name: "Find out the old contract documents", start: "2019-01-05", end: "2019-01-08", progress: 85, dependencies: "1" },
            { id: "3", name: "Organize meeting with sales associates to understand need in detail", start: "2019-01-09", end: "2019-01-13", progress: 80, dependencies: "2" },
            { id: "4", name: "iOS App home page", start: "2019-01-14", end: "2019-01-17", progress: 80 },
            { id: "5", name: "Write a release note", start: "2019-01-18", end: "2019-01-22", progress: 65, dependencies: "4" },
            { id: "6", name: "Setup new sales project", start: "2019-01-20", end: "2019-01-31", progress: 15 },
            { id: "7", name: "Invite user to a project", start: "2019-01-25", end: "2019-01-26", progress: 99, dependencies: "6" },
            { id: "8", name: "Coordinate with business development", start: "2019-01-28", end: "2019-01-30", progress: 35, dependencies: "7" },
            { id: "9", name: "Kanban board design", start: "2019-02-01", end: "2019-02-03", progress: 25, dependencies: "8" },
            { id: "10", name: "Enable analytics tracking", start: "2019-02-05", end: "2019-02-07", progress: 60, dependencies: "9" },
        ],
        {
            view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"],
            bar_height: 20,
            padding: 18,
            view_mode: "Week",
            custom_popup_html: function (e) {
                e.end, 60 <= e.progress || (30 <= e.progress && e.progress);
                return '<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip"><div class="arrow"></div><div class="popover-body"><h6>Task name</h6><p class="mb-2">Expected to finish by 10/12/2019</p><div class="progress mb-2" style="height: 10px;"><div class="progress-bar ${progressCls}" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}" aria-valuemin="0" aria-valuemax="100">${task.progress}%</div></div></div></div>';
            },
        }
    );
    $("#modes-filter :input").change(function () {
        s.change_view_mode($(this).val());
    });
});
