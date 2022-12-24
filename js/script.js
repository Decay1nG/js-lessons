"use strict";

// №1
const numberOfFilms = prompt ('Сколько фильмов вы посмотрели?', '');

console.log(numberOfFilms);

// №2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// №3

const answer1 = prompt('Один из последних просмотренных фильмов?', ''),
      answer2 = +prompt('На сколько оцените его', ''),
      answer3 = prompt('Один из последних просмотренных фильмов?', ''),
      answer4 = +prompt('На сколько оцените его', '');

personalMovieDB.movies [answer1] = answer2;
personalMovieDB.movies [answer3] = answer4;

console.log(personalMovieDB);



