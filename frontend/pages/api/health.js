// pages/api/health.js
export default function handler(req, res) {
  res.status(200).json({
    status: "healthy",
    service: "VoiceForge API",
    requests_handled: 0
  });
}