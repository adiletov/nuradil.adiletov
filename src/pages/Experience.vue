<template>
<div class="container page" id="experience">
    <div class="page-title">
      <h2><span>02.</span>Опыт</h2>
    </div>
  <div class="content">
    <h2>Профессиональный путь разработчика в течение 3 лет:</h2>
    <div class="experience-card" v-for="company in companyList">
      <p class="light-color fs-22 fb-500">{{ company.companyName }}</p>
      <p class="fs-20">{{ company.position }}</p>
      <p class="fs-18"><span class="text-color">Период:</span> {{company.period}}</p>
      <p class="fs-18"><span class="text-color">Опыт:</span> {{ company.experience }}</p>
      <p class="fs-20 text-color">Технологии:</p>
      <ol>
        <li class="fs-18" style="margin-bottom: 10px" v-for="exp in company.technologies">{{ exp }}</li>
      </ol>
    </div>
    <p class="fs-20">Этот мой профессиональный путь включает разнообразные технологии и фреймворки в сфере фронтенд-разработки,
      а также опыт в создании как SPA, так и SSR приложений, включая мобильные приложения на React Native.
      Мой опыт также включает в себя работу в различных командах и с разнообразными проектами.
    </p>
  </div>
</div>
</template>

<script>

export default {
  name: "Experience",
  components: {
  },
  computed: {
    companyList() {
      return [
        {
          companyName: 'CodeBright',
          position: 'Фронтенд / Мобильный разработчик',
          period: 'Ноябрь 2021 — Декабрь 2023 (2 года 1 месяц)',
          experience: 'Работа с одностраничными и серверными веб-приложениями.',
          technologies: [
              'JavaScript',
              'React (Redux, Redux Toolkit, Redux Saga)',
              'Next.js',
              'Vue 2/3 (Vuex)',
              'Angular (применение в проектах, в том числе фиксы и добавление новых функций).',
              'React Native'
          ]
        },
        {
          companyName: 'Softlex',
          position: 'Фронтенд Разработчик',
          period: 'Сентябрь 2021 — ноябрь 2021 (3 месяца)',
          experience: 'Работа над одностраничными и серверными веб-приложениями.',
          technologies: [
            'JavaScript',
            'Typescript',
            'React (Redux, Redux Toolkit, Redux Saga)',
            'Vue 2 (Vuex)',
          ]
        },
        {
          companyName: 'Yorc',
          position: 'Фронтенд Разработчик',
          period: 'Июнь 2020 — август 2021 (1 год 3 месяца)',
          experience: 'Работа с одностраничными и серверными веб-приложениями.',
          technologies: [
            'JavaScript',
            'Typescript',
            'jQuery',
            'Next.js',
            'React, Redux',
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience-card {
  margin-top: 50px;
}
.content {
}
</style>

