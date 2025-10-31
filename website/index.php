<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sportstudio Thielen - Dein Oldschool Gym mit familiärer Atmosphäre in Würchwitz. Moderne Ausstattung, faire Preise ab 25€.">
  <meta name="keywords" content="Fitnessstudio, Gym, Würchwitz, Oldschool, Training, Krafttraining">
  <title>Sportstudio Thielen - Oldschool Gym in Würchwitz</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Custom Tailwind Config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    /* Smooth Scroll */
    html {
      scroll-behavior: smooth;
    }
    
    /* Custom Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in-up {
      animation: fadeInUp 0.6s ease-out;
    }
  </style>
</head>
<body class="font-sans antialiased bg-white">

  <!-- Navigation (wird automatisch eingefügt) -->
  <?php include 'includes/navbar.php'; ?>

  <!-- HERO SECTION -->
  <section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px);"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
      <div class="text-center fade-in-up">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-8">
          <span class="text-sm font-semibold text-blue-300">Seit den 1990ern in Würchwitz</span>
        </div>
        
        <!-- Hauptüberschrift -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Dein <span class="text-blue-400">Oldschool Gym</span><br>
          mit familiärer Atmosphäre
        </h1>
        
        <!-- Untertitel -->
        <p class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Trainiere in authentischer Gym-Atmosphäre mit robuster Ausstattung. 
          Täglich von 6-22 Uhr, so lange du willst. Keine kommerzielle Kette – hier kennt man sich.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mitglied-werden.php" 
             class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Jetzt Mitglied werden
          </a>
          <a href="#ueber-uns" 
             class="w-full sm:w-auto border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-bold py-4 px-8 text-lg transition-all duration-200">
            Mehr erfahren
          </a>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto mt-16 pt-12 border-t border-gray-700/50">
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">30+</div>
            <div class="text-sm sm:text-base text-gray-400">Jahre Erfahrung</div>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">60+</div>
            <div class="text-sm sm:text-base text-gray-400">Aktive Mitglieder</div>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">4.8★</div>
            <div class="text-sm sm:text-base text-gray-400">Google Bewertung</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ÜBER UNS SECTION -->
  <section id="ueber-uns" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Text -->
        <div>
          <div class="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Über uns
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Oldschool. Familiär. <span class="text-blue-600">Authentisch.</span>
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Das Sportstudio Thielen steht seit den 1990er Jahren für authentisches Training in entspannter Atmosphäre. 
            Bei uns gibt es keine kommerzielle Fitness-Kette, sondern ein <strong>Gym mit Charakter</strong>.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            Unsere Mitglieder schätzen die <strong>familiäre Community</strong>, in der man sich kennt und unterstützt. 
            Hier kannst du dich wie zuhause fühlen – ohne unangenehmes Gym-Feeling. 
            Ob alleine trainieren oder mit anderen – bei uns trainierst du so, wie es zu dir passt.
          </p>
          
          <!-- Features -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Oldschool-Atmosphäre</span>
            </div>
            <div class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Familiäre Community</span>
            </div>
            <div class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Entspannte Atmosphäre</span>
            </div>
            <div class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Robuste Ausstattung</span>
            </div>
          </div>
        </div>

        <!-- Image Placeholder -->
        <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 lg:h-full min-h-[400px] flex items-center justify-center">
          <div class="text-center text-gray-600">
            <svg class="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p class="text-sm">Gym-Foto hier einfügen</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SERVICES SECTION -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
          Unsere Services
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Alles, was du für dein Training brauchst
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Wir bieten dir die perfekte Ausstattung für effektives Training in authentischer Gym-Atmosphäre
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Service 1 -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Trainiere jederzeit</h3>
          <p class="text-gray-600 mb-4">
            Unser Gym ist täglich von 6 bis 22 Uhr für dich geöffnet – trainiere so lange, wie du willst, ganz nach deinem eigenen Zeitplan!
          </p>
          <button onclick="openModal('modal-zeiten')" class="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Mehr erfahren →
          </button>
        </div>

        <!-- Service 2 -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Moderne Duschen & Umkleiden</h3>
          <p class="text-gray-600 mb-4">
            Unsere Umkleiden bieten viel Platz, praktische Schließfächer und saubere Duschen für dein Wohlbefinden – vor und nach dem Training!
          </p>
          <button onclick="openModal('modal-umkleiden')" class="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Mehr erfahren →
          </button>
        </div>

        <!-- Service 3 -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Getränke & Snacks</h3>
          <p class="text-gray-600 mb-4">
            Erfrische dich mit unseren Getränken und Snacks – perfekt für eine Pause zwischen den Trainingseinheiten!
          </p>
          <button onclick="openModal('modal-getraenke')" class="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Mehr erfahren →
          </button>
        </div>

        <!-- Service 4 -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Zugang zum Gym</h3>
          <p class="text-gray-600 mb-4">
            Mithilfe des Transponders erhältst du einen sicheren und einfachen Zugang zum Gym – jederzeit ohne Rezeption.
          </p>
          <button onclick="openModal('modal-zugang')" class="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Mehr erfahren →
          </button>
        </div>

        <!-- Service 5 -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Oldschool-Ausstattung</h3>
          <p class="text-gray-600 mb-4">
            Robuste Geräte für pure Power und effektives Training in authentischer Atmosphäre – keine schicki-micki Ausstattung.
          </p>
          <button onclick="openModal('modal-ausstattung')" class="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Mehr erfahren →
          </button>
        </div>

        <!-- Service 6 -->
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Fair & Flexibel</h3>
          <p class="text-gray-600 mb-4">
            Unsere monatlichen Mitgliedschaften bieten dir volle Flexibilität zu fairen Preisen ab 25€ pro Monat.
          </p>
          <a href="preise.php" class="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Zu den Preisen →
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- WIRD FORTGESETZT... (Part 2 folgt) -->

  <!-- Footer (wird automatisch eingefügt) -->
  <?php include 'includes/footer.php'; ?>

  <!-- Modals JavaScript (wird im nächsten Schritt hinzugefügt) -->
  <script src="assets/js/modals.js"></script>

</body>
</html>
