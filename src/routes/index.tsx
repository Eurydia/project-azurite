import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";
import { AppFooter } from "#/components/app-footer";
import { AppHeader } from "#/components/app-header";
import { BlogContentNavigationDialog } from "#/components/blog/blog-content-navigation-dialog";
import { LandingHero } from "#/components/landmarks/landing-hero";
import { BlogList } from "#/components/layout/blog-list";
import { PageSection } from "#/components/layout/page-section";
import { AWARD_ENTRIES } from "#/content/home/awards";
import { CERTIFICATE_ENTRIES } from "#/content/home/certificates";
import { EDUCATION_ENTRIES } from "#/content/home/education";
import { EXPERIENCE_ENTRIES } from "#/content/home/experience";
import {
  BUILT_PROJECT_ENTRIES,
  FEATURED_PROJECT_ENTRIES,
  MAINTAINED_PROJECT_ENTRIES,
} from "#/content/home/projects";

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
      <BlogContentNavigationDialog>
        {({ navigate }) => (
          <Stack spacing={{ xs: 7, md: 9 }}>
            <AppHeader anchorString="#" />
            <LandingHero />

            <PageSection
              id="projects"
              title="Projects"
              anchorText="#"
              count={
                MAINTAINED_PROJECT_ENTRIES.length + BUILT_PROJECT_ENTRIES.length
              }
            >
              <BlogList
                variant="bento"
                items={[
                  ...FEATURED_PROJECT_ENTRIES,
                  () => (
                    <Card
                      variant="outlined"
                      sx={(theme) => ({
                        borderColor: theme.palette.divider,
                        transition: theme.transitions.create([
                          "border-color",
                          "box-shadow",
                        ]),
                        ":hover": {
                          borderColor: theme.alpha(
                            theme.palette.primary.main,
                            0.72,
                          ),
                          boxShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 ${theme.palette.primary.main}`,
                        },
                      })}
                    >
                      <CardActionArea
                        onClick={() =>
                          navigate(
                            <Stack spacing={5}>
                              <Typography variant="h3">All projects</Typography>
                              <Stack spacing={2}>
                                <Typography variant="h5">
                                  Maintained now
                                </Typography>
                                <BlogList
                                  variant="bento"
                                  items={MAINTAINED_PROJECT_ENTRIES}
                                />
                              </Stack>
                              <Stack spacing={2}>
                                <Typography variant="h5">
                                  Built projects
                                </Typography>
                                <BlogList
                                  variant="bento"
                                  items={BUILT_PROJECT_ENTRIES}
                                />
                              </Stack>
                            </Stack>,
                          )
                        }
                        sx={{ padding: 3, textAlign: "start" }}
                      >
                        <Stack spacing={2.5}>
                          <Typography variant="h4">
                            View all projects
                          </Typography>
                          <Typography color="textSecondary">
                            Browse all{" "}
                            {MAINTAINED_PROJECT_ENTRIES.length +
                              BUILT_PROJECT_ENTRIES.length}{" "}
                            maintained and completed projects.
                          </Typography>
                        </Stack>
                      </CardActionArea>
                    </Card>
                  ),
                ]}
              />
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
        )}
      </BlogContentNavigationDialog>
    </Container>
  );
}
