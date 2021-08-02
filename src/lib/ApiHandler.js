<script>

import axios from 'axios';

class ApiHandler{

  constructor(apiUrl) {
    this.axios = axios;
    this.apiUrl = process.env.VUE_APP_ROOT_API || '';  // this line allow passing a custom endpoint for testing
    this.config = {
      headers: { 'Cache-Control': 'no-cache' },  // can setup to prevent all caching
      baseURL: this.apiUrl,
    };
  }


  user() {
    return new Promise((resolve, reject) => {
      this.axios.get('/users', { }, this.config)
        .then((response) => {
          if (response.code === 200 && response.body && response.body.token) {
            resolve(response.body.token);
          } else {
            reject('Bad API');
          }
        })
        .catch((err) => {
          reject('internal error');
        });
    });
  }



}
</script>