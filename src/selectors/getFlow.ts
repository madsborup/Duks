import { createSelector } from 'reselect'
import { StoreState } from '../reducers'

interface Props {
  flowSlug: string;
}

const getFlowFromSlug = (state: StoreState, props: Props) => state.flows.items[props.flowSlug]

export const getFlow = createSelector(
  [getFlowFromSlug],
  (flow) => flow
)