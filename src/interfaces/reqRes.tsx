export interface ReqPosts {
    data:  Post[];
    total: number;
    page:  number;
    limit: number;
}

export interface Post {
    id:          string;
    image:       string;
    likes:       number;
    tags:        string[];
    text:        string;
    publishDate: string;
    owner:       Owner;
}

export interface Owner {
    id:        string;
    title:     string;
    firstName: string;
    lastName:  string;
    picture:   string;
}
