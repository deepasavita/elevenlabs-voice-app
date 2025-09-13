// pages/api/audio/[language].js
export default async function handler(req, res) {
  const { language } = req.query;
  
  // Mock audio URLs - same as your Flask backend
  const audioUrls = {
    english: "https://www.soundjay.com/buttons/sounds/beep-07a.mp3",
    arabic: "https://www.soundjay.com/buttons/sounds/beep-08b.mp3"
  };

  try {
    if (audioUrls[language]) {
      res.status(200).json({
        url: audioUrls[language],
        language: language,
        message: "Audio retrieved successfully"
      });
    } else {
      res.status(404).json({ error: "Language not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}