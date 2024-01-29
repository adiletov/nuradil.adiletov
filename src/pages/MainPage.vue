<template>
  <div class="container page" id="about">
    <div class="page-title">
      <h2><span>01.</span>Обо мне</h2>
      <div class="content">
        <p>Привет! Меня зовут <span class="light-color">Нурадил Адилетов</span>, и я <span class="light-color">фронтенд-разработчик</span>, родившийся в 1994 году. С 2020 года я увлеченно занимаюсь созданием веб-приложений и веб-сайтов.
          Мое разностороннее образование в сфере веб-разработки включает завершение курсов <span class="light-color">Full Stack Developer</span> в
          <a class="light-color" href="https://attractor-school.com/courses/javascript/" target="_blank">itAttractor</a> в 2019 году.</p>
        <p>С момента начала моей карьеры, я приобрел более трех лет коммерческого опыта, участвуя в создании более 15 проектов. Моя страсть к технологиям и стремление к самосовершенствованию побуждают
          меня постоянно изучать новые техники и инструменты в области фронтенд-разработки.</p>
        <p>В свободное время я не только фокусируюсь на кодинге, но также уделяю внимание своему физическому состоянию, занимаясь фитнесом. Кроме того, иногда я предаюсь увлекательным сражениям в мире Dota,
          наслаждаясь виртуальными приключениями.</p>
        <p>Моя миссия - создавать визуально привлекательные и функциональные веб-проекты, объединяя свои навыки и креативный подход.
          Если у вас есть интересные идеи или проекты, <span class="light-color">буду рад обсудить с вами возможное сотрудничество!</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSection from "../components/MainPage/ExperienceContent.vue";

export default {
  name: "MainPage",
  components: {
    ImageSection
  },
}
</script>

<style scoped>
.content {
  padding: 40px;
  font-size: 22px;
}
@media (max-width: 767px) {
  .content {
    padding: 0;
    font-size: 18px;
  }
}
</style>



