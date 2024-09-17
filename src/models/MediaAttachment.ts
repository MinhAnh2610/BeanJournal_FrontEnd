export type MediaAttachmentGet = {
    mediaId: string;
    publicId: string;
    width: number;
    height: number;
    bytes: number;
    filePath: string;
    fileType: string;
    created_at: Date;
}