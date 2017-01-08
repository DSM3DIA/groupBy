const groupBy = require('./index.js');
const assert = require('assert');
var test = [{"id":1,"name":"Adam","department":"Engineering","persona":{"role":"Developer"}},{"id":2,"name":"Aaron","department":"Engineering","persona":{"role":"Manager"}},{"id":3,"name":"Benjamin","department":"Engineering","persona":{"role":"Developer"}},{"id":4,"name":"Calvin","department":"Engineering","persona":{"role":"Manager"}},{"id":5,"name":"David","department":"Human Resources","persona":{"role":"Associate Manager"}},{"id":6,"name":"Dexter","department":"Human Resources","persona":{"role":"Manager"}},{"id":7,"name":"Forrest","department":"Human Resources","persona":{"role":"Associate Manager"}},{"id":8,"name":"Gump","department":"Engineering","persona":{"role":"Developer"}},{"id":9,"name":"Hobbes","department":"Human Resources","persona":{"role":"Associate Manager"}},{"id":10,"name":"Hugo","department":"Engineering","persona":{"role":"Developer"}},{"id":11,"name":"Wayne","department":"Human Resources","persona":{"role":"Manager"}},{"id":12,"name":"Zilch","department":"Human Resources","persona":{"role":"Associate Manager"}}];
assert.deepStrictEqual(groupBy(test, ['department', 'persona.role']), [{"key":"Engineering","children":[{"key":"Developer","children":[{"id":1,"name":"Adam","department":"Engineering","persona":{"role":"Developer"}},{"id":3,"name":"Benjamin","department":"Engineering","persona":{"role":"Developer"}},{"id":8,"name":"Gump","department":"Engineering","persona":{"role":"Developer"}},{"id":10,"name":"Hugo","department":"Engineering","persona":{"role":"Developer"}}]},{"key":"Manager","children":[{"id":2,"name":"Aaron","department":"Engineering","persona":{"role":"Manager"}},{"id":4,"name":"Calvin","department":"Engineering","persona":{"role":"Manager"}}]}]},{"key":"Human Resources","children":[{"key":"Associate Manager","children":[{"id":5,"name":"David","department":"Human Resources","persona":{"role":"Associate Manager"}},{"id":7,"name":"Forrest","department":"Human Resources","persona":{"role":"Associate Manager"}},{"id":9,"name":"Hobbes","department":"Human Resources","persona":{"role":"Associate Manager"}},{"id":12,"name":"Zilch","department":"Human Resources","persona":{"role":"Associate Manager"}}]},{"key":"Manager","children":[{"id":6,"name":"Dexter","department":"Human Resources","persona":{"role":"Manager"}},{"id":11,"name":"Wayne","department":"Human Resources","persona":{"role":"Manager"}}]}]}], 'Test failed for groupBy(test, [\'department\', \'role\'])');