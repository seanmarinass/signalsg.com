export const IS_PROD =
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENVIRONMENT === "production";

export const IS_DEV =
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENVIRONMENT === "development";
