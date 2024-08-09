<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8 overflow-hidden relative"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 flex items-center justify-center opacity-20">
      <div
        class="animate-spin-slow rounded-full bg-white bg-opacity-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] blur-xl"
      ></div>
      <div
        class="animate-spin-reverse-slow rounded-full bg-black bg-opacity-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] blur-lg"
      ></div>
    </div>

    <!-- Content -->
    <div class="text-center mb-6 z-10">
      <h1 class="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
        Hi, my name is
        <span class="text-yellow-300 underline decoration-dotted"
          >Dogecraft</span
        >
        👋
      </h1>
      <h2
        class="text-3xl md:text-5xl font-medium text-gray-100 animate-slide-in-up"
      >
        aka. Dantae
      </h2>
    </div>
    <div
      class="bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-8 md:p-16 z-10 max-w-3xl w-full transform transition-transform hover:scale-105"
    >
      <h3
        class="text-3xl md:text-4xl font-semibold mb-6 underline decoration-wavy decoration-blue-500"
      >
        Tools I Use
      </h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Example Tool Items -->
        <li
          class="flex items-center space-x-4 hover:bg-blue-100 transition-colors p-4 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
            class="h-12 w-12"
          />
          <span class="text-xl font-medium">VS Code</span>
        </li>
        <li
          class="flex items-center space-x-4 hover:bg-blue-100 transition-colors p-4 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            class="h-12 w-12"
          />
          <span class="text-xl font-medium">React</span>
        </li>
        <li
          class="flex items-center space-x-4 hover:bg-blue-100 transition-colors p-4 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            class="h-12 w-12"
          />
          <span class="text-xl font-medium">Node.js</span>
        </li>
        <li
          class="flex items-center space-x-4 hover:bg-blue-100 transition-colors p-4 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
            class="h-12 w-12"
          />
          <span class="text-xl font-medium">Tailwind CSS</span>
        </li>
        <li
          class="flex items-center space-x-4 hover:bg-blue-100 transition-colors p-4 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            class="h-12 w-12"
          />
          <span class="text-xl font-medium">Python</span>
        </li>
        <li
          class="flex items-center space-x-4 hover:bg-blue-100 transition-colors p-4 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            alt="Vue.js"
            class="h-12 w-12"
          />
          <span class="text-xl font-medium">Vue.js</span>
        </li>
        <li
          class="flex items-center space-x-4 hover:bg-blue-100 transition-colors p-4 rounded-lg"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            alt="C#"
            class="h-12 w-12"
          />
          <span class="text-xl font-medium">C#</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style>
/* Custom Animations */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin-reverse-slow 15s linear infinite;
}

.animate-fade-in {
  animation: fade-in 1.5s ease-out forwards;
}

.animate-slide-in-up {
  animation: slide-in-up 1.5s ease-out forwards;
}
</style>
