async function loadHeader() {
      try {
        const response = await fetch('../other html/header.html');
        if (!response.ok) {
          throw new Error(`Failed to load header: ${response.statusText}`);
        }
        const html = await response.text();
        
        // Parse the fetched HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extract styles from the header document
        const styles = doc.querySelectorAll('style');
        styles.forEach(style => {
          document.head.appendChild(style.cloneNode(true));
        });
        
        // Extract the header element
        const header = doc.querySelector('header');
        if (header) {
          document.getElementById('header-container').appendChild(header.cloneNode(true));
        }
      } catch (error) {
        console.error('Error loading header:', error);
      }
    }
    
    // Load header when DOM is ready
    document.addEventListener('DOMContentLoaded', loadHeader);