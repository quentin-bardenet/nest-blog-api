export class PostsDto {
    readonly title: string;
    readonly detail: string;
    readonly image: string;
    
    nbLike: number;
    createdAt: Date;
    updatedAt: Date;
}
