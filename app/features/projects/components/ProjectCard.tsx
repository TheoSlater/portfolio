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
  url?: string;
  image?: string;
}

export default function ProjectCard({
  year,
  title,
  description,
  url = "#",
  image,
}: ProjectCardProps) {
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
            bgcolor: "#1a1f26", // Dark gray placeholder color
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            border: `1px solid ${theme.palette.divider}`,
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
            href={url}
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: "0.875rem",
              gap: 1,
              width: "fit-content",
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
