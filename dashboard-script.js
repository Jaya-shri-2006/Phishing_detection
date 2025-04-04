import { app, auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    // Check authentication state
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = 'login.html';
        } else {
            loadUserData(user.uid);
            setupEventListeners();
        }
    });
});

async function loadUserData(uid) {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            
            // Update UI with user data
            document.getElementById('userName').textContent = userData.username || 'User';
            document.getElementById('totalScans').textContent = userData.totalScans || 0;
            document.getElementById('maliciousCount').textContent = userData.maliciousCount || 0;
            document.getElementById('safeCount').textContent = userData.safeCount || 0;
        }
    } catch (error) {
        console.error("Error loading user data:", error);
        window.location.href = 'login.html';
    }
}

function setupEventListeners() {
    // Logout handler
    document.getElementById('navLogout').addEventListener('click', handleLogout);
    
    // Navigation active state
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
}

async function handleLogout() {
    try {
        await signOut(auth);
        window.location.href = 'login.html';
    } catch (error) {
        console.error("Logout failed:", error);
    }
}