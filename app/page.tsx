"use client";

import { useState } from "react";
import Image from "next/image";

type PersonalityKey = "zen" | "bold" | "sweet" | "indulgent";

const personalities: Record<
  PersonalityKey,
  { name: string; coffee: string; tagline: string; svg: string; description: string }
> = {
  zen: {
    name: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tagline: "Simple. Clean. Perfect.",
    svg: "/black-coffee.svg",
    description:
      "You appreciate coffee in its purest form. No distractions, no extras — just the honest flavor of a beautifully roasted bean.",
  },
  bold: {
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity.",
    svg: "/espresso.svg",
    description:
      "You hit the ground running and don't look back. Concentrated, powerful, and always moving — your coffee matches your energy.",
  },
  sweet: {
    name: "Sweet Enthusiast",
    coffee: "Caramel Latte",
    tagline: "Life's too short for bitter.",
    svg: "/latte.svg",
    description:
      "You bring warmth to every room. A touch of sweetness, a creamy finish — coffee for you is comfort and joy in a cup.",
  },
  indulgent: {
    name: "Indulgent Treat",
    coffee: "Mocha with Whip",
    tagline: "Coffee is dessert.",
    svg: "/mocha.svg",
    description:
      "Why choose between coffee and dessert? You believe every cup should be a little celebration. Go on — you've earned the whip.",
  },
};

const questions: {
  text: string;
  options: { text: string; personality: PersonalityKey }[];
}[] = [
  {
    text: "How do you take your coffee?",
    options: [
      { text: "Black, no nonsense", personality: "zen" },
      { text: "With a splash of milk", personality: "bold" },
      { text: "Sweet and creamy", personality: "sweet" },
      { text: "Extra everything — make it a treat", personality: "indulgent" },
    ],
  },
  {
    text: "Pick your ideal morning ritual:",
    options: [
      { text: "Quiet cup, no phone, just stillness", personality: "zen" },
      { text: "Coffee in hand, out the door in 5", personality: "bold" },
      { text: "Slow morning with a good playlist", personality: "sweet" },
      { text: "Coffee + pastry + nowhere to be", personality: "indulgent" },
    ],
  },
  {
    text: "What do you love most about a coffee shop?",
    options: [
      { text: "The focus it gives me", personality: "zen" },
      { text: "Fuel for what's next", personality: "bold" },
      { text: "The cozy, welcoming vibe", personality: "sweet" },
      { text: "Treating myself to something special", personality: "indulgent" },
    ],
  },
  {
    text: "Your coffee order when you're in a hurry:",
    options: [
      { text: "Drip coffee, whatever's fresh", personality: "zen" },
      { text: "Shot of espresso, straight up", personality: "bold" },
      { text: "My usual — I know what I like", personality: "sweet" },
      { text: "Whatever sounds most delicious right now", personality: "indulgent" },
    ],
  },
  {
    text: "Which word feels most like you?",
    options: [
      { text: "Grounded", personality: "zen" },
      { text: "Driven", personality: "bold" },
      { text: "Warm", personality: "sweet" },
      { text: "Joyful", personality: "indulgent" },
    ],
  },
  {
    text: "When you describe a great cup of coffee, you say:",
    options: [
      { text: '"Clean and complex"', personality: "zen" },
      { text: '"Bold and no-nonsense"', personality: "bold" },
      { text: '"Smooth and comforting"', personality: "sweet" },
      { text: '"Rich, decadent, perfect"', personality: "indulgent" },
    ],
  },
];

type Screen = "welcome" | "quiz" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<PersonalityKey, number>>({
    zen: 0,
    bold: 0,
    sweet: 0,
    indulgent: 0,
  });
  const [result, setResult] = useState<PersonalityKey | null>(null);

  function handleAnswer(personality: PersonalityKey) {
    const newScores = { ...scores, [personality]: scores[personality] + 1 };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const top = (Object.keys(newScores) as PersonalityKey[]).reduce((a, b) =>
        newScores[a] >= newScores[b] ? a : b
      );
      setResult(top);
      setScreen("result");
    }
  }

  function handleRetake() {
    setScreen("welcome");
    setCurrentQuestion(0);
    setScores({ zen: 0, bold: 0, sweet: 0, indulgent: 0 });
    setResult(null);
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        {/* Welcome Screen */}
        {screen === "welcome" && (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <div className="text-5xl mb-4">☕</div>
            <h1
              className="text-3xl mb-3 text-espresso"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What&apos;s Your Coffee Personality?
            </h1>
            <p
              className="text-espresso/70 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Six questions. One coffee identity. Discover the drink that&apos;s
              been waiting for you.
            </p>
            <button
              onClick={() => setScreen("quiz")}
              className="bg-caramel text-white font-semibold text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Take the Quiz
            </button>
          </div>
        )}

        {/* Quiz Screen */}
        {screen === "quiz" && (
          <div className="bg-white rounded-3xl shadow-lg p-10">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-espresso/50 mb-2" style={{ fontFamily: "var(--font-body)" }}>
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-tan rounded-full overflow-hidden">
                <div
                  className="h-full bg-caramel rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h2
              className="text-2xl text-espresso mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {questions[currentQuestion].text}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.personality}
                  onClick={() => handleAnswer(option.personality)}
                  className="w-full text-left px-5 py-4 rounded-xl border-2 border-tan text-espresso text-base hover:border-caramel hover:bg-cream transition-all cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result Screen */}
        {screen === "result" && result && (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            {/* SVG illustration */}
            <div className="flex justify-center mb-6">
              <Image
                src={personalities[result].svg}
                alt={personalities[result].name}
                width={140}
                height={140}
              />
            </div>

            {/* Personality type */}
            <p
              className="text-sm uppercase tracking-widest text-caramel mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your coffee personality
            </p>
            <h2
              className="text-3xl text-espresso mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {personalities[result].name}
            </h2>
            <p
              className="text-caramel text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {personalities[result].tagline}
            </p>
            <p
              className="text-espresso/70 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {personalities[result].description}
            </p>

            {/* Coffee recommendation */}
            <div className="bg-cream rounded-2xl px-6 py-4 mb-8 inline-block">
              <p
                className="text-xs uppercase tracking-widest text-espresso/50 mb-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Your coffee
              </p>
              <p
                className="text-espresso font-semibold text-base"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {personalities[result].coffee}
              </p>
            </div>

            {/* Retake */}
            <div>
              <button
                onClick={handleRetake}
                className="border-2 border-caramel text-caramel font-semibold text-sm px-7 py-2.5 rounded-full hover:bg-caramel hover:text-white transition-all cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-6 flex items-center justify-center gap-4">
          <p
            className="text-espresso/40 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Basecamp Coffee — find your ritual
          </p>
          <a
            href="/barista"
            className="text-espresso/30 text-xs hover:text-caramel transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Barista reference
          </a>
        </div>
      </div>
    </main>
  );
}
