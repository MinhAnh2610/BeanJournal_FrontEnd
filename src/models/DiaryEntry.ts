import { MediaAttachmentGet } from "./MediaAttachment";
import { TagGet } from "./Tag";

export type DiaryEntryGet = {
    entryId: string;
    title: string;
    content: string;
    mood: string;
    created_at: Date;
    updated_at: Date;
    tags: TagGet[];
    mediaAttachments: MediaAttachmentGet[];
};