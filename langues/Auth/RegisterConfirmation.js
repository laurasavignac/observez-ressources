/**
 * Created by lucas on 25/02/17.
 */
/* eslint-disable no-trailing-spaces, quotes*/

export default {
  fr: {
    title: `Merci !`,
    text: mail => `Un mail de confirmation vient de vous être envoyé à l'adresse ${mail}`,
    redirect: `Vous allez être redirigé vers la page à laquelle vous souhaitiez accéder`,
    advice: 'Si vous ne recevez pas le mail, pensez à regarder dans vos courriers indésirables',
  },
  en: {
    title: `Thanks !`,
    text: mail => `A confirmation mail has just been sent to ${mail}`,
    redirect: `You'll be redirected to the page you were attempting to access`,
    advice: `If you're not getting this email, please lookup your spam folder`,
  },
};
