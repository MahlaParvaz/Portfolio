const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, TabStopType, TabStopPosition,
} = require("docx");
const fs = require("fs");

// ─── Color Palette ───
const S = {
  bg: "1A1F36",
  text: "D8E2E8",
  label: "8BA0AD",
  accent: "667eea",
  title: "1A2D38",
  body: "2C3E4A",
  sec: "6B8592",
};

const FONT = "Calibri";
const LINE = 276; // 1.15x line spacing

// ─── Border helpers ───
const noB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noB, bottom: noB, left: noB, right: noB };

const photoBorder = { style: BorderStyle.SINGLE, size: 2, color: S.label };
const photoBorders = { top: photoBorder, bottom: photoBorder, left: photoBorder, right: photoBorder };

// ─── Section heading with full-width color bar ───
function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 100, after: 50, line: LINE },
    shading: { type: ShadingType.CLEAR, fill: S.accent },
    children: [
      new TextRun({
        text,
        font: { ascii: FONT },
        size: 20, // 10pt
        bold: true,
        color: "FFFFFF",
      }),
    ],
  });
}

// ─── Bullet point with ▸ ───
function bullet(text) {
  return new Paragraph({
    spacing: { before: 5, after: 5, line: LINE },
    indent: { left: 100 },
    children: [
      new TextRun({ text: "\u25B8 ", font: { ascii: FONT }, size: 17, color: S.accent }),
      new TextRun({ text, font: { ascii: FONT }, size: 17, color: S.body }),
    ],
  });
}

// ─── Experience header: Company(bold) + Title(accent) + Date(right-aligned tab) ───
function expHeader(company, title, date) {
  return new Paragraph({
    spacing: { before: 70, after: 10, line: LINE },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: company, font: { ascii: FONT }, size: 19, bold: true, color: S.title }),
      new TextRun({ text: "  ", font: { ascii: FONT }, size: 19, color: S.body }),
      new TextRun({ text: title, font: { ascii: FONT }, size: 17, color: S.accent }),
      new TextRun({ text: "\t", font: { ascii: FONT } }),
      new TextRun({ text: date, font: { ascii: FONT }, size: 16, color: S.sec }),
    ],
  });
}

// ─── Location line ───
function locLine(loc) {
  return new Paragraph({
    spacing: { before: 0, after: 20, line: LINE },
    indent: { left: 100 },
    children: [
      new TextRun({ text: loc, font: { ascii: FONT }, size: 16, color: S.sec, italics: true }),
    ],
  });
}

// ─── Tech line ───
function techLine(tech) {
  return new Paragraph({
    spacing: { before: 5, after: 40, line: LINE },
    indent: { left: 100 },
    children: [
      new TextRun({ text: "Tech: ", font: { ascii: FONT }, size: 15, bold: true, color: S.sec }),
      new TextRun({ text: tech, font: { ascii: FONT }, size: 15, color: S.sec, italics: true }),
    ],
  });
}

// ─── Sidebar contact item ───
function contactItem(label, value) {
  return new Paragraph({
    spacing: { before: 10, after: 10, line: LINE },
    children: [
      new TextRun({ text: label + " ", font: { ascii: FONT }, size: 16, color: S.accent, bold: true }),
      new TextRun({ text: value, font: { ascii: FONT }, size: 16, color: S.text }),
    ],
  });
}

// ─── Sidebar skill with dot ratings ───
function skillItem(name, filled, total) {
  total = total || 5;
  const dots = "\u25CF".repeat(filled) + "\u25CB".repeat(total - filled);
  return new Paragraph({
    spacing: { before: 18, after: 18, line: LINE },
    children: [
      new TextRun({ text: name, font: { ascii: FONT }, size: 15, color: S.text }),
      new TextRun({ text: " " + dots, font: { ascii: FONT }, size: 12, color: S.accent }),
    ],
  });
}

// ─── Sidebar separator line ───
function sidebarSep() {
  return new Paragraph({
    spacing: { before: 40, after: 40, line: LINE },
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: S.label, space: 1 } },
    children: [new TextRun({ text: "", font: { ascii: FONT }, size: 2 })],
  });
}

// ─── SIDEBAR CONTENT ───
const sidebarContent = [
  // Photo placeholder: bordered rectangle, no actual image
  new Table({
    alignment: AlignmentType.CENTER,
    width: { size: 1800, type: WidthType.DXA },
    columnWidths: [1800],
    rows: [
      new TableRow({
        height: { value: 1500, rule: "exact" },
        cantSplit: true,
        children: [
          new TableCell({
            width: { size: 1800, type: WidthType.DXA },
            borders: photoBorders,
            shading: { type: ShadingType.CLEAR, fill: "242942" },
            verticalAlign: "top",
            margins: { top: 0, bottom: 0, left: 0, right: 0 },
            children: [
              new Paragraph({
                spacing: { before: 0, after: 0 },
                children: [new TextRun({ text: " ", font: { ascii: FONT }, size: 4 })],
              }),
            ],
          }),
        ],
      }),
    ],
  }),

  // Name (32pt bold white) — split to control line breaks
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 140, after: 0, line: 680, lineRule: "atLeast" },
    children: [
      new TextRun({ text: "Mahla", font: { ascii: FONT }, size: 64, bold: true, color: "FFFFFF" }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 30, line: 680, lineRule: "atLeast" },
    children: [
      new TextRun({ text: "Zohourparvaz", font: { ascii: FONT }, size: 64, bold: true, color: "FFFFFF" }),
    ],
  }),

  // Title (18pt accent)
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 10, after: 60, line: 380, lineRule: "atLeast" },
    children: [
      new TextRun({ text: "Front-End Developer", font: { ascii: FONT }, size: 36, color: S.accent }),
    ],
  }),

  // Separator
  sidebarSep(),

  // Contact section
  new Paragraph({
    spacing: { before: 10, after: 30, line: LINE },
    shading: { type: ShadingType.CLEAR, fill: S.accent },
    children: [
      new TextRun({ text: "CONTACT", font: { ascii: FONT }, size: 17, bold: true, color: "FFFFFF" }),
    ],
  }),

  contactItem("\u2709", "mahla.zph@gmail.com"),
  contactItem("\u260E", "+98 915 227 0443"),
  contactItem("\u25CB", "github.com/MahlaParvaz"),
  contactItem("\u25CB", "linkedin.com/in/mahla-parvaz"),
  contactItem("\u25A0", "Mashhad, Iran"),

  // Separator
  sidebarSep(),

  // Skills section
  new Paragraph({
    spacing: { before: 10, after: 30, line: LINE },
    shading: { type: ShadingType.CLEAR, fill: S.accent },
    children: [
      new TextRun({ text: "SKILLS", font: { ascii: FONT }, size: 17, bold: true, color: "FFFFFF" }),
    ],
  }),

  skillItem("Vue 3 / React / Next.js", 5),
  skillItem("TypeScript", 5),
  skillItem("State Mgmt (Pinia/Redux)", 5),
  skillItem("TailwindCSS / Sass / MUI", 4),
  skillItem("XState / State Machines", 4),
  skillItem("TanStack Query / REST", 4),
  skillItem("PWA / Vite / Bundles", 3),
];

// ─── BODY CONTENT ───
const bodyContent = [
  // Profile Summary
  sectionHeading("PROFILE SUMMARY"),
  new Paragraph({
    spacing: { before: 30, after: 40, line: LINE },
    children: [
      new TextRun({
        text: "Front-End Developer with 2+ years of experience building production-grade enterprise web applications across Vue 3 and React/Next.js ecosystems. Delivered 12+ production projects in digital security, healthcare, real estate, and AI platforms \u2014 serving 1,000+ enterprise users. Expertise in XState state-machine architectures, complex state management, and Spec-Driven Development workflows.",
        font: { ascii: FONT },
        size: 18,
        color: S.body,
      }),
    ],
  }),

  // Work Experience
  sectionHeading("WORK EXPERIENCE"),

  // 1. PART Software Group (full detail: 6 bullets)
  expHeader("PART Software Group", "Front-End Developer (Full-time)", "2025 \u2013 Present"),
  locLine("Iran"),
  bullet("Designed state-machine-driven architecture using XState for enterprise digital signing workflows"),
  bullet("Built state-driven routing system where navigation is derived from state machine configuration"),
  bullet("Implemented PWA-ready frontend architecture for enterprise digital signature ecosystem (1,000+ users)"),
  bullet("Developed comprehensive admin panel for certificate/payment management with full lifecycle tracking"),
  bullet("Integrated Sentry for production error monitoring and improved system observability"),
  bullet("Applied Spec-Driven Development (SDD) workflow for structured requirement-to-implementation mapping"),
  techLine("Vue 3, XState, TypeScript, Pinia, Sass, Sentry, PWA, Vite"),

  // 2. Smart Dentistry (full detail: 6 bullets)
  expHeader("Smart Dentistry", "Front-End Developer (Full-time)", "Feb 2024 \u2013 Present"),
  locLine("Mashhad, Iran"),
  bullet("Built responsive UI for DRI 2717 multi-panel healthcare platform (Doctor/Patient/Admin) using Next.js 15"),
  bullet("Developed interactive calendar and scheduling system using FullCalendar for PACS clinic management"),
  bullet("Designed job posting and recruitment functionalities for DeventApp dental community platform"),
  bullet("Built interactive dental charting system with visual tooth diagram for Cloudent clinic management"),
  bullet("Developed admin panels for content moderation, user management, and operational workflows"),
  bullet("Implemented API integration and caching using React Query + Axios with Zod form validation"),
  techLine("React.js, Next.js 15, React 19, TypeScript, Redux Toolkit, TanStack Query, TailwindCSS, Shadcn UI"),

  // 3. MoshaVeremon (compressed: 2 bullets)
  expHeader("MoshaVeremon", "Front-End Developer (Remote)", "Sep 2024 \u2013 Feb 2025"),
  locLine("Tehran, Iran"),
  bullet("Refactored ~90% of admin panel using Next.js 14, TypeScript, and Zustand (1,000+ active users)"),
  bullet("Built responsive UI with reusable components and clean architecture patterns"),
  techLine("Next.js 14, TypeScript, Zustand, TailwindCSS"),

  // 4. Nextera Factory (compressed: 3 bullets)
  expHeader("Nextera Factory (AiBox)", "Front-End Developer (Internship)", "Jun 2024 \u2013 Sep 2024"),
  locLine("Tehran, Iran"),
  bullet("Built AiBox platform for browsing, renting, and managing hardware/AI resources (2,000+ users)"),
  bullet("Developed real-time surveillance dashboards with WebSocket feeds and facial recognition interfaces"),
  bullet("Built admin panel for user management, AI subscription packages, and usage analytics"),
  techLine("Next.js 13-14, React.js, TypeScript, Material UI, Redux, Zustand, WebSocket, Chart.js"),

  // Education
  sectionHeading("EDUCATION"),
  new Paragraph({
    spacing: { before: 30, after: 10, line: LINE },
    children: [
      new TextRun({
        text: "Bachelor of Computer Software Engineering",
        font: { ascii: FONT },
        size: 18,
        bold: true,
        color: S.title,
      }),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 10, line: LINE },
    children: [
      new TextRun({
        text: "University of Technology",
        font: { ascii: FONT },
        size: 17,
        color: S.body,
      }),
      new TextRun({
        text: "  |  ",
        font: { ascii: FONT },
        size: 17,
        color: S.sec,
      }),
      new TextRun({
        text: "2017 \u2013 2021",
        font: { ascii: FONT },
        size: 17,
        color: S.sec,
      }),
    ],
  }),
];

// ─── BUILD DOCUMENT ───
const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: { ascii: FONT },
          size: 18,
        },
        paragraph: {
          spacing: { line: LINE },
        },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 0, bottom: 0, left: 0, right: 0 },
        },
      },
      children: [
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          columnWidths: [3400, 8506],
          rows: [
            new TableRow({
              height: { value: 16038, rule: "exact" },
              cantSplit: true,
              children: [
                // ─── Sidebar cell ───
                new TableCell({
                  width: { size: 3400, type: WidthType.DXA },
                  borders: noBorders,
                  shading: { type: ShadingType.CLEAR, fill: S.bg },
                  verticalAlign: "top",
                  margins: { top: 200, bottom: 80, left: 200, right: 200 },
                  children: sidebarContent,
                }),
                // ─── Body cell ───
                new TableCell({
                  width: { size: 8506, type: WidthType.DXA },
                  borders: noBorders,
                  shading: { type: ShadingType.CLEAR, fill: "FFFFFF" },
                  verticalAlign: "top",
                  margins: { top: 200, bottom: 80, left: 220, right: 220 },
                  children: bodyContent,
                }),
              ],
            }),
          ],
        }),
      ],
    },
  ],
});

// ─── EXPORT ───
(async () => {
  try {
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync("/home/z/my-project/public/Mahla_Zohourparvaz_Resume.docx", buffer);
    console.log("Resume generated: /home/z/my-project/public/Mahla_Zohourparvaz_Resume.docx");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
})();