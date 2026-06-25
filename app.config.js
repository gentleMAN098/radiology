const appJson = require("./app.json");

export default {
  expo: {
    ...appJson.expo,
    extra: {
      ...(appJson.expo?.extra || {}),
      posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
      posthogHost: process.env.POSTHOG_HOST,
      eas: {
        projectId: "35e8aa9f-ae09-4b10-a329-8a51aa5b7e3d",
      },
    },
  },
};
