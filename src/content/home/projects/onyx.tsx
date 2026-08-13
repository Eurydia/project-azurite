import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$Onyx: FC = memo(() => {
  return (
    <BlogCard labelSecondary="2024–2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          ONYX
        </Typography>
        <Typography color="textSecondary">
          Propositional-logic interpreter with step-by-step evaluation, syntax
          trees, truth tables, expression rewriting, equivalence comparison, and
          tautology or contradiction checks.
        </Typography>
        <Typography sx={{ fontFamily: "monospace" }}>
          parse(expression) → inspect(structure) → evaluate()
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1}>
              <Typography variant="overline" color="textDisabled">
                Boolean algebra interpreter · 2024–2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                ONYX
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              sx={(theme) => ({
                borderBlock: `1px solid ${theme.palette.divider}`,
                paddingBlock: 3,
              })}
            >
              <Typography variant="h4" sx={{ fontFamily: "monospace" }}>
                expression → syntax tree → reasoning steps
              </Typography>
              <Typography color="textSecondary">
                The intermediate structure is the product: the application
                explains how a result is reached instead of collapsing the work
                into a final true or false value.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The parser evolved through a hand-built lexer/parser, an
              insufficient shunting-yard experiment, and an incompatible Jison
              attempt before settling on an Ohm grammar with explicit semantic
              operations.
            </Typography>
            <Typography color="textSecondary">
              Tree rendering briefly used D3 before moving to visx. Node
              playback, keyboard seeking, and play/pause controls made
              evaluation order inspectable.
            </Typography>
            <Typography color="textSecondary">
              Truth tables led to CNF normalization, tautology and contradiction
              checks, expression rewriting, and an equivalence comparator with
              conflict resolution.
            </Typography>
            <Typography color="textSecondary">
              Later work added Thai and English interfaces, Monaco editing, and
              precomputed route data while retaining the same explicit syntax
              tree as the common boundary between every feature.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              TypeScript, Ohm.js, Monaco, KaTeX, visx
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
});
