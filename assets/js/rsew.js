// Simulate loading progress
const progressBar = document.getElementById('progressBar');
const loadingScreen = document.getElementById('loading-screen');
const app = document.getElementById('app');

let progress = 0;
const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);

        // Hide loading screen and show app
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';

            // Show app with fade-in animation
            app.style.display = 'block';
            setTimeout(() => {
                app.style.opacity = '1';
            }, 50);
        }, 500);
    }
    progressBar.style.width = `${progress}%`;
}, 200);

// Initialize app functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const spinner = document.getElementById('spinner');
    const popularItems = document.querySelectorAll('.popular-item');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const resourceContainer = document.getElementById('resourceContainer');

    // Improved search functionality with better matching
    function performSearch(query) {
        if (query.length === 0) {
            hideResults();
            return [];
        }

        // Normalize the query
        const normalizedQuery = query.toLowerCase().trim();

        // Split into individual words
        const queryWords = normalizedQuery.split(/\s+/);

        return educationalResources.map(resource => {
            // Create a searchable string that includes all relevant fields
            const searchableText = `
                ${resource.title.toLowerCase()}
                ${resource.description.toLowerCase()}
                ${resource.author.toLowerCase()}
            `;

            // Calculate a score for this resource
            let score = 0;

            // Check for exact matches in title (highest weight)
            if (resource.title.toLowerCase().includes(normalizedQuery)) {
                score += 50;
            }

            // Check for matches in description
            if (resource.description.toLowerCase().includes(normalizedQuery)) {
                score += 20;
            }

            // Check for matches in author
            if (resource.author.toLowerCase().includes(normalizedQuery)) {
                score += 15;
            }

            // Check for individual word matches
            queryWords.forEach(word => {
                if (word.length < 3) return; // ignore very short words
                if (resource.title.toLowerCase().includes(word)) score += 10;
                if (resource.description.toLowerCase().includes(word)) score += 5;
            });

            return {
                ...resource,
                score
            };
        })
        .filter(resource => resource.score > 0)
        .sort((a, b) => b.score - a.score);
    }

    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();

        if (query.length === 0) {
            hideResults();
            return;
        }

        showLoading();

        searchTimeout = setTimeout(() => {
            const results = performSearch(query);
            displayResults(results, query);
            hideLoading();
        }, 400);
    });

    function displayResults(results, query) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <div>Aucun résultat trouvé pour "${query}"</div>
                    <div style="font-size: 13px; margin-top: 8px;">Essayez avec des mots-clés différents</div>
                </div>
            `;
            showResults();
            return;
        }

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.dataset.id = result.id;

            const typeIcon = getTypeIcon(result.type);

            resultItem.innerHTML = `
                <div class="result-icon">${typeIcon}</div>
                <div class="result-content">
                    <div class="result-title">${highlightMatches(result.title, query)}</div>
                    <div class="result-description">${highlightMatches(result.description, query)}</div>
                    <div class="result-meta">
                        <span><i class="fas fa-user"></i> ${result.author}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${new Date(result.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                </div>
            `;

            resultItem.addEventListener('click', () => openModal(result));
            searchResults.appendChild(resultItem);
        });

        showResults();
    }

    // Highlight matching text in search results
    function highlightMatches(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        return text.replace(regex, '<span style="background-color: var(--primary-light); color: var(--primary); padding: 0 2px; border-radius: 2px;">$1</span>');
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function getTypeIcon(type) {
        const icons = {
            'course': '<i class="fas fa-graduation-cap"></i>',
            'textbook': '<i class="fas fa-book"></i>',
            'video': '<i class="fas fa-play-circle"></i>'
        };
        return icons[type] || '<i class="fas fa-file"></i>';
    }

    function showLoading() {
        spinner.style.display = 'block';
    }

    function hideLoading() {
        spinner.style.display = 'none';
    }

    function showResults() {
        searchResults.classList.add('visible');
    }

    function hideResults() {
        searchResults.classList.remove('visible');
    }

    // Popular searches functionality
    popularItems.forEach(item => {
        item.addEventListener('click', function() {
            const searchText = this.textContent.replace(/^[^a-zA-Z]+/, '').trim();
            searchInput.value = searchText;
            searchInput.focus();
            searchInput.dispatchEvent(new Event('input'));
        });
    });

    // Modal functionality
    function openModal(resource) {
        modalTitle.textContent = resource.title;
        resourceContainer.innerHTML = '';

        resource.pdfs.forEach((item, index) => {
            const resourceBox = document.createElement('div');
            resourceBox.className = 'resource-box';

            resourceBox.innerHTML = `
                <div class="resource-header">
                    <div class="resource-title">
                        <i class="fas fa-file-pdf" style="color: #E53E3E;"></i>
                        ${item.title}
                    </div>
                    <div class="resource-actions">
                       
                    </div>
                </div>
                <div class="pdf-container">
                    <div class="pdf-icon">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="pdf-name">${item.title}</div>
                    <a href="${item.url}" target="_blank" class="pdf-link">
                        <i class="fas fa-external-link-alt"></i> Ouvrir le PDF
                    </a>
                </div>
            `;

            resourceContainer.appendChild(resourceBox);
        });

        // Add download functionality
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                window.open(this.dataset.url, '_blank');
            });
        });

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});