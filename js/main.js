(function() {

var userProfiles = [], questions = [];

userProfiles.push( {id:1, name:'test'} );
userProfiles.push( {id:2, name:'abc'} );
userProfiles.push( {id:3, name:'def'} );
userProfiles.push( {id:4, name:'ghi'} );

questions.push( {id:1, text:'monkey', createdBy:1} );
questions.push( {id:2, text:'Monkey', createdBy:1} );
questions.push( {id:3, text:'big',    createdBy:2} );
questions.push( {id:4, text:'string', createdBy:2} );
questions.push( {id:5, text:'monKey', createdBy:3} );
questions.push( {id:6, text:'monKey', createdBy:10} );

var createObjectLookup = function( arr, key ){
  var i, l, obj, ret = {};
  for ( i=0, l=arr.length; i<l; i++ ) {
    obj = arr[i];
    ret[obj[key]] = obj;
  }
  return ret;
};

var up = createObjectLookup(userProfiles, 'id');

var i, l, question, user, result = [];
for ( i=0, l=questions.length; i<l; i++ ) {
  if ( (question = questions[i]) && (user = up[question.createdBy]) ) {
    result.push({
      id: question.id,
      text: question.text,
      name: user.name
    });
  }
}

var i, l, question, user, result = [];
for ( i=0, l=questions.length; i<l; i++ ) {
  //if ( (question = questions[i]) && (user = up[question.createdBy]) ) {
    result.push({
      id: questions[i].id,
      text: questions[i].text,
      name: up[questions[i].createdBy] == null ? null : up[questions[i].createdBy].name
    });
  //}
}

console.log(result);

////////////////////////////////////////////

var id2name = userProfiles.reduce(function(id2name, profile){
    id2name[profile.id] = profile.name;
    return id2name;
}, {});

var qs = questions.map(function(q){
    q.createdByName = id2name[q.createdBy];
    delete q.createdBy;
    return q;
});

console.log(qs);

}());