<template>
  <section>
    <div>
        <h1>Hi I'm, Süleyman</h1>
        <p>I design and build modern <br> web experiences</p>
    </div>
    
    <div>
        <a href="/cases" class="main-button">View my work</a>
        <a href="/about" class="secondary-button">About me</a>
    </div>
  </section>
</template>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0px 0 100px 0;
    }

    div:last-of-type{
        display: flex;
        align-items: center;
        gap: 10px;
    }   

    p{
        font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
        margin: 0 0 ;
    }

    h1{
        margin:40px 0 5px 0;
    }
</style>