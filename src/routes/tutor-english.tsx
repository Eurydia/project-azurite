import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";
import { EnglishTutorProfile } from "#/components/tutor/english-tutor-profile";
import { englishTutorProfile } from "#/content/tutor";

const pageTitle = "English Tutor | Thanakorn Phuttharaksa";
const pageDescription =
  "English tutoring for Mathayom students, supported by IELTS, TOEIC, and O-NET results.";

export const Route = createFileRoute("/tutor-english")({
  component: TutorEnglishRoute,
  ssr: true,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
    ],
    links: [{ rel: "canonical", href: "https://eurydia.work/tutor-english" }],
  }),
});

function TutorEnglishRoute() {
  return (
    <Box component="main">
      <EnglishTutorProfile profile={englishTutorProfile} />
    </Box>
  );
}
