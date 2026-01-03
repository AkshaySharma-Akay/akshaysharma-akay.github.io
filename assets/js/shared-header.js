/**
 * Shared Header Component
 * Include this script on any page to get the same header experience
 * Usage: <script src="https://imakshay.me/assets/js/shared-header.js"></script>
 */

(function() {
    // Inject CSS
    const styles = `
        /* Header Base */
        .site-header {
            position: fixed;
            top: 0;
            width: 100%;
            background: white;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            z-index: 50;
            font-family: 'Inter', system-ui, sans-serif;
        }
        .site-header * {
            box-sizing: border-box;
        }
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            max-width: 72rem;
            margin: 0 auto;
        }
        .header-nav {
            display: none;
            justify-content: space-between;
            align-items: center;
            gap: 1.5rem;
        }
        @media (min-width: 768px) {
            .header-nav {
                display: flex;
            }
        }
        .header-nav a, .nav-dropdown-toggle {
            color: #111827;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.875rem;
            letter-spacing: 0.025em;
            transition: color 0.2s ease;
        }
        .header-nav a:hover, .nav-dropdown-toggle:hover {
            color: #1d4ed8;
        }
        .header-nav .nav-connect {
            color: #3b82f6;
        }
        .header-social {
            display: none;
            gap: 2rem;
        }
        @media (min-width: 768px) {
            .header-social {
                display: flex;
            }
        }
        .header-social a {
            color: #111827;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.2s ease;
        }
        .header-social a:hover {
            color: #3b82f6;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: none;
            border: none;
            color: #374151;
            cursor: pointer;
        }
        @media (min-width: 768px) {
            .mobile-menu-btn {
                display: none;
            }
        }
        .mobile-menu-btn a {
            color: #374151;
            text-decoration: none;
        }
        .mobile-menu-btn a:hover {
            color: #3b82f6;
        }

        /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 4rem;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
            display: none;
        }
        .mobile-menu.open {
            display: block;
        }
        @media (min-width: 768px) {
            .mobile-menu {
                display: none !important;
            }
        }
        .mobile-menu nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem;
        }
        .mobile-menu a {
            color: #111827;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.875rem;
            letter-spacing: 0.025em;
            transition: color 0.2s ease;
        }
        .mobile-menu a:hover {
            color: #1d4ed8;
        }
        .mobile-social {
            display: flex;
            gap: 1.5rem;
        }
        .mobile-social a {
            color: #374151;
        }

        /* Navigation Dropdown */
        .nav-dropdown {
            position: relative;
        }
        .nav-dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
        }
        .nav-dropdown-toggle i.fa-chevron-down {
            font-size: 10px;
            transition: transform 0.2s ease;
        }
        .nav-dropdown:hover .nav-dropdown-toggle i.fa-chevron-down {
            transform: rotate(180deg);
        }
        .nav-dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            min-width: 200px;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 8px 0;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease, visibility 0.2s ease;
            margin-top: 8px;
        }
        .nav-dropdown:hover .nav-dropdown-menu {
            opacity: 1;
            visibility: visible;
        }
        .nav-dropdown-menu a {
            display: flex !important;
            align-items: center;
            gap: 10px;
            padding: 10px 16px !important;
            font-size: 13px !important;
            font-weight: 500 !important;
            color: #3f3f46 !important;
        }
        .nav-dropdown-menu a:hover {
            background: #f3f4f6;
            color: #3b82f6 !important;
        }
        .nav-dropdown-menu a i {
            width: 16px;
            text-align: center;
            color: #71717a;
        }
        .nav-dropdown-menu a:hover i {
            color: #3b82f6;
        }

        /* Top Banner */
        .site-banner {
            margin-top: 56px;
            background: linear-gradient(to right, #2563eb, #4f46e5);
            color: white;
            padding: 0.5rem 0;
            text-align: center;
            font-family: 'Inter', system-ui, sans-serif;
        }
        .site-banner p {
            font-size: 0.875rem;
            font-weight: 500;
            margin: 0;
        }
        .site-banner a {
            color: white;
            text-decoration: underline;
            transition: color 0.2s ease;
        }
        .site-banner a:hover {
            color: #bfdbfe;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Header HTML
    const headerHTML = `
        <header class="site-header">
            <div class="header-container">
                <nav class="header-nav">
                    <a href="https://imakshay.me/" title="Home"><i class="fa fa-house"></i></a>
                    <a href="https://imakshay.me/#projects">PROJECTS</a>
                    <a href="https://imakshay.me/blog/">BLOG</a>
                    <div class="nav-dropdown">
                        <span class="nav-dropdown-toggle">
                            OPEN SOURCE <i class="fas fa-chevron-down"></i>
                        </span>
                        <div class="nav-dropdown-menu">
                            <a href="https://imakshay.me/hindi-font-converter/" target="_blank">
                                <i class="fas fa-language"></i> Hindi Font Converter
                            </a>
                        </div>
                    </div>
                    <a href="https://imakshay.me/#akshay-sharma-contact" class="nav-connect">LET'S CONNECT</a>
                </nav>
                <div class="header-social">
                    <a href="mailto:akshaysharmaak2@gmail.com" target="_blank" title="Email"><i class="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/akshay-sharma-akay/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AkshaySharma-Akay" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                </div>
                <button class="mobile-menu-btn" onclick="toggleSiteMenu()">
                    <a href="https://imakshay.me/" title="Home"><i class="fa fa-house"></i></a>
                    <i class="fas fa-bars" style="font-size: 1.25rem;"></i>
                </button>
            </div>
            <div id="siteMenu" class="mobile-menu">
                <nav>
                    <a href="https://imakshay.me/#projects">PROJECTS</a>
                    <a href="https://imakshay.me/blog/">BLOG</a>
                    <a href="https://imakshay.me/hindi-font-converter/" target="_blank">
                        <i class="fas fa-language"></i> HINDI FONT CONVERTER
                    </a>
                    <div class="mobile-social">
                        <a href="mailto:akshaysharmaak2@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/akshay-sharma-akay/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/AkshaySharma-Akay" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </nav>
            </div>
        </header>
        <div class="site-banner">
            <p>Unlock possibilities together. Let's connect on <a href="https://www.linkedin.com/in/akshay-sharma-akay/" target="_blank">LinkedIn</a></p>
        </div>
    `;

    // Inject header at the start of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Toggle function
    window.toggleSiteMenu = function() {
        document.getElementById('siteMenu').classList.toggle('open');
    };
})();
