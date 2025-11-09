<template>
  <section class="projects">
    <div class="projects-text">
      <h2>Projects</h2>
      <p>
        Explore some of the projects I've designed and built,
        each with its own story and style.
      </p>
      <a href="/cases" class="secondary-button">View projects</a>
    </div>

    <div>
      <img src="../assets/images/projects-foto-1.jpg" alt="Project preview" loading="lazy">
    </div>
  </section>

  <section>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--component-background);
  padding: 25px;
  border-radius: var(--main-border-radius);
}

/* Headings and text */
.projects h2 {
  margin: 0;
}

.projects p {
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 1.6;
}

@media (min-width: 560px) {
  .projects p {
    max-width: 80%;
  }
}

/* Layout for desktop */
@media (min-width: 1024px) {
  .projects {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

/* Button override */
.projects .secondary-button {
  display: inline-block;
  position: static;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  transform-origin: left center;
}

/* Hide image on mobile */
.projects > div:last-of-type,
.projects img {
  display: none;
}

@media (min-width: 1024px) {
  .projects > div:last-of-type,
  .projects img {
    display: block;
  }
}
</style>
