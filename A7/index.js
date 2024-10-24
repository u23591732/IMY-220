var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
})(Priority || (Priority = {}));
var TaskManager = /** @class */ (function () {
    function TaskManager(arr) {
        this._tasks = arr || [];
    }
    TaskManager.prototype.getTasks = function () {
        return this._tasks;
    };
    TaskManager.prototype.addTask = function (task) {
        this._tasks.push(task);
    };
    TaskManager.prototype.listTasks = function () {
        return this._tasks.map(function (task) {
            var _a;
            return "".concat(task.id, " | ").concat(task.name, "  (").concat(task.category, ")\n\n            Priority: ").concat(Priority[task.priority], " \nDate: ").concat(task.date, " \nTags: ").concat(((_a = task.tags) === null || _a === void 0 ? void 0 : _a.join(', ')) || 'None', " \nCompleted: ").concat(task.completed);
        });
    };
    TaskManager.prototype.sortTasksByPriority = function () {
        this._tasks.sort(function (a, b) { return a.priority - b.priority; });
    };
    TaskManager.prototype.findTask = function (input) {
        var foundTask;
        if (typeof input === 'number') {
            foundTask = this._tasks.find(function (task) { return task.id === input; });
        }
        else if (typeof input === 'string') {
            foundTask = this._tasks.find(function (task) { return task.name.toLowerCase() === input.toLowerCase(); });
        }
        return foundTask || "Task not found";
    };
    return TaskManager;
}());
