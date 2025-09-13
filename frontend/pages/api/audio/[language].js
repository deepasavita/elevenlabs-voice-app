// pages/api/audio/[language].js
export default async function handler(req, res) {
  const { language } = req.query;
  
  // Real speech audio samples - much better than beeps!
  const audioUrls = {
    english: "https://assets.mixkit.co/sfx/preview/mixkit-man-announcing-something-1230.mp3",
    arabic: "https://assets.mixkit.co/sfx/preview/mixkit-woman-announcing-something-1231.mp3"
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