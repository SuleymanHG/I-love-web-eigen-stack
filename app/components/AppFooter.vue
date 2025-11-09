<template>
  <footer class="footer">
    <div class="columns" role="navigation" aria-label="Footer">
    <section class="col">
        <h2 class="title">Quick links</h2>
        <ul class="list">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About me</NuxtLink></li>
        <li><NuxtLink to="/cases">Cases</NuxtLink></li>
        <li><NuxtLink to="/learning-log">Learning log</NuxtLink></li>
        <li><NuxtLink to="/digital-garden">Digital garden</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
    </section>

    <section class="col">
        <h2 class="title">Info</h2>
        <ul class="list">
        <li><NuxtLink to="/terms">Terms &amp; Conditions</NuxtLink></li>
        <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
        <li><NuxtLink to="/cookies">Cookie settings</NuxtLink></li>
        </ul>
    </section>
    </div>

    <hr class="divider" />

    <div class="bottom">
    <nav class="legal" aria-label="Legal">
        <NuxtLink to="/terms">Terms &amp; Conditions</NuxtLink>
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
    </nav>

    <div class="social" aria-label="Social media">
        <a href="https://github.com/SuleymanHG" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.27 1.86 1.27 1.08 1.86 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.55.12-3.23 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.25 2.93.12 3.23.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.48 5.93.43.38.81 1.13.81 2.29v3.39c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z"/>
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/s%C3%BCleyman-huzeyfe-g%C3%B6kg%C3%BCl-76109227b/  " aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.63 4.75 6.05V23h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.75V23h-4V8Z"/>
            </svg>
        </a>
    </div>

    <p class="copy">© 2025 SüleymanHuzeyfeGokgul. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// static footer
</script>

<style scoped>
.footer {                     
  color: var(--light-100);
  padding-block: 28px 18px;
  font-size: 0.9375rem;
}



/* Columns */
.columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}
@media (min-width: 720px) {
  .columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
  }
}

/* Titles */
.col .title {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: .2px;
  color: var(--light-100);
  margin: 0 0 12px 0;
}

/* Links */
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}
.list a {
  color: var(--light-muted);
  text-decoration: none;
  display: inline-block;
  line-height: 1.6;
  transition: color .2s ease, transform .2s ease;
}
.list a:hover,
.list a:focus-visible {
  color: var(--light-100);
  transform: translateX(2px);
  outline: none;
}

/* Divider */
.divider {
  margin-block: 22px;
  border: 0;
  height: 1px;
  background: var(--component-background);
}

/* Bottom row */
.bottom {
  display: grid;
  gap: 14px;
  align-items: center;
}
@media (min-width: 720px) {
  .bottom {
    grid-template-columns: 1fr auto auto;
    gap: 16px;
  }
}

/* Legal links */
.legal {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.legal a {
  color: var(--light-muted);
  text-decoration: none;
}
.legal a:hover,
.legal a:focus-visible {
  color: var(--light-100);
  outline: none;
}

/* Social buttons */
.social {
  display: flex;
  gap: 14px;
}
.social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--component-background);
  border-radius: 999px;
  color: var(--light-muted);                   
  background: transparent;
  transition: color .2s ease, border-color .2s ease, background .2s ease;
}
.social a:hover,
.social a:focus-visible {
  color: var(--light-100);                      
  border-color: var(--light-100);
  outline: none;
}

/* Copyright */
.copy {
  margin: 0;
  color: var(--light-muted);
  font-size: 0.85rem;
}
@media (min-width: 720px) {
  .copy { justify-self: end; }
}
</style>
