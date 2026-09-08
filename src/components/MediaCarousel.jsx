import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import './media-carousel.css';

/** Detects YouTube / Vimeo links so the same slot can embed them. */
function getVideoEmbed(src) {
  const yt = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) return { provider: 'youtube', embedUrl: `https://www.youtube.com/embed/${yt[1]}` };

  const vimeo = src.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { provider: 'vimeo', embedUrl: `https://player.vimeo.com/video/${vimeo[1]}` };

  return { provider: 'file', embedUrl: src };
}

function Slide({ item, active, isRTL }) {
  if (item.type === 'video') {
    const { provider, embedUrl } = getVideoEmbed(item.src);
    if (provider === 'file') {
      return (
        <video
          className="media-carousel__media"
          src={active ? item.src : undefined}
          poster={item.poster}
          controls
          playsInline
          preload="none"
        />
      );
    }
    return (
      <div className="media-carousel__embed">
        {active ? (
          <iframe
            src={embedUrl}
            title={item.alt || 'video'}
            allow="accelerate-compressor; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <img className="media-carousel__media" src={item.poster} alt={item.alt || ''} loading="lazy" />
        )}
      </div>
    );
  }

  return (
    <img
      className="media-carousel__media"
      src={item.src}
      alt={item.alt || ''}
      loading="lazy"
      dir={isRTL ? 'rtl' : 'ltr'}
    />
  );
}

export default function MediaCarousel({ media = [], label, emptyMessage }) {
  const { isRTL } = useLanguage();
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const touchStartX = useRef(null);
  const trackRef = useRef(null);

  const count = media.length;

  const goTo = useCallback(
    (next) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  // Keyboard navigation reverses left/right meaning for RTL reading order.
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') goTo(index + (isRTL ? -1 : 1));
      if (e.key === 'ArrowLeft') goTo(index + (isRTL ? 1 : -1));
      if (e.key === 'Escape') setFullscreen(false);
    },
    [goTo, index, isRTL]
  );

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return undefined;
    node.addEventListener('keydown', onKeyDown);
    return () => node.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (Math.abs(delta) > threshold) {
      const forward = delta < 0; // swiped left
      const dir = isRTL ? !forward : forward;
      goTo(index + (dir ? 1 : -1));
    }
    touchStartX.current = null;
  };

  const current = count > 0 ? media[index] : null;

  return (
    <div className="media-carousel">
      <div
        className="media-carousel__viewport"
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={label || 'Media gallery'}
        onTouchStart={count > 0 ? onTouchStart : undefined}
        onTouchEnd={count > 0 ? onTouchEnd : undefined}
      >
        {current ? (
          <Slide item={current} active key={`${index}-${current.src}`} isRTL={isRTL} />
        ) : (
          <div className="media-carousel__placeholder">
            <span>{emptyMessage}</span>
          </div>
        )}

        <button
          className="media-carousel__nav media-carousel__nav--prev"
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
          disabled={count === 0}
        >
          ‹
        </button>
        <button
          className="media-carousel__nav media-carousel__nav--next"
          onClick={() => goTo(index + 1)}
          aria-label="Next"
          disabled={count === 0}
        >
          ›
        </button>

        {current && current.type === 'image' && (
          <button
            className="media-carousel__expand"
            onClick={() => setFullscreen(true)}
            aria-label="View fullscreen"
          >
            ⤢
          </button>
        )}

        {current && current.alt && <p className="media-carousel__caption">{current.alt}</p>}
      </div>

      {count > 0 && (
        <div className="media-carousel__dots">
          {media.map((item, i) => (
            <button
              key={item.src + i}
              className={i === index ? 'is-active' : ''}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}

      {fullscreen && current && (
        <div className="media-carousel__lightbox" onClick={() => setFullscreen(false)}>
          <img src={current.src} alt={current.alt || ''} />
          <button className="media-carousel__lightbox-close" aria-label="Close">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
