import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";
import { TutorProfile } from "#/components/tutor/tutor-profile";
import { mathTutorProfile } from "#/content/tutor";

const pageTitle = "Mathematics Tutor | Thanakorn Phuttharaksa";
const pageDescription =
  "Mathematics tutoring for Mathayom students, supported by verified O-NET results and an honors computer science degree.";

export const Route = createFileRoute("/_tutor-math")({
  component: TutorMathRoute,
  ssr: true,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
    ],
    links: [{ rel: "canonical", href: "https://eurydia.work/tutor-math" }],
  }),
});

function TutorMathRoute() {
  return (
    <Box component="main">
      <TutorProfile profile={mathTutorProfile} />
    </Box>
  );
}
