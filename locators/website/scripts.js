document.addEventListener("DOMContentLoaded", function() {
    // Example of dynamically adding class to highlight articles with "draft" status
    document.querySelectorAll('.post[data-status="draft"]').forEach(function(post) {
        post.classList.add('highlight');
    });
});
