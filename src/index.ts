import { User, UserProbs } from './model/User';
import axios from 'axios'
import { Collection } from './model/Collection'

const coll = new Collection<User, UserProbs>(
    'http://localhost:3000/users', 
    (json: UserProbs) => User.buildUser(json)
)
coll.on('change', ()=> {
    console.log(coll.models)
})
coll.fetch()


