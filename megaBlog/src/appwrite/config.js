import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Services {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases =  new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId, conf.appwriteCollectionId, 
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        )
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error);
    }
}
    async updatePost(slug,{title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, 
                slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deletePost(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, 
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false
        }
        
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, 
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false
        }
    }
    async getPosts(quries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, 
                quries,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error); 
            return false 
        }
    }
    
//uplaod file service

    async uploadFile(file){
        try {
        return await this.bucket.createFile(
            conf.appwriteDatabaseId, conf.appwriteCollectionId,
            ID.unique(),
            file,
        )
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error); 
        return false 
    }
     }

     async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error); 
            return false
        }
     }

     getFilePriview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     }
}


    



const service = new Services()

export default service;

