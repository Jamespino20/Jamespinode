export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p className="mt-2 max-w-2xl text-sm">
        Direct channels for now — no contact form in this release, by design.
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        <li>
          Email:{" "}
          <a href="mailto:espino.jamesbryant20@gmail.com">
            espino.jamesbryant20@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/james-bryant-espino-370246333/"
            rel="noreferrer"
            target="_blank"
          >
            james-bryant-espino-370246333
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/Jamespino20"
            rel="noreferrer"
            target="_blank"
          >
            github.com/Jamespino20
          </a>
        </li>
      </ul>
    </>
  );
}
