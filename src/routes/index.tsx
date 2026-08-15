import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createFileRoute } from "@tanstack/react-router";
import { AppFooter } from "#/components/ui/app-footer";
import { AppHeader } from "#/components/ui/app-header";
import { BlogList } from "#/components/layout/blog-list";
import { PageSection } from "#/components/layout/page-section";
import { LandingHero } from "#/components/ui/landing-hero";
import { AWARD_ENTRIES } from "#/content/portfolio/awards";
import { CERTIFICATE_ENTRIES } from "#/content/portfolio/certificates";
import { EDUCATION_ENTRIES } from "#/content/portfolio/education";
import { EXPERIENCE_ENTRIES } from "#/content/portfolio/experience";
import { BUILT_PROJECT_ENTRIES } from "#/content/portfolio/projects";

export const Route = createFileRoute("/")({ component: HomeRoute, ssr: true });

function HomeRoute() {
  return (
    <Container
      maxWidth="md"
      sx={(theme) => ({
        paddingY: {
          xs: theme.spacing(10),
          md: theme.spacing(12),
        },
      })}
    >
      <Stack spacing={{ xs: 7, md: 9 }}>
        <AppHeader anchorString="#" />
        <LandingHero />

        <PageSection id="projects" title="Projects" anchorText="#" count={0}>
          <BlogList variant="bento" items={BUILT_PROJECT_ENTRIES} />
        </PageSection>

        <PageSection
          id="experience"
          title="Experience"
          anchorText="#"
          count={EXPERIENCE_ENTRIES.length}
        >
          <BlogList items={EXPERIENCE_ENTRIES} variant="stacked" />
        </PageSection>
        <PageSection
          id="awards"
          title="Awards"
          anchorText="#"
          count={AWARD_ENTRIES.length}
        >
          <BlogList items={AWARD_ENTRIES} variant="stacked" />
        </PageSection>
        <PageSection
          id="certificates"
          title="Certificates"
          anchorText="#"
          count={CERTIFICATE_ENTRIES.length}
        >
          <BlogList
            variant="bento"
            initialVisibleItems={3}
            items={CERTIFICATE_ENTRIES}
          />
        </PageSection>
        <PageSection
          id="education"
          title="Education"
          anchorText="#"
          count={EDUCATION_ENTRIES.length}
        >
          <BlogList
            variant="stacked"
            initialVisibleItems={3}
            items={EDUCATION_ENTRIES}
          />
        </PageSection>
        <AppFooter />
      </Stack>
    </Container>
  );
}
