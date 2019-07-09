const {parsed_name} = require('./src/parse_name');


const assert = require('assert')


it('testing first middle last case', () => {
    assert.equal(JSON.stringify(parsed_name('Jane A. Doe')),'{"prefix":null,"first":\"Jane\","middle":\"A.\","last":\"Doe\","suffix":null}')
})


it('testing first middle last case without point', () => {
    assert.equal(JSON.stringify(parsed_name('Jane A Doe')),'{"prefix":null,"first":\"Jane\","middle":\"A\","last":\"Doe\","suffix":null}')
})


it('testing last first case', () => {
    assert.equal(JSON.stringify(parsed_name('Doe, Jane')),'{"prefix":null,"first":\"Jane\","middle":null,"last":\"Doe\","suffix":null}')
})

 it('testing last first middle case', () => {
     assert.equal(JSON.stringify(parsed_name('Doe Jane A.')),'{"prefix":null,"first":\"Jane\","middle":\"A.\","last":\"Doe\","suffix":null}')
 })
