import { MediaAttachmentGet } from "./MediaAttachment";
import { TagGet } from "./Tag";

export type DiaryEntryGet = {
    entryId: number;
    title: string;
    content: string;
    mood: string;
    createdAt: string;
    updatedAt: string;
    tags: TagGet[];
    mediaAttachments: MediaAttachmentGet[];
};

export type DiaryEntryPost = {
    title: string;
    content: string;
    mood: string;
    createdAt: string;
    tags: number[];
}