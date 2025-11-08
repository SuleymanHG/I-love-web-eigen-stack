<template>
    <section class="projects">
        <div>
            <h2>Projects</h2>
            <p>Explore some of the projects I’ve designed and built  each with its own story and style.</p>
            <a href="/cases" class="secondary-button">View projects</a>
        </div>
        <div>
            <img src="../assets/images/projects-foto-1.jpg" alt="" loading="lazy">
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
    .projects{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: var(--component-background);
        padding: 25px;
        border-radius: var(--main-border-radius);

        
        @media (min-width: 1024px) {
                flex-direction: row;
            }

        h2{
            margin:0;
        }

        p{
          

            @media(min-width: 560px){
                max-width: 80%;
            }
        }
    }
    
    div:last-of-type{
        display: none;

    @media (min-width: 1024px) {
            display: block;
        }

    }

</style>