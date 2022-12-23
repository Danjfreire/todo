export interface Board {
    id : number,
    name : string,
    ownerId : number,
}

export interface CreateBoardDTO{
    name : string
}

export interface UpdateBoardDTO {
    name : string
}