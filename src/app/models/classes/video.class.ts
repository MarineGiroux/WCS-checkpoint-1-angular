import { Comment } from "./comments.class";

export class Video {
    public title : string;
    public url : string;
    public channelName : string;
    public likes : number;
    public comments : Comment[];
    public nbViews : string;
    public uploadDate : Date;
    public categories : string[];

    constructor( title : string, url : string, channelName : string, likes : number, comments : Comment[], nbViews : string, uploadDate : Date, categories : string[]){
        this.title = title;
        this.url = url;
        this.channelName = channelName;
        this.likes = likes;
        this.comments = comments;
        this.nbViews = nbViews;
        this.uploadDate = uploadDate;
        this.categories = categories;
    }
}