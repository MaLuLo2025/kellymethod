export interface DiagnosisStatistic {
  value: string;
  label: string;
  detail?: string;
  source: string;
}

export const DIAGNOSIS_STATISTICS: DiagnosisStatistic[] = [
  {
    value: "4.7 years",
    label: "Average time to diagnosis",
    detail:
      "From symptom onset to a confirmed POTS diagnosis. Many patients see 7+ specialists before getting an answer.",
    source: "Shaw et al., J Intern Med, 2019",
  },
  {
    value: "77%",
    label: "Initially told symptoms are psychiatric",
    detail:
      "More than three in four POTS patients report being told their symptoms are caused by anxiety or depression before receiving a POTS diagnosis.",
    source: "Dysautonomia International Patient Survey, 2020",
  },
  {
    value: "1–3M",
    label: "Estimated U.S. patients",
    detail:
      "POTS is not rare. Prevalence estimates range from 1 to 3 million Americans, with onset most common in adolescents and young adults.",
    source: "Vernino et al., Autonomic Neuroscience, 2021",
  },
  {
    value: "5:1",
    label: "Female-to-male ratio",
    detail:
      "POTS disproportionately affects women, contributing to the pattern of symptoms being dismissed as psychosomatic.",
    source: "Sheldon et al., Heart Rhythm, 2015",
  },
];
