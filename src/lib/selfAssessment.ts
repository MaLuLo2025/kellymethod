export type QuestionCategory = "core" | "associated" | "context" | "redflag";

export interface Question {
  id: string;
  category: QuestionCategory;
  prompt: string;
  helper?: string;
  options: { value: "yes" | "somewhat" | "no"; label: string }[];
}

export const QUESTIONS: Question[] = [
  // CORE POTS PATTERN
  {
    id: "racing-heart-standing",
    category: "core",
    prompt: "When you stand up, does your heart race, pound, or feel like it's beating too fast?",
    helper: "This is the hallmark symptom of POTS — a heart rate that accelerates abnormally on standing.",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes, or mildly" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "lightheaded-standing",
    category: "core",
    prompt: "Do you feel lightheaded, dizzy, or faint when standing — especially after standing for more than a few minutes?",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes, or mildly" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "brainfog-upright",
    category: "core",
    prompt: "Do you experience brain fog, difficulty concentrating, or mental fatigue that is worse when upright and improves when lying down?",
    helper: "The postural pattern matters — brain fog that worsens with standing is a recognizable POTS feature.",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes, or mildly" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "fatigue-lying",
    category: "core",
    prompt: "Do your symptoms — fatigue, racing heart, dizziness — improve when you lie down?",
    options: [
      { value: "yes", label: "Yes, noticeably" },
      { value: "somewhat", label: "Somewhat" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "exercise-intolerance",
    category: "core",
    prompt: "Does physical activity — even mild activity, like walking or climbing stairs — trigger disproportionate fatigue or symptoms that last hours or days?",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "pulse-increase",
    category: "core",
    prompt: "If you've ever measured your pulse lying down and then standing, did you notice a significant increase (30 beats per minute or more)?",
    helper: "If you haven't measured this, that's okay — select 'Haven't measured.' If you have, your answer is useful context.",
    options: [
      { value: "yes", label: "Yes, a significant increase" },
      { value: "somewhat", label: "Haven't measured / not sure" },
      { value: "no", label: "No, the increase was small" },
    ],
  },

  // ASSOCIATED SYMPTOMS
  {
    id: "gi-symptoms",
    category: "associated",
    prompt: "Do you experience nausea, feeling full quickly when eating, bloating, or other GI symptoms — especially after meals or upon waking?",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "temperature",
    category: "associated",
    prompt: "Do you have trouble regulating temperature — heat intolerance, cold extremities, flushing, or sweating abnormalities?",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "tremor",
    category: "associated",
    prompt: "Do you experience tremor, shakiness, or trembling — particularly when standing or upright?",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "headaches",
    category: "associated",
    prompt: "Do you have headaches, particularly ones that worsen with standing or prolonged upright posture?",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "sleep",
    category: "associated",
    prompt: "Is your sleep non-restorative — do you wake up feeling unrefreshed, even after a full night?",
    options: [
      { value: "yes", label: "Yes, frequently" },
      { value: "somewhat", label: "Sometimes" },
      { value: "no", label: "No" },
    ],
  },

  // ONSET AND CONTEXT
  {
    id: "post-viral",
    category: "context",
    prompt: "Did your symptoms begin after a viral illness — including mononucleosis, COVID-19, or another infection?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "somewhat", label: "Possibly — I had an illness around that time" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "post-trigger",
    category: "context",
    prompt: "Did your symptoms begin after another significant event — a concussion or head injury, surgery, pregnancy, or period of prolonged bed rest?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "somewhat", label: "Possibly" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "told-anxiety",
    category: "context",
    prompt: "Have you been told by one or more doctors that your symptoms are anxiety, stress, or psychosomatic?",
    options: [
      { value: "yes", label: "Yes, more than once" },
      { value: "somewhat", label: "Yes, at least once" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "tests-normal",
    category: "context",
    prompt: "Have you had standard medical tests — EKG, bloodwork, thyroid panel, cardiac evaluation — come back normal despite significant symptoms?",
    options: [
      { value: "yes", label: "Yes, most or all have been normal" },
      { value: "somewhat", label: "Some" },
      { value: "no", label: "No / I haven't had these tests" },
    ],
  },
  {
    id: "related-conditions",
    category: "context",
    prompt: "Do you have any of these associated conditions: hypermobile joints, frequent unexplained allergic-type reactions, chronic unexplained fatigue, or a diagnosis of Ehlers-Danlos syndrome, MCAS, or ME/CFS?",
    options: [
      { value: "yes", label: "Yes, one or more" },
      { value: "somewhat", label: "Possibly / mild" },
      { value: "no", label: "No" },
    ],
  },

  // RED FLAGS
  {
    id: "redflag-fainting",
    category: "redflag",
    prompt: "Have you actually lost consciousness or fainted — particularly when standing — in the last several weeks?",
    helper: "Fainting is a serious symptom that warrants prompt medical evaluation regardless of the rest of this assessment.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "somewhat", label: "Nearly — I came close to fainting" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "redflag-chestpain",
    category: "redflag",
    prompt: "Are you experiencing severe chest pain, pressure, or pain that radiates to the jaw, neck, or arm?",
    helper: "These symptoms can indicate cardiac emergencies and require immediate medical attention.",
    options: [
      { value: "yes", label: "Yes, currently or recently" },
      { value: "somewhat", label: "Mild chest discomfort" },
      { value: "no", label: "No" },
    ],
  },
];

export type Responses = Record<string, "yes" | "somewhat" | "no" | undefined>;

export interface AssessmentResult {
  coreYesCount: number;
  coreSomewhatCount: number;
  associatedYesCount: number;
  contextYesCount: number;
  redflagTriggered: boolean;
  redflagDetails: string[];
  interpretation: "strong-match" | "partial-match" | "weak-match";
  interpretationText: string;
  summaryList: { category: string; items: { prompt: string; response: string }[] }[];
}

export function interpretResponses(responses: Responses): AssessmentResult {
  const coreQuestions = QUESTIONS.filter((q) => q.category === "core");
  const associatedQuestions = QUESTIONS.filter((q) => q.category === "associated");
  const contextQuestions = QUESTIONS.filter((q) => q.category === "context");
  const redflagQuestions = QUESTIONS.filter((q) => q.category === "redflag");

  const coreYesCount = coreQuestions.filter((q) => responses[q.id] === "yes").length;
  const coreSomewhatCount = coreQuestions.filter((q) => responses[q.id] === "somewhat").length;
  const associatedYesCount = associatedQuestions.filter((q) => responses[q.id] === "yes").length;
  const contextYesCount = contextQuestions.filter((q) => responses[q.id] === "yes").length;

  const redflagDetails: string[] = [];
  redflagQuestions.forEach((q) => {
    if (responses[q.id] === "yes") {
      redflagDetails.push(q.prompt);
    }
  });
  const redflagTriggered = redflagDetails.length > 0;

  let interpretation: "strong-match" | "partial-match" | "weak-match" = "weak-match";
  let interpretationText = "";

  const effectiveCoreScore = coreYesCount + coreSomewhatCount * 0.5;

  if (effectiveCoreScore >= 4 && associatedYesCount >= 2) {
    interpretation = "strong-match";
    interpretationText =
      "The pattern you've described closely matches what clinicians look for in POTS. The combination of postural symptoms — particularly those that improve with lying down — plus the associated symptoms you've noted is the typical POTS presentation. This does not mean you have POTS; it means the pattern is distinctive enough that a formal evaluation is warranted.";
  } else if (effectiveCoreScore >= 2 || associatedYesCount >= 3) {
    interpretation = "partial-match";
    interpretationText =
      "Some of what you've described is consistent with POTS. Other elements are either less clear or point to related autonomic conditions that share symptoms with POTS. The partial match doesn't rule POTS out — many patients have atypical presentations — but it does suggest a clinician should evaluate the full picture rather than focusing on any single diagnosis.";
  } else {
    interpretation = "weak-match";
    interpretationText =
      "Based on what you've shared, the pattern you're describing is less typical of POTS. This does not rule out POTS or other autonomic conditions — self-assessments cannot do that — but your symptoms may be better explained by something else. A clinician can help sort through the possibilities and order the testing that would be most useful.";
  }

  const categoryLabels: Record<QuestionCategory, string> = {
    core: "Core postural symptoms",
    associated: "Associated symptoms",
    context: "Onset and context",
    redflag: "Urgent concerns",
  };

  const responseLabels: Record<string, string> = {
    yes: "Yes",
    somewhat: "Sometimes / Mildly",
    no: "No",
  };

  const summaryList = (["core", "associated", "context", "redflag"] as QuestionCategory[])
    .map((cat) => ({
      category: categoryLabels[cat],
      items: QUESTIONS.filter((q) => q.category === cat).map((q) => ({
        prompt: q.prompt,
        response: responses[q.id] ? responseLabels[responses[q.id]!] : "—",
      })),
    }))
    .filter((block) => block.items.some((i) => i.response !== "—"));

  return {
    coreYesCount,
    coreSomewhatCount,
    associatedYesCount,
    contextYesCount,
    redflagTriggered,
    redflagDetails,
    interpretation,
    interpretationText,
    summaryList,
  };
}

export function formatSummaryForClipboard(result: AssessmentResult): string {
  let text = "The Kelly Method — Self-Assessment Summary\n";
  text += "=".repeat(60) + "\n\n";

  if (result.redflagTriggered) {
    text += "⚠ URGENT CONCERNS FLAGGED:\n";
    result.redflagDetails.forEach((d) => {
      text += `  • ${d}\n`;
    });
    text += "\nThese symptoms warrant prompt medical evaluation.\n\n";
  }

  text += "INTERPRETATION:\n";
  text += result.interpretationText + "\n\n";

  result.summaryList.forEach((block) => {
    text += `${block.category.toUpperCase()}\n`;
    text += "-".repeat(60) + "\n";
    block.items.forEach((item) => {
      text += `${item.prompt}\n  → ${item.response}\n\n`;
    });
  });

  text += "\n";
  text += "This summary was generated from a self-assessment and is not a diagnosis.\n";
  text += "Please share it with a clinician and discuss next steps.\n";
  text += "Source: www.kellymethod.com/self-assessment\n";

  return text;
}
