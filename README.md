# 🎙️ VoiceForge AI – ElevenLabs Clone

A full-stack web application that replicates the core functionality of **ElevenLabs.io**, featuring text-to-speech (TTS) conversion with multilingual support.

---

## 🌐 Live Demo

- **Frontend**: [https://elevenlabs-voice-app.vercel.app](https://elevenlabs-voice-app.vercel.app)  
- **Backend API**: *(Deploy on Render / Railway / Vercel serverless — link here when ready)*  
- **GitHub Repository**: [https://github.com/deepasavita/elevenlabs-voice-app](https://github.com/deepasavita/elevenlabs-voice-app)

---

## 📸 Screenshots

> Add real screenshots to `/screenshots/` folder  

![App Screenshot](/screenshots/app-full-view.png)
![API Response](/screenshots/text-to-speech-ui.png.png)

---

## 🚀 Features

- **Modern UI** – Responsive Next.js + TailwindCSS design  
- **Text-to-Speech** – Convert text into audio output  
- **Multi-language Support** – English + Arabic  
- **Audio Controls** – Play, pause, and download generated audio  
- **RESTful API** – Flask backend with clean endpoints  
- **Database** – MongoDB Atlas integration  
- **Real-time Processing** – Instant audio generation  

---

## 🛠️ Tech Stack

### Frontend
- [Next.js 14](https://nextjs.org/) – App Router  
- [Tailwind CSS](https://tailwindcss.com/) – Styling  
- [Axios](https://axios-http.com/) – API calls  
- React Hooks  

### Backend
- [Flask](https://flask.palletsprojects.com/) – Python backend  
- Flask-CORS – CORS support  
- Python-dotenv – Env management  
- MongoDB Atlas – Cloud database  

### Deployment
- **Frontend** – Vercel  
- **Backend** – Render / Railway (to be deployed)  
- **Database** – MongoDB Atlas  

---

## 📦 Installation (Local Setup)

### Prerequisites
- Node.js 16+  
- Python 3.8+  
- MongoDB Atlas account  

### Clone Repo
```bash
git clone https://github.com/deepasavita/elevenlabs-voice-app.git
cd elevenlabs-voice-app
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Frontend Setup
```bash
cd ../frontend
npm install
```

### Environment Variables
Create `.env` in `backend/`:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/voiceforge_db?retryWrites=true&w=majority
```

### Run Development Servers
```bash
# Terminal 1 (Backend)
cd backend
python app.py

# Terminal 2 (Frontend)
cd frontend
npm run dev
```

- **Frontend** → http://localhost:3000  
- **Backend API** → http://localhost:5000  

---

## 🎯 API Endpoints

### Health Check
```
GET /api/health
```
```json
{
  "status": "healthy",
  "service": "VoiceForge API",
  "requests_handled": 0
}
```

### Get Audio by Language
```
GET /api/audio/:language
```
Params: `english | arabic`  
```json
{
  "url": "https://example.com/audio.mp3",
  "language": "english",
  "message": "Audio retrieved successfully"
}
```

### Get All Audio
```
GET /api/audio
```
```json
{
  "english": "https://example.com/english.mp3",
  "arabic": "https://example.com/arabic.mp3"
}
```

---

## 📁 Project Structure
```
voiceforge-ai/
├── frontend/              # Next.js frontend
│   ├── pages/             # React pages
│   ├── styles/            # Tailwind styles
│   └── package.json
├── backend/               # Flask backend
│   ├── app.py             # Main Flask app
│   ├── requirements.txt
│   └── .env
└── README.md
```

---

## 🔧 MongoDB Setup

1. Create a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster  
2. Create a database (e.g., `voiceforge_db`)  
3. Whitelist IPs (`0.0.0.0/0` for all)  
4. Create a DB user with read/write access  
5. Copy the connection string → update `.env`  

---

## 🤝 Contributing
- Fork the repo  
- Create a feature branch (`git checkout -b feature/new-feature`)  
- Commit changes (`git commit -m 'Add new feature'`)  
- Push branch (`git push origin feature/new-feature`)  
- Open a Pull Request  

---

## 📄 License
MIT License – see [LICENSE](LICENSE)  

---

## 🙏 Acknowledgments
- [ElevenLabs.io](https://elevenlabs.io/) – Design inspiration  
- [Mixkit](https://mixkit.co/) – Sample audio assets  
- [Vercel](https://vercel.com/) & [Render](https://render.com/) – Deployment  
- [MongoDB Atlas](https://www.mongodb.com/) – Database hosting  

---

## 📞 Support
For support, email **deepa@example.com**  

> ⚠️ *Note: This is a demo project for educational purposes. Audio samples are placeholders — production would integrate real TTS APIs.*
