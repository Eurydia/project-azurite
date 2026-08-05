import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";
import { TutorProfile } from "#/components/tutor/tutor-profile";
import { programmingTutorProfile } from "#/content/tutor";

const pageTitle = "Programming Tutor | Thanakorn Phuttharaksa";
const pageDescription =
  "Programming tutoring for high-school students from an honors computer science graduate and former functional programming teaching assistant.";

export const Route = createFileRoute("/tutor-programming")({
  component: TutorProgrammingRoute,
  ssr: true,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
    ],
    links: [
      { rel: "canonical", href: "https://eurydia.work/tutor-programming" },
    ],
  }),
});

function TutorProgrammingRoute() {
  return (
    <Box component="main">
      <TutorProfile profile={programmingTutorProfile} />
    </Box>
  );
}
