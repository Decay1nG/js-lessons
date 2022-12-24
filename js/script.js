"use strict";


const numberOfFilms = prompt ('Сколько фильмов вы посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const answer = prompt('Один из последних просмотренных фильмов?', '');
    const answer2 = +prompt('На сколько оцените его', '');

    if ((answer == false || answer2 == false) || (answer === null || answer2 === null) || (answer.length > 10)) {
        --i;
        console.log('Error');
    }

    personalMovieDB.movies [answer] = answer2;
}


if (personalMovieDB ["count"] < 10) {
    alert('Вы посмотрели слишком мало фильмов');
} else if (personalMovieDB ["count"] >= 10 && personalMovieDB ["count"] <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB ["count"] > 30) {
    alert ('Вы киноман');
} else {
    alert('Произошла ошибка')
}


console.log(personalMovieDB);