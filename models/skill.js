const skills = [
    {skill: 'css', done: true},
    {skill: 'Python ', done: false},
    {skill: 'javascript', done: false}
  ];
    
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    skills.splice(id, 1, skill);
  }
  
  function deleteOne(id) {
    skills.splice(id, 1);
  }
  
  function create(skill) {
    skills.push(skill);
  }
  
  function getOne(id) {
    return skills[id];
  }
  
  function getAll() {
    return skills;
  }