import { createI18n } from 'vue-i18n';
const savedLanguage = localStorage.getItem('language') || 'uk';
const messages = {
  en: {
    reviewTitle: 'Reviews of our customers on Google',
    reviewsNumber: 'reviews',
    btnLook:'Look',
    btnWrite:'Write',
    btnBack:'← Go back',
    headerTitle:'Reviews',
    numberOfComments:'Number of comments:',
    overallRating:'Overall rating:',
    dateCreated:'Date created::',
  },
  uk: {
    reviewTitle: 'Відгуки наших клієнтів у Google',
    reviewsNumber: 'відгуки',
    btnLook:'Переглянути',
    btnWrite:'Написати',
    btnBack:'← Повернутись назад',
    headerTitle:'Відгуки',
    numberOfComments:'Кількість коментарів:',
    overallRating:'Загальний рейтинг:',
    dateCreated:'Дата створення:',
  }
};

const i18n = createI18n({
  legacy: false, 
  locale: savedLanguage, 
  messages
});

export default i18n;
