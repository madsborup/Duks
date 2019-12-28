import { firestore } from "../../firebase";
import generate from 'nanoid/generate'
import slugify from 'slugify'
import { TaskGroupData, ProjectData } from '../../actions'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

interface Doc {
    title?: string;
}

const isProject = (project: any): project is ProjectData => {
    return 'members' in project;
}

const isTaskGroup = (taskGroup: any): taskGroup is TaskGroupData => {
    return 'projectSlug' in taskGroup;
}

export const addDocToCollection = async <T extends Doc>(collectionKey: string, doc: T) => {
    const { title } = doc;
    let slug = '';

    if (isProject(doc)) {
        if (title && title.length > 0) {
            slug = `${generate(alphabet, 10)}`;
        }
    } else if (isTaskGroup(doc)) {
        if (title && title.length > 0) {
            slug = `${slugify(title, {remove: /[%€#=*+~.()'"!:@]/g, lower: true})}-${generate(numbers, 4)}`;
        }
    }
    const docRef = firestore.collection(collectionKey).doc();
    const createdAt = new Date();

    try {
        await docRef.set({
            ...doc,
            slug,
            createdAt
        });
        console.log("set succesful")
    } catch (err) {
        console.log("Error creating document", err.message);
    }
};