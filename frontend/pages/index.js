import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
  const [activeTab, setActiveTab] = useState('text-to-speech');
  const [language, setLanguage] = useState('english');
  const [text, setText] = useState('In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros. Not the "burn it all down" kind but he was gentle, wise, with eyes like old stars. Even the birds fell silent when he passed.');
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { id: 'text-to-speech', label: 'TEXT TO SPEECH' },
    { id: 'agents', label: 'AGENTS' },
    { id: 'music', label: 'MUSIC' },
    { id: 'speech-to-text', label: 'SPEECH TO TEXT' },
    { id: 'dubbing', label: 'DUBBING' },
    { id: 'voice-cloning', label: 'VOICE CLONING' },
    { id: 'elevenreader', label: 'ELEVENREADER' },
  ];

  const handlePlay = async () => {
    setIsLoading(true);
    try {
       const response = await axios.get(`/api/audio/${language}`);
      setAudioUrl(response.data.url);
      setIsPlaying(true);
    } catch (error) {
      console.error('Error fetching audio:', error);
      alert('Error loading audio. Please make sure the backend is running.');
    }
    setIsLoading(false);
  };

  const handleDownload = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = `${language}-audio.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>VoiceForge AI | Realistic Voice Generation</title>
        <meta name="description" content="AI Voice Generator with human-like voices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-700">
        <div className="text-2xl font-bold dragon-text">VoiceForge AI</div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded hover:bg-gray-800 transition-colors">CONTACT SALES</button>
          <button className="px-4 py-2 bg-eldoria-light rounded hover:bg-eldoria transition-colors">SIGN UP</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">The most realistic voice AI platform</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          AI voice models and products powering millions of developers, creators, and enterprises. 
          From low-latency conversational agents to the leading AI voice generator for voiceovers and audiobooks.
        </p>
      </section>

      {/* Tabs */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 whitespace-nowrap ${activeTab === tab.id ? 'border-b-2 border-eldoria-light' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <main className="container mx-auto p-6">
        {activeTab === 'text-to-speech' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Text Input */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Text to Speech</h2>
              <textarea
                className="w-full h-64 p-4 bg-gray-700 rounded text-white border border-gray-600 focus:border-eldoria-light focus:outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to convert to speech..."
              />
              
              <div className="mt-4 flex flex-wrap gap-4">
                <select 
                  className="bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-eldoria-light focus:outline-none"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                </select>
                
                <button 
                  className="bg-eldoria-light hover:bg-eldoria text-white px-4 py-2 rounded disabled:bg-gray-600 transition-colors"
                  onClick={handlePlay}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Play Audio'}
                </button>
                
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:bg-gray-600 transition-colors"
                  onClick={handleDownload}
                  disabled={!audioUrl}
                >
                  Download
                </button>
              </div>
              
              {audioUrl && (
                <div className="mt-4">
                  <audio 
                    controls 
                    autoPlay={isPlaying}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full"
                  >
                    <source src={audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
            
            {/* Right Column - Sample Content */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Sample Output</h2>
              <div className="text-gray-300 italic mb-6 p-4 bg-gray-900 rounded">
                "{text}"
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-eldoria-light">Sentence</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer">Narrate a story</li>
                    <li className="hover:text-white cursor-pointer">2 speakers</li>
                    <li className="hover:text-white cursor-pointer">Create a dialogue</li>
                    <li className="hover:text-white cursor-pointer">Announcer</li>
                    <li className="hover:text-white cursor-pointer">Voiceover a game</li>
                    <li className="hover:text-white cursor-pointer">Sergeant</li>
                    <li className="hover:text-white cursor-pointer">Play a different tone</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-eldoria-light">Speaks</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer">Recount an old story</li>
                    <li className="hover:text-white cursor-pointer">Justice</li>
                    <li className="hover:text-white cursor-pointer">Provide customer support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Other tabs (empty) */}
        {activeTab !== 'text-to-speech' && (
          <div className="bg-gray-800 p-12 rounded-lg text-center shadow-lg">
            <p className="text-gray-400">This tab is not implemented in this demo.</p>
          </div>
        )}
      </main>

      <footer className="mt-12 p-6 border-t border-gray-700 text-center text-gray-400">
        <p>Powered by VoiceForge AI - Next Generation Voice Technology</p>
      </footer>
    </div>
  );
}
