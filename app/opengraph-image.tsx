import { ImageResponse } from "next/og";

export const alt = "Fieldstone Consultants: Medical Device Quality & Regulatory Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#12263a", color: "#fff" }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#8cc7c4", textTransform: "uppercase" }}>Fieldstone Consultants</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 76, lineHeight: 1.1, fontFamily: "Georgia, serif" }}>
          Medical Device Quality &amp; Regulatory Consulting
        </div>
        <div style={{ display: "flex", marginTop: 36, width: 120, height: 4, background: "#8cc7c4" }} />
      </div>
    ),
    size,
  );
}
