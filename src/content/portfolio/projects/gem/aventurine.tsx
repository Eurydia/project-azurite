import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Gem$Aventurine: FC = () => {
  return (
    <BlogCard labelSecondary={"November 2023\u{2013}July 2026"}>
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Live Editor for Nassi–Shneiderman Diagrams
        </Typography>
        <Typography color="textSecondary">
          This project lets you edit, view and share{" "}
          <ExternalLinkAnchor href="https://en.wikipedia.org/wiki/Nassi%E2%80%93Shneiderman_diagram">
            structograms
          </ExternalLinkAnchor>{" "}
          directly on the web inspired by{" "}
          <ExternalLinkAnchor href="https://mermaid.ai/open-source/">
            MermaidJS
          </ExternalLinkAnchor>
          .
        </Typography>
        <Typography color="textSecondary">
          The syntax to create a diagram is akin to C-style programming
          languages with curly brances and semicolons. Under the hood, the
          project uses a custom-made lexer and parser to generate an abstract
          syntax tree. This implementation allows for an incredible degree of
          flexibility when it comes to the content of the diagram, even math
          expressions (powered by KaTeX).{" "}
          <ExternalLinkAnchor href="https://eurydia.github.io/project-aventurine/">
            See the work
          </ExternalLinkAnchor>
          .
        </Typography>
      </Stack>
    </BlogCard>
  );
};
