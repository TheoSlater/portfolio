import { ReactNode } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Link,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


interface ProjectCardProps {
  year: string;
  title: string;
  description: string;
  slug?: string;
  url?: string;
  image?: string;
}

export default function ProjectCard({
  year,
  title,
  description,
  slug,
  url,
  image,
}: ProjectCardProps) {
  const href = slug ? `/projects/${slug}` : (url ?? "#");
  const theme = useTheme();

  return (
    <Box sx={{ height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "transparent",
          boxShadow: "none",
          backgroundImage: "none",
          borderRadius: 2,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
          "& .MuiCardContent-root": {
            padding: 0,
            paddingTop: 3,
            "&:last-child": { paddingBottom: 0 },
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            background: "linear-gradient(135deg, #1a1f26 0%, #0d1117 100%)",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            border: `1px solid ${theme.palette.divider}`,
            "&:hover img": {
              transform: "scale(1.05)",
            },
          }}
        >
          {image ? (
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />
          ) : (
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                opacity: 0.7,
              }}
            >
              Placeholder
            </Typography>
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              color: theme.palette.text.primary,
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.5px",
            }}
          >
            {year}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              mb: 1.5,
              lineHeight: 1.3,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
              lineHeight: 1.6,
              fontSize: "0.9rem",
              flexGrow: 1,
            }}
          >
            {description}
          </Typography>

          <Link
            href={href}
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: "0.875rem",
              gap: 1,
              width: "fit-content",
              transition: "opacity 0.2s ease",
              "&:hover": {
                opacity: 0.8,
              },
              "&:hover .arrow-icon": {
                transform: "translateX(4px)",
              },
            }}
          >
            Read more
            <ArrowForwardIcon
              className="arrow-icon"
              sx={{
                fontSize: "1rem",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}
