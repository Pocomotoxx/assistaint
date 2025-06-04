export interface ChatbotStylePreset {
  name: string;
  description: string;
  parameters: Record<string, any>; // Using Record<string, any> for flexible parameters
}

export const chatbotStylePresets: ChatbotStylePreset[] = [
  {
    name: "Jogi",
    description: "Jogi szakértői stílus, hivatalos és precíz.",
    parameters: {
      tone: "formal",
      persona: "lawyer",
      response_length: "detailed",
      temperature: 0.3, // Example parameter: lower temperature for more deterministic, factual responses
    },
  },
  {
    name: "Oktatói",
    description: "Oktató jellegű stílus, informatív és segítőkész.",
    parameters: {
      tone: "informative",
      persona: "educator",
      response_length: "medium",
      encourage_questions: true, // Example parameter
      temperature: 0.5,
    },
  },
  {
    name: "Marketing",
    description: "Marketing fókuszú stílus, meggyőző és figyelemfelkeltő.",
    parameters: {
      tone: "persuasive",
      persona: "marketer",
      response_length: "concise",
      call_to_action: "inquire_more", // Example parameter
      temperature: 0.7, // Example parameter: higher temperature for more creative/persuasive responses
    },
  },
  {
    name: "Barátságos",
    description: "Közvetlen és barátságos stílus.",
    parameters: {
      tone: "friendly",
      persona: "helpful_assistant",
      response_length: "medium",
      use_emojis: true,
      temperature: 0.6,
    },
  },
  {
    name: "Humoros",
    description: "Könnyed és humoros válaszadási stílus.",
    parameters: {
      tone: "humorous",
      persona: "comedian_assistant",
      response_length: "short_to_medium",
      humor_level: "moderate", // Example parameter
      temperature: 0.8,
    },
  },
];
