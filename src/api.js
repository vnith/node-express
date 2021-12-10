import endpoints from './endpoints';

const api = (router) => {
  router.get(endpoints.homeURI, (req, res) => {
    res.send('Hello NODE EXPRESS Microservice!');
  });
};

export default api;
