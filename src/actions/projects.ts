import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";

export interface ProjectData {
    id: string;
    title: string;
    members: string[];
}

export interface FetchProjectsAction {
    type: ActionTypes.FETCH_PROJECTS;
    projects: ProjectData[];
}

export interface CreateProjectAction {
    type: ActionTypes.CREATE_PROJECT;
}

export interface EditProjectAction {}

export interface DeleteProjectAction {
    type: ActionTypes.DELETE_PROJECT;
    id: number;
}

export const fetchProjects = (uid: string) => async (dispatch: Dispatch) => {
    let projects: ProjectData[] = [];

    try {
        const snapshot = await firestore
        .collection("projects")
        .where("members", "array-contains", uid)
        .get();

        if (!snapshot.empty) {
            projects = snapshot.docs.map<ProjectData>(doc => {
                const id = doc.id;
                const data = doc.data();

                return { id, ...data } as ProjectData;
            });
        }
    } catch (error) {
        console.log(error);
    }

    dispatch<FetchProjectsAction>({
        type: ActionTypes.FETCH_PROJECTS,
        projects
    });
};
