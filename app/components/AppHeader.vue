<template>
  <header>
    <nav class="nav">
      <div class="hamburger" @click="isOpen = !isOpen">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>

      <ul :class="{ open: isOpen }">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/cases">Cases</NuxtLink></li>
        <li><NuxtLink to="/learning-log">Learning log</NuxtLink></li>
        <li><NuxtLink to="/digital-garden">Digital garden</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
/* ============ Mobile first ============ */
header {
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 25px 0 0 0;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  background-color: var(--light-100);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

ul {
  z-index: 9999;
  display: none;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  background: var(--purple-600);
  padding: 25px;
  text-align: left;
  border-radius: 15px;
  border: 1px solid var(--purple-500);
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

ul.open { display: flex; }

a {
  display: block;
  width: 100%;
  color: var(--light-100);
  text-decoration: none;
  font-weight: 500;
  padding: 10px 12px;
  border-radius: 8px;
  transition: background-color 0.3s ease, opacity .2s ease;
}

a:hover { background-color: var(--purple-300); }

.router-link-active { opacity: 0.95; }
.router-link-exact-active { background: var(--purple-300); font-weight: 700; }

/* ============ ≥768px (tablet/desktop) ============ */
@media (min-width: 768px) {
  header { justify-content: center; }

  .hamburger { display: none; }

  ul {
    position: static;
    transform: none;
    display: flex !important;
    flex-direction: row;
    gap: 15px;
    width: auto;
    background: transparent;
    padding: 0;
    border: none;
  }

  a {
    display: inline-block;
    width: auto;
    padding: 6px 10px;
    border-radius: 8px;
  }
}
</style>
