// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDlaH3ulReXY7TBTgbDk3jj2agq0cqxipw',
    authDomain: 'moviescentral-790d5.firebaseapp.com',
    databaseURL: 'https://moviescentral-790d5.firebaseio.com',
    projectId: 'moviescentral-790d5',
    storageBucket: 'moviescentral-790d5.appspot.com',
    messagingSenderId: '869939466283',
    appId: '1:869939466283:web:179dbbc02b1995a6935a6e',
    measurementId: 'G-BYG6L10QD7'
  },
  baseUrl: 'https://api.themoviedb.org/3/',
  image200Url: 'https://image.tmdb.org/t/p/w200',
  image500Url: 'https://image.tmdb.org/t/p/w500'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
