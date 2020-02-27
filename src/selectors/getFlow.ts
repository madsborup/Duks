import { createSelector } from 'reselect'
import { FlowsData } from '../actions'

interface Props {
  flowSlug: string;
}

const getFlowFromSlug = (flows: FlowsData, props: Props) => flows.items[props.flowSlug]

export const getFlow = createSelector(
  [getFlowFromSlug],
  (flow) => flow
)