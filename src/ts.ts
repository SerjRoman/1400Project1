type NazvanieTipa = number | string
type HoroshiyStatus = 'success' | 'super error'
type User = {name: string, id: number, status: HoroshiyStatus} 

interface IUser{
    name: string
    id: number
    status: HoroshiyStatus
}

let count: NazvanieTipa = 'stroka'