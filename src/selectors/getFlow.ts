import { createSelector } from "reselect";
import { FlowsData, FlowData } from "../actions";

interface PropsID {
  flowID: string;
}

interface PropsSlug {
  flowSlug: string;
}

const selectFlowFromID = (flows: FlowsData, props: PropsID): FlowData =>
  flows.items[props.flowID];

const selectFlowFromSlug = (flows: FlowsData, props: PropsSlug): FlowData =>
  Object.values(flows.items).find(flow => flow.slug === props.flowSlug) as FlowData;

export const getFlowFromID = createSelector(
  [selectFlowFromID],
  flow => flow
);

export const getFlowFromSlug = createSelector(
  [selectFlowFromSlug],
  flow => flow
);

