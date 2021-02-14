import { Model } from './Model'
import { Attributes } from './Attributes'
import { ApiSync } from './ApiSync'
import { Eventing } from './Eventings'

export interface UserProbs{
    name?: string
    age?: number
    id?: number
}
const rootUrl = 'http://localhost:3000/users'
export class User extends Model<UserProbs>{
    static buildUser(attr: UserProbs): User {
        return new User(
            new Attributes<UserProbs>(attr),
            new Eventing(),
            new ApiSync<UserProbs>(rootUrl)
        )
    }
}