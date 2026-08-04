import type { TutorProfileContent, TutorQualification } from '#/types/tutor'

const universityTeachingQualification: TutorQualification = {
  label: 'University teaching',
  value: 'Functional Programming TA',
  detail:
    'Eötvös Loránd University · coursework for 50+ students · examinations for 70+ students',
}

const phetYotMongkutQualification: TutorQualification = {
  label: '14th English Phet Yot Mongkut · 2019',
  value: 'National Top 100 · Score 60',
  detail: 'Upper-secondary division (M4–M6) · Ayutthaya Witthayalai School',
  annotation: 'national award',
  sources: [
    {
      label: 'official competition result',
      href: 'https://www.rittiya.ac.th/archives/2609',
    },
  ],
}

const technicalLeadershipQualification: TutorQualification = {
  label: 'Technical leadership',
  value: 'Technical Team Leader · GDGoC ELTE',
  detail:
    'Led technical delivery for an algorithm contest with 30 participants and built the chapter’s public web infrastructure.',
}

const degreeHighlight = {
  value: 'BSc with Honors',
  label:
    'Computer Science · ELTE, Hungary · GPA 4.67 / 5.00 · full Stipendium Hungaricum scholarship with tuition coverage and a monthly allowance',
  annotation: 'degree / scholarship',
} as const

export const englishTutorProfile: TutorProfileContent = {
  label: 'English tutor · Mathayom students',
  title: 'English tutoring for high-school students.',
  summary:
    'School English, reading, writing, grammar, and examination preparation.',
  highlights: [
    degreeHighlight,
    {
      value: '7.5',
      label: 'IELTS Academic · CEFR C1 · first examination attempt',
      annotation: 'language test',
    },
    {
      value: '930 / 990',
      label: 'TOEIC Listening & Reading · first examination attempt',
      annotation: 'language test',
    },
    {
      value: '91.25 / 100',
      label: 'O-NET English · Mathayom 6 · school English #1 · overall #1',
      annotation: 'school examination',
      sources: [
        {
          label: 'M6 O-NET English result',
          href: 'https://www.facebook.com/share/p/1Ef2hQE4dG/',
        },
      ],
    },
    {
      value: '98 / 100',
      label: 'O-NET English · Mathayom 3 · school English #1 · overall #1',
      annotation: 'school examination',
    },
  ],
  topics: [
    'School lessons, homework, and upcoming examinations',
    'Grammar, vocabulary, and sentence construction',
    'Reading comprehension and answer analysis',
    'Writing practice, correction, and test preparation',
  ],
  qualificationsBeforeTopics: true,
  qualificationsHeading: 'Other qualifications',
  qualifications: [phetYotMongkutQualification],
}

export const mathTutorProfile: TutorProfileContent = {
  label: 'Mathematics tutor · Mathayom students',
  title: 'Mathematics tutoring for high-school students.',
  summary:
    'School mathematics, missing foundations, examination review, and step-by-step problem solving.',
  highlights: [
    degreeHighlight,
    {
      value: '87.50 / 100',
      label: 'O-NET Mathematics · Mathayom 6 · overall school rank #1',
      sources: [
        {
          label: 'M6 O-NET Mathematics result',
          href: 'https://www.facebook.com/share/p/1bNQNcQTDk/',
        },
      ],
    },
    {
      value: '80 / 100',
      label: 'O-NET Mathematics · Mathayom 3',
    },
  ],
  topics: [
    'Algebra, equations, functions, and graphs',
    'Geometry and geometric transformations',
    'Probability, statistics, and data interpretation',
    'Homework, school examinations, and O-NET review',
  ],
  qualificationsBeforeTopics: true,
  qualificationsHeading: 'Other qualifications',
  qualifications: [universityTeachingQualification],
}

export const programmingTutorProfile: TutorProfileContent = {
  label: 'Programming tutor · high-school students',
  title: 'Programming tutoring for high-school students.',
  summary:
    'A practical introduction to programming, problem solving, debugging, and completing a first working project.',
  highlights: [
    degreeHighlight,
    {
      value: 'Functional Programming TA',
      label: 'Coursework for 50+ students · examinations for 70+ students',
    },
  ],
  topics: [
    'Variables, control flow, functions, and data structures',
    'Problem solving, algorithms, and debugging',
    'Python or TypeScript foundations',
    'Planning and completing a small web or school project',
  ],
  qualificationsBeforeTopics: true,
  qualificationsHeading: 'Other qualifications',
  qualifications: [technicalLeadershipQualification],
}
