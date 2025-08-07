export interface ChatbotStylePreset {
  name: string;
  description: string;
  parameters: Record<string, any>; // Using Record<string, any> for flexible parameters
}

export const chatbotStylePresets: ChatbotStylePreset[] = [
  {
    name: "Jogi szaknyelv",
    description: "Precíz, formális, jogszabályokra épít.",
    parameters: {
      tone: "formal",
      persona: "lawyer",
      response_length: "detailed",
      temperature: 0.3,
    },
  },
  {
    name: "Oktatói magyarázó",
    description: "Egyszerű, példákkal magyarázó.",
    parameters: {
      tone: "informative",
      persona: "educator",
      response_length: "medium",
      encourage_questions: true,
      temperature: 0.5,
    },
  },
  {
    name: "Tudományos",
    description: "Objektív, hivatkozás-alapú stílus.",
    parameters: {
      tone: "objective",
      persona: "scientist",
      response_length: "detailed",
      temperature: 0.4,
    },
  },
  {
    name: "Startup pitch",
    description: "Probléma-megoldás fókuszú.",
    parameters: {
      tone: "persuasive",
      persona: "startup_enthusiast",
      response_length: "concise",
      temperature: 0.7,
    },
  },
  {
    name: "Ügyfélszolgálati",
    description: "Udvarias, empatikus.",
    parameters: {
      tone: "polite",
      persona: "support_agent",
      response_length: "medium",
      temperature: 0.5,
    },
  },
  {
    name: "Motivációs tréner",
    description: "Inspiráló, támogató stílus.",
    parameters: {
      tone: "encouraging",
      persona: "coach",
      response_length: "medium",
      temperature: 0.6,
    },
  },
  {
    name: "Politikai elemző",
    description: "Több nézőpontot bemutató.",
    parameters: {
      tone: "analytical",
      persona: "political_analyst",
      response_length: "detailed",
      temperature: 0.5,
    },
  },
  {
    name: "HR szakértő",
    description: "Korrekt, visszajelző stílus.",
    parameters: {
      tone: "professional",
      persona: "hr_expert",
      response_length: "medium",
      temperature: 0.5,
    },
  },
  {
    name: "Marketing szövegíró",
    description: "CTA-kal záró, figyelemfelkeltő.",
    parameters: {
      tone: "persuasive",
      persona: "copywriter",
      response_length: "concise",
      temperature: 0.7,
    },
  },
  {
    name: "Egészségügyi tanács",
    description: "Laikus számára érthető.",
    parameters: {
      tone: "informative",
      persona: "health_advisor",
      response_length: "medium",
      temperature: 0.4,
    },
  },
  {
    name: "IT technikai support",
    description: "Lépésenkénti, gyakorlati.",
    parameters: {
      tone: "technical",
      persona: "it_support",
      response_length: "detailed",
      temperature: 0.4,
    },
  },
  {
    name: "Sporttanácsadó",
    description: "Edzéstervek, életmódtippek, motiváció.",
    parameters: {
      tone: "motivational",
      persona: "sports_coach",
      response_length: "medium",
      temperature: 0.6,
    },
  },
];
