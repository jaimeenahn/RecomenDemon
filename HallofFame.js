(function (window) {
    var document = window.document;
    var STORAGE_KEY = 'savedContent#';
    var editTimeoutId;

    /**
     * Event handler for edits made to contenteditable elements.
     */
    function onEdit(event) {
        var element = event.currentTarget;
        // Stop previous attempts at saving now that new edits have been made.
        clearTimeout(editTimeoutId);
        // Schedule a save in 500 ms.
        editTimeoutId = setTimeout(function () {
            var content = element.innerHTML;
            localStorage.setItem(STORAGE_KEY + element.id, content);
        }, 500);
    }

    /**
     * Restore saved edits.
     */
    function restore(element) {
        if (!element.id.length) {
            return;
        }
        var savedContent = localStorage.getItem(STORAGE_KEY + element.id);
        if (savedContent) {
            element.innerHTML = savedContent;
        }
    }

    // Listen for DOM readiness to attach our handlers and restore saved edits.
    document.addEventListener("DOMContentLoaded", function(event) {
        // Find all [contenteditable] elements.
        var editables = document.querySelectorAll('[contenteditable]');
        for (var i = 0; i < editables.length; i++) {
            var element = editables[i];
            var id = element.id;
            // Elements must have an id to do anything useful with them.
            if (!id.length) {
                break;
            }

            // Add the auto-save event handler.
            element.addEventListener('input', onEdit);

            // Restore any previously saved edits.
            restore(element);
        }
    });
})(this);