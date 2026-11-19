const RESUME_HREF = "/documents/Espino,JamesBryant_HybridResume.pdf";

export default function ResumePage() {
  return (
    <section>
      <h1>Resume</h1>
      <p>
        <a href={RESUME_HREF} download>
          Download resume (PDF)
        </a>{" "}
        ·{" "}
        <a href={RESUME_HREF} target="_blank" rel="noreferrer">
          Open in browser
        </a>
      </p>
      <object data={RESUME_HREF} type="application/pdf" width="100%" height="800">
        <p>
          Preview unavailable. <a href={RESUME_HREF}>Download the PDF</a>.
        </p>
      </object>
    </section>
  );
}
