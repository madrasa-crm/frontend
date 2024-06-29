interface ModeType {
  [key: string]: string;
}

export const getBaseUrlByMode = (stage: string): string => {
  const modeStage: ModeType = {
    production: import.meta.env.VITE_API_PRODUCTION_URL,
    stage: import.meta.env.VITE_API_STAGE_URL,
    development: import.meta.env.VITE_API_BASE_URL,
  };

  return modeStage[stage];
};
