const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function play(video: HTMLVideoElement) {
  if (reduceMotion) return;
  video.muted = true;
  video.playsInline = true;
  const pending = video.play();
  if (pending) pending.catch(() => {});
}

function activate(video: HTMLVideoElement) {
  if (reduceMotion) return;
  const src = video.dataset.src;
  if (!src) return;
  if (!video.getAttribute('src')) {
    video.preload = 'auto';
    video.src = src;
    video.load();
  }

  const markReady = () => {
    video.classList.add('is-ready');
    play(video);
  };

  if (video.readyState >= 2) markReady();
  else video.addEventListener('loadeddata', markReady, { once: true });
}

function setupVideo(video: HTMLVideoElement) {
  const src = video.dataset.src;
  if (!src) return;

  if (reduceMotion) {
    video.removeAttribute('autoplay');
    video.pause();
    return;
  }

  if (video.dataset.eager === 'true') {
    activate(video);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activate(video);
        else video.pause();
      }
    },
    { rootMargin: '220px 0px', threshold: 0.2 },
  );
  observer.observe(video);
}

document.querySelectorAll<HTMLVideoElement>('video[data-src]').forEach(setupVideo);

document.addEventListener('visibilitychange', () => {
  const videos = document.querySelectorAll<HTMLVideoElement>('video[data-src]');
  if (document.hidden || reduceMotion) {
    videos.forEach((video) => video.pause());
    return;
  }
  videos.forEach((video) => {
    if (!video.classList.contains('is-ready')) return;
    const box = video.getBoundingClientRect();
    const visible = box.bottom > 0 && box.top < window.innerHeight;
    if (visible) play(video);
  });
});

const revealables = document.querySelectorAll('.reveal');
if (reduceMotion) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else if (revealables.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        revealObserver.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
  );
  revealables.forEach((el) => revealObserver.observe(el));
}
