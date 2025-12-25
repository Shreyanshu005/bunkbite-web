import PropTypes from 'prop-types';
import './StoreBadge.css';

const AppleGlyph = () => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path d="M19.67 12.72c-.03-3.26 2.66-4.82 2.78-4.89-1.52-2.22-3.87-2.53-4.7-2.56-1.99-.2-3.88 1.18-4.89 1.18-1.02 0-2.57-1.15-4.23-1.12-2.17.03-4.19 1.29-5.31 3.26-2.27 3.94-.58 9.77 1.63 12.98 1.08 1.54 2.38 3.26 4.08 3.2 1.63-.07 2.24-1.03 4.2-1.03 1.97 0 2.49 1.03 4.22.99 1.75-.03 2.86-1.57 3.94-3.12 1.25-1.83 1.76-3.6 1.79-3.69-.04-.02-3.42-1.31-3.51-5.2z" />
    <path d="M16.63 3.58c.86-1.04 1.43-2.48 1.27-3.91-1.23.05-2.72.82-3.61 1.86-.79.91-1.48 2.37-1.29 3.77 1.36.11 2.77-.69 3.63-1.72z" />
  </svg>
);

const PlayGlyph = () => (
  <svg viewBox="0 0 512 512" role="img" aria-hidden="true">
    <path d="M78.6 32.2A53.1 53.1 0 0048 80.1v351.8a53.1 53.1 0 0030.6 47.9l228.1-199.5z" fill="#00a0ff" />
    <path d="M452.3 215.4L307.8 132l-229.2 199 229.2 199.3 144.6-83.7a53.1 53.1 0 0026.6-46V261.4a53.1 53.1 0 00-26.7-46z" fill="#ffce00" />
    <path d="M307.8 132l-70.4 61.2 214.9 124.8 70.3-60.6z" fill="#ff3a44" />
    <path d="M237.4 318.4L307.8 380l214.8-124.6-70.3-61.4z" fill="#00d97b" />
  </svg>
);

const StoreBadge = ({ store, href, comingSoon = false }) => {
  const isApple = store === 'apple';
  const label = isApple ? 'Download on the' : comingSoon ? 'Coming soon on' : 'Get it on';
  const storeName = isApple ? 'App Store' : 'Play Store';
  const content = (
    <div className={`store-badge ${store} ${comingSoon ? 'is-disabled' : ''}`}>
      <div className="store-icon">
        {isApple ? <AppleGlyph /> : <PlayGlyph />}
      </div>
      <div className="store-text">
        <span className="store-label">{label}</span>
        <span className="store-name">{storeName}</span>
      </div>
    </div>
  );

  if (comingSoon || !href) {
    return (
      <div className="store-badge-wrapper" aria-live="polite">
        {content}
      </div>
    );
  }

  return (
    <a
      className="store-badge-wrapper"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};

StoreBadge.propTypes = {
  store: PropTypes.oneOf(['apple', 'play']).isRequired,
  href: PropTypes.string,
  comingSoon: PropTypes.bool,
};

export default StoreBadge;
