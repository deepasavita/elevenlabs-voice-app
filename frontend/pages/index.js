<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VoiceForge AI | Realistic Voice Generation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .dragon-text {
            background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 300% 300%;
            animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
        <!-- Navigation -->
        <nav class="flex justify-between items-center p-6 border-b border-gray-700">
            <div class="text-2xl font-bold dragon-text">VoiceForge AI</div>
            <div class="flex space-x-4">
                <button class="px-4 py-2 rounded hover:bg-gray-800 transition-colors">CONTACT SALES</button>
                <button class="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors">SIGN UP</button>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="p-12 text-center">
            <h1 class="text-4xl font-bold mb-4">The most realistic voice AI platform</h1>
            <p class="text-gray-300 max-w-2xl mx-auto">
                AI voice models and products powering millions of developers, creators, and enterprises. 
                From low-latency conversational agents to the leading AI voice generator for voiceovers and audiobooks.
            </p>
        </section>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <!-- Left Column - Text Input -->
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold mb-4">Text to Speech</h2>
                <textarea
                    class="w-full h-64 p-4 bg-gray-700 rounded text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter text to convert to speech..."
                >In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros. Not the "burn it all down" kind but he was gentle, wise, with eyes like old stars. Even the birds fell silent when he passed.</textarea>
                
                <div class="mt-4 flex flex-wrap gap-4">
                    <select class="bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none">
                        <option value="english">English</option>
                        <option value="arabic">Arabic</option>
                    </select>
                    
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors" onclick="playAudio()">
                        Play Audio
                    </button>
                    
                    <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors" onclick="downloadAudio()">
                        Download
                    </button>
                </div>
                
                <div class="mt-4">
                    <audio id="audioPlayer" controls class="w-full hidden">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            
            <!-- Right Column - Sample Content -->
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold mb-4">Sample Output</h2>
                <div class="text-gray-300 italic mb-6 p-4 bg-gray-900 rounded">
                    "In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros. Not the "burn it all down" kind but he was gentle, wise, with eyes like old stars. Even the birds fell silent when he passed."
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <h3 class="font-semibold mb-2 text-blue-400">Sentence</h3>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="hover:text-white cursor-pointer">Narrate a story</li>
                            <li class="hover:text-white cursor-pointer">2 speakers</li>
                            <li class="hover:text-white cursor-pointer">Create a dialogue</li>
                            <li class="hover:text-white cursor-pointer">Announcer</li>
                            <li class="hover:text-white cursor-pointer">Voiceover a game</li>
                            <li class="hover:text-white cursor-pointer">Sergeant</li>
                            <li class="hover:text-white cursor-pointer">Play a different tone</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold mb-2 text-blue-400">Speaks</h3>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="hover:text-white cursor-pointer">Recount an old story</li>
                            <li class="hover:text-white cursor-pointer">Justice</li>
                            <li class="hover:text-white cursor-pointer">Provide customer support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <footer class="mt-12 p-6 border-t border-gray-700 text-center text-gray-400">
            <p>Powered by VoiceForge AI - Next Generation Voice Technology</p>
        </footer>
    </div>

    <script>
        const audioSamples = {
            english: "https://assets.mixkit.co/sfx/preview/mixkit-man-announcing-something-1230.mp3",
            arabic: "https://assets.mixkit.co/sfx/preview/mixkit-woman-announcing-something-1231.mp3"
        };
        
        function playAudio() {
            const language = document.querySelector('select').value;
            const audioPlayer = document.getElementById('audioPlayer');
            
            audioPlayer.src = audioSamples[language];
            audioPlayer.classList.remove('hidden');
            audioPlayer.play();
        }
        
        function downloadAudio() {
            const language = document.querySelector('select').value;
            const a = document.createElement('a');
            a.href = audioSamples[language];
            a.download = `${language}-audio.mp3`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    </script>
</body>
</html>