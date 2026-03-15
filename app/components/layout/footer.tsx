import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid divider",
        padding: "2rem 1.5rem",
        marginTop: "4rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",

        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 2100,
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            marginBottom: "0.25rem",
          }}
        >
          Theo Slater
        </div>
        <div
          style={{
            fontSize: "0.85rem",
            color: "#888",
          }}
        >
          Amateur Full-Stack Developer
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          fontSize: "0.9rem",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#666",
            }}
          >
            Me
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <Link
              href="/projects"
              style={{ color: "#f5f5f9", textDecoration: "none" }}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              style={{ color: "#f5f5f9", textDecoration: "none" }}
            >
              Blog
            </Link>
          </div>
        </div>

        <div>
          <div
            style={{
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#666",
            }}
          >
            This site
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <a
              href="https://github.com/theoslater/theoslater.is-a.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f5f5f9", textDecoration: "none" }}
            >
              Source code
            </a>
          </div>
        </div>

        <div>
          <div
            style={{
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#666",
            }}
          >
            Elsewhere
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <a
              href="https://monkeytype.com/profile/theoslater"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f5f5f9", textDecoration: "none" }}
            >
              Monkeytype
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",

          fontSize: "0.75rem",
          color: "#555",
        }}
      >
        © Theo Slater - All rights reserved
      </div>
    </footer>
  );
}
