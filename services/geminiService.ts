import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
// Note: In a real production app, ensure the key is present. 
// For this demo, we handle the missing key gracefully in the UI.
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
אתה מומחה להדפסת תלת מימד ומהנדס מנוסה.
התפקיד שלך הוא לעזור למשתמשים דוברי עברית ללמוד את התחום, לפתור תקלות, ולהציע רעיונות לפרויקטים.
התשובות שלך צריכות להיות:
1. בעברית ברורה וקולחת.
2. מותאמות לרמת המשתמש (אם הוא שואל שאלה בסיסית, ענה בפשטות).
3. מעודדות בטיחות (התראה על חומרים רעילים או חלקים חמים).
4. קצרות ותכליתיות, אלא אם התבקש הסבר מעמיק.

אם שואלים אותך על דגמי מדפסות, תן המלצות כלליות על פי קטגוריות (למשל, Ender 3 למתחילים, Prusa לאמינות) אבל תדגיש שזה משתנה.
`;

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  message: string
): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure process.env.API_KEY");
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};