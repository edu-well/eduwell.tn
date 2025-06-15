 // Simulate loading progress
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                setTimeout(() => {
                    document.getElementById('loadingScreen').style.opacity = '0';
                    setTimeout(() => {
                        document.getElementById('loadingScreen').style.display = 'none';
                    }, 800);
                }, 300);
            }
            document.getElementById('loadingBar').style.width = `${progress}%`;
        }, 150);

        document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const searchInput = document.getElementById('searchInput');
            const searchResults = document.getElementById('searchResults');
            const spinner = document.getElementById('spinner');
            const popularItems = document.querySelectorAll('.popular-item');
            const modalOverlay = document.getElementById('modalOverlay');
            const modalClose = document.getElementById('modalClose');
            const modalTitle = document.getElementById('modalTitle');
            const pdfContainer = document.getElementById('pdfContainer');
        

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
                    performSearch(query);
                    hideLoading();
                }, 600);
            });

            function performSearch(query) {
                if (query.length === 0) {
                    hideResults();
                    return;
                }
                
                const filteredResults = educationalResources.filter(resource => 
                    resource.title.toLowerCase().includes(query.toLowerCase()) || 
                    resource.description.toLowerCase().includes(query.toLowerCase())
                );
                
                displayResults(filteredResults, query);
            }

            function displayResults(results, query) {
                searchResults.innerHTML = '';
                
                if (results.length === 0) {
                    searchResults.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search" style="font-size: 24px; margin-bottom: 12px;"></i>
                            <div>No results found for "${query}"</div>
                            <div style="font-size: 13px; margin-top: 8px;">Try different keywords</div>
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
                            <div class="result-title">${result.title}</div>
                            <div class="result-description">${result.description}</div>
                            <div class="result-meta">
                                <span><i class="fas fa-user"></i> ${result.author}</span>
                                <span><i class="fas fa-calendar-alt"></i> ${new Date(result.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    `;
                    
                    resultItem.addEventListener('click', () => openModal(result));
                    searchResults.appendChild(resultItem);
                });
                
                showResults();
            }

            function getTypeIcon(type) {
                const icons = {
                    'course': '<i class="fas fa-graduation-cap"></i>',
                    'textbook': '<i class="fas fa-book"></i>',
                    'video': '<i class="fas fa-play-circle"></i>',
                    'interactive': '<i class="fas fa-laptop-code"></i>',
                    'guide': '<i class="fas fa-file-alt"></i>'
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
                    const searchText = this.textContent.replace(/^[^a-zA-Z]+/, '');
                    searchInput.value = searchText;
                    searchInput.focus();
                    searchInput.dispatchEvent(new Event('input'));
                });
            });

            // Modal functionality
            function openModal(resource) {
                modalTitle.textContent = resource.title;
                pdfContainer.innerHTML = '';
                
                resource.pdfs.forEach((pdf, index) => {
                    const pdfBox = document.createElement('div');
                    pdfBox.className = 'pdf-box';
                    
                    pdfBox.innerHTML = `
                        <div class="pdf-header">
                            <div class="pdf-title">
                                <i class="fas fa-file-pdf" style="color: #E53E3E;"></i>
                                ${pdf.title}
                            </div>
                            <div class="pdf-actions">
                               
                            </div>
                        </div>
                        <iframe class="pdf-viewer" src="${pdf.url}"></iframe>
                    `;
                    
                    pdfContainer.appendChild(pdfBox);
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
