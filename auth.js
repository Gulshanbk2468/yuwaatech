document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const actionButtonsContainer = document.querySelector('.action-buttons'); // We will add this class to the container

    if (actionButtonsContainer) {
        if (loggedIn) {
            // User is logged in, show welcome message and logout button
            actionButtonsContainer.innerHTML = `
                <span class="navbar-text me-3">Welcome!</span>
                <button id="logoutBtn" class="btn btn-outline-secondary btn-sm">Logout</button>
            `;
            document.getElementById('logoutBtn').addEventListener('click', () => {
                localStorage.removeItem('userLoggedIn');
                window.location.href = 'index.html'; // Redirect to home on logout
            });
        }
        // If not logged in, the default HTML login/register buttons will be shown.
    }

    // Check for the one-time welcome message on the homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        const justLoggedIn = localStorage.getItem('justLoggedIn');
        if (justLoggedIn) {
            // Create and show a toast message
            const toast = document.createElement('div');
            toast.className = 'toast show align-items-center text-white bg-primary border-0';
            toast.style.position = 'fixed';
            toast.style.top = '20px';
            toast.style.right = '20px';
            toast.style.zIndex = '1100';
            toast.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">
                        Thanks for choosing us! You have successfully logged in.
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            `;
            document.body.appendChild(toast);
            
            // Remove the flag so it doesn't show again
            localStorage.removeItem('justLoggedIn');

            // Hide the toast after 5 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 5000);
        }
    }
}); 