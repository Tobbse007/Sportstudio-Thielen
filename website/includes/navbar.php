<!-- 
  GLOBALE NAVIGATION - Wird auf jeder Seite eingebunden
  Änderungen hier wirken sich auf alle Seiten aus
  Design inspiriert von FitX - Dunkler Hintergrund, minimalistisch
-->
<nav class="bg-gray-900 fixed w-full top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo & Name (Links) -->
      <a href="index.php" class="flex items-center space-x-3 group">
        <div class="w-10 h-10 bg-blue-600 flex items-center justify-center transition-all duration-200 group-hover:bg-blue-700">
          <!-- Dumbbell Icon (besseres Icon) -->
          <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
          </svg>
        </div>
        <div class="hidden sm:block">
          <h1 class="text-base font-bold text-white leading-tight">Sportstudio Thielen</h1>
          <p class="text-xs text-gray-400">Oldschool Gym</p>
        </div>
      </a>

      <!-- Desktop Navigation (Mitte) -->
      <div class="hidden lg:flex items-center space-x-8">
        <a href="index.php" class="text-white hover:text-blue-400 font-medium transition-colors duration-200 text-sm">
          Startseite
        </a>
        <a href="ueber-uns.php" class="text-white hover:text-blue-400 font-medium transition-colors duration-200 text-sm">
          Über uns
        </a>
        <a href="preise.php" class="text-white hover:text-blue-400 font-medium transition-colors duration-200 text-sm">
          Preise
        </a>
        <a href="blog.php" class="text-white hover:text-blue-400 font-medium transition-colors duration-200 text-sm">
          Blog
        </a>
        <a href="kontakt.php" class="text-white hover:text-blue-400 font-medium transition-colors duration-200 text-sm">
          Kontakt
        </a>
      </div>

      <!-- CTA Button (Rechts) -->
      <div class="flex items-center space-x-3">
        <!-- CTA Button -->
        <a href="mitglied-werden.php" 
           class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 transition-all duration-200 text-sm whitespace-nowrap">
          Jetzt Mitglied werden
        </a>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-button" class="lg:hidden text-white hover:text-blue-400 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu (ausklappbar) -->
  <div id="mobile-menu" class="hidden lg:hidden bg-gray-800 border-t border-gray-700">
    <div class="px-4 py-4 space-y-3">
      <a href="index.php" class="block text-white hover:text-blue-400 hover:bg-gray-700 font-medium py-2 px-3 transition-colors duration-200">
        Startseite
      </a>
      <a href="ueber-uns.php" class="block text-white hover:text-blue-400 hover:bg-gray-700 font-medium py-2 px-3 transition-colors duration-200">
        Über uns
      </a>
      <a href="preise.php" class="block text-white hover:text-blue-400 hover:bg-gray-700 font-medium py-2 px-3 transition-colors duration-200">
        Preise
      </a>
      <a href="blog.php" class="block text-white hover:text-blue-400 hover:bg-gray-700 font-medium py-2 px-3 transition-colors duration-200">
        Blog
      </a>
      <a href="kontakt.php" class="block text-white hover:text-blue-400 hover:bg-gray-700 font-medium py-2 px-3 transition-colors duration-200">
        Kontakt
      </a>
    </div>
  </div>
</nav>

<!-- Spacer (verhindert, dass Content unter der fixen Navbar verschwindet) -->
<div class="h-16"></div>

<script>
  // Mobile Menu Toggle
  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
</script>
