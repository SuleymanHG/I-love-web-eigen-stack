<template>
    <div class="project-main-container">
        <section class="projects component-container">
            <div class="projects-text">
                <h2>Projects</h2>
                <p>
                    Explore some of the projects I've designed and built,
                    each with its own story and style.
                </p>
                <a href="/cases" class="secondary-button">View projects</a>
            </div>

            <div>
                <img src="../assets/images/projects-foto-1.avif" alt="Project preview" loading="lazy">
            </div>
        </section>
        <section class="project-list">
          <NuxtLink to="/cases" class="component-container project-list-items">
            <div>
              <h3>Squadpage</h3>
              <p>FDND 2025/26</p>
            </div>
            <img src="../assets/images/squad-page-home.avif" alt="Screenshot of Squadpage project" loading="lazy" width="191" height="134">
          </NuxtLink>

          <NuxtLink to="/cases" class="component-container project-list-items">
            <div>
              <h3>Profile card</h3>
              <p>FDND 2025/26</p>
            </div>
            <img src="../assets/images/profile-card.avif" alt="Screenshot of Profile card project" loading="lazy" width="191" height="134">
          </NuxtLink>

          <NuxtLink to="/cases" class="component-container project-list-items">
            <div>
              <h3>Footguard</h3>
              <p>FDND 2025/26</p>
            </div>
            <img src="../assets/images/footguard.avif" alt="Screenshot of Footguard project" loading="lazy" width="191" height="134">
          </NuxtLink>

          <NuxtLink to="/cases" class="component-container project-list-items">
            <div>
              <h3>Learningstone</h3>
              <p>FDND 2024/25</p>
            </div>
            <img src="../assets/images/learningstone-game.avif" alt="Screenshot of Learningstone project" loading="lazy" width="191" height="134">
          </NuxtLink>
        </section>

    </div>
</template>

<style scoped>
.project-main-container{
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 50px;
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.project-list {
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr; /* mobile */

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* tablet → 2x2 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); /* desktop → 1 row of 4 */
  }

  h3, p {
    width: fit-content;
    margin: 0;
  }
}


.project-list-items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover{
      transform: scale(1.075);
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center ;
    }
}
</style>
