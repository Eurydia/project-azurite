import Box from "@mui/material/Box";
import type { Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { Language, PrismTheme } from "prism-react-renderer";
import { Highlight } from "prism-react-renderer";
import type { FC } from "react";

export type CodeBlockProps = {
  code: string;
  language: Language;
  label?: string;
};

const createSyntaxTheme = (theme: Theme): PrismTheme => ({
  plain: {
    color: theme.palette.text.primary,
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: theme.palette.text.disabled,
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: { color: theme.palette.text.secondary },
    },
    {
      types: ["property", "tag", "constant", "symbol"],
      style: { color: theme.palette.primary.main },
    },
    {
      types: ["boolean", "number"],
      style: { color: theme.palette.warning.main },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin"],
      style: { color: theme.palette.success.main },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: theme.palette.text.secondary },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: theme.palette.primary.main,
        fontWeight: "600",
      },
    },
    {
      types: ["function", "class-name"],
      style: { color: theme.palette.info.main },
    },
    {
      types: ["regex", "important", "variable"],
      style: { color: theme.palette.warning.main },
    },
    {
      types: ["deleted"],
      style: { color: theme.palette.error.main },
    },
    {
      types: ["inserted"],
      style: { color: theme.palette.success.main },
    },
  ],
});

export const CodeBlock: FC<CodeBlockProps> = ({ code, language, label }) => {
  const theme = useTheme();
  const syntaxTheme = createSyntaxTheme(theme);

  return (
    <Box
      component="figure"
      sx={{
        margin: 0,
        overflow: "hidden",
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        backgroundColor: "action.hover",
      }}
    >
      {label && (
        <Typography
          component="figcaption"
          variant="caption"
          color="textDisabled"
          sx={{
            display: "block",
            paddingInline: 2,
            paddingBlock: 1,
            borderBottom: 1,
            borderColor: "divider",
            fontFamily: "monospace",
          }}
        >
          {label}
        </Typography>
      )}
      <Highlight
        code={code.replace(/^\n|\n$/g, "")}
        language={language}
        theme={syntaxTheme}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <Box
            component="pre"
            sx={{
              margin: 0,
              padding: 2,
              overflowX: "auto",
              color: "text.primary",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              tabSize: 2,
            }}
          >
            <code>
              {tokens.map((line, lineIndex) => {
                const lineProps = getLineProps({ line });

                return (
                  <span
                    {...lineProps}
                    key={lineIndex}
                    style={{
                      ...lineProps.style,
                      display: "block",
                      minWidth: "max-content",
                    }}
                  >
                    {line.map((token, tokenIndex) => (
                      <span {...getTokenProps({ token })} key={tokenIndex} />
                    ))}
                  </span>
                );
              })}
            </code>
          </Box>
        )}
      </Highlight>
    </Box>
  );
};
