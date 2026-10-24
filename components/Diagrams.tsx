/**
 * Two small process graphics that carry real content for this audience.
 * Built as HTML lists so they stay readable, selectable and responsive.
 */

const THREAD = ["User needs", "Design inputs", "Design outputs", "Verification", "Validation"];

export function DesignControlThread() {
  return (
    <figure className="mt-12">
      <figcaption className="label mb-5">Design controls: keeping requirements tied to evidence</figcaption>
      <ol className="grid gap-0 border-l border-ink md:grid-cols-5 md:border-l-0 md:border-t">
        {THREAD.map((s, i) => (
          <li key={s} className="relative py-3 pl-6 md:pl-0 md:pr-4 md:pt-5">
            <span aria-hidden="true" className="absolute -left-[5px] top-[1.2rem] h-2.5 w-2.5 bg-ink md:-top-[5px] md:left-0" />
            <span className="label block">0{i + 1}</span>
            <span className="mt-1 block font-serif text-lg text-ink md:text-[1.15rem]">{s}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 border-t border-dashed border-accent pt-2 text-sm text-muted">
        Risk management runs alongside every step, not after it.
      </p>
    </figure>
  );
}

const ROUTES = ["510(k)", "De Novo", "PMA"];

export function RegulatoryPathway() {
  return (
    <figure className="mt-12">
      <figcaption className="label mb-5">A typical U.S. pathway (it varies by device)</figcaption>
      <div className="grid gap-px border border-rule bg-rule md:grid-cols-[1fr_1fr_1.3fr]">
        <div className="bg-paper-deep p-5">
          <p className="label">Step 1</p>
          <p className="mt-1 font-serif text-xl text-ink">Regulatory strategy</p>
          <p className="mt-2 text-sm text-muted">Pathway, evidence plan, sequence.</p>
        </div>
        <div className="bg-paper-deep p-5">
          <p className="label">Step 2</p>
          <p className="mt-1 font-serif text-xl text-ink">Pre-Submission</p>
          <p className="mt-2 text-sm text-muted">Early FDA feedback on your plan.</p>
        </div>
        <div className="bg-paper-deep p-5">
          <p className="label">Step 3: one route applies</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {ROUTES.map((r) => (
              <li key={r} className="font-serif text-xl text-ink">{r}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-muted">Premarket submission.</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted">
        Breakthrough Device and STeP applications are separate FDA programs that some devices may qualify for. Which routes apply depends on the device, its intended use, and its risk classification.
      </p>
    </figure>
  );
}
