import { useProjectIdInUrl } from "screens/kanban/utils";

export const useEpicSearchParams = () => ({ projectId: useProjectIdInUrl() });

export const useEpicQueryKey = () => ["epics", useEpicSearchParams()];
