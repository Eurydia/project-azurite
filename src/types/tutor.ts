export type TutorSource = {
  label: string
  href: string
}

export type TutorQualification = {
  label: string
  value: string
  detail: string
  annotation?: string
  sources?: readonly TutorSource[]
}

export type TutorHighlight = {
  value: string
  label: string
  annotation?: string
  sources?: readonly TutorSource[]
}

export type TutorProfileContent = {
  label: string
  title: string
  summary: string
  highlights: readonly TutorHighlight[]
  topics: readonly string[]
  qualifications: readonly TutorQualification[]
  qualificationsBeforeTopics?: boolean
  qualificationsHeading?: string
}
