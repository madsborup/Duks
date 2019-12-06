import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";
import { ProjectData } from "../interfaces";

export interface FetchProjectsAction {
    type: ActionTypes.fetchProjects;
    payload: ProjectData[];
}

export const fetchProjects = (uid: string) => {
    return async (dispatch: Dispatch) => {
        let projects: ProjectData[] = []
        const snapshot = await firestore
            .collection("projects")
            .where("members", "array-contains", uid)
            .get();

        try {
            if (!snapshot.empty) {
                projects = snapshot.docs.map<ProjectData>((doc) => {
                    const id = doc.id;
                    const data = doc.data();

                    return {id, ...data} as ProjectData;
                });
            } else {
                console.log("Action: fetchProjects. No projects found")
            }
        } catch {}

        //dispatch is a generic function, so we pass in an interface that describes the structure
        //of action that we expect to disptach. We do this to make sure we always dispatch the right action
        dispatch<FetchProjectsAction>({
            type: ActionTypes.fetchProjects,
            payload: projects
        });
    };
};
