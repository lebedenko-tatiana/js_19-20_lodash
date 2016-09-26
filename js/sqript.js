/*С помощью `lodash` получить несколько массивов: 

1. Массив скиллов (поле skills) всех людей, 
не должно быть повторяющихся скиллов, 
так же они должны быть отсортированы по алфавиту; 

2. Массив имен (поле name) людей, 
отсортированных в зависимости от количества их друзей (friends); 

3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей
*/

$(function () {

  $.getJSON('data.json', function(json) {

    console.log('1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту');
    console.log(_.orderBy(_.uniq(_.flatten(_.map(json, 'skills')))));
    console.log(' ');


    console.log('2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends) ');
    var newArr = new Array();
    _.forEach(json, (value, i) => {
      newArr[i] = _.pick(value, ['name', 'friends']);
    });

    _.forEach(_.orderBy(newArr, ['friends.length'], ['asc']), (value) => {
      console.log('user: ', value.name, ', number of friends: ', value.friends.length);
    });
    console.log(' ');


    console.log('3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей');
    console.log(_.uniq(_.map(_.flatten(_.map(json, 'friends')), 'name')));
    console.log(' ');


});

});



