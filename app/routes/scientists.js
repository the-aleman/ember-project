import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Mrie Curie', 'Mae Jemison', 'Albert Hofman'];
  }
});
