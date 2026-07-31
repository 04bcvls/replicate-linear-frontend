export function PageHeading() {
  return (
    <section className="page-heading">
      <div className="page-heading__inner">
        <nav className="page-heading__breadcrumb" aria-label="Breadcrumb">
          <ol className="page-heading__breadcrumb-list">
            <li>
              <button type="button" className="page-heading__breadcrumb-item">
                Integrations
              </button>
            </li>
            <li aria-hidden="true" className="page-heading__breadcrumb-separator">
              /
            </li>
            <li className="page-heading__breadcrumb-current"
              aria-hidden="true">
              Essentials
            </li>
          </ol>
        </nav>
        <h1 className="page-heading__title">
          Key integrations to enhance your Linear experience
        </h1>
      </div>
    </section>
  );
}