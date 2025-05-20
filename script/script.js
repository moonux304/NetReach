// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for all in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Product card modal functionality
document.querySelectorAll('.btn-see-more').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.closest('.product-card')?.querySelector('h5')?.textContent || 
                        this.closest('.team-card')?.querySelector('h5')?.textContent ||
                        'More information';
    
  });
});


/**
 * NetReach Product Page Specific JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100
  });
  
  // Handle tab changes and animations
  const productTabs = document.querySelectorAll('#productTabs .nav-link');
  productTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Reset animations on tab change
      const targetId = this.getAttribute('data-bs-target');
      const targetPane = document.querySelector(targetId);
      
      if (targetPane) {
        // Find elements with AOS animations
        const animatedElements = targetPane.querySelectorAll('[data-aos]');
        
        // Reset AOS animations
        animatedElements.forEach(el => {
          el.classList.remove('aos-animate');
          
          // Re-trigger animation after a short delay
          setTimeout(() => {
            el.classList.add('aos-animate');
          }, 50);
        });
      }
    });
  });
  
  // Package buttons click handler
  const packageButtons = document.querySelectorAll('.package-btn');
  packageButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the package name from the closest package header
      const packageCard = this.closest('.package-card');
      const packageName = packageCard.querySelector('.package-header h4').textContent;
      
      // Determine which product category is active
      const activeTab = document.querySelector('.tab-pane.active');
      let productCategory = '';
      
      if (activeTab.id === 'home-products') {
        productCategory = 'NetReach Home';
      } else if (activeTab.id === 'business-products') {
        productCategory = 'NetReach Business';
      } else if (activeTab.id === 'community-products') {
        productCategory = 'NetReach Community';
      }
      
      // Create modal message
      const message = `Terima kasih telah memilih ${productCategory} - Paket ${packageName}. Kami akan menghubungi Anda segera.`;
      
      // Show alert for now (in real implementation, this would be a proper modal)
      alert(message);
      
      // In a real implementation, you would submit this to a form or redirect to a contact page
      // window.location.href = `contact.html?package=${encodeURIComponent(packageName)}&category=${encodeURIComponent(productCategory)}`;
    });
  });
  
  // Highlight active nav item
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === 'product.html') {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add scroll detection for navbar
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// alert for messege
