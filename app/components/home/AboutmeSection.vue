<template>
  <section class="about-me-section">
    <div class="about-text">
      <h2>About me</h2>
      <p>
        Hey! I'm Süleyman a front-end developer and designer who enjoys creating
        smooth, modern, and accessible websites that people actually love using.
        I'm passionate about design, detail, and bringing creative ideas to life
        with code. When I'm not building something, I'm usually learning new tools
        or perfecting an existing project.
      </p>
      <NuxtLink to="/about" class="main-button">Read more</NuxtLink>
    </div>
    <div class="about-image">
      <img
        src="~/assets/images/suleyman-ai-foto.png"
        alt="ai foto van suleyman"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped>
.about-me-section {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 25px;
  margin-bottom: 50px;
}

.about-me-section img {
  width: 100%;
  height: auto;
  display: block;
}

.about-text {
  max-width: 60%;
}

.about-text p {
  margin: 0;
}

h2 {
  margin: 0 0 0.5rem 0;
}

.main-button {
  display: inline-block;
  margin-top: 1rem;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
}

/* Tablet & mobile: image on top, centered only */
@media (max-width: 1024px) {
  .about-me-section {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .about-text {
    max-width: 100%;
  }

  .about-image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .about-image img {
    width: 80%;
    max-width: 400px;
  }
}
</style>
