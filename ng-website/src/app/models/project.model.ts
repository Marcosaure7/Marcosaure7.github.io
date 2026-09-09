import { Tag } from "./tag.model";

export interface Project {
    id: number;
    name: string;
    link: string;
    descripiton: string;
    summary: string;
    imagesSrc?: string[];
    tags: Tag[];
    enable: boolean;
}