from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample audio URLs - using free sample audio files
audio_urls = {
    "english": "https://www.soundjay.com/buttons/sounds/beep-07a.mp3",
    "arabic": "https://www.soundjay.com/buttons/sounds/beep-08b.mp3"
}

# In-memory storage for demo purposes (instead of MongoDB)
requests_log = []

@app.route('/api/audio/<language>', methods=['GET'])
def get_audio_url(language):
    try:
        url = audio_urls.get(language.lower())
        
        if url:
            # Store the request in memory for demo
            requests_log.append({
                "language": language,
                "endpoint": "/api/audio",
                "timestamp": datetime.utcnow().isoformat()
            })
            
            return jsonify({
                "url": url, 
                "language": language,
                "message": "Audio retrieved successfully"
            })
        else:
            return jsonify({"error": "Language not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/audio', methods=['GET'])
def get_all_audio():
    return jsonify(audio_urls)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy", 
        "service": "VoiceForge API",
        "requests_handled": len(requests_log)
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
