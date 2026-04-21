/* ============================
   AETHER — main.js
   Custom Interactive Globe
   ============================ */

/* ========== GLOBE COMPONENT ========== */
(function () {
  const canvas = document.getElementById('cobe-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Configuration
  const dotColor = 'rgba(100, 180, 255, ALPHA)';
  const arcColor = 'rgba(100, 180, 255, 0.5)';
  const markerColor = 'rgba(100, 220, 255, 1)';
  const autoRotateSpeed = 0.003;

  const markers = [
    { lat: 37.78, lng: -122.42, label: 'San Francisco' },
    { lat: 51.51, lng: -0.13, label: 'London' },
    { lat: 35.68, lng: 139.69, label: 'Tokyo' },
    { lat: 26.82, lng: 30.8, label: 'Cairo' },
    { lat: 55.76, lng: 37.62, label: 'Moscow' },
    { lat: -23.55, lng: -46.63, label: 'São Paulo' },
    { lat: 19.43, lng: -99.13, label: 'Mexico City' },
    { lat: 28.61, lng: 77.21, label: 'Delhi' },
    { lat: 36.19, lng: 44.01, label: 'Erbil' },
  ];

  const connections = [
    { from: [37.78, -122.42], to: [51.51, -0.13] },
    { from: [51.51, -0.13], to: [36.19, 44.01] },
    { from: [36.19, 44.01], to: [28.61, 77.21] },
    { from: [28.61, 77.21], to: [55.76, 37.62] },
    { from: [-23.55, -46.63], to: [19.43, -99.13] },
    { from: [19.43, -99.13], to: [37.78, -122.42] },
    { from: [51.51, -0.13], to: [55.76, 37.62] },
  ];

  // State
  let rotY = 1.6;
  let rotX = 0.2;
  let time = 0;
  let animId = 0;
  const drag = { active: false, startX: 0, startY: 0, startRotY: 0, startRotX: 0 };

  // Generate globe dots via Fibonacci sphere
  const dots = [];
  const numDots = 1800; // More dots
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < numDots; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
    dots.push([
      Math.cos(theta) * Math.sin(phi),
      Math.cos(phi),
      Math.sin(theta) * Math.sin(phi),
    ]);
  }

  // Math helpers
  function latLngToXYZ(lat, lng, radius) {
    const phi = ((90 - lat) * Math.PI) / 180;
    const theta = ((lng + 180) * Math.PI) / 180;
    return [
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta),
    ];
  }

  function rotateYAxis(x, y, z, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [x * cos + z * sin, y, -x * sin + z * cos];
  }

  function rotateXAxis(x, y, z, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [x, y * cos - z * sin, y * sin + z * cos];
  }

  function project(x, y, z, cx, cy, fov) {
    const scale = fov / (fov + z);
    return [x * scale + cx, y * scale + cy, z];
  }

  // Draw loop
  function draw() {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (w === 0 || h === 0) {
      animId = requestAnimationFrame(draw);
      return;
    }

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.44; // Larger radius
    const fov = 800;

    // Auto rotate
    if (!drag.active) {
      rotY += autoRotateSpeed;
    }

    time += 0.015;

    ctx.clearRect(0, 0, w, h);

    // Outer glow
    const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
    glowGrad.addColorStop(0, 'rgba(60, 140, 255, 0.03)');
    glowGrad.addColorStop(1, 'rgba(60, 140, 255, 0)');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, w, h);

    // Globe outline
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(100, 180, 255, 0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();

    const ry = rotY;
    const rx = rotX;

    // Draw dots
    for (let i = 0; i < dots.length; i++) {
      let x = dots[i][0] * radius;
      let y = dots[i][1] * radius;
      let z = dots[i][2] * radius;

      const r1 = rotateXAxis(x, y, z, rx);
      x = r1[0]; y = r1[1]; z = r1[2];
      const r2 = rotateYAxis(x, y, z, ry);
      x = r2[0]; y = r2[1]; z = r2[2];

      if (z > 0) continue; // back-face cull

      const p = project(x, y, z, cx, cy, fov);
      const depthAlpha = Math.max(0.1, 1 - (z + radius) / (2 * radius));
      const dotSize = 1 + depthAlpha * 0.8;

      ctx.beginPath();
      ctx.arc(p[0], p[1], dotSize, 0, Math.PI * 2);
      ctx.fillStyle = dotColor.replace('ALPHA', depthAlpha.toFixed(2));
      ctx.fill();
    }

    // Draw connections as arcs
    for (let c = 0; c < connections.length; c++) {
      const conn = connections[c];
      const lat1 = conn.from[0], lng1 = conn.from[1];
      const lat2 = conn.to[0], lng2 = conn.to[1];

      let xyz1 = latLngToXYZ(lat1, lng1, radius);
      let xyz2 = latLngToXYZ(lat2, lng2, radius);

      let r;
      r = rotateXAxis(xyz1[0], xyz1[1], xyz1[2], rx);
      xyz1 = rotateYAxis(r[0], r[1], r[2], ry);
      r = rotateXAxis(xyz2[0], xyz2[1], xyz2[2], rx);
      xyz2 = rotateYAxis(r[0], r[1], r[2], ry);

      // Only draw if both points roughly face camera
      if (xyz1[2] > radius * 0.3 && xyz2[2] > radius * 0.3) continue;

      const p1 = project(xyz1[0], xyz1[1], xyz1[2], cx, cy, fov);
      const p2 = project(xyz2[0], xyz2[1], xyz2[2], cx, cy, fov);

      // Elevated midpoint for arc
      const midX = (xyz1[0] + xyz2[0]) / 2;
      const midY = (xyz1[1] + xyz2[1]) / 2;
      const midZ = (xyz1[2] + xyz2[2]) / 2;
      const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ);
      const arcHeight = radius * 1.25;
      const elevX = (midX / midLen) * arcHeight;
      const elevY = (midY / midLen) * arcHeight;
      const elevZ = (midZ / midLen) * arcHeight;
      const pc = project(elevX, elevY, elevZ, cx, cy, fov);

      ctx.beginPath();
      ctx.moveTo(p1[0], p1[1]);
      ctx.quadraticCurveTo(pc[0], pc[1], p2[0], p2[1]);
      ctx.strokeStyle = arcColor;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Traveling dot along arc
      const t = (Math.sin(time * 1.2 + lat1 * 0.1) + 1) / 2;
      const tx = (1 - t) * (1 - t) * p1[0] + 2 * (1 - t) * t * pc[0] + t * t * p2[0];
      const ty = (1 - t) * (1 - t) * p1[1] + 2 * (1 - t) * t * pc[1] + t * t * p2[1];

      ctx.beginPath();
      ctx.arc(tx, ty, 2, 0, Math.PI * 2);
      ctx.fillStyle = markerColor;
      ctx.fill();
    }

    // Draw markers
    for (let m = 0; m < markers.length; m++) {
      const marker = markers[m];
      let xyz = latLngToXYZ(marker.lat, marker.lng, radius);
      let r1 = rotateXAxis(xyz[0], xyz[1], xyz[2], rx);
      xyz = rotateYAxis(r1[0], r1[1], r1[2], ry);

      if (xyz[2] > radius * 0.1) continue;

      const p = project(xyz[0], xyz[1], xyz[2], cx, cy, fov);

      // Pulse ring
      const pulse = Math.sin(time * 2 + marker.lat) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(p[0], p[1], 4 + pulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = markerColor.replace('1)', (0.2 + pulse * 0.15).toFixed(2) + ')');
      ctx.lineWidth = 1;
      ctx.stroke();

      // Core dot
      ctx.beginPath();
      ctx.arc(p[0], p[1], 2.5, 0, Math.PI * 2);
      ctx.fillStyle = markerColor;
      ctx.fill();

      // Label
      if (marker.label) {
        ctx.font = '10px system-ui, sans-serif';
        ctx.fillStyle = markerColor.replace('1)', '0.6)');
        ctx.fillText(marker.label, p[0] + 8, p[1] + 3);
      }
    }

    animId = requestAnimationFrame(draw);
  }

  // Start animation
  animId = requestAnimationFrame(draw);

  // Show the canvas
  canvas.style.opacity = '1';

  // Drag interaction
  canvas.addEventListener('pointerdown', function (e) {
    drag.active = true;
    drag.startX = e.clientX;
    drag.startY = e.clientY;
    drag.startRotY = rotY;
    drag.startRotX = rotX;
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = 'grabbing';
  });

  canvas.addEventListener('pointermove', function (e) {
    if (!drag.active) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    rotY = drag.startRotY + dx * 0.005;
    rotX = Math.max(-1, Math.min(1, drag.startRotX + dy * 0.005));
  });

  canvas.addEventListener('pointerup', function () {
    drag.active = false;
    canvas.style.cursor = 'grab';
  });

  canvas.addEventListener('pointerleave', function () {
    drag.active = false;
    canvas.style.cursor = 'grab';
  });
})();

/* ========== NAV SCROLL ========== */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ========== SMOOTH ANCHOR LINKS ========== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ========== REVEAL ANIMATIONS ========== */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-reveal]').forEach(el => {
  observer.observe(el);
});
